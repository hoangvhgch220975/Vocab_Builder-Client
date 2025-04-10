<template>

<!-- <div :class="$style.namPosuereAccumsanContainer">
          <p :class="$style.aboutBitelink">
                <b>About BiteLink</b>
          </p>
          <p :class="$style.aboutBitelink">Tired of long, clunky URLs? BiteLink is here to help! 🚀</p>
                <p :class="$style.aboutBitelink">With our fast and reliable URL shortener, you can turn any long link into a sleek, shareable version in seconds. Whether you're posting on social media, sending an email, or sharing with friends, BiteLink makes it quick, easy, and hassle-free.</p>
                      <p :class="$style.aboutBitelink">🔹 Fast & Simple – Shorten URLs instantly.🔹 Easy to Share – Works on any platform.🔹 Smart & Secure – Track and manage your links effortlessly.</p>
                      <p :class="$style.aboutBitelink">Bite the length, keep the power! Try BiteLink today! 🚀</p>
                      <p :class="$style.aboutBitelink">4o</p>
                      </div> -->
    <div :class="$style.defaultfootermenu">
      <div :class="$style.footer">
        <div :class="$style.logolandsacpe" />
        <div :class="$style.sitemapCopy">
          <div :class="$style.donecDignissimCuraContainer">
            <p :class="$style.suspendissePorttitor">Suspendisse porttitor</p>
            <p :class="$style.suspendissePorttitor">&nbsp;</p>
            <p :class="$style.suspendissePorttitor">Nam posuere</p>
            <p :class="$style.suspendissePorttitor">&nbsp;</p>
            <p :class="$style.suspendissePorttitor">Curabitur egestas </p>
          </div>
        </div>
        <div :class="$style.socmed">
          <!-- GitHub Icon -->
          <a :href="'https://github.com/your-username'" target="_blank">
            <i :class="'mdi mdi-github ' + $style.socmedIcon"></i>
          </a>
  
          <!-- LinkedIn Icon -->
          <a :href="'https://www.linkedin.com/in/your-profile'" target="_blank">
            <i :class="'mdi mdi-linkedin ' + $style.socmedIcon"></i>
          </a>
  
          <!-- Twitter Icon -->
          <a :href="'https://twitter.com/your-profile'" target="_blank">
            <i :class="'mdi mdi-twitter ' + $style.socmedIcon"></i>
          </a>
  
          <!-- Instagram Icon -->
          <a :href="'https://www.instagram.com/your-profile'" target="_blank">
            <i :class="'mdi mdi-instagram ' + $style.socmedIcon"></i>
          </a>
        </div>
      </div>
  
      <div :class="$style.langSelect">
        
        
        <!-- Language Selector with Material Icons for Dropdown and Globe -->
        <div :class="$style.languageSelector">
          <!-- Dropdown Icon -->
          <i :class="'mdi mdi-menu-down ' + $style.chevronDownIcon"></i>
  
          <!-- Globe Icon -->
          <i :class="'mdi mdi-earth ' + $style.androidGlobeIcon"></i>
          
          <!-- Language Text Toggle -->
          <div :class="$style.group">
            <div :class="$style.languageText" @click="toggleLanguage">
              {{ currentLanguage === 'en' ? 'English - En' : 'Tiếng Việt - Vn' }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FooterMenuDark",
    data() {
      return {
        currentLanguage: 'en', // Default language is English
      };
    },
    methods: {
      toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'en' ? 'vi' : 'en';
      }
    }
  };
  </script>
  
  

  
  <style module>

.namPosuereAccumsanContainer {
                                        width: 696px;
                                        position: relative;
                                        font-size: 16px;
                                        line-height: 24px;
                                        color: #fff;
                                        text-align: left;
                                        display: inline-block;
                                        height: 239px;
                                        font-family: Montserrat;
                                  }
  /* Example styles for the new icons */
.chevronDownIcon {
  font-size: 24px;  /* Adjust size of the dropdown icon */
  margin-right: 10px;  /* Adjust space between icons */
}

.androidGlobeIcon {
  font-size: 24px;  /* Adjust size of the globe icon */
  margin-left: 10px;  /* Adjust space between icons */
}

.languageText {
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  color: #fff;
}

.languageText:hover {
  color: #9c27b0;
}

.socmedIcon {
  font-size: 24px;  /* Adjust icon size */
  margin: 0 10px;  /* Space between icons */
  color: #fff;     /* Set icon color */
  transition: color 0.3s;
}

.socmedIcon:hover {
  color: #9c27b0; /* Change color on hover */
}
  .logolandsacpe {
    position: absolute;
    height: 25.84%;
    width: 16.07%;
    top: 0%;
    right: 83.93%;
    bottom: 74.16%;
    left: 0%;
  }
  
  .suspendissePorttitor {
    margin: 0;
  }
  
  .donecDignissimCuraContainer {
    position: absolute;
    top: calc(50% - 64.5px);
    left: 0%;
    line-height: 24px;
  }
  
  .sitemapCopy {
    position: absolute;
    height: 100%;
    width: 13.85%;
    top: 0%;
    right: 24.36%;
    bottom: 0%;
    left: 61.79%;
  }
  
  .socmedChild {
    position: absolute;
    height: 100%;
    width: 18.38%;
    top: 0%;
    right: 81.62%;
    bottom: 0%;
    left: 0%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  
  .socmed {
    position: absolute;
    height: 17.94%;
    width: 17.44%;
    top: 14.35%;
    right: 0%;
    bottom: 67.7%;
    left: 82.56%;
  }
  
  .footer {
    position: absolute;
    height: 99.05%;
    width: 91.41%;
    top: 0%;
    right: 6.09%;
    bottom: 0.95%;
    left: 2.5%;
  }
  
  .rectangle {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    border-radius: 5px;
    border: 1px solid #9c27b0;
    box-sizing: border-box;
  }
  
  .chevronDownIcon {
    position: absolute;
    height: 22.08%;
    width: 7.11%;
    top: 38.96%;
    right: 7.11%;
    bottom: 38.96%;
    left: 85.78%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  
  .androidGlobeIcon {
    position: absolute;
    height: 50.65%;
    width: 9.24%;
    top: 24.68%;
    right: 83.65%;
    bottom: 24.68%;
    left: 7.11%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  
  .languageText {
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    color: #fff;
  }
  
  .languageText:hover {
    color: #9c27b0;
  }
  
  .socmedIcon {
    font-size: 24px;  /* Adjust icon size */
    margin: 0 10px;  /* Space between icons */
    color: #fff;     /* Set icon color */
    transition: color 0.3s;
  }
  
  .socmedIcon:hover {
    color: #9c27b0; /* Change color on hover */
  }
  
  .group {
    position: absolute;
    height: 57.14%;
    width: 64.45%;
    top: 23.38%;
    right: 14.22%;
    bottom: 19.48%;
    left: 21.33%;
    overflow: hidden;
  }
  
  .langSelect {
    position: absolute;
    height: 18.25%;
    width: 16.48%;
    top: 50.24%;
    right: 5.86%;
    bottom: 31.52%;
    left: 77.66%;
    font-size: 18px;
  }
  
  .defaultfootermenu {
    width: 100%;
    position: relative;
    height: 211px;
    text-align: left;
    font-size: 16px;
    color: #fff;
    font-family: Montserrat;
  }
  </style>
  

