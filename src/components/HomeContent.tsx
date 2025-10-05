// export default function HomeContent() {
//     const features = [
//         {
//             icon: '📦',
//             title: 'Сбор посылок',
//             description: 'Регулярно собираем продуктовые наборы, одежду и предметы первой необходимости для нуждающихся семей.'
//         },
//         {
//             icon: '🏃‍♂️',
//             title: 'Спортивные мероприятия',
//             description: 'Проводим совместные тренировки, забеги и спортивные игры для поддержания здоровья и командного духа.'
//         },
//         {
//             icon: '📚',
//             title: 'Образовательные встречи',
//             description: 'Организуем мастер-классы и обучающие занятия для детей и взрослых из социально незащищенных слоев.'
//         },
//         {
//             icon: '🎉',
//             title: 'Социальные акции',
//             description: 'Проводим праздничные мероприятия и организуем досуг для пожилых людей и детей из детских домов.'
//         }
//     ];

//     const stats = [
//         { number: '150+', label: 'Волонтеров в команде' },
//         { number: '500+', label: 'Посылок собрано' },
//         { number: '50+', label: 'Проведенных мероприятий' },
//         { number: '1000+', label: 'Людям помогли' }
//     ];

//     return (
//         <main>
//             {/* Hero Section */}
//             <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 section-padding">
//                 <div className="max-w-7xl mx-auto text-center">
//                     <div className="max-w-4xl mx-auto">
//                         <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
//                             Волонтеры{' '}
//                             <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
//                                 Коммунарки
//                             </span>
//                         </h1>
//                         <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
//                             Объединяем людей для помощи тем, кто в ней нуждается.
//                             Собираем посылки, проводим мероприятия и создаем добро вместе.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                             <button className="btn-primary text-lg px-8 py-4">
//                                 Стать волонтером
//                             </button>
//                             <button className="btn-outline text-lg px-8 py-4">
//                                 Узнать больше
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Stats Section */}
//             <section className="bg-white section-padding">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//                         {stats.map((stat, index) => (
//                             <div key={index} className="text-center">
//                                 <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
//                                     {stat.number}
//                                 </div>
//                                 <div className="text-gray-600 font-medium text-lg">
//                                     {stat.label}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Features Section */}
//             <section className="bg-gray-50 section-padding">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                             Что мы делаем
//                         </h2>
//                         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                             Наша деятельность направлена на всестороннюю помощь и поддержку тех,
//                             кто оказался в трудной жизненной ситуации
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {features.map((feature, index) => (
//                             <div key={index} className="card p-6 text-center group hover:scale-105 transition-all duration-300">
//                                 <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
//                                     {feature.icon}
//                                 </div>
//                                 <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                                     {feature.title}
//                                 </h3>
//                                 <p className="text-gray-600 leading-relaxed">
//                                     {feature.description}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* CTA Section */}
//             <section className="bg-gradient-to-r from-blue-600 to-green-600 section-padding">
//                 <div className="max-w-4xl mx-auto text-center">
//                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                         Готовы помочь?
//                     </h2>
//                     <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//                         Присоединяйтесь к нашей дружной команде волонтеров.
//                         Вместе мы сможем сделать этот мир добрее и лучше для всех.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                         <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105">
//                             Присоединиться сейчас
//                         </button>
//                         <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105">
//                             Связаться с нами
//                         </button>
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// }


export default function HomeContent() {
    return (
        <main className="flex-1">
            {/* Герой секция */}
            <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Волонтеры{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                            Коммунарки
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Мы помогаем людям в трудной жизненной ситуации через сбор посылок,
                        организацию мероприятий и спортивные активности.
                    </p>
                    {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="https://t.me/SukhomlinovVadim"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                        >
                            Присоединиться
                        </a>
                        <a
                            href="/contact"
                            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-3 px-8 rounded-lg transition-colors"
                        >
                            Связаться с нами
                        </a>
                    </div> */}
                </div>
            </section>

            {/* Секция "О нас" с фотографиями */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Текстовое описание */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                О нашей организации
                            </h2>
                            <div className="space-y-4 text-lg text-gray-600">
                                <p>
                                    <strong>Волонтеры Коммунарки</strong> — это сообщество людей, объединенных желанием помогать нашим бойцам.
                                    Наша организация была основана в 2024 году и с тех пор мы активно развиваем волонтерское движение в нашем городе.
                                </p>
                                <p>
                                    Мы верим, что даже маленькое действие может изменить или спасти чью-то жизнь.
                                    Каждую неделю мы собираемся вместе, чтобы сделать наш мир добрее и помочь тем, кто в этом нуждается.
                                </p>
                                <p>
                                    Наша миссия — создавать сообщество, где каждый может найти поддержку и проявить заботу о других.
                                    Мы открыты для всех, кто готов делиться своим временем, теплом и вниманием.
                                </p>
                            </div>
                        </div>

                        {/* Фотографии */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: "url('/volonteer1.jpg')" }}
                                ></div>
                            </div>
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: "url('/volonteer2.jpg')" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Секция активностей */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Чем мы занимаемся</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                            <div className="text-4xl mb-4">📦</div>
                            <h3 className="text-xl font-semibold mb-2">Сбор посылок</h3>
                            <p className="text-gray-600">
                                Регулярно собираем продуктовые наборы, одежду и предметы первой необходимости для нуждающихся семей
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                            <div className="text-4xl mb-4">🏃‍♂️</div>
                            <h3 className="text-xl font-semibold mb-2">Спортивные мероприятия</h3>
                            <p className="text-gray-600">
                                Проводим совместные тренировки, забеги и спортивные игры для поддержания здоровья
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                            <div className="text-4xl mb-4">👥</div>
                            <h3 className="text-xl font-semibold mb-2">Социальные акции</h3>
                            <p className="text-gray-600">
                                Организуем помощь пожилым людям и детям, проводим праздничные мероприятия
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA секция */}
            <section className="bg-gradient-to-r from-blue-600 to-green-600 py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Готовы помочь?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Присоединяйтесь к нашей дружной команде волонтеров. Вместе мы сможем сделать этот мир добрее и лучше для всех.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://t.me/SukhomlinovVadim"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
                        >
                            Присоединиться в Telegram
                        </a>
                        <a
                            href="/contact"
                            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-4 px-8 rounded-lg text-lg transition-colors"
                        >
                            Связаться с нами
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}