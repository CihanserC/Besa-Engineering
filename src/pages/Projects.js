import React from 'react';
import './Pages.css';

const Projects = () => {
    return (
        <main className="page page-content page-projects">
            <div className="container">
                <h1 className="page-title">Projelerimiz</h1>
            </div>
            
            <section className="container">
                <div className="empty-page-message">
                    <h2>Yapım Aşamasında</h2>
                    <p>Bu sayfa şu anda yapım aşamasındadır ve yakında hizmete açılacaktır.</p>
                </div>
            </section>
        </main>
    );
};

export default Projects;