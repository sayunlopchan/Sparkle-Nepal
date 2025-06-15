import React, { useState } from "react";

// arts images
import artsImg from "../../assets/image/program/art/art.webp";

// Yoga images
import yogaImg from "../../assets/image/program/yoga/yoga.webp";
import yogaImg1 from "../../assets/image/program/yoga/yoga1.webp";
import yogaImg2 from "../../assets/image/program/yoga/yoga2.webp";
import yogaImg3 from "../../assets/image/program/yoga/yoga3.webp";
import yogaImg4 from "../../assets/image/program/yoga/yoga4.webp";
import yogaImg5 from "../../assets/image/program/yoga/yoga5.webp";
import yogaImg6 from "../../assets/image/program/yoga/yoga6.webp";
import yogaImg7 from "../../assets/image/program/yoga/yoga7.webp";
import yogaImg8 from "../../assets/image/program/yoga/yoga8.webp";
import yogaImg9 from "../../assets/image/program/yoga/yoga9.webp";
import yogaImg10 from "../../assets/image/program/yoga/yoga10.webp";
import yogaImg11 from "../../assets/image/program/yoga/yoga11.webp";
import yogaImg12 from "../../assets/image/program/yoga/yoga12.webp";
import yogaImg13 from "../../assets/image/program/yoga/yoga13.webp";
import yogaImg14 from "../../assets/image/program/yoga/yoga14.webp";
import yogaImg15 from "../../assets/image/program/yoga/yoga15.webp";
import yogaImg16 from "../../assets/image/program/yoga/yoga16.webp";
import yogaImg17 from "../../assets/image/program/yoga/yoga17.webp";
import yogaImg18 from "../../assets/image/program/yoga/yoga18.webp";
import yogaImg19 from "../../assets/image/program/yoga/yoga19.webp";
import yogaImg20 from "../../assets/image/program/yoga/yoga20.webp";
import yogaImg21 from "../../assets/image/program/yoga/yoga21.webp";
import yogaImg22 from "../../assets/image/program/yoga/yoga22.webp";
import yogaImg23 from "../../assets/image/program/yoga/yoga23.webp";

// dance images
import dance from "../../assets/image/program/dance/dance.webp";
import dance1 from "../../assets/image/program/dance/dance1.webp";
import dance2 from "../../assets/image/program/dance/dance2.webp";
import dance3 from "../../assets/image/program/dance/dance3.webp";
import dance4 from "../../assets/image/program/dance/dance4.webp";
import dance5 from "../../assets/image/program/dance/dance5.webp";
import dance6 from "../../assets/image/program/dance/dance6.webp";
import dance7 from "../../assets/image/program/dance/dance7.webp";
import dance8 from "../../assets/image/program/dance/dance8.webp";
import dance9 from "../../assets/image/program/dance/dance9.webp";
import dance10 from "../../assets/image/program/dance/dance10.webp";
import dance11 from "../../assets/image/program/dance/dance11.webp";
import dance12 from "../../assets/image/program/dance/dance12.webp";
import dance13 from "../../assets/image/program/dance/dance13.webp";
import dance14 from "../../assets/image/program/dance/dance14.webp";

// header
import StaticHeader from "../../components/StaticHeader/StaticHeader";
import GalleySkeleton from "../../components/skeleton/GallerySkeleton";

// animation

