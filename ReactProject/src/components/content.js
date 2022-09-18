import React from "react"
import * as contentStyles from "./content.module.css"

import Image1 from '../images/pills1.jpg'
import Image2 from '../images/pills2.jpg'
import Image3 from '../images/pills3.jpg'

export default function Content({ children }) {
  return (
    <div className={contentStyles.content}>
            <div className={contentStyles.content1}>
                <div className={contentStyles.content2}>
                    <button className={contentStyles.content3}>
                        <img src={Image1} alt='pills' class='h-16'/>
                    </button>
                    <button className={contentStyles.content3}>
                        <img src={Image2} alt='pills' class='h-16'/>
                    </button>
                    <button className={contentStyles.content3}>
                        <img src={Image3} alt='pills' class='h-16'/>
                    </button>
                </div>
                <div className={contentStyles.content4}>
                    <img src={Image1} alt='selected' class='object-cover w-96 h-96'/>
                </div>
                <div className={contentStyles.content5}>
                    <h1 className={contentStyles.content6}>Кальций-Д3 Никомед</h1>
                    <h1 className={contentStyles.content7}>Мята 60 таблеток</h1>
                    <div className={contentStyles.content8}>
                        <h1 className={contentStyles.content9}>Артикул:</h1>
                        <h1 className={contentStyles.content10}>1472583</h1>
                            <div className={contentStyles.content11}>
                                <svg class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                <svg class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                <svg class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                <svg class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                <svg class="mx-1 w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                <h1 className={contentStyles.content12}>4.2 (542 отзывов)</h1>
                            </div>
                    </div>
                    <div className={contentStyles.content13}>
                        <div className={contentStyles.content14}>
                            <h1 className={contentStyles.content15}>2 000</h1>
                            <h1 className={contentStyles.content16}>₸</h1>
                        </div>
                        <div className={contentStyles.content17}>
                            <h1 className={contentStyles.content18}>10 в наличии</h1>
                            <div>
                                <div className={contentStyles.content19}></div>
                                <div className={contentStyles.content20}></div>
                            </div>
                        </div>
                    </div>
                    <div className={contentStyles.content21}>
                        <h1 className={contentStyles.content22}>Вкус</h1>
                        <div className={contentStyles.content23}>
                            <button className={contentStyles.content24}>
                                Апельсиновые
                            </button>
                            <button className={contentStyles.content24}>
                                Мятные
                            </button>
                            <button className={contentStyles.content24}>
                                Лимонные
                            </button>
                        </div>
                    </div>
                    <div className={contentStyles.content21}>
                        <h1 className={contentStyles.content22}>Объем</h1>
                        <div className={contentStyles.content23}>
                            <button className={contentStyles.content25}>
                                60 таблеток
                            </button>
                            <button className={contentStyles.content25}>
                                120 таблеток
                            </button>
                        </div>
                    </div>
                    <div className={contentStyles.content26}>
                        <button className={contentStyles.content27}>
                            Добавить в корзину
                        </button>
                    </div>
                    <div className={contentStyles.content8}>
                        <div>
                            <h1 className={contentStyles.content28}>Форма выпуска</h1>
                            <h1 className={contentStyles.content29}>Таблетки</h1>
                        </div>
                        <div className={contentStyles.content30}>
                            <h1 className={contentStyles.content28}>Вещество</h1>
                            <h1 className={contentStyles.content29}>Кальций</h1>
                        </div>
                    </div>
                    <div className={contentStyles.content8}>
                        <div>
                            <h1 className={contentStyles.content28}>Дозировка</h1>
                            <h1 className={contentStyles.content29}>0,2 г.</h1>
                        </div>
                        <div className={contentStyles.content31}>
                            <h1 className={contentStyles.content28}>Производитель</h1>
                            <h1 className={contentStyles.content29}>Никомед</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className={contentStyles.content32}>
                <h1 className={contentStyles.content33}>О продукте</h1>
                <div className={contentStyles.content34}>
                    <p>Таким образом консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Таким образом консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.</p>
                    <div className={contentStyles.content35}>
                        <h1 className={contentStyles.content36}>Противопоказания</h1>
                        <div className={contentStyles.content34}>
                            <p>Таким образом консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.</p> 
                        </div>
                    </div>
                    <div className={contentStyles.content37}>
                        <h1 className={contentStyles.content36}>Способ применения</h1>
                        <div className={contentStyles.content34}>
                            <p>Значимость этих проблем настолько очевидна, что консультация с широким активом позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={contentStyles.content38}>
                <h1 className={contentStyles.content39}>Вопросы и ответы</h1>
                <div className={contentStyles.content40}>
                    <h1 className={contentStyles.content41}>Сортировать по:</h1>
                    <div className={contentStyles.content42}>
                        Дате
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>            
                    </div>
                    <div className={contentStyles.content42}>
                        Полезности
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>            
                    </div>
                </div>
                <div className={contentStyles.content43}>
                    <div className={contentStyles.content44}>
                        <svg class="w-9 h-9 bg-gray-300 rounded-full text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        <div className={contentStyles.content45}>
                            <h1 className={contentStyles.content46}>Вася Пупкин</h1>
                            <h1 className={contentStyles.content47}>29 мая 2021</h1>
                        </div>
                    </div>
                    <div className={contentStyles.content48}>
                        <h1>А таблетки можно глотать?</h1>
                        <div className={contentStyles.content49}>
                            <h1 className={contentStyles.content50}>Ответ:</h1>
                            <h1 className={contentStyles.content51}>Добрый день. Для решения этого вопроса пожалуйста проконсультируйтесь с врачом.</h1>
                        </div>
                        <div className={contentStyles.content52}>
                            <h1 className={contentStyles.content47}>Был ли ответ полезен?</h1>
                            <div className={contentStyles.content53}>
                                <svg class="w-5 h-5 mr-1 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
                                <h1 className={contentStyles.content46}>2</h1>
                            </div>
                            <div className={contentStyles.content53}>
                                <svg class="w-5 h-5 mr-1 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"></path></svg>
                                <h1 className={contentStyles.content46}>1</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={contentStyles.content21}>
                    <div className={contentStyles.content44}>
                        <svg class="w-9 h-9 bg-gray-300 rounded-full text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        <div className={contentStyles.content45}>
                            <h1 className={contentStyles.content46}>Вася Пупкин</h1>
                            <h1 className={contentStyles.content47}>29 мая 2021</h1>
                        </div>
                    </div>
                    <div className={contentStyles.content48}>
                        <h1>А таблетки можно глотать?</h1>
                        <div className={contentStyles.content49}>
                            <h1 className={contentStyles.content50}>Ответ:</h1>
                            <h1 className={contentStyles.content51}>Добрый день. Для решения этого вопроса пожалуйста проконсультируйтесь с врачом.</h1>
                        </div>
                        <div className={contentStyles.content52}>
                            <h1 className={contentStyles.content47}>Был ли ответ полезен?</h1>
                            <div className={contentStyles.content53}>
                                <svg class="w-5 h-5 mr-1 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
                                <h1 className={contentStyles.content46}>2</h1>
                            </div>
                            <div className={contentStyles.content53}>
                                <svg class="w-5 h-5 mr-1 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"></path></svg>
                                <h1 className={contentStyles.content46}>1</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={contentStyles.content54}>
                <h1 className={contentStyles.content39}>Отзывы</h1>
                <div className={contentStyles.content44}>
                    <div className={contentStyles.content55}>
                        <h1 className={contentStyles.content39}>4.2 / 5</h1>
                        <div className={contentStyles.content56}>
                            <svg class="mr-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <svg class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <svg class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <svg class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <svg class="mx-1 w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <h1 className={contentStyles.content57}>на основании 542 отзывов</h1>
                        </div>
                        <div className={contentStyles.content58}>
                            <div className={contentStyles.content59}>
                                <h1 className={contentStyles.content60}>5 звезд</h1>
                                <div className={contentStyles.content61}>
                                    <div className={contentStyles.content63}></div>
                                    <div className={contentStyles.content64}></div>
                                </div>
                                <h1>80%</h1>
                            </div>
                            <div className={contentStyles.content59}>
                                <h1>4 звезды</h1>
                                <div className={contentStyles.content61}>
                                    <div className={contentStyles.content65}></div>
                                    <div className={contentStyles.content64}></div>
                                </div>
                                <h1>10%</h1>
                            </div>
                            <div className={contentStyles.content59}>
                                <h1>3 звезды</h1>
                                <div className={contentStyles.content61}>
                                    <div className={contentStyles.content66}></div>
                                    <div className={contentStyles.content64}></div>
                                </div>
                                <h1>8%</h1>
                            </div>
                            <div className={contentStyles.content59}>
                                <h1>2 звезды</h1>
                                <div className={contentStyles.content61}>
                                    <div className={contentStyles.content67}></div>
                                    <div className={contentStyles.content64}></div>
                                </div>
                                <h1>2%</h1>
                            </div>
                            <div className={contentStyles.content59}>
                                <h1 className={contentStyles.content62}>1 звезда</h1>
                                <div className={contentStyles.content61}>
                                    <div className={contentStyles.content68}></div>
                                    <div className={contentStyles.content64}></div>
                                </div>
                                <h1>4%</h1>
                            </div>
                        </div>
                    </div>
                    <div className={contentStyles.content69}>
                        <div className={contentStyles.content70}>
                            <div className={contentStyles.content71}>
                                <h1>Все звёзды</h1>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>            
                            </div>
                            <h1 className={contentStyles.content41}>Сортировать по:</h1>
                            <div className={contentStyles.content42}>
                                <h1>Дате</h1>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>            
                            </div>
                            <div className={contentStyles.content42}>
                                <h1>Оценке</h1>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>            
                            </div>
                        </div>
                        <div className={contentStyles.content72}>
                            <div className={contentStyles.content44}>
                                <svg class="w-9 h-9 bg-gray-300 rounded-full text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                <div className={contentStyles.content45}>
                                    <h1 className={contentStyles.content46}>Вася Пупкин</h1>
                                    <h1 className={contentStyles.content47}>29 мая 2021</h1>
                                </div>
                                <div className={contentStyles.content73}>
                                    <svg class="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <svg class="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <svg class="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <svg class="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <svg class="mx-1 w-3 h-3 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                </div>
                            </div>
                            <div className={contentStyles.content74}>
                                <h1>Значимость этих проблем настолько очевидна, что консультация с широким активом позволяет выполнять.</h1>
                            </div>
                        </div>
                        <div className={contentStyles.content75}>
                            <div className={contentStyles.content44}>
                                <svg class="w-9 h-9 bg-gray-300 rounded-full text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                <div className={contentStyles.content45}>
                                    <h1 className={contentStyles.content46}>Вася Пупкин</h1>
                                    <h1 className={contentStyles.content47}>29 мая 2021</h1>
                                </div>
                                <div className={contentStyles.content73}>
                                    <svg class="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <svg class="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <svg class="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <svg class="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <svg class="mx-1 w-3 h-3 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                </div>
                            </div>
                            <div className={contentStyles.content74}>
                                <h1>Значимость этих проблем настолько очевидна, что консультация с широким активом позволяет выполнять.</h1>
                            </div>
                        </div>
                        <div className={contentStyles.content75}>
                            <div className={contentStyles.content44}>
                                <svg class="w-9 h-9 bg-gray-300 rounded-full text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                <div className={contentStyles.content45}>
                                    <h1 className={contentStyles.content46}>Вася Пупкин</h1>
                                    <h1 className={contentStyles.content47}>29 мая 2021</h1>
                                </div>
                                <div className={contentStyles.content73}>
                                    <svg class="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <svg class="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <svg class="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <svg class="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <svg class="mx-1 w-3 h-3 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                </div>
                            </div>
                            <div className={contentStyles.content74}>
                                <h1>Значимость этих проблем настолько очевидна, что консультация с широким активом позволяет выполнять.</h1>
                            </div>
                        </div>
                        <div className={contentStyles.content75}>
                            <div className={contentStyles.content44}>
                                <svg class="w-9 h-9 bg-gray-300 rounded-full text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                <div className={contentStyles.content45}>
                                    <h1 className={contentStyles.content46}>Вася Пупкин</h1>
                                    <h1 className={contentStyles.content47}>29 мая 2021</h1>
                                </div>
                                <div className={contentStyles.content73}>
                                    <svg class="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <svg class="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <svg class="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <svg class="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <svg class="mx-1 w-3 h-3 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                </div>
                            </div>
                            <div className={contentStyles.content74}>
                                <h1>Значимость этих проблем настолько очевидна, что консультация с широким активом позволяет выполнять.</h1>
                            </div>
                        </div>
                        <div className={contentStyles.content75}>
                            <div className={contentStyles.content44}>
                                <svg class="w-9 h-9 bg-gray-300 rounded-full text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                <div className={contentStyles.content45}>
                                    <h1 className={contentStyles.content46}>Вася Пупкин</h1>
                                    <h1 className={contentStyles.content47}>29 мая 2021</h1>
                                </div>
                                <div className={contentStyles.content73}>
                                    <svg class="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <svg class="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <svg class="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <svg class="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <svg class="mx-1 w-3 h-3 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                </div>
                            </div>
                            <div className={contentStyles.content74}>
                                <h1>Значимость этих проблем настолько очевидна, что консультация с широким активом позволяет выполнять.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={contentStyles.content76}>
                <h1 className={contentStyles.content39}>Аналоги</h1>
                <div className={contentStyles.content77}>
                    <div className={contentStyles.content78}>
                        <img src={Image1} alt='pills' class='object-cover w-56 h-56'/>
                        <h1 className={contentStyles.content79}>Кальций Д3 Никомед</h1>
                        <h1 className={contentStyles.content80}>Мята 60 таблеток</h1>
                        <div className={contentStyles.content81}>
                            <svg class="w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <h1 className={contentStyles.content82}>4.2 (542 отзывов)</h1>
                        </div>
                        <div className={contentStyles.content83}>
                            <h1 className={contentStyles.content84}>2 000</h1>
                            <h1 className={contentStyles.content85}>₸</h1>
                        </div>
                        <h1 className={contentStyles.content86}>10 в наличии</h1>
                    </div>
                    <div className={contentStyles.content78}>
                        <img src={Image1} alt='pills' class='object-cover w-56 h-56'/>
                        <h1 className={contentStyles.content79}>Кальций Д3 Никомед</h1>
                        <h1 className={contentStyles.content80}>Мята 60 таблеток</h1>
                        <div className={contentStyles.content81}>
                            <svg class="w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <h1 className={contentStyles.content82}>4.2 (542 отзывов)</h1>
                        </div>
                        <div className={contentStyles.content83}>
                            <h1 className={contentStyles.content84}>2 000</h1>
                            <h1 className={contentStyles.content85}>₸</h1>
                        </div>
                        <h1 className={contentStyles.content86}>10 в наличии</h1>
                    </div>
                    <div className={contentStyles.content78}>
                        <img src={Image1} alt='pills' class='object-cover w-56 h-56'/>
                        <h1 className={contentStyles.content79}>Кальций Д3 Никомед</h1>
                        <h1 className={contentStyles.content80}>Мята 60 таблеток</h1>
                        <div className={contentStyles.content81}>
                            <svg class="w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <h1 className={contentStyles.content82}>4.2 (542 отзывов)</h1>
                        </div>
                        <div className={contentStyles.content83}>
                            <h1 className={contentStyles.content84}>2 000</h1>
                            <h1 className={contentStyles.content85}>₸</h1>
                        </div>
                        <h1 className={contentStyles.content86}>10 в наличии</h1>
                    </div>
                    <div className={contentStyles.content78}>
                        <img src={Image1} alt='pills' class='object-cover w-56 h-56'/>
                        <h1 className={contentStyles.content79}>Кальций Д3 Никомед</h1>
                        <h1 className={contentStyles.content80}>Мята 60 таблеток</h1>
                        <div className={contentStyles.content81}>
                            <svg class="w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <h1 className={contentStyles.content82}>4.2 (542 отзывов)</h1>
                        </div>
                        <div className={contentStyles.content83}>
                            <h1 className={contentStyles.content84}>2 000</h1>
                            <h1 className={contentStyles.content85}>₸</h1>
                        </div>
                        <h1 className={contentStyles.content86}>10 в наличии</h1>
                    </div>
                    <div className={contentStyles.content78}>
                        <img src={Image1} alt='pills' class='object-cover w-56 h-56'/>
                        <h1 className={contentStyles.content79}>Кальций Д3 Никомед</h1>
                        <h1 className={contentStyles.content80}>Мята 60 таблеток</h1>
                        <div className={contentStyles.content81}>
                            <svg class="w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <h1 className={contentStyles.content82}>4.2 (542 отзывов)</h1>
                        </div>
                        <div className={contentStyles.content83}>
                            <h1 className={contentStyles.content84}>2 000</h1>
                            <h1 className={contentStyles.content85}>₸</h1>
                        </div>
                        <h1 className={contentStyles.content86}>10 в наличии</h1>
                    </div>
                    <div className={contentStyles.content78}>
                        <img src={Image1} alt='pills' class='object-cover w-56 h-56'/>
                        <h1 className={contentStyles.content79}>Кальций Д3 Никомед</h1>
                        <h1 className={contentStyles.content80}>Мята 60 таблеток</h1>
                        <div className={contentStyles.content81}>
                            <svg class="w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <h1 className={contentStyles.content82}>4.2 (542 отзывов)</h1>
                        </div>
                        <div className={contentStyles.content83}>
                            <h1 className={contentStyles.content84}>2 000</h1>
                            <h1 className={contentStyles.content85}>₸</h1>
                        </div>
                        <h1 className={contentStyles.content86}>10 в наличии</h1>
                    </div>
                    <div className={contentStyles.content78}>
                        <img src={Image1} alt='pills' class='object-cover w-56 h-56'/>
                        <h1 className={contentStyles.content79}>Кальций Д3 Никомед</h1>
                        <h1 className={contentStyles.content80}>Мята 60 таблеток</h1>
                        <div className={contentStyles.content81}>
                            <svg class="w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <h1 className={contentStyles.content82}>4.2 (542 отзывов)</h1>
                        </div>
                        <div className={contentStyles.content83}>
                            <h1 className={contentStyles.content84}>2 000</h1>
                            <h1 className={contentStyles.content85}>₸</h1>
                        </div>
                        <h1 className={contentStyles.content86}>10 в наличии</h1>
                    </div>
                    <div className={contentStyles.content78}>
                        <img src={Image1} alt='pills' class='object-cover w-56 h-56'/>
                        <h1 className={contentStyles.content79}>Кальций Д3 Никомед</h1>
                        <h1 className={contentStyles.content80}>Мята 60 таблеток</h1>
                        <div className={contentStyles.content81}>
                            <svg class="w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <h1 className={contentStyles.content82}>4.2 (542 отзывов)</h1>
                        </div>
                        <div className={contentStyles.content83}>
                            <h1 className={contentStyles.content84}>2 000</h1>
                            <h1 className={contentStyles.content85}>₸</h1>
                        </div>
                        <h1 className={contentStyles.content86}>10 в наличии</h1>
                    </div>
                    <div className={contentStyles.content78}>
                        <img src={Image1} alt='pills' class='object-cover w-56 h-56'/>
                        <h1 className={contentStyles.content79}>Кальций Д3 Никомед</h1>
                        <h1 className={contentStyles.content80}>Мята 60 таблеток</h1>
                        <div className={contentStyles.content81}>
                            <svg class="w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <h1 className={contentStyles.content82}>4.2 (542 отзывов)</h1>
                        </div>
                        <div className={contentStyles.content83}>
                            <h1 className={contentStyles.content84}>2 000</h1>
                            <h1 className={contentStyles.content85}>₸</h1>
                        </div>
                        <h1 className={contentStyles.content86}>10 в наличии</h1>
                    </div>
                    <div className={contentStyles.content78}>
                        <img src={Image1} alt='pills' class='object-cover w-56 h-56'/>
                        <h1 className={contentStyles.content79}>Кальций Д3 Никомед</h1>
                        <h1 className={contentStyles.content80}>Мята 60 таблеток</h1>
                        <div className={contentStyles.content81}>
                            <svg class="w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <h1 className={contentStyles.content82}>4.2 (542 отзывов)</h1>
                        </div>
                        <div className={contentStyles.content83}>
                            <h1 className={contentStyles.content84}>2 000</h1>
                            <h1 className={contentStyles.content85}>₸</h1>
                        </div>
                        <h1 className={contentStyles.content86}>10 в наличии</h1>
                    </div>
                    <div className={contentStyles.content78}>
                        <img src={Image1} alt='pills' class='object-cover w-56 h-56'/>
                        <h1 className={contentStyles.content79}>Кальций Д3 Никомед</h1>
                        <h1 className={contentStyles.content80}>Мята 60 таблеток</h1>
                        <div className={contentStyles.content81}>
                            <svg class="w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <h1 className={contentStyles.content82}>4.2 (542 отзывов)</h1>
                        </div>
                        <div className={contentStyles.content83}>
                            <h1 className={contentStyles.content84}>2 000</h1>
                            <h1 className={contentStyles.content85}>₸</h1>
                        </div>
                        <h1 className={contentStyles.content86}>10 в наличии</h1>
                    </div>
                    <div className={contentStyles.content78}>
                        <img src={Image1} alt='pills' class='object-cover w-56 h-56'/>
                        <h1 className={contentStyles.content79}>Кальций Д3 Никомед</h1>
                        <h1 className={contentStyles.content80}>Мята 60 таблеток</h1>
                        <div className={contentStyles.content81}>
                            <svg class="w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <h1 className={contentStyles.content82}>4.2 (542 отзывов)</h1>
                        </div>
                        <div className={contentStyles.content83}>
                            <h1 className={contentStyles.content84}>2 000</h1>
                            <h1 className={contentStyles.content85}>₸</h1>
                        </div>
                        <h1 className={contentStyles.content86}>10 в наличии</h1>
                    </div>
                    <div className={contentStyles.content78}>
                        <img src={Image1} alt='pills' class='object-cover w-56 h-56'/>
                        <h1 className={contentStyles.content79}>Кальций Д3 Никомед</h1>
                        <h1 className={contentStyles.content80}>Мята 60 таблеток</h1>
                        <div className={contentStyles.content81}>
                            <svg class="w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <h1 className={contentStyles.content82}>4.2 (542 отзывов)</h1>
                        </div>
                        <div className={contentStyles.content83}>
                            <h1 className={contentStyles.content84}>2 000</h1>
                            <h1 className={contentStyles.content85}>₸</h1>
                        </div>
                        <h1 className={contentStyles.content86}>10 в наличии</h1>
                    </div>
                    <div className={contentStyles.content78}>
                        <img src={Image1} alt='pills' class='object-cover w-56 h-56'/>
                        <h1 className={contentStyles.content79}>Кальций Д3 Никомед</h1>
                        <h1 className={contentStyles.content80}>Мята 60 таблеток</h1>
                        <div className={contentStyles.content81}>
                            <svg class="w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <h1 className={contentStyles.content82}>4.2 (542 отзывов)</h1>
                        </div>
                        <div className={contentStyles.content83}>
                            <h1 className={contentStyles.content84}>2 000</h1>
                            <h1 className={contentStyles.content85}>₸</h1>
                        </div>
                        <h1 className={contentStyles.content86}>10 в наличии</h1>
                    </div>
                    <div className={contentStyles.content78}>
                        <img src={Image1} alt='pills' class='object-cover w-56 h-56'/>
                        <h1 className={contentStyles.content79}>Кальций Д3 Никомед</h1>
                        <h1 className={contentStyles.content80}>Мята 60 таблеток</h1>
                        <div className={contentStyles.content81}>
                            <svg class="w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <h1 className={contentStyles.content82}>4.2 (542 отзывов)</h1>
                        </div>
                        <div className={contentStyles.content83}>
                            <h1 className={contentStyles.content84}>2 000</h1>
                            <h1 className={contentStyles.content85}>₸</h1>
                        </div>
                        <h1 className={contentStyles.content86}>10 в наличии</h1>
                    </div>
                    <div className={contentStyles.content78}>
                        <img src={Image1} alt='pills' class='object-cover w-56 h-56'/>
                        <h1 className={contentStyles.content79}>Кальций Д3 Никомед</h1>
                        <h1 className={contentStyles.content80}>Мята 60 таблеток</h1>
                        <div className={contentStyles.content81}>
                            <svg class="w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <h1 className={contentStyles.content82}>4.2 (542 отзывов)</h1>
                        </div>
                        <div className={contentStyles.content83}>
                            <h1 className={contentStyles.content84}>2 000</h1>
                            <h1 className={contentStyles.content85}>₸</h1>
                        </div>
                        <h1 className={contentStyles.content86}>10 в наличии</h1>
                    </div>
                </div>
            </div>
        </div>
  )
}