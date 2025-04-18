export default function Messages({Convo}) {
  return (
    <>

      {
        Convo ?

        <div className="conversation" id="conversation-1">

            <div className="conversation-top">

            <button type="button" className="conversation-back">
                <i className="ri-arrow-left-line"></i>
            </button>

            <div className="conversation-user">

                <img
                className="conversation-user-image"
                src="img/RHENZY.jpg"
                alt=""
                />

                <div>
                <div className="conversation-user-name">Someone</div>
                <div className="conversation-user-status online">online</div>
                </div>

            </div>

            <div className="conversation-buttons">

                <button type="button">
                <i className="ri-phone-fill"></i>
                </button>

                <button type="button">
                <i className="ri-vidicon-line"></i>
                </button>

                <button type="button">
                <i className="ri-information-line"></i>
                </button>

            </div>

            </div>

            <div className="conversation-main">
            <ul className="conversation-wrapper">

                <div className="coversation-divider">
                <span>Today</span>
                </div>

                <li className="conversation-item me">

                <div className="conversation-item-side">

                    <img
                    className="conversation-item-image"
                    src="img/RHENZY.jpg"
                    alt=""
                    />

                </div>

                <div className="conversation-item-content">
                    <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                        <div className="conversation-item-text">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Amet natus repudiandae quisquam sequi nobis
                            suscipit consequatur rerum alias odio repellat!
                        </p>
                        <div className="conversation-item-time">12:30</div>
                        </div>

                        <div className="conversation-item-dropdown">
                        <button
                            type="button"
                            className="conversation-item-dropdown-toggle"
                        >
                            <i className="ri-more-2-line"></i>
                        </button>

                        <ul className="conversation-item-dropdown-list">
                            <li>
                            <a href="#">
                                <i className="ri-share-forward-line"></i> Forward
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="ri-delete-bin-line"></i> Delete
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>

                    <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                        <div className="conversation-item-text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eaque, tenetur!
                        </p>
                        <div className="conversation-item-time">12:30</div>
                        </div>

                        <div className="conversation-item-dropdown">
                        <button
                            type="button"
                            className="conversation-item-dropdown-toggle"
                        >
                            <i className="ri-more-2-line"></i>
                        </button>

                        <ul className="conversation-item-dropdown-list">
                            <li>
                            <a href="#">
                                <i className="ri-share-forward-line"></i> Forward
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="ri-delete-bin-line"></i> Delete
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </li>

                <li className="conversation-item">
                <div className="conversation-item-side">
                    <img
                    className="conversation-item-image"
                    src="img/RHENZY.jpg"
                    alt=""
                    />
                </div>

                <div className="conversation-item-content">
                    <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                        <div className="conversation-item-text">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                        <div className="conversation-item-time">12:30</div>
                        </div>

                        <div className="conversation-item-dropdown">
                        <button
                            type="button"
                            className="conversation-item-dropdown-toggle"
                        >
                            <i className="ri-more-2-line"></i>
                        </button>

                        <ul className="conversation-item-dropdown-list">
                            <li>
                            <a href="#">
                                <i className="ri-share-forward-line"></i> Forward
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="ri-delete-bin-line"></i> Delete
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>

                    <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                        <div className="conversation-item-text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Atque eos ab in?
                        </p>
                        <div className="conversation-item-time">12:30</div>
                        </div>

                        <div className="conversation-item-dropdown">
                        <button
                            type="button"
                            className="conversation-item-dropdown-toggle"
                        >
                            <i className="ri-more-2-line"></i>
                        </button>

                        <ul className="conversation-item-dropdown-list">
                            <li>
                            <a href="#">
                                <i className="ri-share-forward-line"></i> Forward
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="ri-delete-bin-line"></i> Delete
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>

                    <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                        <div className="conversation-item-text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sint, debitis. Iste natus est aliquam ipsum doloremque
                            fugiat, quidem eos autem? Dolor quisquam laboriosam enim
                            cum laborum suscipit perferendis adipisci praesentium.
                        </p>
                        <div className="conversation-item-time">12:30</div>
                        </div>

                        <div className="conversation-item-dropdown">
                        <button
                            type="button"
                            className="conversation-item-dropdown-toggle"
                        >
                            <i className="ri-more-2-line"></i>
                        </button>

                        <ul className="conversation-item-dropdown-list">
                            <li>
                            <a href="#">
                                <i className="ri-share-forward-line"></i> Forward
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="ri-delete-bin-line"></i> Delete
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </li>

                <li className="conversation-item me">
                <div className="conversation-item-side">
                    <img
                    className="conversation-item-image"
                    src="img/RHENZY.jpg"
                    alt=""
                    />
                </div>

                <div className="conversation-item-content">
                    <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                        <div className="conversation-item-text">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quas, eos, magni temporibus, placeat consectetur
                            nobis incidunt dicta a culpa vel esse. Facilis fugiat
                            possimus eveniet accusamus dignissimos pariatur
                            inventore animi rem vero, eligendi obcaecati fugit
                            quaerat? Officia ex quod eaque maxime ipsam, tempore
                            error laboriosam laborum, magnam ipsum doloremque quas.
                        </p>
                        <div className="conversation-item-time">12:30</div>
                        </div>
                        <div className="conversation-item-dropdown">
                        <button
                            type="button"
                            className="conversation-item-dropdown-toggle"
                        >
                            <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                            <li>
                            <a href="#">
                                <i className="ri-share-forward-line"></i> Forward
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="ri-delete-bin-line"></i> Delete
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                        <div className="conversation-item-text">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Temporibus debitis odio maiores perferendis ipsa
                            repudiandae amet blanditiis quod. Ullam, dolorum.
                        </p>
                        <div className="conversation-item-time">12:30</div>
                        </div>
                        <div className="conversation-item-dropdown">
                        <button
                            type="button"
                            className="conversation-item-dropdown-toggle"
                        >
                            <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                            <li>
                            <a href="#">
                                <i className="ri-share-forward-line"></i> Forward
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="ri-delete-bin-line"></i> Delete
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                        <div className="conversation-item-text">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Accusantium blanditiis ea, voluptatum, eveniet at
                            harum minima maxime enim aut non, iure expedita
                            excepturi tempore nostrum quasi natus voluptas dolore
                            ducimus!
                        </p>
                        <div className="conversation-item-time">12:30</div>
                        </div>
                        <div className="conversation-item-dropdown">
                        <button
                            type="button"
                            className="conversation-item-dropdown-toggle"
                        >
                            <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                            <li>
                            <a href="#">
                                <i className="ri-share-forward-line"></i> Forward
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="ri-delete-bin-line"></i> Delete
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </li>
            </ul>
            </div>
            <div className="conversation-form">
            <button type="button" className="conversation-form-button">
                <i className="ri-emotion-line"></i>
            </button>
            <div className="conversation-form-group">
                <textarea
                className="conversation-form-input"
                rows="1"
                placeholder="Type here..."
                ></textarea>
                <button type="button" className="conversation-form-record">
                <i className="ri-mic-line"></i>
                </button>
            </div>
            <button
                type="button"
                className="conversation-form-button conversation-form-submit"
            >
                <i className="ri-send-plane-2-line"></i>
            </button>
            </div>
        </div> 
        
        :

        <div className="conversation" id="conversation-2">
            <div className="conversation-top">
            <button type="button" className="conversation-back">
                <i className="ri-arrow-left-line"></i>
            </button>
            <div className="conversation-user">
                <img
                className="conversation-user-image"
                src="img/RHENZY.jpg"
                alt=""
                />
                <div>
                <div className="conversation-user-name">Someone 1</div>
                <div className="conversation-user-status online">online</div>
                </div>
            </div>
            <div className="conversation-buttons">
                <button type="button">
                <i className="ri-phone-fill"></i>
                </button>
                <button type="button">
                <i className="ri-vidicon-line"></i>
                </button>
                <button type="button">
                <i className="ri-information-line"></i>
                </button>
            </div>
            </div>
            <div className="conversation-main">
            <ul className="conversation-wrapper">
                <div className="coversation-divider">
                <span>Today</span>
                </div>
                <li className="conversation-item me">
                <div className="conversation-item-side">
                    <img
                    className="conversation-item-image"
                    src="img/RHENZY.jpg"
                    alt=""
                    />
                </div>
                <div className="conversation-item-content">
                    <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                        <div className="conversation-item-text">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Amet natus repudiandae quisquam sequi nobis
                            suscipit consequatur rerum alias odio repellat!
                        </p>
                        <div className="conversation-item-time">12:30</div>
                        </div>
                        <div className="conversation-item-dropdown">
                        <button
                            type="button"
                            className="conversation-item-dropdown-toggle"
                        >
                            <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                            <li>
                            <a href="#">
                                <i className="ri-share-forward-line"></i> Forward
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="ri-delete-bin-line"></i> Delete
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                        <div className="conversation-item-text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eaque, tenetur!
                        </p>
                        <div className="conversation-item-time">12:30</div>
                        </div>
                        <div className="conversation-item-dropdown">
                        <button
                            type="button"
                            className="conversation-item-dropdown-toggle"
                        >
                            <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                            <li>
                            <a href="#">
                                <i className="ri-share-forward-line"></i> Forward
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="ri-delete-bin-line"></i> Delete
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </li>
                <li className="conversation-item">
                <div className="conversation-item-side">
                    <img
                    className="conversation-item-image"
                    src="img/RHENZY.jpg"
                    alt=""
                    />
                </div>
                <div className="conversation-item-content">
                    <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                        <div className="conversation-item-text">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                        <div className="conversation-item-time">12:30</div>
                        </div>
                        <div className="conversation-item-dropdown">
                        <button
                            type="button"
                            className="conversation-item-dropdown-toggle"
                        >
                            <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                            <li>
                            <a href="#">
                                <i className="ri-share-forward-line"></i> Forward
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="ri-delete-bin-line"></i> Delete
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                        <div className="conversation-item-text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Atque eos ab in?
                        </p>
                        <div className="conversation-item-time">12:30</div>
                        </div>
                        <div className="conversation-item-dropdown">
                        <button
                            type="button"
                            className="conversation-item-dropdown-toggle"
                        >
                            <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                            <li>
                            <a href="#">
                                <i className="ri-share-forward-line"></i> Forward
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="ri-delete-bin-line"></i> Delete
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                        <div className="conversation-item-text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sint, debitis. Iste natus est aliquam ipsum doloremque
                            fugiat, quidem eos autem? Dolor quisquam laboriosam enim
                            cum laborum suscipit perferendis adipisci praesentium.
                        </p>
                        <div className="conversation-item-time">12:30</div>
                        </div>
                        <div className="conversation-item-dropdown">
                        <button
                            type="button"
                            className="conversation-item-dropdown-toggle"
                        >
                            <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                            <li>
                            <a href="#">
                                <i className="ri-share-forward-line"></i> Forward
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="ri-delete-bin-line"></i> Delete
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </li>
                <li className="conversation-item me">
                <div className="conversation-item-side">
                    <img
                    className="conversation-item-image"
                    src="img/RHENZY.jpg"
                    alt=""
                    />
                </div>
                <div className="conversation-item-content">
                    <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                        <div className="conversation-item-text">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quas, eos, magni temporibus, placeat consectetur
                            nobis incidunt dicta a culpa vel esse. Facilis fugiat
                            possimus eveniet accusamus dignissimos pariatur
                            inventore animi rem vero, eligendi obcaecati fugit
                            quaerat? Officia ex quod eaque maxime ipsam, tempore
                            error laboriosam laborum, magnam ipsum doloremque quas.
                        </p>
                        <div className="conversation-item-time">12:30</div>
                        </div>
                        <div className="conversation-item-dropdown">
                        <button
                            type="button"
                            className="conversation-item-dropdown-toggle"
                        >
                            <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                            <li>
                            <a href="#">
                                <i className="ri-share-forward-line"></i> Forward
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="ri-delete-bin-line"></i> Delete
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                        <div className="conversation-item-text">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Temporibus debitis odio maiores perferendis ipsa
                            repudiandae amet blanditiis quod. Ullam, dolorum.
                        </p>
                        <div className="conversation-item-time">12:30</div>
                        </div>
                        <div className="conversation-item-dropdown">
                        <button
                            type="button"
                            className="conversation-item-dropdown-toggle"
                        >
                            <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                            <li>
                            <a href="#">
                                <i className="ri-share-forward-line"></i> Forward
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="ri-delete-bin-line"></i> Delete
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                        <div className="conversation-item-text">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Accusantium blanditiis ea, voluptatum, eveniet at
                            harum minima maxime enim aut non, iure expedita
                            excepturi tempore nostrum quasi natus voluptas dolore
                            ducimus!
                        </p>
                        <div className="conversation-item-time">12:30</div>
                        </div>
                        <div className="conversation-item-dropdown">
                        <button
                            type="button"
                            className="conversation-item-dropdown-toggle"
                        >
                            <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                            <li>
                            <a href="#">
                                <i className="ri-share-forward-line"></i> Forward
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="ri-delete-bin-line"></i> Delete
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </li>
            </ul>
            </div>
            <div className="conversation-form">
            <button type="button" className="conversation-form-button">
                <i className="ri-emotion-line"></i>
            </button>
            <div className="conversation-form-group">
                <textarea
                className="conversation-form-input"
                rows="1"
                placeholder="Type here..."
                ></textarea>
                <button type="button" className="conversation-form-record">
                <i className="ri-mic-line"></i>
                </button>
            </div>
            <button
                type="button"
                className="conversation-form-button conversation-form-submit"
            >
                <i className="ri-send-plane-2-line"></i>
            </button>
            </div>
        </div>
      }

    </>
  );
}
