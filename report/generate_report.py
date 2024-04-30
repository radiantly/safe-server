import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

import mysql.connector

# Environment variables for MySQL and SMTP
MYSQL_HOST = os.getenv("MYSQL_HOST")
MYSQL_PORT = int(os.getenv("MYSQL_PORT", 3306))
MYSQL_USER = os.getenv("MYSQL_USER")
MYSQL_PASSWORD = os.getenv("MYSQL_PASSWORD")
MYSQL_DATABASE = os.getenv("MYSQL_DATABASE")

SMTP_SERVER = os.getenv("SMTP_SERVER")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
SMTP_USER = os.getenv("SMTP_USER")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
EMAIL_TO = os.getenv("EMAIL_TO")


def fetch_data():
    """Connect to MySQL database and fetch statistics."""
    conn = mysql.connector.connect(
        host=MYSQL_HOST,
        port=MYSQL_PORT,
        user=MYSQL_USER,
        password=MYSQL_PASSWORD,
        database=MYSQL_DATABASE,
    )
    cursor = conn.cursor()
    cursor.execute("SELECT COUNT(*) FROM Server")
    total_servers = cursor.fetchone()[0]
    cursor.execute("SELECT COUNT(DISTINCT email) FROM Server")
    unique_users = cursor.fetchone()[0]
    cursor.close()
    conn.close()
    return total_servers, unique_users


def send_email(total_servers, unique_users):
    """Send an HTML email with the statistics."""
    message = MIMEMultipart()
    message["From"] = SMTP_USER
    message["To"] = EMAIL_TO
    message["Subject"] = "Database Statistics Report"

    html = f"""
    <html>
    <head>
    <style>
        body {{ font-family: Arial, sans-serif; }}
        table {{ border-collapse: collapse; width: 100%; }}
        th, td {{ border: 1px solid #ddd; padding: 8px; text-align: left; }}
        th {{ background-color: #f2f2f2; }}
    </style>
    </head>
    <body>
    <h2>Server Statistics Overview</h2>
    <table>
        <tr><th>Total Servers</th><td>{total_servers}</td></tr>
        <tr><th>Unique Users</th><td>{unique_users}</td></tr>
    </table>
    </body>
    </html>
    """

    message.attach(MIMEText(html, "html"))

    with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
        server.starttls()
        server.login(SMTP_USER, SMTP_PASSWORD)
        server.send_message(message)
        print("Email sent successfully!")


def main():
    if None in [
        MYSQL_HOST,
        MYSQL_PORT,
        MYSQL_USER,
        MYSQL_PASSWORD,
        MYSQL_DATABASE,
        SMTP_SERVER,
        SMTP_PORT,
        SMTP_USER,
        SMTP_PASSWORD,
        EMAIL_TO,
    ]:
        print("Please populate all required environment variables.")
        return

    total_servers, unique_users = fetch_data()
    send_email(total_servers, unique_users)


if __name__ == "__main__":
    main()
