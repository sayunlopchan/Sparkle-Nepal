import React, { useState } from 'react';

// arts images
import artsImg from '../../assets/image/program/art/art.webp';

// Yoga images
import yogaImg from '../../assets/image/program/yoga/yoga.webp';
import yogaImg1 from '../../assets/image/program/yoga/yoga1.webp';
import yogaImg2 from '../../assets/image/program/yoga/yoga2.webp';
import yogaImg3 from '../../assets/image/program/yoga/yoga3.webp';
import yogaImg4 from '../../assets/image/program/yoga/yoga4.webp';
import yogaImg5 from '../../assets/image/program/yoga/yoga5.webp';
import yogaImg6 from '../../assets/image/program/yoga/yoga6.webp';
import yogaImg7 from '../../assets/image/program/yoga/yoga7.webp';
import yogaImg8 from '../../assets/image/program/yoga/yoga8.webp';
import yogaImg9 from '../../assets/image/program/yoga/yoga9.webp';
import yogaImg10 from '../../assets/image/program/yoga/yoga10.webp';
import yogaImg11 from '../../assets/image/program/yoga/yoga11.webp';
import yogaImg12 from '../../assets/image/program/yoga/yoga12.webp';
import yogaImg13 from '../../assets/image/program/yoga/yoga13.webp';
import yogaImg14 from '../../assets/image/program/yoga/yoga14.webp';
import yogaImg15 from '../../assets/image/program/yoga/yoga15.webp';
import yogaImg16 from '../../assets/image/program/yoga/yoga16.webp';
import yogaImg17 from '../../assets/image/program/yoga/yoga17.webp';
import yogaImg18 from '../../assets/image/program/yoga/yoga18.webp';
import yogaImg19 from '../../assets/image/program/yoga/yoga19.webp';
import yogaImg20 from '../../assets/image/program/yoga/yoga20.webp';
import yogaImg21 from '../../assets/image/program/yoga/yoga21.webp';
import yogaImg22 from '../../assets/image/program/yoga/yoga22.webp';
import yogaImg23 from '../../assets/image/program/yoga/yoga23.webp';

// dance images
import dance from '../../assets/image/program/dance/dance.webp';
import dance1 from '../../assets/image/program/dance/dance1.webp';
import dance2 from '../../assets/image/program/dance/dance2.webp';
import dance3 from '../../assets/image/program/dance/dance3.webp';
import dance4 from '../../assets/image/program/dance/dance4.webp';
import dance5 from '../../assets/image/program/dance/dance5.webp';
import dance6 from '../../assets/image/program/dance/dance6.webp';
import dance7 from '../../assets/image/program/dance/dance7.webp';
import dance8 from '../../assets/image/program/dance/dance8.webp';
import dance9 from '../../assets/image/program/dance/dance9.webp';
import dance10 from '../../assets/image/program/dance/dance10.webp';
import dance11 from '../../assets/image/program/dance/dance11.webp';
import dance12 from '../../assets/image/program/dance/dance12.webp';
import dance13 from '../../assets/image/program/dance/dance13.webp';
import dance14 from '../../assets/image/program/dance/dance14.webp';




// header
import StaticHeader from '../../components/StaticHeader/StaticHeader';
import GalleySkeleton from '../../components/skeleton/GallerySkeleton';

// animation


