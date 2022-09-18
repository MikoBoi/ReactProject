import React from "react"
import * as footerStyles from "./footer.module.css"
export default function Footer({ children }) {
  return (
    <div className={footerStyles.footer}>
            <div className={footerStyles.footer1}>
                <div className={footerStyles.footer2}>
                    <div className={footerStyles.footer3}>
                        <div className={footerStyles.footer4}>
                            <svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path></svg>
                            <h1 className={footerStyles.footer5}>ReactProject</h1>
                        </div>
                        <div className={footerStyles.footer6}>
                            <h1 className={footerStyles.footer7}>+7 (707) 777-77-77</h1>
                            <h1 className={footerStyles.footer8}>Прием заказов по телефону</h1>
                        </div>
                        <div className={footerStyles.footer6}>
                            <h1 className={footerStyles.footer7}>+7 (707) 777-77-77</h1>
                            <h1 className={footerStyles.footer8}>Для корпоративных клиентов</h1>
                        </div>
                        <div className={footerStyles.footer9}>
                            <svg class="w-9 h-9 mr-3 rounded-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                            <svg class="w-9 h-9 mr-3 rounded-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.25 16.996h-2.134c-1.205 0-1.409-.687-2.401-1.679-.897-.897-1.395-.209-1.374 1.068.006.339-.161.611-.566.611-1.264 0-3.08.178-4.918-1.806-1.883-2.033-3.857-6.111-3.857-6.513 0-.237.196-.344.524-.344h2.17c.574 0 .623.284.783.649.667 1.521 2.265 4.574 2.69 2.87.244-.978.344-3.245-.703-3.44-.594-.11.452-.746 1.968-.746.377 0 .786.041 1.205.137.769.179.771.523.761 1.026-.039 1.903-.269 3.184.233 3.507.479.31 1.739-1.717 2.403-3.281.183-.433.219-.722.734-.722h2.654c1.39 0-.182 1.997-1.383 3.557-.968 1.255-.916 1.28.209 2.324.803.744 1.75 1.76 1.75 2.336.002.272-.21.446-.748.446z"/></svg>
                            <svg class="w-9 h-9 mr-3 rounded-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"/></svg>
                            <svg class="w-9 h-9 mr-3 rounded-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"/></svg>
                        </div>
                    </div>
                    <div className={footerStyles.footer10}>
                        <div className={footerStyles.footer11}>
                            <div className={footerStyles.footer3}>
                                <h1 className={footerStyles.footer12}>Доставка</h1>
                                <h1 className={footerStyles.footer13}>Условия доставки</h1>
                                <h1 className={footerStyles.footer13}>Промокоды</h1>
                            </div>
                            <div className={footerStyles.footer14}>
                                <h1 className={footerStyles.footer12}>Оплата</h1>
                                <h1 className={footerStyles.footer13}>Условия оплаты</h1>
                                <h1 className={footerStyles.footer13}>Бонусная программа</h1>
                                <h1 className={footerStyles.footer13}>Электронные чеки</h1>
                            </div>
                        </div>
                        <div className={footerStyles.footer11}>
                                <h1 className={footerStyles.footer12}>Компания</h1>
                                <h1 className={footerStyles.footer13}>О нас</h1>
                                <h1 className={footerStyles.footer13}>Реквизиты</h1>
                                <h1 className={footerStyles.footer13}>Контакты</h1>
                                <h1 className={footerStyles.footer13}>Программа лояльности</h1>
                                <h1 className={footerStyles.footer13}>Публичная оферта</h1>
                        </div>
                        <div className={footerStyles.footer3}>
                            <div className={footerStyles.footer3}>
                                <h1 className={footerStyles.footer12}>Бизнесу</h1>
                                <h1 className={footerStyles.footer13}>Контакты</h1>
                                <h1 className={footerStyles.footer13}>Корпоративным клиентам</h1>
                            </div>
                            <div className={footerStyles.footer15}>
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <h1 className={footerStyles.footer16}>Магазины</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={footerStyles.footer17}>
                    <div className={footerStyles.footer18}>
                            <h1 className={footerStyles.footer19}>2021 © "ReactProject"</h1>
                            <div className={footerStyles.footer20}>
                                <h1 className={footerStyles.footer21}>Условия соглашения для физ. лиц</h1>
                                <h1 className={footerStyles.footer21}>Политика защиты и обработки персональных данных</h1>
                            </div>
                    </div>
                </div>
            </div>
        </div>
  )
}