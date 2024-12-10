<template>
  <main class="about-us">
    <div class="about-us__wrapper">
      <BannerItem :img="aboutUsImg" :imgX2="aboutUsImgX2" :bannerImage="aboutUsBanner" />

      <div class="banner-description">
        <div class="container">
          <div class="banner-description__wrapper">
            <TitleMulticolor title="About Us" :mainColor="'yellow'" :titleColor="'blue'" />

            <p class="banner-description__text">
              Titan Airservice AS" company, established in 2006, is a team of professionals
              providing airservices in the field of sea-crews transportation on scheduled and
              charter flights, as well as arrangement of ground support for aircraft operating VIP
              flights, tourism travelling programs, transportation of sports teams , official
              delegations and other airtransportation activity worldwide. Due to our customers needs
              and expectation, our main priority is to deliver our clients the best operational and
              financial results, while ensuring the highest level of quality and individual approach
              without any exceptions.
            </p>

            <div class="banner-description__bottom">
              <ButtonItem variant="fill-contrast"> Contact Us </ButtonItem>

              <div class="banner-description__socials">
                <p class="banner-description__socials-header">Social Networks:</p>

                <div class="banner-description__socials-wrapper">
                  <SocialIcon href="/" variant="blue">
                    <svg
                      width="10"
                      height="17"
                      viewBox="0 0 10 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.47695 0.167479L7.34794 0.164062C4.95607 0.164062 3.41033 1.74995 3.41033 4.20453V6.06746H1.2697C1.08473 6.06746 0.934937 6.21742 0.934937 6.4024V9.10157C0.934937 9.28655 1.0849 9.43634 1.2697 9.43634H3.41033V16.2472C3.41033 16.4322 3.56012 16.582 3.7451 16.582H6.53801C6.72298 16.582 6.87278 16.432 6.87278 16.2472V9.43634H9.37567C9.56065 9.43634 9.71044 9.28655 9.71044 9.10157L9.71146 6.4024C9.71146 6.31358 9.6761 6.22853 9.61342 6.16567C9.55074 6.10282 9.46534 6.06746 9.37652 6.06746H6.87278V4.48823C6.87278 3.72919 7.05365 3.34387 8.04241 3.34387L9.47661 3.34335C9.66142 3.34335 9.81121 3.19339 9.81121 3.00858V0.502249C9.81121 0.317613 9.66159 0.16782 9.47695 0.167479Z"
                        fill="#1D2D42"
                      />
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="/" variant="blue">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0512 0.164062H4.69481C2.19662 0.164062 0.164185 2.1966 0.164185 4.69479V12.0512C0.164185 14.5494 2.19662 16.5819 4.69481 16.5819H12.0512C14.5496 16.5819 16.582 14.5493 16.582 12.0512V4.69479C16.5821 2.1966 14.5496 0.164062 12.0512 0.164062ZM15.1254 12.0512C15.1254 13.7462 13.7464 15.1252 12.0513 15.1252H4.69481C2.99983 15.1253 1.62085 13.7462 1.62085 12.0512V4.69479C1.62085 2.99981 2.99983 1.62073 4.69481 1.62073H12.0512C13.7463 1.62073 15.1253 2.99981 15.1253 4.69479V12.0512H15.1254Z"
                        fill="#1D2D42"
                      />
                      <path
                        d="M8.37303 4.1427C6.04033 4.1427 4.14258 6.04045 4.14258 8.37315C4.14258 10.7058 6.04033 12.6034 8.37303 12.6034C10.7057 12.6034 12.6035 10.7058 12.6035 8.37315C12.6035 6.04045 10.7057 4.1427 8.37303 4.1427ZM8.37303 11.1467C6.84363 11.1467 5.59925 9.90246 5.59925 8.37306C5.59925 6.84356 6.84353 5.59927 8.37303 5.59927C9.90253 5.59927 11.1468 6.84356 11.1468 8.37306C11.1468 9.90246 9.90244 11.1467 8.37303 11.1467Z"
                        fill="#1D2D42"
                      />
                      <path
                        d="M12.781 2.90759C12.5003 2.90759 12.2246 3.02121 12.0264 3.22029C11.8273 3.4184 11.7128 3.69419 11.7128 3.97582C11.7128 4.25656 11.8274 4.53226 12.0264 4.73134C12.2245 4.92945 12.5003 5.04404 12.781 5.04404C13.0626 5.04404 13.3374 4.92945 13.5365 4.73134C13.7356 4.53226 13.8492 4.25647 13.8492 3.97582C13.8492 3.69419 13.7356 3.4184 13.5365 3.22029C13.3384 3.02121 13.0626 2.90759 12.781 2.90759Z"
                        fill="#1D2D42"
                      />
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="/" variant="blue">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_182_389)">
                        <path
                          d="M15.9422 3.5878C15.3495 2.88331 14.2554 2.59595 12.1657 2.59595H4.58039C2.44294 2.59595 1.33023 2.90185 0.739818 3.65188C0.164185 4.38317 0.164185 5.46066 0.164185 6.95194V9.7943C0.164185 12.6834 0.84717 14.1502 4.58039 14.1502H12.1658C13.9779 14.1502 14.982 13.8967 15.6317 13.275C16.2979 12.6374 16.5821 11.5965 16.5821 9.7943V6.95194C16.5821 5.37926 16.5376 4.29541 15.9422 3.5878ZM10.7045 8.76553L7.26006 10.5657C7.18305 10.606 7.09884 10.6259 7.01474 10.6259C6.91952 10.6259 6.82451 10.6003 6.74035 10.5494C6.58189 10.4533 6.48513 10.2816 6.48513 10.0963V6.50749C6.48513 6.32255 6.58163 6.15095 6.73977 6.05488C6.89796 5.95881 7.09471 5.95224 7.25884 6.03751L10.7033 7.82611C10.8786 7.9171 10.9886 8.09801 10.9889 8.2954C10.9891 8.49294 10.8795 8.67412 10.7045 8.76553Z"
                          fill="#1D2D42"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_182_389">
                          <rect
                            width="16.4179"
                            height="16.4179"
                            fill="white"
                            transform="translate(0.164185 0.164062)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="/" variant="blue">
                    <svg
                      width="17"
                      height="15"
                      viewBox="0 0 17 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.582 2.28294C15.9777 2.55069 15.3293 2.73228 14.6481 2.81335C15.3437 2.39682 15.8761 1.73613 16.1285 0.951293C15.476 1.33703 14.7558 1.61713 13.9884 1.76897C13.3739 1.11341 12.4998 0.705078 11.5303 0.705078C9.67026 0.705078 8.16214 2.21319 8.16214 4.07217C8.16214 4.33582 8.19189 4.59333 8.24935 4.83957C5.45063 4.699 2.96893 3.35812 1.30795 1.32061C1.01761 1.81717 0.852435 2.39577 0.852435 3.0134C0.852435 4.18194 1.44748 5.21299 2.3503 5.81622C1.79834 5.79776 1.27922 5.64592 0.82475 5.39354V5.4356C0.82475 7.06682 1.9861 8.42821 3.52601 8.73806C3.24387 8.81398 2.94636 8.85605 2.63858 8.85605C2.4211 8.85605 2.21078 8.8345 2.00456 8.79346C2.43338 10.1323 3.67683 11.1059 5.15007 11.1326C3.99794 12.0354 2.54523 12.572 0.967361 12.572C0.695499 12.572 0.427715 12.5555 0.164062 12.5258C1.65474 13.483 3.42447 14.0411 5.32653 14.0411C11.5221 14.0411 14.9087 8.9094 14.9087 4.45895L14.8974 4.02294C15.5591 3.55098 16.1316 2.958 16.582 2.28294Z"
                        fill="#1D2D42"
                      />
                    </svg>
                  </SocialIcon>
                </div>
              </div>
            </div>

            <div class="underline"></div>
          </div>
        </div>
      </div>

      <div class="about-us__sliders">
        <MainSlider sliderTitle="Our photos" />
        <BottomSlider sliderTitle="last news" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import BannerItem from '@/components/BannerItem.vue'

