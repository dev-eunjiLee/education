"""
with
리소스 관리를 자동으로 해주는 문법.
주로 파일, 데이터베이스, 락, 네트워크 연결 같은 걸 다룰 때 사용
"""

import sqlite3

# with문이 끝나고나면 conn.close()가 자동으로 호출된다.
with sqlite3.connect("example.db") as conn:
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users")