const ImageGallery = () => {

  // states
  const [activeCategory, setActiveCategory] = useState('All');

  // Image categories
  const images = {
    All: [
      artsImg,
      "https://img.playbook.com/VcEY2hYMoI-5435IDCJlG2G8-ORwRWPKyFIJEzharoI/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy85ZjRm/NDRhNC0yMTQyLTQ4/NTYtYTYwNS00OGJm/MWRkYWVlYzQ.webp",
      "https://img.playbook.com/ETH3oz6M-_31q3gmWY4ZLMD_9AhHYeVnX-_e2b33qc0/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9lMDI1/MGNhMC1mMDY5LTQ0/MzMtYWYxMS02ZjNk/MzlhZjI5NWU.webp",
      "https://img.playbook.com/7WUKwKocqaBUon9lrxODdGBB-dFWgPF_Y6HLtAX1RV0/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy80ODEz/NTBkYy1jODMyLTQy/ZmUtOWY0NC04NDcz/ZDdmOWRiNWE.webp",
      "https://img.playbook.com/phBRp8qn3T1rom3Ripfuj_cn4ifq2l7R_NjLGfJbpt8/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9jMTlj/ZTE3Ni00ZDAyLTRh/ZmItODZhYy1jNGVm/MDMxZmRmNWM.webp",
      "https://img.playbook.com/DP1ulUDAP8WcVU38f53yNOF9DRpxAdh5hdtWhkr__30/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8yZjcx/YTIzNC1hYzYzLTRk/ZWUtOTY3Yi00YjM4/NTczYjQyZWQ.webp",
      "https://img.playbook.com/OAVkZshTHa2nl9-LOLHvHGtLjQlN8BoVumGCA8TSBhg/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy81OWRi/MzA5OC00YjUwLTRm/MGMtODhlOS04OThl/MmFjMjVhNjI.webp",
      "https://img.playbook.com/9_Ef5NX102A7xJp-Rg4K7HtPBW8K8pgj5OwShdxoHGk/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9mNmE3/MmNiNy0yODk2LTQx/OGYtOGRkNS1jYjEy/MWM5YmU2MTM.webp",
      "https://img.playbook.com/CsoOWcCklNLPs_kJZmVqlW8QXRT9NtZP5HfxsKnenUA/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8zMjVk/ZDc3My00NWQwLTQ3/NDEtYWJiYS1mYjgy/OTRlNjNjY2E.webp",
      "https://img.playbook.com/ze9Kd1VR-zEXGPsVBqj8ojiV3B-s7JO531GjRJkP3H8/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy80Mjdj/NTMyNS1lMjk2LTQw/MTYtODhhNC00YjNi/ZGU1MmJmNjA.webp",
      "https://img.playbook.com/3ageamjI0VPEKLvX9VcJa2DmTvAlLgtyYd38qNErtlI/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8xMzBl/ODZmNC1kNWY3LTQ3/Y2MtYjBjMi1lZmZh/MmM3YjQ3MmM.webp",
      "https://img.playbook.com/cIk_IwK5TAa8SIpxOpyFeXOXvqCygLFp7zrStBA0d6Y/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9lYmEy/YjNkYS05MTQ2LTQx/MDItOWRkYy00OTQ4/NTY2MDVmODA.webp",
      "https://img.playbook.com/lLHAsZlPsUq_BANqklv3GI_Je9VObohe3C2Ji1O8rdA/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9lNzUz/ZGY3Ni0xMmU2LTQw/ZGUtOGI5MC02NTgw/ZGMxMjhmYTQ.webp",
      "https://img.playbook.com/0AX9UPFRPtDZoc-Z8lWtNgUIxckryuF5KCNLpqBaB0A/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9mZDdk/ZDExMS0xOWU0LTQ3/MzQtYjJlOS05ZmVk/ZmJhZjQ2Y2Y.webp",
      "https://img.playbook.com/rGeNHULAVmgMj1xDO3DL6NQTsbpynT_i3XKGU9tw-M8/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9hMDEx/OWNmNC03MTIxLTRh/YzQtODgwNy1jOThj/NWY2Y2ZjMWU.webp",
      "https://img.playbook.com/HVIGIHaATKTPf8MGbJ0ECM7oPcl1kcZHfa97l3wZqZ8/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8zN2I2/NjA3OS00OTU4LTQx/N2QtYmU0MS1mYWFk/NWMyOWI5YjQ.webp",
      "https://img.playbook.com/av9UN4akTELIP9XeIlVmCMOzyPIEKC2WArUtS-4beok/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy82MmFm/YTMwNy1lYjg4LTQ1/OTEtODk2ZC0xZjMw/MmI1NzQ4YWQ.webp",
      "https://img.playbook.com/-Qy17ZvvJj7_qphUAn4vUYjv6t2FntfJiMKqj39QNQM/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9mNTYw/ZWVkOC03NTk2LTRm/ZTctOGI0OS00YTMw/ZjVjMzVhNTI.webp",
      "https://img.playbook.com/LfKQBO65YmX8vYET59a_nvClIeWJOczxTCjufZIMXgU/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy81MzUw/ZDk1Zi0zODI4LTQ1/ZGQtYmQyYi05NTcw/ZmJiZDAwZWY.webp",
      yogaImg, yogaImg1, yogaImg2, yogaImg3,
      yogaImg4, yogaImg5, yogaImg6, yogaImg7,
      yogaImg8, yogaImg9, yogaImg10, yogaImg11,
      yogaImg12, yogaImg13, yogaImg14, yogaImg15,
      yogaImg16, yogaImg17, yogaImg18, yogaImg19,
      yogaImg20, yogaImg21, yogaImg22, yogaImg23,
      "https://img.playbook.com/-VbGzspyohCsmEJLexEH9millh3aQJRY0o-7zWUJLsQ/w:1000/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy80ZTYyNmEyNi03/NThmLTQ2MzAtOGI1/NC1iYjYzOGIzYmJl/YWM.webp",
      "https://img.playbook.com/LGbsnei1McA4RcgT6RL_Gl3dwqloYv1TepBBfSUaOUk/w:1000/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy8wNTg2ZmRmYy0z/MGQyLTQ5NjMtYjk3/MC0wZjY1MWUzMjFj/MWQ.webp",
      "https://img.playbook.com/dVIQMBED3PHJRDNMNAXfKlCSXQ8U0icWvd_OnLX0DJc/w:1000/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy8xMWQzZTMxYy00/YjVjLTQwOTYtYjlj/Yy0xZjkxYWZjNDg5/OWE.webp",
      "https://img.playbook.com/Q418TNSJzuFLbK_G6oYMbHlrmsGxOYKtA3Jm19GliNs/w:1000/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy9mNzAzNjNmYy1k/ODU2LTQ2NDctYjUz/Zi1iM2JiYjIyMzhm/Yjc.webp",
      "https://img.playbook.com/HXo5A4oBJApMdmp-EiYYbIsmO82YRnsI76KA15TTcyI/w:1000/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy8wMmFmZjg0Yi1m/NjdhLTQyZDEtYTIz/ZS02MmQwZGY4NjY1/Yzk.webp",
      "https://img.playbook.com/rToFNSCeyXcORPv4USJW2MWsGybig2w6za4NoyiATJo/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy81MzBi/MjZhMC1kMjE5LTRm/NzctYjFmNi1hOTg3/OGE1ZGE5MzE.webp",
      "https://img.playbook.com/sV0DQh47xiaBYpzhQrDVSkNa1bLFZi4tdhiQR75Q4Us/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy84NmMy/MDJmYS0wN2Y4LTQy/YzctYjM2ZC02Njdk/ZDAyNmZhNzY.webp",
      "https://img.playbook.com/p85Y4H8T_XFxswl9n1qY8DWg7rzbBOXfvH4dWnOpS1E/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8wZmRm/OTc2Ni03MjY0LTQ0/ZDUtYjY3My1kNzQ2/N2NjYTNiZDE.webp",
      "https://img.playbook.com/JpGv7FkA-YIrs2cscx1hAsZTzTg12nDykHNClzNshJM/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy80YTY4/NWYzYi0zZTZlLTRj/ZTgtODMzNC0yMDU3/ZTJmYzA2N2E.webp",
      "https://img.playbook.com/Mm_z3rN5_GObhQd7FK399S-fUguSJqhDIFHt9EQ72NM/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9jZjky/NzNjNS0yZGFmLTRj/ZDItOTgyNy05ZDhh/YzA3YzE4MjE.webp",
      "https://img.playbook.com/lFkWCRB9c98B0Qu8u1tBEwxt1nAA091NrKiOS_v4o9s/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9jNmI2/MWZmZC1hYmU2LTQ4/ODQtYWI4Mi00NGQ2/YjZjZjkxZmM.webp",
      "https://img.playbook.com/2490z0UNVDGBuGKmV6srpcS6kUindz1sIC9yG_kw7b0/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9iYTM2/NDI3Zi0zZWMzLTRl/OTYtOTkxNy01OTli/NmQyNmFhMGM.webp",
      "https://img.playbook.com/dql3L24PES9teg68SFt0ydvAEtKLqbMFNGeW_vmacqM/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9mN2My/MGQ4ZC1mYjI2LTQ5/YTItYTgzZS1hNGM0/ZTI5ZDIzMjM.webp",
      "https://img.playbook.com/gRxpeYx2UsTGPAd9rcgnG0sTZ88uaCLbAzy81zvgqg4/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy85ZjAy/OTlhZC01M2JjLTRm/YzQtOGZmNC0zOWEw/MTQyMmVkNDE.webp",
      "https://img.playbook.com/3DLtSq_h4QtoOsFGe7xO_EXlyCJQ8bfjxnTjihXhVNk/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9kYzVl/MTg3Yy1mMzk5LTRm/M2EtYWU3MC05NmVl/Y2QwZWI1NWM.webp",
      "https://img.playbook.com/87CBYe2CAZoM5Vr1-Yu8SnQiUpmVLDeMM6ykbJg-NYU/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy85YWY5/YWQ2YS0xMDBhLTQ5/YWUtYWVhOS01YmRi/Mjc3OTVkMzM.webp",
      "https://img.playbook.com/UX2F2rs70BzDcw3U9H-GGYWWl98kY6MKZdR2BeMS4Fg/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8xMDhl/NzA4ZC04Yjg3LTRl/OTMtOGZiYS1lZTYw/Y2I4MjkyYzg.webp",
      "https://img.playbook.com/tXJArnMR_urWpjt0_C2Wa6KCDYA_kAnuQeTMF9VPdns/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy80ZmNm/MGQyMy02YjRjLTRl/MDAtYTU2Yy0xYTUx/ZmJkNWM3MGE.webp",
      "https://img.playbook.com/KXEBgsZIp8bUPCMvcMxkWyZjiSE9YhaagHkIwYkInM8/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8xYzg2/MzFmYy1kNDM3LTQ4/NDYtOWI1Yy05YzFl/NjZlZGVlM2Y.webp",
      "https://img.playbook.com/wvHBp5fzAsUlUfqdEnRhEakzLpAaEPMDWoZE7GRjF-w/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy85OTVk/YzcxOC1lMjUwLTRh/MjgtYTVjMC02NzFj/NGIyMDExMGM.webp",
      "https://img.playbook.com/j1HWliyyWxB5vbudOOuX4j7CIavksVnWoCDWd6hDg2Q/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9iNmFh/NmJiZC1lNWIwLTRk/MmMtOGRjMi1jMDQ1/NjM5NWUyODI.webp",
      "https://img.playbook.com/26xbU4WxVDXvh2X1A6drgJZ0CLL4HqfHKg1_skni3ts/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy80YTg2/ODc4Mi1kMjJkLTRj/ZTUtYWExZC0wODY3/ZWYyODVhMjA.webp",
      "https://img.playbook.com/xD8JafAYCUoS0fAg6MvbmHqYwMGs4IST3lDqveVBx9Q/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9jNjJj/Y2Q4ZS02ZjZmLTQ4/YmEtOTExYy1iNzQx/NTFlOGQ1MDM.webp",
      "https://img.playbook.com/CpxiIQjhcQuNNpLRHMkGhLepIn1OT7yOeJHDL1T2i2g/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy81NGM5/NWViMi0wODZhLTQ5/YWQtYTU3OS0zOTU0/ZjVkMDBiOTE.webp",
      "https://img.playbook.com/57ImuQWZcHp5KQO8Kvg1Y_iWRN1rfEyO6buHNhENfzc/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy81NzEx/OGJhZi1mNGZkLTRh/ZjgtODVkOC05NmU1/NTdiMjhlYTc.webp",
      "https://img.playbook.com/CpxiIQjhcQuNNpLRHMkGhLepIn1OT7yOeJHDL1T2i2g/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy81NGM5/NWViMi0wODZhLTQ5/YWQtYTU3OS0zOTU0/ZjVkMDBiOTE.webp",
      "https://img.playbook.com/aG5za4O0EDLnYqrx04pu93ktDKXN9w9cls7b2DgjovE/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy80ODFm/NmNjMS1iNGI3LTRh/NjEtYWU4NS1mYWFj/MWExNWJlYTk.webp",
      "https://img.playbook.com/PQC31e1YdC-ol2xk_-cCCuQVjnIMXKFbSJO_9dd2qXk/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9kN2Iw/MmVkYy1kYjc3LTQw/MDAtYTFhYS04NmY2/ZWM2NzAxMDk.webp",
      "https://img.playbook.com/bdCkcFADxdZZK_FH6b1DlkXEbLgGjSZu_AD7s3f9zb8/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8zNjdl/N2RlNi0yODE0LTQy/MjktYjIwNi1jNjE2/NGQ4Y2U2Zjc.webp",
      dance, dance1, dance2, dance3,
      dance4, dance5, dance6, dance7,
      dance8, dance9, dance10, dance11,
      dance12, dance13, dance14,
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
      "https://img.playbook.com/GyoK6v2gz83G3lZbrcHXonPeFfE9z2ipCdQ2p94e9S0/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9lYzk5/MjM5OS0yOGIzLTQ5/ZjktODFjZC04YTg2/ZGVlNTg5ZGE.webp"
    ],
    Arts: [
      artsImg,
      "https://img.playbook.com/VcEY2hYMoI-5435IDCJlG2G8-ORwRWPKyFIJEzharoI/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy85ZjRm/NDRhNC0yMTQyLTQ4/NTYtYTYwNS00OGJm/MWRkYWVlYzQ.webp",
      "https://img.playbook.com/ETH3oz6M-_31q3gmWY4ZLMD_9AhHYeVnX-_e2b33qc0/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9lMDI1/MGNhMC1mMDY5LTQ0/MzMtYWYxMS02ZjNk/MzlhZjI5NWU.webp",
      "https://img.playbook.com/7WUKwKocqaBUon9lrxODdGBB-dFWgPF_Y6HLtAX1RV0/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy80ODEz/NTBkYy1jODMyLTQy/ZmUtOWY0NC04NDcz/ZDdmOWRiNWE.webp",
      "https://img.playbook.com/phBRp8qn3T1rom3Ripfuj_cn4ifq2l7R_NjLGfJbpt8/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9jMTlj/ZTE3Ni00ZDAyLTRh/ZmItODZhYy1jNGVm/MDMxZmRmNWM.webp",
      "https://img.playbook.com/DP1ulUDAP8WcVU38f53yNOF9DRpxAdh5hdtWhkr__30/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8yZjcx/YTIzNC1hYzYzLTRk/ZWUtOTY3Yi00YjM4/NTczYjQyZWQ.webp",
      "https://img.playbook.com/OAVkZshTHa2nl9-LOLHvHGtLjQlN8BoVumGCA8TSBhg/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy81OWRi/MzA5OC00YjUwLTRm/MGMtODhlOS04OThl/MmFjMjVhNjI.webp",
      "https://img.playbook.com/9_Ef5NX102A7xJp-Rg4K7HtPBW8K8pgj5OwShdxoHGk/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9mNmE3/MmNiNy0yODk2LTQx/OGYtOGRkNS1jYjEy/MWM5YmU2MTM.webp",
      "https://img.playbook.com/CsoOWcCklNLPs_kJZmVqlW8QXRT9NtZP5HfxsKnenUA/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8zMjVk/ZDc3My00NWQwLTQ3/NDEtYWJiYS1mYjgy/OTRlNjNjY2E.webp",
      "https://img.playbook.com/ze9Kd1VR-zEXGPsVBqj8ojiV3B-s7JO531GjRJkP3H8/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy80Mjdj/NTMyNS1lMjk2LTQw/MTYtODhhNC00YjNi/ZGU1MmJmNjA.webp",
      "https://img.playbook.com/3ageamjI0VPEKLvX9VcJa2DmTvAlLgtyYd38qNErtlI/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8xMzBl/ODZmNC1kNWY3LTQ3/Y2MtYjBjMi1lZmZh/MmM3YjQ3MmM.webp",
      "https://img.playbook.com/cIk_IwK5TAa8SIpxOpyFeXOXvqCygLFp7zrStBA0d6Y/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9lYmEy/YjNkYS05MTQ2LTQx/MDItOWRkYy00OTQ4/NTY2MDVmODA.webp",
      "https://img.playbook.com/lLHAsZlPsUq_BANqklv3GI_Je9VObohe3C2Ji1O8rdA/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9lNzUz/ZGY3Ni0xMmU2LTQw/ZGUtOGI5MC02NTgw/ZGMxMjhmYTQ.webp",
      "https://img.playbook.com/0AX9UPFRPtDZoc-Z8lWtNgUIxckryuF5KCNLpqBaB0A/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9mZDdk/ZDExMS0xOWU0LTQ3/MzQtYjJlOS05ZmVk/ZmJhZjQ2Y2Y.webp",
      "https://img.playbook.com/rGeNHULAVmgMj1xDO3DL6NQTsbpynT_i3XKGU9tw-M8/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9hMDEx/OWNmNC03MTIxLTRh/YzQtODgwNy1jOThj/NWY2Y2ZjMWU.webp",
      "https://img.playbook.com/HVIGIHaATKTPf8MGbJ0ECM7oPcl1kcZHfa97l3wZqZ8/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8zN2I2/NjA3OS00OTU4LTQx/N2QtYmU0MS1mYWFk/NWMyOWI5YjQ.webp",
      "https://img.playbook.com/av9UN4akTELIP9XeIlVmCMOzyPIEKC2WArUtS-4beok/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy82MmFm/YTMwNy1lYjg4LTQ1/OTEtODk2ZC0xZjMw/MmI1NzQ4YWQ.webp",
      "https://img.playbook.com/-Qy17ZvvJj7_qphUAn4vUYjv6t2FntfJiMKqj39QNQM/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9mNTYw/ZWVkOC03NTk2LTRm/ZTctOGI0OS00YTMw/ZjVjMzVhNTI.webp",
      "https://img.playbook.com/LfKQBO65YmX8vYET59a_nvClIeWJOczxTCjufZIMXgU/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy81MzUw/ZDk1Zi0zODI4LTQ1/ZGQtYmQyYi05NTcw/ZmJiZDAwZWY.webp",
    ],
    Yoga: [
      yogaImg, yogaImg1, yogaImg2, yogaImg3,
      yogaImg4, yogaImg5, yogaImg6, yogaImg7,
      yogaImg8, yogaImg9, yogaImg10, yogaImg11,
      yogaImg12, yogaImg13, yogaImg14, yogaImg15,
      yogaImg16, yogaImg17, yogaImg18, yogaImg19,
      yogaImg20, yogaImg21, yogaImg22, yogaImg23,
      "https://img.playbook.com/-VbGzspyohCsmEJLexEH9millh3aQJRY0o-7zWUJLsQ/w:1000/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy80ZTYyNmEyNi03/NThmLTQ2MzAtOGI1/NC1iYjYzOGIzYmJl/YWM.webp",
      "https://img.playbook.com/LGbsnei1McA4RcgT6RL_Gl3dwqloYv1TepBBfSUaOUk/w:1000/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy8wNTg2ZmRmYy0z/MGQyLTQ5NjMtYjk3/MC0wZjY1MWUzMjFj/MWQ.webp",
      "https://img.playbook.com/dVIQMBED3PHJRDNMNAXfKlCSXQ8U0icWvd_OnLX0DJc/w:1000/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy8xMWQzZTMxYy00/YjVjLTQwOTYtYjlj/Yy0xZjkxYWZjNDg5/OWE.webp",
      "https://img.playbook.com/Q418TNSJzuFLbK_G6oYMbHlrmsGxOYKtA3Jm19GliNs/w:1000/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy9mNzAzNjNmYy1k/ODU2LTQ2NDctYjUz/Zi1iM2JiYjIyMzhm/Yjc.webp",
      "https://img.playbook.com/HXo5A4oBJApMdmp-EiYYbIsmO82YRnsI76KA15TTcyI/w:1000/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9s/YXJnZV9wcmV2aWV3/cy8wMmFmZjg0Yi1m/NjdhLTQyZDEtYTIz/ZS02MmQwZGY4NjY1/Yzk.webp",
      "https://img.playbook.com/rToFNSCeyXcORPv4USJW2MWsGybig2w6za4NoyiATJo/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy81MzBi/MjZhMC1kMjE5LTRm/NzctYjFmNi1hOTg3/OGE1ZGE5MzE.webp",
      "https://img.playbook.com/sV0DQh47xiaBYpzhQrDVSkNa1bLFZi4tdhiQR75Q4Us/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy84NmMy/MDJmYS0wN2Y4LTQy/YzctYjM2ZC02Njdk/ZDAyNmZhNzY.webp",
      "https://img.playbook.com/p85Y4H8T_XFxswl9n1qY8DWg7rzbBOXfvH4dWnOpS1E/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8wZmRm/OTc2Ni03MjY0LTQ0/ZDUtYjY3My1kNzQ2/N2NjYTNiZDE.webp",
      "https://img.playbook.com/JpGv7FkA-YIrs2cscx1hAsZTzTg12nDykHNClzNshJM/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy80YTY4/NWYzYi0zZTZlLTRj/ZTgtODMzNC0yMDU3/ZTJmYzA2N2E.webp",
      "https://img.playbook.com/Mm_z3rN5_GObhQd7FK399S-fUguSJqhDIFHt9EQ72NM/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9jZjky/NzNjNS0yZGFmLTRj/ZDItOTgyNy05ZDhh/YzA3YzE4MjE.webp",
      "https://img.playbook.com/lFkWCRB9c98B0Qu8u1tBEwxt1nAA091NrKiOS_v4o9s/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9jNmI2/MWZmZC1hYmU2LTQ4/ODQtYWI4Mi00NGQ2/YjZjZjkxZmM.webp",
      "https://img.playbook.com/2490z0UNVDGBuGKmV6srpcS6kUindz1sIC9yG_kw7b0/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9iYTM2/NDI3Zi0zZWMzLTRl/OTYtOTkxNy01OTli/NmQyNmFhMGM.webp",
      "https://img.playbook.com/dql3L24PES9teg68SFt0ydvAEtKLqbMFNGeW_vmacqM/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9mN2My/MGQ4ZC1mYjI2LTQ5/YTItYTgzZS1hNGM0/ZTI5ZDIzMjM.webp",
      "https://img.playbook.com/gRxpeYx2UsTGPAd9rcgnG0sTZ88uaCLbAzy81zvgqg4/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy85ZjAy/OTlhZC01M2JjLTRm/YzQtOGZmNC0zOWEw/MTQyMmVkNDE.webp",
      "https://img.playbook.com/3DLtSq_h4QtoOsFGe7xO_EXlyCJQ8bfjxnTjihXhVNk/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9kYzVl/MTg3Yy1mMzk5LTRm/M2EtYWU3MC05NmVl/Y2QwZWI1NWM.webp",
      "https://img.playbook.com/87CBYe2CAZoM5Vr1-Yu8SnQiUpmVLDeMM6ykbJg-NYU/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy85YWY5/YWQ2YS0xMDBhLTQ5/YWUtYWVhOS01YmRi/Mjc3OTVkMzM.webp",
      "https://img.playbook.com/UX2F2rs70BzDcw3U9H-GGYWWl98kY6MKZdR2BeMS4Fg/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8xMDhl/NzA4ZC04Yjg3LTRl/OTMtOGZiYS1lZTYw/Y2I4MjkyYzg.webp",
      "https://img.playbook.com/tXJArnMR_urWpjt0_C2Wa6KCDYA_kAnuQeTMF9VPdns/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy80ZmNm/MGQyMy02YjRjLTRl/MDAtYTU2Yy0xYTUx/ZmJkNWM3MGE.webp",
      "https://img.playbook.com/KXEBgsZIp8bUPCMvcMxkWyZjiSE9YhaagHkIwYkInM8/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8xYzg2/MzFmYy1kNDM3LTQ4/NDYtOWI1Yy05YzFl/NjZlZGVlM2Y.webp",
      "https://img.playbook.com/wvHBp5fzAsUlUfqdEnRhEakzLpAaEPMDWoZE7GRjF-w/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy85OTVk/YzcxOC1lMjUwLTRh/MjgtYTVjMC02NzFj/NGIyMDExMGM.webp",
      "https://img.playbook.com/j1HWliyyWxB5vbudOOuX4j7CIavksVnWoCDWd6hDg2Q/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9iNmFh/NmJiZC1lNWIwLTRk/MmMtOGRjMi1jMDQ1/NjM5NWUyODI.webp",
      "https://img.playbook.com/26xbU4WxVDXvh2X1A6drgJZ0CLL4HqfHKg1_skni3ts/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy80YTg2/ODc4Mi1kMjJkLTRj/ZTUtYWExZC0wODY3/ZWYyODVhMjA.webp",
      "https://img.playbook.com/xD8JafAYCUoS0fAg6MvbmHqYwMGs4IST3lDqveVBx9Q/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9jNjJj/Y2Q4ZS02ZjZmLTQ4/YmEtOTExYy1iNzQx/NTFlOGQ1MDM.webp",
      "https://img.playbook.com/CpxiIQjhcQuNNpLRHMkGhLepIn1OT7yOeJHDL1T2i2g/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy81NGM5/NWViMi0wODZhLTQ5/YWQtYTU3OS0zOTU0/ZjVkMDBiOTE.webp",
      "https://img.playbook.com/57ImuQWZcHp5KQO8Kvg1Y_iWRN1rfEyO6buHNhENfzc/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy81NzEx/OGJhZi1mNGZkLTRh/ZjgtODVkOC05NmU1/NTdiMjhlYTc.webp",
      "https://img.playbook.com/CpxiIQjhcQuNNpLRHMkGhLepIn1OT7yOeJHDL1T2i2g/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy81NGM5/NWViMi0wODZhLTQ5/YWQtYTU3OS0zOTU0/ZjVkMDBiOTE.webp",
      "https://img.playbook.com/aG5za4O0EDLnYqrx04pu93ktDKXN9w9cls7b2DgjovE/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy80ODFm/NmNjMS1iNGI3LTRh/NjEtYWU4NS1mYWFj/MWExNWJlYTk.webp",
      "https://img.playbook.com/PQC31e1YdC-ol2xk_-cCCuQVjnIMXKFbSJO_9dd2qXk/w:250/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9kN2Iw/MmVkYy1kYjc3LTQw/MDAtYTFhYS04NmY2/ZWM2NzAxMDk.webp",
      "https://img.playbook.com/bdCkcFADxdZZK_FH6b1DlkXEbLgGjSZu_AD7s3f9zb8/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8zNjdl/N2RlNi0yODE0LTQy/MjktYjIwNi1jNjE2/NGQ4Y2U2Zjc.webp",
    ],
    Dance: [
      dance, dance1, dance2, dance3,
      dance4, dance5, dance6, dance7,
      dance8, dance9, dance10, dance11,
      dance12, dance13, dance14,
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
      "https://img.playbook.com/GyoK6v2gz83G3lZbrcHXonPeFfE9z2ipCdQ2p94e9S0/w:500/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy9lYzk5/MjM5OS0yOGIzLTQ5/ZjktODFjZC04YTg2/ZGVlNTg5ZGE.webp"
    ],
    Personality_Development: []
  };

  const getNavItemClasses = (category) => {
    return `cursor-pointer px-5 py-1 border border-yellow-500 rounded-2xl transition-all duration-300 ${activeCategory === category
      ? 'bg-yellow-500 text-white'
      : 'hover:bg-gray-200'
      }`;
  };

  return (
    <div className='w-full bg-[#CCE0FF] '>
      {/* Static header */}
      <StaticHeader />

      {/* Navigation */}
      <header className='w-full'>
        <nav className='flex flex-wrap gap-5 justify-center py-5 text-sm lg:text-lg'>
          <span onClick={() => setActiveCategory('All')} className={getNavItemClasses('All')}>All</span>
          <span onClick={() => setActiveCategory('Arts')} className={getNavItemClasses('Arts')}>Arts</span>
          <span onClick={() => setActiveCategory('Yoga')} className={getNavItemClasses('Yoga')}>Yoga</span>
          <span onClick={() => setActiveCategory('Dance')} className={getNavItemClasses('Dance')}>Dance</span>
          <span onClick={() => setActiveCategory('Public_Speaking')} className={getNavItemClasses('Public_Speaking')}>Public Speaking</span>
          <span onClick={() => setActiveCategory('Personality_Development')} className={getNavItemClasses('Personality_Development')}>Personality Development</span>
        </nav>
      </header>
      <div className='flex flex-wrap justify-center'>
        {images[activeCategory]?.length > 0 ? (
          images[activeCategory].map((img, index) => (
            <div key={index} className='m-2'>
              <img src={img} alt={activeCategory} loading="lazy" className='h-[200px] object-cover' />
            </div>
          ))
        ) : (
          <div className='flex items-center justify-center w-full h-[200px]'>
            <p className='text-lg text-gray-500'>No images found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageGallery;
