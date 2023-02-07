from dataclasses import dataclass
import mysql.connector
import os
from dotenv import load_dotenv

load_dotenv()

mydb = mysql.connector.connect(
  host=os.getenv('databasehost'),
  user=os.getenv('databaseuser'),
  password=os.getenv('databasepassword'),
  port=os.getenv("databaseport"),
  database="task_fs"
)

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM instancetable")

myresult = mycursor.fetchall()

for x in myresult:
  print(x)