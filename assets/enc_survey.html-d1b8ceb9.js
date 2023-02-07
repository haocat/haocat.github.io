import{_ as e,V as t,W as n,a1 as r,X as a,Y as s}from"./framework-1f74d948.js";const l={},i=r('<h1 id="nfc加密算法调研" tabindex="-1"><a class="header-anchor" href="#nfc加密算法调研" aria-hidden="true">#</a> NFC加密算法调研</h1><p>created@2022/08/08</p><h2 id="国密" tabindex="-1"><a class="header-anchor" href="#国密" aria-hidden="true">#</a> 国密</h2><p>SM1、SM4、SM7、祖冲之密码（ZUC）是对称算法；SM2、SM9是非对称算法；SM3是hash算法</p><h2 id="sm1-非公开" tabindex="-1"><a class="header-anchor" href="#sm1-非公开" aria-hidden="true">#</a> SM1(非公开)</h2><p>非公开， 对称加密算法，仅存于IP中，其加密强度与 AES 相当；分组长度、秘钥长度都是128bit，算法安全保密强度跟 AES 相当</p><h2 id="sm2" tabindex="-1"><a class="header-anchor" href="#sm2" aria-hidden="true">#</a> SM2</h2><p>非对称加密 基于椭圆曲线ECC；目前主要采用的是秘钥长度256bit，包含数字签名、密钥交换和公钥加密，其安全强度比RSA 2048位高，且运算速度快于RSA。</p><ul><li>数字签名</li><li>密钥交换</li><li>公钥加密</li></ul><p>数字签名与验签在文档中的示例里结合SM3算法</p><p>SM2可以选择素数域与2扩域</p><ul><li><strong>GMT 0003.1~5-2012 SM2椭圆曲线公钥密码算法（总则、数字签名算法、密钥交换协议、公钥加密算法、参数定义）</strong></li></ul><blockquote><p>SM2算法就是ECC椭圆曲线密码机制，但在签名、密钥交换方面不同于ECDSA(椭圆曲线数字签名算法)、ECDH等国际标准，而是采取了更为安全的机制。另外，SM2推荐了一条256位的曲线作为标准曲线。<br> SM2标准包括总则，数字签名算法，密钥交换协议，公钥加密算法四个部分，并在每个部分的附录详细说明了实现的相关细节及示例。<br> SM2算法主要考虑素域Fp和F2m上的椭圆曲线，分别介绍了这两类域的表示，运算，以及域上的椭圆曲线的点的表示，运算和多倍点计算算法。然后介绍了<strong>编程语言中的数据转换</strong>，包括整数和字节串，字节串和比特串，域元素和比特串，域元素和整数，点和字节串之间的数据转换规则。详细说明了有限域上椭圆曲线的参数生成以及验证，椭圆曲线的参数包括有限域的选取、椭圆曲线方程参数、椭圆曲线群基点的选取等，并给出了选取的标准以便于验证。最后给椭圆曲线上密钥对的生成以及公钥的验证，用户的密钥对为（s，sP），其中s为用户的私钥，sP为用户的公钥，由于离散对数问题从sP难以得到s，并针对素域和二元扩域给出了密钥对生成细节和验证方式。<strong>总则中的知识也适用于SM9算法</strong>。<br> 在总则的基础上给出了数字签名算法（包括数字签名生成算法和验证算法），密钥交换协议以及公钥加密算法（包括加密算法和解密算法），并在每个部分给出了算法描述，算法流程和相关示例。<br> 数字签名算法、密钥交换协议以及公钥加密算法都使用了国家密管理局批准的SM3密码杂凑算法和随机数发生器。数字签名算法、密钥交换协议以及公钥加密算法根据总则来选取有限域和椭圆曲线，并生成密钥对。<br></p></blockquote><h2 id="sm3" tabindex="-1"><a class="header-anchor" href="#sm3" aria-hidden="true">#</a> SM3</h2><p>哈希算法 用于替代MD5/SHA-1/SHA-2等国际算法，适用于数字签名和验证、消息认证码的生成与验证以及随机数的生成，可以满足电子认证服务系统等应用需求，于2010年12月17日发布，相关标准为“GM/T 0004-2012 《SM3密码杂凑算法》”。</p><p>它是在SHA-256基础上改进实现的一种算法，采用Merkle-Damgard结构，消息分组长度为512bit，输出的摘要值长度为256bit，其安全性及效率与SHA-256相当。</p><h2 id="sm4" tabindex="-1"><a class="header-anchor" href="#sm4" aria-hidden="true">#</a> SM4</h2><p>分组对称加密SM4算法与AES算法具有相同的密钥长度、分组长度，都是128bit。于2012年3月21日发布，适用于密码应用中使用分组密码的需求。相关标准为“GM/T 0002-2012《SM4分组密码算法》（原SMS4分组密码算法）”</p><h2 id="sm7-非公开" tabindex="-1"><a class="header-anchor" href="#sm7-非公开" aria-hidden="true">#</a> SM7(非公开)</h2><p>分组加密算法,该算法没有公开。分组长度为128比特，密钥长度为128比特 SM7适用于非接IC卡应用包括身份识别类应用(门禁卡、工作证、参赛证)，票务类应用(大型赛事门票、展会门票)，支付与通卡类应用(积分消费卡、校园一卡通、企业一卡通、公交一卡通)。</p><h2 id="sm9" tabindex="-1"><a class="header-anchor" href="#sm9" aria-hidden="true">#</a> SM9</h2><p>基于标识的非对称密码算法 与SM2类似，包含四个部分：总则，数字签名算法，密钥交换协议以及密钥封装机制和公钥加密算法。在这些算法中使用了椭圆曲线上的对这一个工具，不同于传统意义上的SM2算法，可以实现基于身份的密码体质，也就是<strong>公钥与用户的身份信息即标识相关</strong> GM/T 0044.1~4-2016 《SM9标识密码算法》</p><h2 id="祖冲之密码" tabindex="-1"><a class="header-anchor" href="#祖冲之密码" aria-hidden="true">#</a> 祖冲之密码</h2>',23),h=a("ul",null,[a("li",null,[s("标准 GM/T 0001-2012"),a("br"),s(" 流密码 无线通信 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("msup",null,[a("mn",null,"2"),a("mn",null,"31")]),a("mo",null,"−"),a("mn",null,"1")]),a("annotation",{encoding:"application/x-tex"},"2^{31}-1")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),a("span",{class:"mord"},[a("span",{class:"mord"},"2"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.8141em"}},[a("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mtight"},[a("span",{class:"mord mtight"},"31")])])])])])])])]),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"−"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6444em"}}),a("span",{class:"mord"},"1")])])])])],-1),c=[i,h];function d(p,m){return t(),n("div",null,c)}const S=e(l,[["render",d],["__file","enc_survey.html.vue"]]);export{S as default};