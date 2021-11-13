## Quest
* tracert(추적자)(Windows가 아닌 경우 traceroute(경로 추적)) 명령을 통해 www.google.com 까지 가는 경로를 찾아 보세요.
    * 어떤 IP주소들이 있나요?
      * 구글 IP
    * 그 IP주소들은 어디에 위치해 있나요?
      * 국내외 (구글 IP 주소 - www.google.com : 172.217.161.66)
      
### 추가
* Traceroute (경로 추적)
  * 자신의 시스템으로부터 목적지까지 경유하는 시스템의 정보를 확인
  * (원리) 
    * OS 계열에 따라서 Traceroute 에 이용되는 `Protocol 이 다르다`
    * Windows 계열: 명령어는 `tracert` 이며 `ICMP` 사용
      * ``` C:₩>tracert www.google.com ```
      * 와이어 샤크 확인 -> ICMP, visual route 사용 확인 가능
    * Unix 계열: 명령어는 `traceroute` 이며 `UDP` 사용
      * ``` root@bt: ~# traceroute www.google.com ```
      * 와이어 샤크 확인 -> UDP 사용 확인 가능
      * UDP 사용시 `Destination Port` 는 Open 되어있지 않을만한 번호를 사용<br>
        (30000 번대 이상)


* Traceroute 이용해 획득 가능한 정보
  * 경유하는 Router의 개수
  * 경유하는 Router의 IP 와 도착시간
  * Filtering 유무
  * Border Router 의 IP
    * 주의
      * VMware NAT에서는 외부로 전달되는 packet의 TTL 값을 128로 초기화 시켜 <br>
        전송함으로 경로 추적이 안된다 


* Wireshark를 통해 www.google.com 으로 요청을 날렸을 떄 어떤 TCP 패킷이 오가는지 확인해 보세요
    * TCP 패킷을 주고받는 과정은 어떻게 되나요?
    * 각각의 패킷에 어떤 정보들이 담겨 있나요?
* telnet 명령을 통해 http://www.google.com/ URL에 HTTP 요청을 날려 보세요.
    * 어떤 헤더들이 있나요?
    * 그 헤더들은 어떤 역할을 하나요?


## Advanced
* HTTP의 최신 버전인 HTTP/3는 어떤 식으로 구성되어 있을까요?
* TCP/IP 외에 전세계적인 네트워크를 구성하기 위한 다른 방식도 제안된 바 있을까요?