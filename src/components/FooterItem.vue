<script setup lang="ts">
import LogoItem from './LogoItem.vue'
import SearchFormItem from './SearchFormItem.vue'
import LangSwitcherItem from './LangSwitcherItem.vue'
</script>

<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-top__wrapper">
        <LogoItem />

        <div class="footer-top__right-side">
          <SearchFormItem :transparent="true" />

          <a href="#" class="icon icon--transparent contacts-link">
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.53568 4.58934C1.73808 4.73216 2.34818 5.15635 3.36602 5.86168C4.38389 6.567 5.16365 7.11009 5.70532 7.49096C5.76484 7.53271 5.89127 7.62346 6.08469 7.76335C6.27815 7.90332 6.43889 8.01644 6.5668 8.10272C6.6948 8.18897 6.84953 8.28573 7.03117 8.39284C7.21274 8.49985 7.38389 8.58035 7.5446 8.63364C7.70535 8.68737 7.85414 8.71398 7.99102 8.71398H8H8.00901C8.14589 8.71398 8.29475 8.68733 8.45549 8.63364C8.61614 8.58035 8.78745 8.49976 8.96886 8.39284C9.15037 8.2856 9.30511 8.18894 9.43311 8.10272C9.56111 8.01644 9.72173 7.90332 9.91524 7.76335C10.1086 7.62334 10.2352 7.53271 10.2947 7.49096C10.8423 7.11009 12.2352 6.14279 14.4733 4.58915C14.9078 4.28571 15.2708 3.91957 15.5624 3.49098C15.8542 3.06257 16 2.61315 16 2.14296C16 1.75005 15.8586 1.41371 15.5758 1.13397C15.293 0.854176 14.9582 0.714355 14.5714 0.714355H1.42851C0.970209 0.714355 0.617514 0.869094 0.370489 1.17857C0.123496 1.48811 0 1.87502 0 2.33926C0 2.71425 0.163745 3.12061 0.491077 3.55809C0.818379 3.9956 1.1667 4.33938 1.53568 4.58934Z"
                fill="white"
              />
              <path
                d="M15.107 5.54458C13.1549 6.86589 11.6725 7.89276 10.6608 8.62498C10.3215 8.87489 10.0462 9.06997 9.83487 9.20976C9.6235 9.34964 9.34239 9.49249 8.99113 9.63826C8.64 9.78424 8.31276 9.85701 8.00913 9.85701H8.00003H7.99105C7.68749 9.85701 7.36006 9.78424 7.00893 9.63826C6.6578 9.49249 6.3765 9.34964 6.16519 9.20976C5.95394 9.06997 5.67862 8.87489 5.33937 8.62498C4.53575 8.03574 3.05661 7.0088 0.901877 5.54458C0.562505 5.31854 0.26191 5.05944 0 4.76782V11.8569C0 12.25 0.139821 12.5862 0.419619 12.8659C0.699355 13.1458 1.03573 13.2857 1.42861 13.2857H14.5715C14.9643 13.2857 15.3006 13.1458 15.5804 12.8659C15.8603 12.5861 16 12.25 16 11.8569V4.76782C15.744 5.05341 15.4465 5.3125 15.107 5.54458Z"
                fill="white"
              />
            </svg>
          </a>

          <LangSwitcherItem :transparent="true" />
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom__wrapper">
          <div class="footer-info">
            <span class="contrast-header footer-bottom__contrast-header">Address:</span>

            <ul class="footer-info__list">
              <li class="footer-info__list-item">
                Nedre Slottsgate 4, 0157 Oslo, Norway SITA: OSLTSXH
              </li>
            </ul>
          </div>

          <div class="footer-info">
            <span class="contrast-header footer-bottom__contrast-header">Telephone:</span>

            <ul class="footer-info__list">
              <li class="footer-info__list-item">
                <a href="tel:+4721661772" class="footer-info__list-link">+47 21 66 17 72; </a>
              </li>
            </ul>
          </div>

          <div class="footer-info">
            <span class="contrast-header footer-bottom__contrast-header">Mobile:</span>

            <ul class="footer-info__list">
              <li class="footer-info__list-item">
                <a href="tel:+4799873069" class="footer-info__list-link">+47 998 73 069;</a>
              </li>
              <li class="footer-info__list-item">
                <a href="tel:+4791763612" class="footer-info__list-link">+ 47 917 63 612</a>
              </li>
            </ul>
          </div>

          <div class="footer-info">
            <span class="contrast-header footer-bottom__contrast-header">E-mail:</span>

            <ul class="footer-info__list">
              <li class="footer-info__list-item">
                <a
                  href="mail:info@titanair.no"
                  class="footer-info__list-link footer-info__list-link--underline"
                  >info@titanair.no</a
                >
              </li>
              <li class="footer-info__list-item">
                <a
                  href="mail:ops@titanair.no"
                  class="footer-info__list-link footer-info__list-link--underline"
                  >ops@titanair.no</a
                >
              </li>
            </ul>
          </div>

          <div class="footer-socials">
            <div class="footer-socials__wrapper">
              <span class="contrast-header footer-bottom__contrast-header">SOCIAL NETWORKS:</span>

              <div class="footer-socials__icons">
                <a href="#" class="social-icon social-icon--yellow">
                  <svg
                    width="10"
                    height="17"
                    viewBox="0 0 10 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.47695 0.167479L7.34794 0.164062C4.95607 0.164062 3.41033 1.74995 3.41033 4.20453V6.06746H1.2697C1.08473 6.06746 0.934937 6.21742 0.934937 6.4024V9.10157C0.934937 9.28655 1.0849 9.43634 1.2697 9.43634H3.41033V16.2472C3.41033 16.4322 3.56012 16.582 3.7451 16.582H6.53801C6.72298 16.582 6.87278 16.432 6.87278 16.2472V9.43634H9.37567C9.56065 9.43634 9.71044 9.28655 9.71044 9.10157L9.71146 6.4024C9.71146 6.31358 9.6761 6.22853 9.61342 6.16567C9.55074 6.10282 9.46534 6.06746 9.37652 6.06746H6.87278V4.48823C6.87278 3.72919 7.05365 3.34387 8.04241 3.34387L9.47661 3.34335C9.66142 3.34335 9.81121 3.19339 9.81121 3.00858V0.502249C9.81121 0.317613 9.66159 0.16782 9.47695 0.167479Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a href="#" class="social-icon social-icon--yellow">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0512 0.164062H4.69481C2.19662 0.164062 0.164185 2.1966 0.164185 4.69479V12.0512C0.164185 14.5494 2.19662 16.5819 4.69481 16.5819H12.0512C14.5496 16.5819 16.582 14.5493 16.582 12.0512V4.69479C16.5821 2.1966 14.5496 0.164062 12.0512 0.164062ZM15.1254 12.0512C15.1254 13.7462 13.7464 15.1252 12.0513 15.1252H4.69481C2.99983 15.1253 1.62085 13.7462 1.62085 12.0512V4.69479C1.62085 2.99981 2.99983 1.62073 4.69481 1.62073H12.0512C13.7463 1.62073 15.1253 2.99981 15.1253 4.69479V12.0512H15.1254Z"
                      fill="white"
                    />
                    <path
                      d="M8.37303 4.14282C6.04033 4.14282 4.14258 6.04057 4.14258 8.37328C4.14258 10.7059 6.04033 12.6035 8.37303 12.6035C10.7057 12.6035 12.6035 10.7059 12.6035 8.37328C12.6035 6.04057 10.7057 4.14282 8.37303 4.14282ZM8.37303 11.1468C6.84363 11.1468 5.59925 9.90258 5.59925 8.37318C5.59925 6.84368 6.84353 5.59939 8.37303 5.59939C9.90253 5.59939 11.1468 6.84368 11.1468 8.37318C11.1468 9.90258 9.90244 11.1468 8.37303 11.1468Z"
                      fill="white"
                    />
                    <path
                      d="M12.781 2.90747C12.5003 2.90747 12.2246 3.02109 12.0264 3.22017C11.8273 3.41828 11.7128 3.69407 11.7128 3.97569C11.7128 4.25644 11.8274 4.53214 12.0264 4.73122C12.2245 4.92933 12.5003 5.04392 12.781 5.04392C13.0626 5.04392 13.3374 4.92933 13.5365 4.73122C13.7356 4.53214 13.8492 4.25635 13.8492 3.97569C13.8492 3.69407 13.7356 3.41828 13.5365 3.22017C13.3384 3.02109 13.0626 2.90747 12.781 2.90747Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a href="#" class="social-icon social-icon--yellow">
                  <svg
                    width="17"
                    height="13"
                    viewBox="0 0 17 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9422 1.5878C15.3495 0.883314 14.2554 0.595947 12.1657 0.595947H4.58039C2.44294 0.595947 1.33023 0.90185 0.739818 1.65188C0.164185 2.38317 0.164185 3.46066 0.164185 4.95194V7.7943C0.164185 10.6834 0.84717 12.1502 4.58039 12.1502H12.1658C13.9779 12.1502 14.982 11.8967 15.6317 11.275C16.2979 10.6374 16.5821 9.59646 16.5821 7.7943V4.95194C16.5821 3.37926 16.5376 2.29541 15.9422 1.5878ZM10.7045 6.76553L7.26006 8.56573C7.18305 8.60598 7.09884 8.62595 7.01474 8.62595C6.91952 8.62595 6.82451 8.60031 6.74035 8.54937C6.58189 8.45335 6.48513 8.2816 6.48513 8.09634V4.50749C6.48513 4.32255 6.58163 4.15095 6.73977 4.05488C6.89796 3.95881 7.09471 3.95224 7.25884 4.03751L10.7033 5.82611C10.8786 5.9171 10.9886 6.09801 10.9889 6.2954C10.9891 6.49294 10.8795 6.67412 10.7045 6.76553Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a href="#" class="social-icon social-icon--yellow">
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.582 2.28294C15.9777 2.55069 15.3293 2.73228 14.6481 2.81335C15.3437 2.39682 15.8761 1.73613 16.1285 0.951293C15.476 1.33703 14.7558 1.61713 13.9884 1.76897C13.3739 1.11341 12.4998 0.705078 11.5303 0.705078C9.67026 0.705078 8.16214 2.21319 8.16214 4.07217C8.16214 4.33582 8.19189 4.59333 8.24935 4.83957C5.45063 4.699 2.96893 3.35812 1.30795 1.32061C1.01761 1.81717 0.852435 2.39577 0.852435 3.0134C0.852435 4.18194 1.44748 5.21299 2.3503 5.81622C1.79834 5.79776 1.27922 5.64592 0.82475 5.39354V5.4356C0.82475 7.06682 1.9861 8.42821 3.52601 8.73806C3.24387 8.81398 2.94636 8.85605 2.63858 8.85605C2.4211 8.85605 2.21078 8.8345 2.00456 8.79346C2.43338 10.1323 3.67683 11.1059 5.15007 11.1326C3.99794 12.0354 2.54523 12.572 0.967361 12.572C0.695499 12.572 0.427715 12.5555 0.164062 12.5258C1.65474 13.483 3.42447 14.0411 5.32653 14.0411C11.5221 14.0411 14.9087 8.9094 14.9087 4.45895L14.8974 4.02294C15.5591 3.55098 16.1316 2.958 16.582 2.28294Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="copyright">
        <p class="copyright__text">Copyright © 2020 Titan AirService</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/assets/scss/vars';

