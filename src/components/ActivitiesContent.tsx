export default function ActivitiesContent() {
    const upcomingEvents = [
        {
            id: 1,
            date: '15 января 2024',
            title: 'Сбор зимней одежды',
            description: 'Собираем теплые вещи для бездомных к зимнему сезону. Принимаем куртки, свитеры, теплые брюки, одеяла в хорошем состоянии.',
            location: 'Центральный парк, главный вход',
            type: 'Сбор помощи',
            participants: 45,
            duration: '4 часа'
        },
        {
            id: 2,
            date: '20 января 2024',
            title: 'Благотворительный забег',
            description: 'Пробежка 5 км по живописной набережной. Все собранные средства пойдут на покупку продуктовых наборов для многодетных семей.',
            location: 'Набережная реки',
            type: 'Спорт',
            participants: 120,
            duration: '3 часа'
        },
        {
            id: 3,
            date: '25 января 2024',
            title: 'Мастер-класс для детей',
            description: 'Творческие занятия и развивающие игры для детей из многодетных семей. Рисование, лепка, оригами и многое другое.',
            location: 'Городской детский центр',
            type: 'Образование',
            participants: 30,
            duration: '5 часов'
        }
    ];

    const pastEvents = [
        {
            id: 4,
            date: '10 декабря 2023',
            title: 'Новогодние подарки детям',
            description: 'Собрали и подарили 200 новогодних подарков детям из детских домов и малообеспеченных семей.',
            results: '200+ подарков'
        },
        {
            id: 5,
            date: '25 ноября 2023',
            title: 'Осенний марафон',
            description: 'Благотворительный забег, в котором участвовало 150 человек. Собрали средства на ремонт приюта для животных.',
            results: '150 участников'
        }
    ];

    return (
        <div className="max-w-6xl mx-auto">
            {/* Заголовок */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Наши мероприятия
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Присоединяйтесь к нашим событиям. Каждое мероприятие - это возможность
                    сделать доброе дело и познакомиться с единомышленниками.
                </p>
            </div>

            {/* Предстоящие мероприятия */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Предстоящие мероприятия
                </h2>
                <div className="grid gap-8">
                    {upcomingEvents.map((event) => (
                        <div key={event.id} className="card p-8 hover:shadow-xl transition-all duration-300">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                                {/* Информация о событии */}
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-4 mb-4">
                                        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                                            {event.type}
                                        </span>
                                        <span className="text-gray-500 font-medium flex items-center gap-2">
                                            📅 {event.date}
                                        </span>
                                        <span className="text-gray-500 flex items-center gap-2">
                                            👥 {event.participants} участников
                                        </span>
                                        <span className="text-gray-500 flex items-center gap-2">
                                            ⏱️ {event.duration}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        {event.title}
                                    </h3>

                                    <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                                        {event.description}
                                    </p>

                                    <div className="flex items-center text-gray-500 text-lg">
                                        <span className="flex items-center gap-2">
                                            📍 {event.location}
                                        </span>
                                    </div>
                                </div>

                                {/* Кнопки действий */}
                                <div className="flex flex-col gap-3 min-w-[200px]">
                                    <button className="btn-primary whitespace-nowrap">
                                        Участвовать
                                    </button>
                                    <button className="btn-outline whitespace-nowrap">
                                        Добавить в календарь
                                    </button>
                                    <button className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
                                        Поделиться мероприятием
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Прошедшие мероприятия */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Прошедшие мероприятия
                </h2>
                <div className="grid gap-6">
                    {pastEvents.map((event) => (
                        <div key={event.id} className="card p-6 bg-gray-50">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-4 mb-2">
                                        <span className="text-gray-500 font-medium">
                                            📅 {event.date}
                                        </span>
                                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                            Завершено
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-600 mb-2">
                                        {event.description}
                                    </p>
                                    <div className="text-green-600 font-medium">
                                        🎯 Результат: {event.results}
                                    </div>
                                </div>
                                <button className="btn-outline whitespace-nowrap text-sm">
                                    Смотреть фотоотчет
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA секция */}
            <section className="mt-16 text-center">
                <div className="card p-12 bg-gradient-to-r from-blue-50 to-green-50">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Хотите организовать свое мероприятие?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        У вас есть идея для благотворительного мероприятия? Мы поможем с организацией,
                        поиском участников и ресурсов.
                    </p>
                    <button className="btn-primary">
                        Предложить мероприятие
                    </button>
                </div>
            </section>
        </div>
    );
}