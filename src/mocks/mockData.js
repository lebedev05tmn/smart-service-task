const mockData = {
  company: {
    logo: "https://i.postimg.cc/0jwTPST9/Logo.png",
    name: "Название компании",
    description: "Описание компании",
    main_number: "+7 (000) 000-00-00",
    mail: "any@info.com",
    site: "https://github.com/lebedev05tmn",
    address: "г. Санкт-Петербург",
    date: "01.01.1990",
    clients: [
      { name: "Клиенты Клиенты Клиенты " },
      { name: "Клиенты Клиенты Клиенты " },
      { name: "Клиенты Клиенты Клиенты " },
    ],
    fax: "+7 (000) 000-00-00",
    links: [
      {
        id: 1,
        title: "telegram",
        url: "https://t.me/lebedev05tmn",
        image: "https://svgshare.com/i/16Pw.svg",
      },
      {
        id: 2,
        title: "whatsapp",
        url: "https://www.whatsapp.com",
        image: "https://svgshare.com/i/16Qx.svg",
      },
      {
        id: 3,
        title: "viber",
        url: "https://www.viber.com/",
        image: "https://svgshare.com/i/16P5.svg",
      },
      {
        id: 4,
        title: "instagram",
        url: "https://www.instagram.com",
        image: "https://svgshare.com/i/16QU.svg",
      },
      {
        id: 5,
        title: "vkontakte",
        url: "https://vk.com",
        image: "https://svgshare.com/i/16Qn.svg",
      },
      {
        id: 6,
        title: "facebook",
        url: "https://www.facebook.com",
        image: "https://svgshare.com/i/16P_.svg",
      },
      {
        id: 7,
        title: "youtube",
        url: "https://www.youtube.com",
        image: "https://svgshare.com/i/16Pa.svg",
      },
      {
        id: 8,
        title: "ok",
        url: "https://ok.ru",
        image: "https://svgshare.com/i/16QK.svg",
      },
      {
        id: 9,
        title: "dzen",
        url: "https://dzen.ru",
        image: "https://svgshare.com/i/16R8.svg",
      },
      {
        id: 10,
        title: "tiktok",
        url: "https://www.tiktok.com",
        image: "https://svgshare.com/i/16Ns.svg",
      },
      {
        id: 11,
        title: "linkedin",
        url: "https://www.linkedin.com",
        image: "https://svgshare.com/i/16R9.svg",
      },
    ],
  },
  employer: {
    name: "Иванов Иван Петрович",
    position: "Директор",
    main_number: "+7 (000) 000-00-00",
    first_number: "+7 (000) 000-00-00",
    second_number: "+7 (000) 000-00-00",
    mail: "any@info.com",
    site: "https://github.com/lebedev05tmn",
    address: "г. Санкт-Петербург",
    date: "01.01.1990",
    grade: "Звание, учёная степень",
    logo: "https://i.postimg.cc/0jwTPST9/Logo.png",
    images: [
      {
        id: 12,
        title: "first_image",
        image:
          "https://s3-alpha-sig.figma.com/img/2ed2/6f43/89c7afdf587c71f9ab37904125c26742?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jIw1mQ15FX2tjm2xyayb-Sm6ky1N001U9fUE2-8KPhzBpWNIB2QFfWGFDRtvOkfzeRVM~ZxMnCuseMktcrhM340FNQrgs1IIT1Z0U~EdeahO8K6Cib~Aln2cT7QVHYZ6IK-4TwUw6XGXMgF1CWpqCdNE2mxQ9cBxravBrglDyWJbOsJQXj7DAD2pt2I9rAA4FfZ6cZmNait84MhmTHMaBD3wis1vUpnE2g0nocIs4KviFRcovDI5hFtlr-c~gq-gAOgnVwr~lZonEtp2Nv2zEcKVa~QxyP6NsnIJ-PPEEP9ydhaQ-4883~~xwMn76K~vzFbXB9tC2x2-CuI6xTAprg__",
      },
      {
        id: 13,
        title: "second_image",
        image:
          "https://s3-alpha-sig.figma.com/img/2ed2/6f43/89c7afdf587c71f9ab37904125c26742?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jIw1mQ15FX2tjm2xyayb-Sm6ky1N001U9fUE2-8KPhzBpWNIB2QFfWGFDRtvOkfzeRVM~ZxMnCuseMktcrhM340FNQrgs1IIT1Z0U~EdeahO8K6Cib~Aln2cT7QVHYZ6IK-4TwUw6XGXMgF1CWpqCdNE2mxQ9cBxravBrglDyWJbOsJQXj7DAD2pt2I9rAA4FfZ6cZmNait84MhmTHMaBD3wis1vUpnE2g0nocIs4KviFRcovDI5hFtlr-c~gq-gAOgnVwr~lZonEtp2Nv2zEcKVa~QxyP6NsnIJ-PPEEP9ydhaQ-4883~~xwMn76K~vzFbXB9tC2x2-CuI6xTAprg__",
      },
      {
        id: 14,
        title: "third_image",
        image:
          "https://s3-alpha-sig.figma.com/img/2ed2/6f43/89c7afdf587c71f9ab37904125c26742?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jIw1mQ15FX2tjm2xyayb-Sm6ky1N001U9fUE2-8KPhzBpWNIB2QFfWGFDRtvOkfzeRVM~ZxMnCuseMktcrhM340FNQrgs1IIT1Z0U~EdeahO8K6Cib~Aln2cT7QVHYZ6IK-4TwUw6XGXMgF1CWpqCdNE2mxQ9cBxravBrglDyWJbOsJQXj7DAD2pt2I9rAA4FfZ6cZmNait84MhmTHMaBD3wis1vUpnE2g0nocIs4KviFRcovDI5hFtlr-c~gq-gAOgnVwr~lZonEtp2Nv2zEcKVa~QxyP6NsnIJ-PPEEP9ydhaQ-4883~~xwMn76K~vzFbXB9tC2x2-CuI6xTAprg__",
      },
    ],
  },
};

export default mockData;
