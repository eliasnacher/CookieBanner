/**
 * @preserve CookieBanner
 * 
 * @version v1.0.0
 * @link https://github.com/eliasnacher/CookieBanner
 * @author Elías Nácher (https://github.com/eliasnacher)
 * @mail eliasnacher@gmail.com
 * @license MIT
 * 
 * @dependencies
 * - CookieBanner.js
 * - CookieBanner.css
 * - Javascript
 * 
 * @description A simple and lightweight cookie banner for your website.
 * 
 * @created 2022-05-16
 */

if (document.cookie.indexOf("cookie_banner_accept=true") == -1)
    document.addEventListener("DOMContentLoaded", () => {
        var cookieBannerDiv = document.createElement('div')
        var cookieBannerText = document.createElement('p')
        var cookieBannerLink = document.createElement('a')
        var cookieBannerButton = document.createElement('button')

        cookieBannerDiv.classList.add('cookie-banner')
        cookieBannerText.classList.add('cookie-banner-text')
        cookieBannerLink.classList.add('cookie-banner-link')
        cookieBannerButton.classList.add('cookie-banner-button')

        cookieBannerText.innerText = 'This website uses cookies to ensure you get the best experience on our website.'
        cookieBannerLink.innerText = 'Learn more'
        cookieBannerLink.href = 'https://www.google.com/policies/technologies/cookies/'
        cookieBannerLink.target = 'blank'
        cookieBannerButton.innerText = 'Got it!'
        cookieBannerButton.addEventListener('click', acceptCookies)

        cookieBannerText.appendChild(cookieBannerLink)
        cookieBannerDiv.appendChild(cookieBannerText)
        cookieBannerDiv.appendChild(cookieBannerButton)

        document.body.appendChild(cookieBannerDiv)
    });

acceptCookies = () => {
    const expirationDays = 365
    var cookieAcceptExpirationDate = new Date()
    cookieAcceptExpirationDate.setTime(cookieAcceptExpirationDate.getTime() + (expirationDays * 24 * 60 * 60 * 1000)) // Days*Hours*Minutes*Seconds*Milliseconds
    const cookieAcceptExpirationDateStringFormat = cookieAcceptExpirationDate.toUTCString()
    document.cookie = `cookie_banner_accept=true; expires=${cookieAcceptExpirationDateStringFormat}; path=/`
    document.querySelectorAll(".cookie-banner").forEach(element => element.remove())
}