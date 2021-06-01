'use strict'

var tabs = ["home","geometry","projects","pixel","contact"];

function selectTab(tab)
{
    for (let option of tabs)
    {
        if (option == tab)
        {
            let content = document.getElementById(option);
            let title = document.getElementById(option+"Tab");
            content.classList.remove("hidden");
            title.classList.add("tab-item-selected");
        }
        else
        {
            let content = document.getElementById(option);
            let title = document.getElementById(option+"Tab");
            content.classList.add("hidden");
            title.classList.remove("tab-item-selected");
        }
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