import aboutUsImg from '@/assets/img/about-us/about-logo.png'
import aboutUsImgX2 from '@/assets/img/about-us/about-logo@2x.png'
import aboutUsBanner from '@/assets/img/about-us/bg-top.jpg'

import TitleMulticolor from '@/components/TitleMulticolor.vue'
import ButtonItem from '@/components/ButtonItem.vue'
import SocialIcon from '@/components/SocialIcon.vue'
import MainSlider from '@/components/MainSlider.vue'
import BottomSlider from '@/components/BottomSlider.vue'
</script>

<style scoped lang="scss">
@use '@/assets/scss/vars';

.about-us {
  width: 100%;

  &__sliders {
    ::v-deep(.slider-title) {
      padding-top: 40px;
    }
  }
}

.banner-description {
  &__wrapper {
    display: flex;
    flex-direction: column;
    padding: 40px 0 37px;

    @media (max-width: 478px) {
      padding: 25px 0 22px;
    }
  }

  &__text {
    font-weight: 400;
    line-height: 156%;
    color: vars.$blue;
    padding: 26px 0 42px;

    @media (max-width: 748px) {
      padding: 25px 0 32px;
    }

    @media (max-width: 478px) {
      padding: 15px 0 18px;
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 748px) {
      flex-direction: column;
      align-items: start;
      gap: 25px;
    }
  }

  &__socials {
    display: flex;
    align-items: center;
    gap: 46px;

    @media (max-width: 898px) {
      gap: 25px;
    }

    @media (max-width: 478px) {
      flex-direction: column;
      align-items: start;
      gap: 18px;
    }
  }

  &__socials-header {
    font-weight: 700;
    line-height: 0%;
    color: vars.$blue;
    text-transform: uppercase;
  }

  &__socials-wrapper {
    display: flex;
    gap: 48px;

    @media (max-width: 898px) {
      gap: 20px;
    }
  }
}

.underline {
  margin-top: 42px;

  @media (max-width: 748px) {
    margin-top: 24px;
  }
}
</style>
