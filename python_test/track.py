"""
main.py 이 모듈은 광고 이벤트 트래킹 로직을 구현
"""

from enum import Enum
from dataclasses import dataclass
from dataclasses import asdict


# Enum > 클래스의 파라미터로 Enum을 넣어주면 생성 가능
class EventType(Enum):
    """이벤트의 타입"""
    IMPRESSION = 'IMPRESSION'
    CLICK = 'CLICK'
    CONVERSATION = 'CONVERSATION'


@dataclass
class Event:
    """실제 발생하는 이벤트의 정보를 기입"""
    type: EventType
    user_id: str
    ad_id: str


class Redis():
    """(임의) Redis"""
    def insert(self, event: Event) -> bool:
        """Redis에 데이터를 적재하는 상황을 임의 구현(로그)"""
        # 실제 레디스 저장 로직 대신에 로그로 구현
        print('Redis._insert()', event)

        return True


r = Redis()


def track(event: Event) -> bool:
    """파라미터로 받은 Event를 트래킹"""

    # 검증을 위한 딕셔너리 선언
    expected_types = {
        'type': EventType,
        'user_id': str,
        'ad_id': str,
    }

    # 검증(현재는 타입 체크만 진행함)
    for key in asdict(event).keys():
        value = getattr(event, key)  # getattr: 객체에서 변수 접근하기
        expected_type = expected_types[key]  # dict[key]: 딕셔너리에서 변수 접근하기

        print({'key': key, 'expected_type': expected_type})

        if not isinstance(value, expected_type):
            raise TypeError(f'event의 {key}은/는 {expected_type}이어야합니다.')

    # 저장
    result = r.insert(event)

    return result


if __name__ == '__main__':
    body = Event(
        type=EventType.CONVERSATION,
        user_id='user_id_001',
        ad_id='ad_id_001'
    )
    track(body)
