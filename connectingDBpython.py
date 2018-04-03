#!/usr/bin/python
import psycopg2
from config import config

def set_myaccount(acc_list):
	sql="""INSERT INTO myaccount VALUES(%s,%s,%s,%s)"""
	conn=None
	try:
		params=config()
		conn=psycopg2.connect(host="localhost",dbname="testpython",user="sg",password="sggothe")
		cur=conn.cursor()
		cur.executemany(sql,acc_list)
		conn.commit()

		cur.close()
	except(Exception,psycopg2.DatabaseError)as error:
		print(error)
	finally:
		if conn is not None:
			conn.close()
			print("Database connection closed")

def get_myaccount():
	conn=None
	try:
		params=config()
		conn=psycopg2.connect(host="localhost",dbname="testpython",user="sg",password="sggothe")
		cur=conn.cursor()
		cur.execute("SELECT tx_date,balance,name FROM myaccount")

		row=cur.fetchone()
		while row is not None:
			print(row)
			row=cur.fetchone()
			print('\r')

		cur.close()
	except(Exception,psycopg2.DatabaseError)as error:
		print(error)
	finally:
		if conn is not None:
			conn.close()
			print("Database connection closed")


if __name__ == '__main__':
	#set_myaccount([('2018-01-25', 'pqr', '200', '1200'),('2018-01-25', 'sg', '3000', '5000')])
	get_myaccount()
	
