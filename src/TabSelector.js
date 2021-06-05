'use strict'

var tabs = ["home","geometry","projects","pixel","contact"];
var geometryText = '<h1>Computational Geometry Programs</h1> <p> In the Fall of 2020 I took what became my favorite class at Stony Brook University, Computational Geometry. For an extra credit, my professor asked us to build a demonstration program to show students how the Kirkpatrick Algorithm for planar point location works. After successfully doing so, I decided to devote that winter to create similar programs for other algorithms for the course. Here are those programs and their tutorial videos. </p> <h2> Point in Polygon Demonstrator </h2> <iframe width="560" height="315" src="https://www.youtube.com/embed/vxgljXsfirg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <div> The program can be downloaded <a href = "https://github.com/Rajalo/PointInPolygon/releases/tag/v1.0"> here</a> The source files are in the associated repository: <a href = "https://github.com/Rajalo/PointInPolygon"> https://github.com/Rajalo/PointInPolygon</a> The purpose of this program is to demonstrate Kirkpatricks Algorithm for planar point location. </div> <h2> Guarding Problem Tool </h2> <iframe width="560" height="315" src="https://www.youtube.com/embed/7_aX1Z4bn78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <div> The program can be downloaded <a href = "https://github.com/Rajalo/Guarding-Problem-Tool/releases/tag/1.0"> here</a> The source files are in the associated repository: <a href = "https://github.com/Rajalo/Guarding-Problem-Tool">https://github.com/Rajalo/Guarding-Problem-Tool</a> The purpose of this program is to help users find the guarding number for a perfect polygon. </div> <h2> Graham Scan Demonstrator </h2> <iframe width="560" height="315" src="https://www.youtube.com/embed/8fFe1Fa7pW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <div> The program can be downloaded <a href = "https://github.com/Rajalo/Graham-Scan-Demonstrator/releases/tag/1.0"> here</a> The source files are in the associated repository: <a href = "https://github.com/Rajalo/Graham-Scan-Demonstrator">https://github.com/Rajalo/Graham-Scan-Demonstrator</a> The purpose of this program is to demonstrate the Graham Scan algorithm for finding the convex hull of points in the plane. </div> <h2> Ear Clipping Demonstrator </h2> <iframe width="560" height="315" src="https://www.youtube.com/embed/F6jFYrD8-n8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <div> The program can be downloaded <a href = "https://github.com/Rajalo/Ear-Clipping-Triangulation/releases/tag/1.0"> here</a> The source files are in the associated repository: <a href = "https://github.com/Rajalo/Ear-Clipping-Triangulation"> https://github.com/Rajalo/Ear-Clipping-Triangulation</a> The purpose of this program is to demonstrate the Ear Clipping algorithm for triangulating a polygon. </div> <h2> Hertel Mehlhorn Convex Decomposition </h2> <iframe width="560" height="315" src="https://www.youtube.com/embed/uIw6aEvSynY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <div> The program can be downloaded <a href = "https://github.com/Rajalo/Hertel-Mehlhorn-Convex-Decomposition/releases/tag/1.0"> here</a> The source files are in the associated repository: <a href = "https://github.com/Rajalo/Hertel-Mehlhorn-Convex-Decomposition"> https://github.com/Rajalo/Hertel-Mehlhorn-Convex-Decomposition</a> The purpose of this program is to demonstrate the Hertel-Mehlorn Algorithm for finding a 4-approximation for the optimal convex decomposition of a given polygon. </div> <h2> Counting Triangulations Demonstrator </h2> <iframe width="560" height="315" src="https://www.youtube.com/embed/KyPfplw5fGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <div> The program can be downloaded <a href = "https://github.com/Rajalo/Hertel-Mehlhorn-Convex-Decomposition/releases/tag/1.0"> here</a> The source files are in the associated repository: <a href = "https://github.com/Rajalo/Hertel-Mehlhorn-Convex-Decomposition"> https://github.com/Rajalo/Hertel-Mehlhorn-Convex-Decomposition</a> The purpose of this program is to demonstrate a dynamic programming approach to counting the number of possible triangulations of a given polygon. </div> <h2> Fisk Method Demonstrator </h2> <iframe width="560" height="315" src="https://www.youtube.com/embed/dX7KeuXh350" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <div> The program can be downloaded <a href = "https://github.com/Rajalo/Fisk-Method/releases/tag/1.0"> here</a> The source files are in the associated repository: <a href = "https://github.com/Rajalo/Fisk-Method"> https://github.com/Rajalo/Fisk-Method</a> The purpose of this program is to demonstrate the method Steve Fisk used in his famously short proof of the Art Gallery Theorem. </div> <h2> PSLG Triangulation Demonstrator </h2> <iframe width="560" height="315" src="https://www.youtube.com/embed/Hax86JU7hHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <div> The program can be downloaded <a href = "https://github.com/Rajalo/PSLG-Triangulation-Demonstrator/releases/tag/1.0"> here</a> The source files are in the associated repository: <a href = "https://github.com/Rajalo/PSLG-Triangulation-Demonstrator"> https://github.com/Rajalo/PSLG-Triangulation-Demonstrator</a> The purpose of this program is to demonstrate a sweep line algorithm for triangulating a planar straight line graph. </div>';

function selectTab(tab)
{
    for (let option of tabs)
    {
        if (option == tab)
        {
            let content = document.getElementById(option);
            let title = document.getElementById(option+"Tab");
            content.classList.remove("hidden");
            if (title.classList.contains("tab-itemDark"))
            {
                title.classList.add("tab-item-selectedDark");
            }
            else 
            {
                 title.classList.add("tab-item-selected");

            }
            if (tab == "geometry" && content.innerHTML == "BLANK")
            {
                content.innerHTML = geometryText;
            }
        }
        else
        {
            let content = document.getElementById(option);
            let title = document.getElementById(option+"Tab");
            content.classList.add("hidden");
            title.classList.remove("tab-item-selected");
            title.classList.remove("tab-item-selectedDark");
        }
        window.scrollTo(0,0);
    }
}
export default function buildTabs()
{
    for (let tab of tabs)
    {
        let elem = document.getElementById(tab+"Tab");
        elem.onmousedown = () => {selectTab(tab)};
    }
}
