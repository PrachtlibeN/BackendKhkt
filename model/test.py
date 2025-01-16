import mysql.connector
from mysql.connector import Error

# Configuration data (from config.json)
config = {
    "development": {
        "username": "root",
        "password": None,  # Replace None with an actual password if needed
        "database": "khkt",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}

# Extract development configuration
db_config = config["development"]

try:
    # Establish connection
    connection = mysql.connector.connect(
        host=db_config["host"],
        user=db_config["username"],
        password=db_config["password"],
        database=db_config["database"]
    )

    if connection.is_connected():
        print("Connection successful!")
        db_info = connection.get_server_info()
        print("MySQL Server version:", db_info)

        # Create a cursor to execute queries
        cursor = connection.cursor()

        # Query to select the 'url' field from the 'urlDevices' table
        query = "SELECT url FROM urlDevices;"  # Make sure 'urlDevices' is the correct table name

        cursor.execute(query)

        # Fetch and print all rows
        rows = cursor.fetchall()
        if rows:
            print("Data in 'url' field:")
            for row in rows:
                print(row[0])  # Assuming 'url' is in the first column
        else:
            print("No data found in 'urlDevices' field.")

except Error as err:
    print(f"Error: {err}")

finally:
    # Close the connection if it was established
    if 'connection' in locals() and connection.is_connected():
        connection.close()
        print("Connection closed.")
