import React, { useState } from 'react';
export default function Portfolio() {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    return (
        <section class="page-section">
            <h2 id="news2">Portfolio</h2>
            <div class="flex-container">
                <a class="flex-item image1" href="https://andrew-surrena.github.io/basketball_team_fav/" target="_blank" onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}>
                    <div>
                        <h3>Basketball Team Tracker</h3>
                    </div>
                    <span>
                        {isHovered1 && (
                            <a href="https://github.com/andrew-surrena/basketball_team_fav" target="_blank">
                                <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Github Logo" className="githublink" />
                            </a>
                        )}
                    </span>
                </a>
                <a class="flex-item image2" href="https://youtu.be/k1VVB97FkOA" onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}>
                    <div>
                        <h3>README Generator</h3>
                    </div>
                    <span>
                        {isHovered2 && (
                            <a href="https://github.com/andrew-surrena/README.md_generator/tree/main/generated_files" target="_blank">
                                <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Github Logo" className="githublink" />
                            </a>
                        )}
                    </span>
                </a>
                <a class="flex-item image3" href="https://youtu.be/lycbcbnct08" onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}>
                    <div>
                        <h3>Vehicle Builder</h3>
                    </div>
                    <span>
                        {isHovered3 && (
                            <a href="https://github.com/andrew-surrena/vehicle_builder" target="_blank">
                                <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Github Logo" className="githublink" />
                            </a>
                        )}
                    </span>
                </a>
                <a class="flex-item image4" href="https://full-stack-weather-forecast.onrender.com" target="_blank" onMouseEnter={() => setIsHovered4(true)}
                    onMouseLeave={() => setIsHovered4(false)}>
                    <div>
                        <h3>Weather Forecast</h3>
                    </div>
                    <span>
                        {isHovered4 && (
                            <a href="https://github.com/andrew-surrena/full_stack_weather_forecast" target="_blank">
                                <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Github Logo" className="githublink" />
                            </a>
                        )}
                    </span>
                </a>
                <a class="flex-item image5" href="https://youtu.be/WmUd5jjpS7U" target="_blank" onMouseEnter={() => setIsHovered5(true)}
                    onMouseLeave={() => setIsHovered5(false)}>
                    <div>
                        <h3>Employee Tracker</h3>
                    </div>
                    <span>
                        {isHovered5 && (
                            <a href="https://github.com/andrew-surrena/employee_tracker_command_line_app" target="_blank">
                                <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Github Logo" className="githublink" />
                            </a>
                        )}
                    </span>
                </a>
            </div>
        </section>
    )
}