const ImageGallery = () => {
  // states
  const [activeCategory, setActiveCategory] = useState("All");

  // Image categories
  const images = {
    All: [
      "https://img.playbook.com/wzqnUqnErmul2qpNPe6YYaFbA5qgurq-/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8wNjZi/MGEzOC0xZDJlLTRh/NmUtOWQxOS02NzUy/NTc0OGNkNGU.webp",
      "https://img.playbook.com/GyoK6v2gz83G3lZbrcHXonPeFfE9z2ipCdQ2p94e9S0/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9lYzk5/MjM5OS0yOGIzLTQ5/ZjktODFjZC04YTg2/ZGVlNTg5ZGE.webp",
      "https://img.playbook.com/MIbpuJy-LpYZWubaQ447GXbzBTaXI_xHQ5b35-J1Q88/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy82YTI0/ZTE0Yi04OWMyLTQz/MmItOTQzNS1lZjg1/NmZhZmY1NjA.webp",
      "https://img.playbook.com/lbuN4HStIj8R6iAoM2aZqIWBdQ1r279rbAbbIRUybCY/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy84YTVk/NjMwOS1mODJkLTRl/NzYtYTZlNS00NjA4/NWUwNGRkNTA.webp",
      "https://img.playbook.com/IDGppi1jxHA-Izo6PXCSQAjDn950G9DPwca4f7JlQ4k/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy80MDAz/N2M2My1kODIwLTRk/MzctOTc1NC01MTM4/NGU3MGRiNjU.webp",
      "https://img.playbook.com/5_-bLeW8V6qHCwrqilZZQV-z6nSH7edGW_FYMvRGo9Q/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9kZjdi/MjA3ZS1iZTgxLTQ0/YjctYjI1Yy1jYTYy/OWM2ZTc2YTA.webp",
      "https://img.playbook.com/scKqZ2Rww-WKK-0rJWPog79aGnMeyEayjKq6Po51kXw/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9iMzU4/NmEwZS05YjlkLTRi/NDktOTRiNi02YTQ4/NGMxNDQ3OGI.webp",
      "https://img.playbook.com/CbRBrxIWFJElVN3Q2G7tjRH3l6vz1NbX9e-HxHqYdSQ/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9mYzhk/ZGUyYy02OTk2LTQ2/NTgtOWE3Mi1iNTdk/YzZhYWY3YTY.webp",
      "https://img.playbook.com/vfoL6qp_pO-517gp6CHGIu7cgLWJBCk4hvuEKQbhtw8/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8wNTk2/Nzk0My1hMTk2LTQ5/MDEtYmI5Mi1kOWQ2/YzI4MTU2MDQ.webp",
      "https://img.playbook.com/oikbHyg-gHacmrst5v-3ty0GzS0TLkanEq9dMcPjKrE/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy84N2Ni/NjI0Zi0xNDlhLTRm/NDktYTI2Ni0yM2Qy/Y2JkYzM5YjQ.webp",
      "https://img.playbook.com/vfoL6qp_pO-517gp6CHGIu7cgLWJBCk4hvuEKQbhtw8/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8wNTk2/Nzk0My1hMTk2LTQ5/MDEtYmI5Mi1kOWQ2/YzI4MTU2MDQ.webp",
      "https://img.playbook.com/p_vbGzBNUx7oiGQw058zU3dJ_gYAwns_LpNbiHigJz8/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy83NWEy/ZGVhOC0yMWJjLTQ2/OTEtYTdlMi03MTQ2/ZTk2NWU1YmI.webp",
      "https://img.playbook.com/a35q2GPPRKtvX60iGd5Pw-Mo-Ex1o3DQYlO4Ga10jIw/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8xNGMx/M2ExOS1iN2RkLTQ1/YTgtOGU2Mi1hNzFj/ZGUzOGY0ODc.webp",
      "https://img.playbook.com/WzUuTBW_jgAUlqKQGJw29A8gEY_x3Nuc9HYZl9Kh-ro/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9lMTQx/MDQ3Yy03ZDg3LTQ4/YmMtODIxZi1kZTll/YzZmMGEyOTg.webp",
      "https://img.playbook.com/tYDeTyGPawhXZLJYnxCF_lt95W9ru6JnsCU2-gSG5DY/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8xZTBl/NGM0ZS0xNzIwLTRl/MzUtYThhMS0xYTQ2/ZDFiNmVkYmM.webp",
      "https://img.playbook.com/i8VBaajg53EEw5ykqy_h01DlPESxUymaN-_JGS-4SWM/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy81NzRj/OWY1OC0zMDM1LTRk/MjgtYTNjZi04Yzc5/ZDRiMDM4MjQ.webp",
      "https://img.playbook.com/otbAUdPQ-IoNWsqqMNTAZNes5UlDFNjLzvG1ap903_4/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9hODYy/YWZkNy02ZGI1LTRj/YTItOTRhYi04N2Vl/YWI1ODI0MmI.webp",
      "https://img.playbook.com/XL6jnu44pFS8cmaiHZ7eAN1NrP-X9mkKV2NYD7OSx3Y/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9jNmRi/MjBlNC1jMTI0LTRh/ZjMtYmZkMS05ZTg5/ZTAxZjVjZTY.webp",
      "https://img.playbook.com/oI5W7IGDt8u3eOf1GD1YYtOWh2lGctG-sO5ju2UsQg8/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8zYzM2/NTE5My02YzQwLTQz/ZGYtOGRiMC1jYWU5/ZGY0YTFmODU.webp",
      "https://img.playbook.com/i3vlqLna2015EQxIvBdlrvRjlTnjTvg-jlOAqVPpnp4/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8xNzU0/Yzk3MC04YjUxLTRh/N2UtODIxZS0yYmIz/OWQ4MWQ4Nzg.webp",
      artsImg,

      yogaImg,
      yogaImg1,
      yogaImg2,
      yogaImg3,
      yogaImg4,
      yogaImg5,
      yogaImg6,
      yogaImg7,
      yogaImg8,
      yogaImg9,
      yogaImg10,
      yogaImg11,
      yogaImg12,
      yogaImg13,
      yogaImg14,
      yogaImg15,
      yogaImg16,
      yogaImg17,
      yogaImg18,
      yogaImg19,
      yogaImg20,
      yogaImg21,
      yogaImg22,
      yogaImg23,
      "https://img.playbook.com/-VbGzspyohCsmEJLexEH9millh3aQJRY0o-7zWUJLsQ/w:1000/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy80ZTYyNmEyNi03/NThmLTQ2MzAtOGI1/NC1iYjYzOGIzYmJl/YWM.webp",
      "https://img.playbook.com/LGbsnei1McA4RcgT6RL_Gl3dwqloYv1TepBBfSUaOUk/w:1000/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy8wNTg2ZmRmYy0z/MGQyLTQ5NjMtYjk3/MC0wZjY1MWUzMjFj/MWQ.webp",
      "https://img.playbook.com/Q418TNSJzuFLbK_G6oYMbHlrmsGxOYKtA3Jm19GliNs/w:1000/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy9mNzAzNjNmYy1k/ODU2LTQ2NDctYjUz/Zi1iM2JiYjIyMzhm/Yjc.webp",
      "https://img.playbook.com/rToFNSCeyXcORPv4USJW2MWsGybig2w6za4NoyiATJo/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy81MzBi/MjZhMC1kMjE5LTRm/NzctYjFmNi1hOTg3/OGE1ZGE5MzE.webp",
      "https://img.playbook.com/sV0DQh47xiaBYpzhQrDVSkNa1bLFZi4tdhiQR75Q4Us/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy84NmMy/MDJmYS0wN2Y4LTQy/YzctYjM2ZC02Njdk/ZDAyNmZhNzY.webp",
      "https://img.playbook.com/p85Y4H8T_XFxswl9n1qY8DWg7rzbBOXfvH4dWnOpS1E/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8wZmRm/OTc2Ni03MjY0LTQ0/ZDUtYjY3My1kNzQ2/N2NjYTNiZDE.webp",
      "https://img.playbook.com/JpGv7FkA-YIrs2cscx1hAsZTzTg12nDykHNClzNshJM/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy80YTY4/NWYzYi0zZTZlLTRj/ZTgtODMzNC0yMDU3/ZTJmYzA2N2E.webp",
      "https://img.playbook.com/Mm_z3rN5_GObhQd7FK399S-fUguSJqhDIFHt9EQ72NM/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9jZjky/NzNjNS0yZGFmLTRj/ZDItOTgyNy05ZDhh/YzA3YzE4MjE.webp",
      "https://img.playbook.com/lFkWCRB9c98B0Qu8u1tBEwxt1nAA091NrKiOS_v4o9s/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9jNmI2/MWZmZC1hYmU2LTQ4/ODQtYWI4Mi00NGQ2/YjZjZjkxZmM.webp",
      "https://img.playbook.com/2490z0UNVDGBuGKmV6srpcS6kUindz1sIC9yG_kw7b0/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9iYTM2/NDI3Zi0zZWMzLTRl/OTYtOTkxNy01OTli/NmQyNmFhMGM.webp",
      "https://img.playbook.com/dql3L24PES9teg68SFt0ydvAEtKLqbMFNGeW_vmacqM/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9mN2My/MGQ4ZC1mYjI2LTQ5/YTItYTgzZS1hNGM0/ZTI5ZDIzMjM.webp",
      "https://img.playbook.com/gRxpeYx2UsTGPAd9rcgnG0sTZ88uaCLbAzy81zvgqg4/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy85ZjAy/OTlhZC01M2JjLTRm/YzQtOGZmNC0zOWEw/MTQyMmVkNDE.webp",

      dance,
      dance1,
      dance2,
      dance3,
      dance4,
      dance5,
      dance6,
      dance7,
      dance8,
      dance9,
      dance10,
      dance11,
      dance12,
      dance13,
      dance14,
      "https://img.playbook.com/1VC1XweNlHlS6hLbvYfuZ2DthCbnI6EeAmJBKEJa0EY/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9kMTAy/MjQxYi0zNzU0LTQ3/YjktODhjZi00YjNj/NmE3YmUzYWY.webp",
      "https://img.playbook.com/AO5TfEQ71f3Z08u4dtvFIMhna8uC7wFlKHftkzWdMJE/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9kOWJi/OTEyMC1hNmY0LTQy/YWQtODdjZC0wNzZm/ODM3YTJmYTY.webp",
      "https://img.playbook.com/5foFe3pjGDsFoiM49Vn4X3UomO5FNHKiv64Zp7n_eTU/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy82ZmY4/M2UwYS05ZjM3LTQ3/MGQtYjc4Ni1mMDEz/NmYyNGNiNzM.webp",
      "https://img.playbook.com/qTboLEnzyry4QmfbrOvmnPzMnRicJr9zyKF0D63jKj8/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9hOGVj/MDFmYS1hNzU0LTRi/ZjAtYjk1ZS1iMjYz/ODJlMGI3YjE.webp",
      "https://img.playbook.com/xENTEKfgU6O8oxgXv4-RnnBW7js5eNPSrlyVsxByw5g/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9kNTRi/NjkxYi04MjZiLTQ1/MjEtYWJiZi04MWRm/MGUyYzk1ZGU.webp",
      "https://img.playbook.com/YQp56HoJ2ILxPUnhisz-R1Mrdhc_WzUMwHCtf94eSDk/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9jYzRl/M2NiMS02NGEwLTQ3/YTItODZmMy0wNzNh/ZjNhOGJhMTM.webp",
      "https://img.playbook.com/qXpHsOUslb6abMhz5vI7N6DvvyFuTbeBbPLzcwkB7h4/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy84NWVm/Mzk4ZS1kMTllLTRm/MzEtOTc5Zi1hZjRm/ZDlhOTgzMjY.webp",
      "https://img.playbook.com/xtI0Z6uaHl100g-0EZGltqP_YuO27TmfjLqXQPb408c/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9hYjg0/OTZhZi1jZjAwLTRj/ZjItOGY3OS02NDI5/NzdhMTg2MzM.webp",
      "https://img.playbook.com/-aH8dgGHdj47shzMX0g0MIu-w3Bn4l0yj588SBjBfpg/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8wMDc1/NzY5My1hYWE5LTQ0/NTEtYjExYS01NmZi/ODk2YjFlZTM.webp",
      "https://img.playbook.com/_v88pGwEnPn3WF5x-exeQnMet8NUtJCQa63vzU_8a2s/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9kYzU3/NmNkZS0zNzkxLTQy/ZjgtYTU1ZC0wNDU5/ZWI1ODE0Yzg.webp",
      "https://img.playbook.com/BcJ2JOW9z-9xPSP6oyPs2oDVEzEQRUsCAq1WeT-K1h0/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy82OGQ0/MzZlNS1iZjRiLTRk/NWEtYTg2My03MjVm/YzM5YmJlZTI.webp",
      "https://img.playbook.com/D-NCvVJPYse9VhiLelav7qH05opr6nq4yf6nl2-4iKU/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9lNjIx/MDBjZC00N2U4LTQx/ZjUtODg5ZS1mNTNi/ZTQxZGU1MzU.webp",
      "https://img.playbook.com/94SkwyXxTKrr-UUp5pCiFUU31RA3HUE-qiUaZAckcPA/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy85MWEz/NjRiYS0zODgwLTRm/ZmEtYjUyOS05ZGI0/NWMxYzQwM2E.webp",
      "https://img.playbook.com/g0NZaU62ZBbi5pBFBC4g5MSBYZBxCvlw6LYO8idtHLo/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8wOGQ0/ZDg5Ny0wMjZmLTRh/ZGMtYjI4NS0yMDBi/MTkxYTc5NTY.webp",
      "https://img.playbook.com/ypIQqPKHh610i7rUma1QdBplq9N-Oo4K2Y-Th8dyt1U/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9kMjc1/ZWRkZS1hODY1LTQy/YTUtYjdhYy1kNjEy/NjdkNWMzNjc.webp",
      "https://img.playbook.com/VkEHZ7AJNGsE5jDo0KqcbsY6Dd8Llzsqr4HFvm-zexI/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy82MDZm/ODIzNy0zZjMzLTQ4/OTgtYWNhOC1lNzRk/MDA1YmQ5ODc.webp",
      "https://img.playbook.com/k0sRev-jMkL6zLoIp5nHktFjbHjAj8c8yQWco3PU5X8/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8zOWFi/YzNhNi1lZjZmLTQy/MTctYWIzOS05ZmU1/ZmQwZmU1NjQ.webp",
      "https://img.playbook.com/WujtFrepaAvQROxbdUjYkY7bxzqpxqVGaxYcMTU60KU/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy84OGI5/MTAwNS1lM2ZhLTQ0/ZGItYTMxOS0yZjM4/YTE1OWQ5Y2U.webp",
      "https://img.playbook.com/AGTHx-Ac5BfJBvd7u2LUa4baUbCZP0YOS7VZYWCEIKY/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy85Yzcw/ZDcyNS0yMjBkLTQ5/OWUtOWVlMy02ZGFk/NTA3ZmJmZjE.webp",
      "https://img.playbook.com/mzOg1AahlcGMx1_kLk11vYzUIUsLBAdHMhsgnIh13q4/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8xYWUy/MWJlMy05YzFiLTQ2/Y2MtOThiMy01OWNh/NWM5Y2FmZWM.webp",
      "https://img.playbook.com/BjQgsY3WtDV1FCYiOLLCD6TYr6xDiDzgTDS12eQ52W8/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8xNjVi/OTQ4OS04ZDU3LTQ5/MDUtOGVmMC02NDQ1/MzU5M2U4YTY.webp",
      "https://img.playbook.com/nr_N-nmfRNSvMxa688lD30tqcQo1PMNNDlmWjwt-sfk/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9iNDE0/YzFmNS1iNDZiLTQ1/YzctYjIzNS04NWE5/Yjg5NTZjNTc.webp",
      "https://img.playbook.com/8Bs3UGBvyeE-iToN9eZFaPq3F28b6UALxj59aiKUds8/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8zN2Q4/MDc2MC1mOWRjLTQx/NDYtOTFiYS01ZTMz/NGY2MzczY2U.webp",
      "https://img.playbook.com/16gRo7ztF_ZOg_usqWGDeM5yY2b3bAODd9XB-0a1Zvc/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8wNGQz/ZTYxOS0xMTFiLTRh/YmMtODRiZC1kMjZm/MGQwYjJlYzY.webp",
      "https://img.playbook.com/cZbhvzWtYr0cJRvogT0hNSjgci-lOnQiyVfB4AUgJHQ/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8wYjE4/MjFhYi05ZmZlLTQw/YzMtYTE3MC0yNzE2/M2UyMmVmYWI.webp",
      "https://img.playbook.com/tbYjQnuO1_4lMt8XuKi9cZMidPewRiq0Xt75lCaQwnQ/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9hMjFm/NDc4Yy04YWUyLTRl/NGMtODg5My01YmZl/ZGZjNGZkOGU.webp",
      "https://img.playbook.com/Ij8vjQXd52NUWlgi4OsP2bFfn6U2wE-c7Gxyi6NbV2k/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy81YWRi/ZjE4My01YzNiLTRl/NTgtYjAzOC05MDc0/MzEzODFmYjQ.webp",
      "https://img.playbook.com/7VtEIDDHFXB6K5xpr6j7DO36rwtq-nbdo4f-0CCR_C0/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9mYjlj/N2UwZS05ZTVhLTRh/NzEtYWY4OS1mY2Qw/ZDNmNTMwMjg.webp",
      "https://img.playbook.com/qgDlLGpNgzGPcq4bDNYXFiuCqkao03cNIYXHWdWhHog/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy83YWZh/ZTUxMC1iNDk3LTRl/Y2ItYjgzYy0yYzZi/YzA5ZjI2OWY.webp",
      "https://img.playbook.com/Co88Cr24EopsmAPJGceSe2kjX4eRhfJIAra9OlYTh7A/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8xNzU0/Yzk3MC04YjUxLTRh/N2UtODIxZS0yYmIz/OWQ4MWQ4Nzg.webp",
      "https://img.playbook.com/c5M4GtSVcudJF3LtE7SYmHNJsd1xvRsU2Ml9jLmInBs/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy85NGE3/ZDk4OS00YjcxLTQy/ZGMtOTFlMy1iNThl/MzU3ZDhkOTA.webp",
      "https://img.playbook.com/ZGycQ0tSX-agbzM8-SyHg2_oDdnFPYWyxCVTSBfvX08/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8yOTgw/MjMzZC01NDNkLTQw/MGYtOTcyYS1hOTUy/ZWNmMTY3MzY.webp",
      // pubic speaking
      "https://img.playbook.com/wzqnUqnErmul2qpNPe6YYaFbA5qgurq-8Y8PnQgbbYg/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8wNjZi/MGEzOC0xZDJlLTRh/NmUtOWQxOS02NzUy/NTc0OGNkNGU.webp",
      "https://img.playbook.com/GyoK6v2gz83G3lZbrcHXonPeFfE9z2ipCdQ2p94e9S0/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9lYzk5/MjM5OS0yOGIzLTQ5/ZjktODFjZC04YTg2/ZGVlNTg5ZGE.webp",
    ],
    Arts: [artsImg],
    Yoga: [
      yogaImg,
      yogaImg1,
      yogaImg2,
      yogaImg3,
      yogaImg4,
      yogaImg5,
      yogaImg6,
      yogaImg7,
      yogaImg8,
      yogaImg9,
      yogaImg10,
      yogaImg11,
      yogaImg12,
      yogaImg13,
      yogaImg14,
      yogaImg15,
      yogaImg16,
      yogaImg17,
      yogaImg18,
      yogaImg19,
      yogaImg20,
      yogaImg21,
      yogaImg22,
      yogaImg23,
      "https://img.playbook.com/LGbsnei1McA4RcgT6RL_Gl3dwqloYv1TepBBfSUaOUk/w:1000/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy8wNTg2ZmRmYy0z/MGQyLTQ5NjMtYjk3/MC0wZjY1MWUzMjFj/MWQ.webp",
      "https://img.playbook.com/Q418TNSJzuFLbK_G6oYMbHlrmsGxOYKtA3Jm19GliNs/w:1000/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy9mNzAzNjNmYy1k/ODU2LTQ2NDctYjUz/Zi1iM2JiYjIyMzhm/Yjc.webp",
      "https://img.playbook.com/rToFNSCeyXcORPv4USJW2MWsGybig2w6za4NoyiATJo/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy81MzBi/MjZhMC1kMjE5LTRm/NzctYjFmNi1hOTg3/OGE1ZGE5MzE.webp",
      "https://img.playbook.com/sV0DQh47xiaBYpzhQrDVSkNa1bLFZi4tdhiQR75Q4Us/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy84NmMy/MDJmYS0wN2Y4LTQy/YzctYjM2ZC02Njdk/ZDAyNmZhNzY.webp",
      "https://img.playbook.com/p85Y4H8T_XFxswl9n1qY8DWg7rzbBOXfvH4dWnOpS1E/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8wZmRm/OTc2Ni03MjY0LTQ0/ZDUtYjY3My1kNzQ2/N2NjYTNiZDE.webp",
      "https://img.playbook.com/JpGv7FkA-YIrs2cscx1hAsZTzTg12nDykHNClzNshJM/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy80YTY4/NWYzYi0zZTZlLTRj/ZTgtODMzNC0yMDU3/ZTJmYzA2N2E.webp",
      "https://img.playbook.com/Mm_z3rN5_GObhQd7FK399S-fUguSJqhDIFHt9EQ72NM/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9jZjky/NzNjNS0yZGFmLTRj/ZDItOTgyNy05ZDhh/YzA3YzE4MjE.webp",
      "https://img.playbook.com/lFkWCRB9c98B0Qu8u1tBEwxt1nAA091NrKiOS_v4o9s/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9jNmI2/MWZmZC1hYmU2LTQ4/ODQtYWI4Mi00NGQ2/YjZjZjkxZmM.webp",
    ],
    Dance: [
      dance,
      dance1,
      dance2,
      dance3,
      dance4,
      dance5,
      dance6,
      dance7,
      dance8,
      dance9,
      dance10,
      dance11,
      dance12,
      dance13,
      dance14,
      "https://img.playbook.com/1VC1XweNlHlS6hLbvYfuZ2DthCbnI6EeAmJBKEJa0EY/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9kMTAy/MjQxYi0zNzU0LTQ3/YjktODhjZi00YjNj/NmE3YmUzYWY.webp",
      "https://img.playbook.com/AO5TfEQ71f3Z08u4dtvFIMhna8uC7wFlKHftkzWdMJE/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9kOWJi/OTEyMC1hNmY0LTQy/YWQtODdjZC0wNzZm/ODM3YTJmYTY.webp",
      "https://img.playbook.com/5foFe3pjGDsFoiM49Vn4X3UomO5FNHKiv64Zp7n_eTU/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy82ZmY4/M2UwYS05ZjM3LTQ3/MGQtYjc4Ni1mMDEz/NmYyNGNiNzM.webp",
      "https://img.playbook.com/qTboLEnzyry4QmfbrOvmnPzMnRicJr9zyKF0D63jKj8/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9hOGVj/MDFmYS1hNzU0LTRi/ZjAtYjk1ZS1iMjYz/ODJlMGI3YjE.webp",
      "https://img.playbook.com/xENTEKfgU6O8oxgXv4-RnnBW7js5eNPSrlyVsxByw5g/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9kNTRi/NjkxYi04MjZiLTQ1/MjEtYWJiZi04MWRm/MGUyYzk1ZGU.webp",
      "https://img.playbook.com/YQp56HoJ2ILxPUnhisz-R1Mrdhc_WzUMwHCtf94eSDk/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9jYzRl/M2NiMS02NGEwLTQ3/YTItODZmMy0wNzNh/ZjNhOGJhMTM.webp",
      "https://img.playbook.com/qXpHsOUslb6abMhz5vI7N6DvvyFuTbeBbPLzcwkB7h4/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy84NWVm/Mzk4ZS1kMTllLTRm/MzEtOTc5Zi1hZjRm/ZDlhOTgzMjY.webp",
      "https://img.playbook.com/xtI0Z6uaHl100g-0EZGltqP_YuO27TmfjLqXQPb408c/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9hYjg0/OTZhZi1jZjAwLTRj/ZjItOGY3OS02NDI5/NzdhMTg2MzM.webp",
      "https://img.playbook.com/-aH8dgGHdj47shzMX0g0MIu-w3Bn4l0yj588SBjBfpg/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8wMDc1/NzY5My1hYWE5LTQ0/NTEtYjExYS01NmZi/ODk2YjFlZTM.webp",
      "https://img.playbook.com/_v88pGwEnPn3WF5x-exeQnMet8NUtJCQa63vzU_8a2s/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9kYzU3/NmNkZS0zNzkxLTQy/ZjgtYTU1ZC0wNDU5/ZWI1ODE0Yzg.webp",
      "https://img.playbook.com/BcJ2JOW9z-9xPSP6oyPs2oDVEzEQRUsCAq1WeT-K1h0/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy82OGQ0/MzZlNS1iZjRiLTRk/NWEtYTg2My03MjVm/YzM5YmJlZTI.webp",
      "https://img.playbook.com/D-NCvVJPYse9VhiLelav7qH05opr6nq4yf6nl2-4iKU/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9lNjIx/MDBjZC00N2U4LTQx/ZjUtODg5ZS1mNTNi/ZTQxZGU1MzU.webp",
      "https://img.playbook.com/94SkwyXxTKrr-UUp5pCiFUU31RA3HUE-qiUaZAckcPA/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy85MWEz/NjRiYS0zODgwLTRm/ZmEtYjUyOS05ZGI0/NWMxYzQwM2E.webp",
      "https://img.playbook.com/g0NZaU62ZBbi5pBFBC4g5MSBYZBxCvlw6LYO8idtHLo/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8wOGQ0/ZDg5Ny0wMjZmLTRh/ZGMtYjI4NS0yMDBi/MTkxYTc5NTY.webp",
      "https://img.playbook.com/ypIQqPKHh610i7rUma1QdBplq9N-Oo4K2Y-Th8dyt1U/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9kMjc1/ZWRkZS1hODY1LTQy/YTUtYjdhYy1kNjEy/NjdkNWMzNjc.webp",
      "https://img.playbook.com/VkEHZ7AJNGsE5jDo0KqcbsY6Dd8Llzsqr4HFvm-zexI/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy82MDZm/ODIzNy0zZjMzLTQ4/OTgtYWNhOC1lNzRk/MDA1YmQ5ODc.webp",
      "https://img.playbook.com/k0sRev-jMkL6zLoIp5nHktFjbHjAj8c8yQWco3PU5X8/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8zOWFi/YzNhNi1lZjZmLTQy/MTctYWIzOS05ZmU1/ZmQwZmU1NjQ.webp",
      "https://img.playbook.com/WujtFrepaAvQROxbdUjYkY7bxzqpxqVGaxYcMTU60KU/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy84OGI5/MTAwNS1lM2ZhLTQ0/ZGItYTMxOS0yZjM4/YTE1OWQ5Y2U.webp",
      "https://img.playbook.com/AGTHx-Ac5BfJBvd7u2LUa4baUbCZP0YOS7VZYWCEIKY/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy85Yzcw/ZDcyNS0yMjBkLTQ5/OWUtOWVlMy02ZGFk/NTA3ZmJmZjE.webp",
      "https://img.playbook.com/mzOg1AahlcGMx1_kLk11vYzUIUsLBAdHMhsgnIh13q4/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8xYWUy/MWJlMy05YzFiLTQ2/Y2MtOThiMy01OWNh/NWM5Y2FmZWM.webp",
      "https://img.playbook.com/BjQgsY3WtDV1FCYiOLLCD6TYr6xDiDzgTDS12eQ52W8/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8xNjVi/OTQ4OS04ZDU3LTQ5/MDUtOGVmMC02NDQ1/MzU5M2U4YTY.webp",
      "https://img.playbook.com/nr_N-nmfRNSvMxa688lD30tqcQo1PMNNDlmWjwt-sfk/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9iNDE0/YzFmNS1iNDZiLTQ1/YzctYjIzNS04NWE5/Yjg5NTZjNTc.webp",
      "https://img.playbook.com/8Bs3UGBvyeE-iToN9eZFaPq3F28b6UALxj59aiKUds8/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8zN2Q4/MDc2MC1mOWRjLTQx/NDYtOTFiYS01ZTMz/NGY2MzczY2U.webp",
      "https://img.playbook.com/16gRo7ztF_ZOg_usqWGDeM5yY2b3bAODd9XB-0a1Zvc/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8wNGQz/ZTYxOS0xMTFiLTRh/YmMtODRiZC1kMjZm/MGQwYjJlYzY.webp",
      "https://img.playbook.com/cZbhvzWtYr0cJRvogT0hNSjgci-lOnQiyVfB4AUgJHQ/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8wYjE4/MjFhYi05ZmZlLTQw/YzMtYTE3MC0yNzE2/M2UyMmVmYWI.webp",
      "https://img.playbook.com/tbYjQnuO1_4lMt8XuKi9cZMidPewRiq0Xt75lCaQwnQ/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9hMjFm/NDc4Yy04YWUyLTRl/NGMtODg5My01YmZl/ZGZjNGZkOGU.webp",
      "https://img.playbook.com/Ij8vjQXd52NUWlgi4OsP2bFfn6U2wE-c7Gxyi6NbV2k/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy81YWRi/ZjE4My01YzNiLTRl/NTgtYjAzOC05MDc0/MzEzODFmYjQ.webp",
      "https://img.playbook.com/7VtEIDDHFXB6K5xpr6j7DO36rwtq-nbdo4f-0CCR_C0/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9mYjlj/N2UwZS05ZTVhLTRh/NzEtYWY4OS1mY2Qw/ZDNmNTMwMjg.webp",
      "https://img.playbook.com/qgDlLGpNgzGPcq4bDNYXFiuCqkao03cNIYXHWdWhHog/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy83YWZh/ZTUxMC1iNDk3LTRl/Y2ItYjgzYy0yYzZi/YzA5ZjI2OWY.webp",
      "https://img.playbook.com/Co88Cr24EopsmAPJGceSe2kjX4eRhfJIAra9OlYTh7A/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8xNzU0/Yzk3MC04YjUxLTRh/N2UtODIxZS0yYmIz/OWQ4MWQ4Nzg.webp",
      "https://img.playbook.com/c5M4GtSVcudJF3LtE7SYmHNJsd1xvRsU2Ml9jLmInBs/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy85NGE3/ZDk4OS00YjcxLTQy/ZGMtOTFlMy1iNThl/MzU3ZDhkOTA.webp",
      "https://img.playbook.com/ZGycQ0tSX-agbzM8-SyHg2_oDdnFPYWyxCVTSBfvX08/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8yOTgw/MjMzZC01NDNkLTQw/MGYtOTcyYS1hOTUy/ZWNmMTY3MzY.webp",
    ],
    Public_Speaking: [
      "https://img.playbook.com/wzqnUqnErmul2qpNPe6YYaFbA5qgurq-8Y8PnQgbbYg/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8wNjZi/MGEzOC0xZDJlLTRh/NmUtOWQxOS02NzUy/NTc0OGNkNGU.webp",
      "https://img.playbook.com/GyoK6v2gz83G3lZbrcHXonPeFfE9z2ipCdQ2p94e9S0/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9lYzk5/MjM5OS0yOGIzLTQ5/ZjktODFjZC04YTg2/ZGVlNTg5ZGE.webp",
    ],
    Personality_Development: [
      "https://img.playbook.com/MIbpuJy-LpYZWubaQ447GXbzBTaXI_xHQ5b35-J1Q88/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy82YTI0/ZTE0Yi04OWMyLTQz/MmItOTQzNS1lZjg1/NmZhZmY1NjA.webp",
      "https://img.playbook.com/lbuN4HStIj8R6iAoM2aZqIWBdQ1r279rbAbbIRUybCY/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy84YTVk/NjMwOS1mODJkLTRl/NzYtYTZlNS00NjA4/NWUwNGRkNTA.webp",
      "https://img.playbook.com/IDGppi1jxHA-Izo6PXCSQAjDn950G9DPwca4f7JlQ4k/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy80MDAz/N2M2My1kODIwLTRk/MzctOTc1NC01MTM4/NGU3MGRiNjU.webp",
      "https://img.playbook.com/5_-bLeW8V6qHCwrqilZZQV-z6nSH7edGW_FYMvRGo9Q/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9kZjdi/MjA3ZS1iZTgxLTQ0/YjctYjI1Yy1jYTYy/OWM2ZTc2YTA.webp",
      "https://img.playbook.com/scKqZ2Rww-WKK-0rJWPog79aGnMeyEayjKq6Po51kXw/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9iMzU4/NmEwZS05YjlkLTRi/NDktOTRiNi02YTQ4/NGMxNDQ3OGI.webp",
      "https://img.playbook.com/CbRBrxIWFJElVN3Q2G7tjRH3l6vz1NbX9e-HxHqYdSQ/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9mYzhk/ZGUyYy02OTk2LTQ2/NTgtOWE3Mi1iNTdk/YzZhYWY3YTY.webp",
      "https://img.playbook.com/vfoL6qp_pO-517gp6CHGIu7cgLWJBCk4hvuEKQbhtw8/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8wNTk2/Nzk0My1hMTk2LTQ5/MDEtYmI5Mi1kOWQ2/YzI4MTU2MDQ.webp",
      "https://img.playbook.com/oikbHyg-gHacmrst5v-3ty0GzS0TLkanEq9dMcPjKrE/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy84N2Ni/NjI0Zi0xNDlhLTRm/NDktYTI2Ni0yM2Qy/Y2JkYzM5YjQ.webp",
      "https://img.playbook.com/vfoL6qp_pO-517gp6CHGIu7cgLWJBCk4hvuEKQbhtw8/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8wNTk2/Nzk0My1hMTk2LTQ5/MDEtYmI5Mi1kOWQ2/YzI4MTU2MDQ.webp",
      "https://img.playbook.com/p_vbGzBNUx7oiGQw058zU3dJ_gYAwns_LpNbiHigJz8/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy83NWEy/ZGVhOC0yMWJjLTQ2/OTEtYTdlMi03MTQ2/ZTk2NWU1YmI.webp",
      "https://img.playbook.com/a35q2GPPRKtvX60iGd5Pw-Mo-Ex1o3DQYlO4Ga10jIw/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8xNGMx/M2ExOS1iN2RkLTQ1/YTgtOGU2Mi1hNzFj/ZGUzOGY0ODc.webp",
      "https://img.playbook.com/WzUuTBW_jgAUlqKQGJw29A8gEY_x3Nuc9HYZl9Kh-ro/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9lMTQx/MDQ3Yy03ZDg3LTQ4/YmMtODIxZi1kZTll/YzZmMGEyOTg.webp",
      "https://img.playbook.com/tYDeTyGPawhXZLJYnxCF_lt95W9ru6JnsCU2-gSG5DY/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8xZTBl/NGM0ZS0xNzIwLTRl/MzUtYThhMS0xYTQ2/ZDFiNmVkYmM.webp",
      "https://img.playbook.com/i8VBaajg53EEw5ykqy_h01DlPESxUymaN-_JGS-4SWM/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy81NzRj/OWY1OC0zMDM1LTRk/MjgtYTNjZi04Yzc5/ZDRiMDM4MjQ.webp",
      "https://img.playbook.com/otbAUdPQ-IoNWsqqMNTAZNes5UlDFNjLzvG1ap903_4/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9hODYy/YWZkNy02ZGI1LTRj/YTItOTRhYi04N2Vl/YWI1ODI0MmI.webp",
      "https://img.playbook.com/XL6jnu44pFS8cmaiHZ7eAN1NrP-X9mkKV2NYD7OSx3Y/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9jNmRi/MjBlNC1jMTI0LTRh/ZjMtYmZkMS05ZTg5/ZTAxZjVjZTY.webp",
      "https://img.playbook.com/oI5W7IGDt8u3eOf1GD1YYtOWh2lGctG-sO5ju2UsQg8/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8zYzM2/NTE5My02YzQwLTQz/ZGYtOGRiMC1jYWU5/ZGY0YTFmODU.webp",
      "https://img.playbook.com/i3vlqLna2015EQxIvBdlrvRjlTnjTvg-jlOAqVPpnp4/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8xNzU0/Yzk3MC04YjUxLTRh/N2UtODIxZS0yYmIz/OWQ4MWQ4Nzg.webp",
    ],
    Others: [],
  };

  const getNavItemClasses = (category) => {
    return `cursor-pointer px-5 py-1 border border-yellow-500 rounded-2xl transition-all duration-300 ${
      activeCategory === category
        ? "bg-yellow-500 text-white"
        : "hover:bg-gray-200"
    }`;
  };

  return (
    <div className="w-full bg-[#CCE0FF] ">
      {/* Static header */}
      <StaticHeader />
      <div className="body-container">
        {/* Navigation */}
        <header className="w-full">
          <nav className="flex flex-wrap gap-5 justify-center py-5 text-sm lg:text-lg">
            <span
              onClick={() => setActiveCategory("All")}
              className={getNavItemClasses("All")}
            >
              All
            </span>
            <span
              onClick={() => setActiveCategory("Arts")}
              className={getNavItemClasses("Arts")}
            >
              Arts
            </span>
            <span
              onClick={() => setActiveCategory("Yoga")}
              className={getNavItemClasses("Yoga")}
            >
              Yoga
            </span>
            <span
              onClick={() => setActiveCategory("Dance")}
              className={getNavItemClasses("Dance")}
            >
              Dance
            </span>
            <span
              onClick={() => setActiveCategory("Public_Speaking")}
              className={getNavItemClasses("Public_Speaking")}
            >
              Public Speaking
            </span>
            <span
              onClick={() => setActiveCategory("Personality_Development")}
              className={getNavItemClasses("Personality_Development")}
            >
              Personality Development
            </span>
            <span
              onClick={() => setActiveCategory("Others")}
              className={getNavItemClasses("Others")}
            >
              Others
            </span>
          </nav>
        </header>
        <div className="flex flex-wrap justify-center">
          {images[activeCategory]?.length > 0 ? (
            images[activeCategory].map((img, index) => (
              <div key={index} className="m-2">
                <img
                  src={img}
                  alt={activeCategory}
                  loading="lazy"
                  className="h-[200px] object-cover"
                />
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center w-full h-[200px]">
              <p className="text-lg text-gray-500">No images found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
