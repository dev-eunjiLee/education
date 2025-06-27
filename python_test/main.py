from enum import Enum
from dataclasses import dataclass
from dataclasses import asdict


# Enum > 클래스의 파라미터로 Enum을 넣어주면 생성 가능
class EventType(Enum):
    IMPRESSION = 'IMPRESSION'
    CLICK = 'CLICK'
    CONVERSATION = 'CONVERSATION'


@dataclass
class Event:
    type: EventType
    user_id: str
    ad_id: str


class Redis():
    def _insert(self, event: Event) -> bool:
        # 실제 레디스 저장 로직 대신에 로그로 구현
        print('Redis._insert()', event)

        return True


r = Redis()


def track(body: Event) -> bool:

    # 검증을 위한 딕셔너리 선언
    expected_types = {
        'type': EventType,
        'user_id': str,
        'ad_id': str,
    }

    # 검증(현재는 타입 체크만 진행함)
    for key in asdict(body).keys():
        value = getattr(body, key)  # getattr: 객체에서 변수 접근하기
        expected_type = expected_types[key]  # dict[key]: 딕셔너리에서 변수 접근하기

        print({'key': key, 'expected_type': expected_type})

        if not isinstance(value, expected_type):
            raise TypeError(f'event의 {key}은/는 {expected_type}이어야합니다.')

    # 저장
    result = r._insert(body)

    return result


if __name__ == '__main__':
    body = Event(
        type=EventType.CONVERSATION,
        user_id='user_id_001',
        ad_id='ad_id_001'
    )
    track(body)
