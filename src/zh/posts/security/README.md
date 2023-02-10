---
lang: zh-CN
title: Security Element Design
description: 页面的描述
date: '2023-02-07'



---

Secure Element is widely used in application like bank card, id card, mobile payment and IOT. A Secure Element is required to support Private && Public Key Cryptography calculation like __AES, DES, RSA, ECC__. However running those algorithm on main CPU will reduce the performance of the CPU dramatically, which makes the system can not meet the performance requirement. As a result, a HW accelerator is needed, in this project, we aim to design a low power Cryptography coprocessor.
