import React from 'react';
import './Pages.css';

const Projects = () => {
    return (
        <main className="page page-content page-projects">
            <div className="container">
                <h1 className="page-title">Projelerimiz</h1>
            </div>
            
            <section className="container">
                <div className="under-construction">
                    <div className="construction-icon">
                        <div className="cone">🚧</div>
                        <div className="cone">🚧</div>
                        <div className="cone">🚧</div>
                    </div>
                    <h2 className="construction-title">Yapım Aşamasında</h2>
                    <p className="construction-message">
                        Bu sayfa şu anda yapım aşamasındadır ve yakında hizmete açılacaktır.
                    </p>
                    <div className="construction-loader">
                        <div className="loader-bar"></div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Projects;