.footer {
  background-image: url('../assets/img/footer-bg.jpg');
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  width: 100%;
}

.footer-top {
  border-bottom: 1px solid #455c7d;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 35px 15px;

    @media (max-width: 640px) {
      flex-direction: column;
      gap: 15px;
    }
  }

  &__right-side {
    display: flex;
    align-items: center;
    gap: 60px;
  }
}

.footer-bottom {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 30px;
    padding: 35px 0 33px;

    @media (max-width: 920px) {
      column-gap: 15px;
    }

    @media (max-width: 868px) {
      column-gap: 30px;
      row-gap: 30px;
    }

    @media (max-width: 520px) {
      column-gap: 0;
    }
  }

  &__contrast-header {
    font-size: 18px;
    line-height: 139%;
  }
}

.footer-info {
  grid-column: 2 span;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 868px) {
    grid-row: 2;
    grid-column: 4 span;
    align-items: center;
    gap: 25px;
  }

  @media (max-width: 520px) {
    grid-column: 12 span;
    grid-row: auto;
    align-items: start;
  }

  &:first-child {
    grid-column: 3 span;

    @media (max-width: 868px) {
      grid-column: 6 span;
      grid-row: 1;
      align-items: start;
    }

    @media (max-width: 520px) {
      grid-column: 12 span;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__list-item {
    color: vars.$light;
    font-size: 14px;
  }

  &__list-link {
    color: vars.$light;
    font-weight: 400;
  }

  &__list-link--underline {
    text-decoration: underline;
  }
}

.footer-socials {
  grid-column: 3 span;

  @media (max-width: 868px) {
    grid-column: 6 span;
  }

  @media (max-width: 520px) {
    grid-column: 12 span;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 21px;

    @media (max-width: 868px) {
      align-items: end;
    }

    @media (max-width: 520px) {
      align-items: start;
    }
  }

  &__icons {
    display: flex;
    align-items: center;
    gap: 21px;
  }
}

.social-icon {
  @media (max-width: 1140px) {
    height: 40px;
    width: 40px;
  }

  @media (max-width: 998px) {
    height: 35px;
    width: 35px;
  }

  @media (max-width: 868px) {
    width: 50px;
    height: 50px;
  }
}

.copyright {
  background-color: rgba(69, 92, 125, 0.13);
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;

  &__text {
    font-weight: 700;
    font-size: 13px;
    text-align: center;
    color: rgba(255, 255, 255, 0.3);
  }
}
</style>
