network:
  ethernets:
    enp1s0:
      match:
        macaddress: 30:d0:42:36:5c:58
      set-name: enp1s0
      dhcp4: true
  wifis:
    wlp2s0:
      optional: true
      dhcp4: true
      access-points:
        "YOUR_WIFI_NAME":
          password: "YOUR_WIFI_PASSWORD"
  version: 2
  
