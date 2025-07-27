"""
with
리소스 관리를 자동으로 해주는 문법.
주로 파일, 데이터베이스, 락, 네트워크 연결 같은 걸 다룰 때 사용

사용하는 경우: 파일, DB 커넥션, 락, 소켓, 임시 디렉토리, 웹 요청
사용하는 이유
    코드 간결성(try-finally 필요없음)
    안전성(예외가 발생해도 리소스를 잘 닫아줌)
    명확성(이 블럭에서만 자원을 사용하겠다는 의도가 잘 보임)
"""

import sqlite3

# with문이 끝나고나면 conn.close()가 자동으로 호출된다.
with sqlite3.connect("example.db") as conn:
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users")
