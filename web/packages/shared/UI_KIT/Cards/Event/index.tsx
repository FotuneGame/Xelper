import React from 'react';
import "./CardEvent.module.scss";

const CardEvent = () => {
    return (
        <div className="row">
            {/* Первая карточка */}
            <div className="col-md-4 mb-4">
                <div className="card" style={{ width: "18rem" }}>
                    <img src="http://добрососеди.рф/wp-content/uploads/2020/10/f075c3.jpg" className="card-img-top" alt="Волонтерское мероприятие" />
                    <div className="card-body">
                        <h5 className="card-title">Социальное волонтёрство</h5>
                        <p className="card-text">Присоединяйтесь к нам для оказания помощи, прежде всего, незащищенным слоям населения, нуждающимся во внимании и (или) постоянном уходе (помощь де-тям-сиротам, многодетным семьям, инвалидам, пожилым одиноким людям, бездомным, бывшим заключенным, беженцам и другим).</p>
                        <a href="#" className="btn btn-primary">Узнать больше</a>
                    </div>
                </div>
            </div>
            
            {/* Пример второй карточки */}
            <div className="col-md-4 mb-4">
                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://komiinform.ru/content/news/images/212138/Volontery-Studvesny.jpg" className="card-img-top" alt="Волонтерское мероприятие" />
                    <div className="card-body">
                        <h5 className="card-title">Экологическое волонтёрство</h5>
                        <p className="card-text">Присоединяйтесь к нам для оказания помощи в области защиты окружающей среды, направленная на формирование экологической культуры в обществе (помощь заповедным территориям, животным, озеленение, раздельный сбор отходов, экологическое просвещение и т.д.).</p>
                        <a href="#" className="btn btn-primary">Узнать больше</a>
                    </div>
                </div>
            </div>
            {/* Пример третий карточки */}
            <div className="col-md-4 mb-4">
                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://stnmedia.ru/upload/iblock/9eb/9ebb69ce0a2644ac8f6496736b109129.jpg" className="card-img-top" alt="Волонтерское мероприятие" />
                    <div className="card-body">
                        <h5 className="card-title">Событийное волонтёрство</h5>
                        <p className="card-text">Добровольческая деятельность, направленная на помощь в организации и проведении крупных значимых событий местного, регионального, федерального и международного уровня.</p>
                        <a href="#" className="btn btn-primary">Узнать больше</a>
                    </div>
                </div>
            </div>
            <div className="row">
                {/* четвертая карточка */}
                <div className="col-md-4 mb-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://s.ura.news/760/images/news/upload/news/337/322/1052337322/150777_Aktsiya_1000_dney_do_ChM_2018_Ekaterinburg_volonteri_250x0_3463.2314.0.0.jpg" className="card-img-top" alt="Волонтерское мероприятие" />
                        <div className="card-body">
                            <h5 className="card-title">Спортивное волонтёрство</h5>
                            <p className="card-text">Участие в организации и проведении физкультурных и спортивных мероприятий, популяризация спорта и пропаганда здорового образа жизни.</p>
                            <a href="#" className="btn btn-primary">Узнать больше</a>
                        </div>
                    </div>
                </div>

                {/* пятая карточки */}
                <div className="col-md-4 mb-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://kartinki.pics/uploads/posts/2021-07/1625694962_37-kartinkin-com-p-art-volontyorstvo-art-krasivo-42.jpg" className="card-img-top" alt="Волонтерское мероприятие" />
                        <div className="card-body">
                            <h5 className="card-title">Культурное волонтёрство</h5>
                            <p className="card-text">Проведение экскурсий, работа с туристическими группами, с музейными и библиотечными фондами, помощь в реставрации памятников истории и культуры, обучение различным видам творческих практик.</p>
                            <a href="#" className="btn btn-primary">Узнать больше</a>
                        </div>
                    </div>
                </div>
                {/* шестая карточки */}
                <div className="col-md-4 mb-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://centrremont.gazprom.ru/d/album/03/3/den-donora-v-ooo-gtsr6.jpg" className="card-img-top" alt="Волонтерское мероприятие" />
                        <div className="card-body">
                            <h5 className="card-title">Донорство</h5>
                            <p className="card-text">Популяризация добровольной сдачи крови донорами, помощь в организации мероприятий и донорских акций, просветительская деятельность.</p>
                            <a href="#" className="btn btn-primary">Узнать больше</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {/* 7 карточка */}
                <div className="col-md-4 mb-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://prazdnikson.ru/wp-content/uploads/2022/05/volontery-obshhestvennoj-bezopasnosti.jpg" className="card-img-top" alt="Волонтерское мероприятие" />
                        <div className="card-body">
                            <h5 className="card-title">Волонтёрство общественной безопасности</h5>
                            <p className="card-text">Присоединяйтесь к нам для оказания помощи, прежде всего,  службам экстренного реагирования в профилактике и ликвидации последствий чрезвычайных ситуаций, помощь в организации обеспечения безопасности на массовых событиях, поиске пропавших людей, содействие интернет-безопасности.</p>
                            <a href="#" className="btn btn-primary">Узнать больше</a>
                        </div>
                    </div>
                </div>

                {/*8 карточки */}
                <div className="col-md-4 mb-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://altaimolodoi.ru/wp-content/uploads/2021/02/9OiOG69BDi4.jpg" className="card-img-top" alt="Волонтерское мероприятие" />
                        <div className="card-body">
                            <h5 className="card-title">Медиаволонтёрство</h5>
                            <p className="card-text">Информационная поддержка социальных проектов, создание контента и его распространение в СМИ и социальных сетях в качестве волонтёров-фотографов, журналистов, SMM-специалистов, видеооператоров.</p>
                            <a href="#" className="btn btn-primary">Узнать больше</a>
                        </div>
                    </div>
                </div>
                {/* 9 карточки */}
                <div className="col-md-4 mb-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://rus-osetia.ru/wp-content/uploads/2021/10/img_5704.jpg" className="card-img-top" alt="Волонтерское мероприятие" />
                        <div className="card-body">
                            <h5 className="card-title">Волонтёрство в медицине</h5>
                            <p className="card-text">Просветительская деятельность по профилактике заболеваний, помощь в рамках медицинского сопровождения массовых и спортивных мероприятий.</p>
                            <a href="#" className="btn btn-primary">Узнать больше</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* 10 карточки */}
            <div className="col-md-4 mb-4">
                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://www.рцпв.рф/wp-content/uploads/2019/04/thumb_65305_news_big.jpg" className="card-img-top" alt="Волонтерское мероприятие" />
                    <div className="card-body">
                        <h5 className="card-title">Патриотическое волонтёрство</h5>
                        <p className="card-text">Гражданско-патриотическое воспитание, помощь в организации патриотических акций и мероприятий, помощь ветеранам и ветеранским организациям, поисковые работы, исторические реконструкции.</p>
                        <a href="#" className="btn btn-primary">Узнать больше</a>
                    </div>
                </div>
            </div>
            {/* 11 карточки */}
            <div className="col-md-4 mb-4">
                <div className="card" style={{ width: "18rem" }}>
                    <img src="http://добрососеди.рф/wp-content/uploads/2020/10/f075c3.jpg" className="card-img-top" alt="Волонтерское мероприятие" />
                    <div className="card-body">
                        <h5 className="card-title">Создай свое мероприятие</h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">Узнать больше</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardEvent;