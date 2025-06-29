"""
파이썬의 자료형 테스트
NoneType, bool, int, float, complex, str, tuple, list dict, function
"""

# NoneType
NONE_VAR = None
print("NoneType: ", NONE_VAR, type(NONE_VAR) )

#bool
BOOL_TRUE = True
print("BOOL_TRUE: ", BOOL_TRUE, type(BOOL_TRUE))
BOOL_FALSE = False
print("BOOL_FALSE: ", BOOL_FALSE, type(BOOL_FALSE))

# 숫자
NUMBER_VAR=5
print("NUMBER_VAR: ", NUMBER_VAR, type(NUMBER_VAR))
NUMBER_VAR=0.9
print("NUMBER_VAR: ", NUMBER_VAR, type(NUMBER_VAR))
COMPLEX_VAR = 2+3j # 복소수
print("COMPLEX_VAR: ", COMPLEX_VAR, type(COMPLEX_VAR))

# 문자열
STR_VAR='str'
print("STR_VAR: ", STR_VAR, type(STR_VAR))

# 배열 > 인덱스 접근 가능, 반복 가능, 타입 혼용 가능

# tuple: 변경 불가능한 순서형(추가, 수정, 삭제 불가),
TUPLE_VAR=(1,2,3)
print("TUPLE_VAR: ", TUPLE_VAR, type(TUPLE_VAR), TUPLE_VAR[-1])

# list: 변경 가능한 순서형
LIST_VAR=[1,2,3]
print("LIST_VAR: ", LIST_VAR, type(LIST_VAR), LIST_VAR[-1])
LIST_VAR[2] = 5
print("마지막 값 변경(3 > 5) LIST_VAR: ", LIST_VAR, type(LIST_VAR), LIST_VAR[-1])

# dict: 키-값 쌍으로 구성된 구조
DICT_VAR={
    "a": "a"
}
print("DICT_VAR: ", DICT_VAR, type(DICT_VAR), DICT_VAR["a"])
DICT_VAR["a"]="b" # 값 변경
DICT_VAR["b"]="c" # 값 추가
print("DICT_VAR: ", DICT_VAR, type(DICT_VAR), DICT_VAR["a"])
