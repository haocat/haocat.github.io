# ZUC   祖冲之算法集
2011年9月被3GPP LTE 采纳为国际加密标准(3GPP TS 33.401)
*国家密码行业标准GM/T0001-2012*


## 1. 算法集分类
- 祖冲之算法
- 加密算法128-EEA3-
- 完整性算法128-EIA3
## 2. ZUC 算法描述
ZUC算法是一个面向字的流加密算法。它使用一个128位的初始密钥 key 和一个128位的初始向量 iv 来作为输入，可以输出若干个32位字的密钥流，也就就是说每32位字在这里称为一个密钥字。这样产生的密钥流可以用于加密和解密,加密的密文字由明文字和密钥字异或得到。
### 2.1. 算法整体结构
ZUC算法在逻辑上分为上中下三层。上层是16级线性反馈移位寄存器（LFSR），中层是比特重组（BR），下层是非线性函数F。
![20220826144502](https://cdn.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220826144502.png)

### 2.2. LFSR
LFSR包括16个31比特寄存器单元变量 如$s_0,s_1,...,s_{15}$
LFSR的 运行模式有 2种 :初 始化模式和工作模式 。

#### 2.2.1. LFSR初始化模式
在初始化模式下，LFSR接收一个31比特字u。u是由非线性函数F的32比特输出W通过舍弃最低位比特得到，初始化模式计算过程
![20220826145358](https://cdn.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220826145358.png)

#### 2.2.2. LFSR工作模式
在工作模式下，LFSR没有输入。其计算过程如下：
![20220826145452](https://cdn.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220826145452.png)

### 2.3. 比特重组
比特重组从LFSR的寄存器单元中抽取128比特组成4个32比特字$X_0,X_1,X_2,X_3$，其中前3个字将用于下层的非线性函数  ，第4个字参与密钥流的计算；下标H表示取高16位，下标L表示取低16位。
![20220826150055](https://cdn.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220826150055.png)

### 2.4. 非线性函数
非线性函数有2个32比特长的存储单元$R_1$和$R_2$  ，其输入为来自上层比特重组的3个32比特字$X_0,X_1,X_2$  ，输出为一个32比特字$W$,即非线性函数$F(X_0,X_l,X_2)$是一个把96比特压缩为32比特的一个非线性压缩函数。
![20220826151254](https://cdn.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220826151254.png)

其中S为32比特的 S盒变换 ,定义在附录A中给出，Ll和 L2为32比特线性变换 ,定义如下：
$$L_1(X)=X \oplus (X<<<2) \oplus (X<<<10) \oplus (X<<<18) \oplus (X<<<24),$$
$$L_2(X)=X \oplus (X<<<8) \oplus (X<<<14) \oplus (X<<<22) \oplus (X<<<30),$$
注: $\oplus$表示按比特异或，$\square $ 模$2^{32}$加法
### 2.5. 密钥载入
密钥载入过程将128比特的初始密钥k和128比特的初始向量iv扩展为16个31比特长的整数，作为LFSR寄存器单元$s_0,s_1,...,s_{15}$的初始状态。

设$k=k_0||k_1||...||k_{15}, \ \ iv=iv_0||iv_1||...||iv_{15}$  ， 
其中，  $k_i$和iv_i均为8比特长字节

密钥载入步骤：
1. 设D为240比特的常量，可按如下方式分成16个15比特的子串：$D=d_0||d_1||...||d15$
2. 对$0  \le i  \le 15$  ，取$s_i=k_i||d_i||iv_i$  .、
   
D[16] = {
    0x44d7, 0x26bc, 0x626b, 0x135e, 0x5789, 0x35e2, 0x7135，0x09af,
    0x4d78, 0x2f13, 0x6bc4, 0x1af1, 0x5e26, 0x3c4d, 0x789a, 0x47ac};


### 2.6. 算法运行
#### 2.6.1. 算法初始化阶段
调用密钥装载过程，将128比特的初始密钥k和128比特的初始向量iv装入到LFSR的寄存器单元变量$s_0,s_1,...,s_{15}$中，作为LFSR的初态，并置非线性函数F中的32比特存储单元$R_1$  和$R_1$全为0。然后重复执行以下过程32次：
![20220826152531](https://cdn.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220826152531.png)![20221008105450](https://cdn.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20221008105450.png)
#### 2.6.2. 工作阶段
初始化阶段以后，执行工作阶段。 首先执行以下过程一次，并将F的输出W丢弃：
![20220826152712](https://cdn.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20220826152712.png)
然后进入密钥输出阶段，其中每进行一次循环，执行以下过程一次，输出一个32比特的密钥字：
![i mage.png](https://cdn.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/image.png.png)


## 3. 机密性算法加密算法128-EEA3
机密性算法
在设计 ZUC 序列密码的同时，ZUC 序列密码的设计者已经添加了机密性算
法 128-EEA3。该算法是利用通信的参数来产生初始向量 IV和初始密钥密钥KEY 。
## 4. 完整性算法128-EIA3
完整性算法
算法是利用通信的参数来产生初始向量 IV和初始密钥密钥KEY 。
基于通信的参数产生MAC(消息认证码)确保消息完整性


## 资源消耗
模$2^{31}-1$的加法
- 在 32位处理平台上 ,两个31比特字a和b模$2^{31}-1$加法运算$c=a+b mod(2^{31}-1)$可以通过下面的两步计算实现 :
1) c=a+b;
2) c=(c&0x7FFFFFFF)+(c>>31)。


![20221008103940](https://cdn.jsdelivr.net/gh/haocat/img_bed@master/markdown/security/20221008103940.png)