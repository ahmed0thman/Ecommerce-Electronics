<!DOCTYPE html>
<html lang="en" dir="rtl">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <link rel="stylesheet" href="../../assets/libs/bs5/bootstrap.min.css" />
  <link rel="stylesheet" href="../../assets/libs/fontawesome/css/all.min.css" />
  <link rel="stylesheet" href="../../assets/css/styles.css" />
  <link rel="stylesheet" href="../../assets/css/pages/about/about.css" />
  

  <title>Document</title>
</head>

<body>
  <header>
    <div class="main-nav">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="../../../public/index.html">
          <img src="../../assets/images/logos/Logo.svg" alt="" srcset="" />
        </a>
        <button id="mainNavToggler" class="navbar-toggler p-0" type="button" onclick=toggleNavBar()>
          <span class="navbar-toggler-icon">
            <i class="fas fa-bars" aria-hidden="true"></i>
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarContent">
          <form class="form-search">
            <img src="../../assets/images/icons/icon-search.svg" alt="" srcset="" />
            <input class="form-control" type="search" placeholder="البحث" aria-label="Search" />
          </form>

          <div class="nav-items-container">
            <ul class="navbar-nav">
              <li class="nav-item ">
                <a class="nav-link" href="../../../public/index.html">الرئيسية </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">عنا</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">التواصل</a>
              </li>
            </ul>

            <ul class="navbar-nav user-links">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span class="d-lg-none">الملف الشخصى</span>
                  <img src="../../assets/images/icons/profile.svg" alt="" srcset="" />
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="../cart/cart.html">
                  <span class="d-lg-none">عربة التسوق</span>
                  <img src="../../assets/images/icons/cart.svg" alt="" srcset="" />
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="../favorites/favorites.html">
                  <span class="d-lg-none">تفضيلاتي</span>
                  <img src="../../assets/images/icons/favourites.svg" alt="" srcset="" />
                </a>
              </li>
            </ul>

            <hr class="w-100 d-lg-none">
            <ul class="navbar-nav d-lg-none">
              <li class="nav-item">
                <a href="" class="nav-link">
                  <span class="title"> الألعاب </span>
                  <img src="../../assets/images/icons/games.svg" alt="" srcset="" />
                </a>
              </li>

              <li class="nav-item">
                <a href="" class="nav-link">
                  <span class="title"> سماعات الرأس </span>
                  <img src="../../assets/images/icons/head-phones.svg" alt="" srcset="" />
                </a>
              </li>

              <li class="nav-item">
                <a href="" class="nav-link">
                  <span class="title"> الكاميرات </span>
                  <img src="../../assets/images/icons/camera.svg" alt="" srcset="" />
                </a>
              </li>

              <li class="nav-item">
                <a href="" class="nav-link">
                  <span class="title"> الساعات الذكية </span>
                  <img src="../../assets/images/icons/games.svg" alt="" srcset="" />
                </a>
              </li>

              <li class="nav-item">
                <a href="" class="nav-link">
                  <span class="title"> أجهزة الكومبيوتر </span>
                  <img src="../../assets/images/icons/computer.svg" alt="" srcset="" />
                </a>
              </li>

              <li class="nav-item">
                <a href="" class="nav-link">
                  <span class="title"> الهواتف </span>
                  <img src="../../assets/images/icons/phone.svg" alt="" srcset="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <main>
    <div class="sub-nav d-none d-lg-block">
      <div class="wrapper">
        <ul class="navbar-nav sub-navbar">
          <li class="nav-item">
            <a href="" class="nav-link">
              <span class="title"> الألعاب </span>
              <img src="../../assets/images/icons/games.svg" alt="" srcset="" />
            </a>
          </li>

          <li class="nav-item">
            <a href="" class="nav-link">
              <span class="title"> سماعات الرأس </span>
              <img src="../../assets/images/icons/head-phones.svg" alt="" srcset="" />
            </a>
          </li>

          <li class="nav-item">
            <a href="" class="nav-link">
              <span class="title"> الكاميرات </span>
              <img src="../../assets/images/icons/camera.svg" alt="" srcset="" />
            </a>
          </li>

          <li class="nav-item">
            <a href="" class="nav-link">
              <span class="title"> الساعات الذكية </span>
              <img src="../../assets/images/icons/games.svg" alt="" srcset="" />
            </a>
          </li>

          <li class="nav-item">
            <a href="" class="nav-link">
              <span class="title"> أجهزة الكومبيوتر </span>
              <img src="../../assets/images/icons/computer.svg" alt="" srcset="" />
            </a>
          </li>

          <li class="nav-item">
            <a href="" class="nav-link">
              <span class="title"> الهواتف </span>
              <img src="../../assets/images/icons/phone.svg" alt="" srcset="" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="wrapper">
      <div class="about">
        <div class="web-stats">
          <div class="stats-card">
            <div class="fs-2 fw-normal counter">
              +<span class="count" value="15"></span>
            </div>
            <h3 class="fs-6 fw-normal">
              إجمالي المبيعات السنوية على موقعنا
            </h3>
          </div>
          <div class="stats-card">
            <div class="fs-2 fw-normal counter">
              +<span class="count" value="700"></span>
            </div>
            <h3 class="fs-6 fw-normal">
              العملاء النشطون على موقعنا
            </h3>
          </div>
          <div class="stats-card">
            <div class="fs-2 fw-normal counter">
              +<span class="count" value="5000"></span>
            </div>
            <h3 class="fs-6 fw-normal">
              مبيعات المنتجات الشهرية
            </h3>
          </div>
          <div class="stats-card">
            <div class="fs-2 fw-normal counter">
              +<span class="count" value="3000">3000</span>
            </div>
            <h3 class="fs-6 fw-normal">
              البائعون النشطون على موقعنا
            </h3>
          </div>
        </div>

        <div class="about-us flex-md-row">
          <div class="mt-lg-4 text">
            <h2 class="fw-bolder">
              من نحن
            </h2>
            <p class="mt-4 heading-lg fs-5 fw-normal">
              موقع التجارة الإلكترونية المتخصص في الإلكترونيات هو منصة حيث يمكن للمستهلكين شراء مجموعة واسعة من الأجهزة الإلكترونية والإكسسوارات بسهولة من منازلهم. تقدم هذه المواقع عادةً منتجات مثل الهواتف الذكية، وأجهزة الكمبيوتر المحمولة، والكاميرات، والأجهزة المنزلية، وأجهزة الألعاب، ومعدات الصوت، وغيرها من الأدوات التقنية. توفر هذه المواقع أوصافًا تفصيلية للمنتجات، ومراجعات العملاء، والمواصفات الفنية، مما يساعد المستخدمين على اتخاذ قرارات مدروسة قبل الشراء.
            </p>
          </div>
          <div class="d-flex flex-column flex-xxl-row gap-3">
            <img src="../../assets/images/gallery/about/img1.svg" width="380" height="380"   srcset="">
            <img src="../../assets/images/gallery/about/img2.svg" width="380" height="380" alt="" srcset="">
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer>
    <div class="wrapper">
      <div class="footer-content">
        <div class="footer-menu">
          <h4 class="menu-title">الدعم</h4>
          <ul class="menu-items">
            <li class="menu-item">
              111 بيجوي ساراني، داكا، DH 1515، بنغلاديش.
            </li>
            <li class="menu-item" dir="ltr">exclusive@gmail.com</li>
            <li class="menu-item" dir="ltr">+88015-88888-9999</li>
          </ul>
        </div>
        <div class="footer-menu">
          <h4 class="menu-title">الحساب</h4>
          <ul class="menu-items">
            <li class="menu-item">
              <a href="" class="footer-link"> تسجيل الدخول / التسجيل </a>
            </li>
            <li class="menu-item">
              <a href="" class="footer-link"> العربة </a>
            </li>
            <li class="menu-item">
              <a href="" class="footer-link"> قائمة الرغبات </a>
            </li>
            <li class="menu-item">
              <a href="" class="footer-link"> تسوق </a>
            </li>
          </ul>
        </div>
        <div class="footer-menu">
          <h4 class="menu-title">رابط سريع</h4>
          <ul class="menu-items">
            <li class="menu-item">
              <a href="" class="footer-link"> سياسة الخصوصية </a>
            </li>
            <li class="menu-item">
              <a href="" class="footer-link"> شروط الاستخدام </a>
            </li>
            <li class="menu-item">
              <a href="" class="footer-link"> الأسئلة الشائعة </a>
            </li>
            <li class="menu-item">
              <a href="" class="footer-link"> اتصل </a>
            </li>
          </ul>
        </div>
        <div class="footer-menu">
          <h4 class="menu-title">تحميل التطبيق</h4>
          <div class="app-links">
            <div class="app app-play">
              <a href="" class="app-link">
                <img src="../../assets/images/icons/google-play.svg" alt="" srcset="" />
              </a>
              <img id="qrCodeAppStore" class="qr-code" src="../../assets/images/qr-codes/Qrcode.png" alt="" />
            </div>
            <div class="app app-store">
              <a href="" class="app-link">
                <img src="../../assets/images/icons/app-store.svg" alt="" srcset="" />
              </a>
              <img id="qrCodeAppStore" class="qr-code" src="../../assets/images/qr-codes/Qrcode.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-copy-right">
      <p class="copy-right">حقوق النشر محفوظة &copy; ريمل 2022</p>
      <img src="../../assets/images/icons/copy-rights.svg" alt="" srcset="" />
    </div>
  </footer>

  <script src="../../assets/libs/bs5/bootstrap.min.js"></script>
  <script src="../../assets/libs/fontawesome/js/all.min.js"></script>
  <script src="../../assets/js/navbar.js"></script>
  <script src="../../assets/libs/jquery/jquery.min.js"></script>
  <script src="../../assets/libs/jquery/jquery.numscroll.min.js"></script>
  <script src="./about.js"></script>
</body>

</html>