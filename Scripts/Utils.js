export function _(query)
{
    let output = document.querySelectorAll(query);

    if(query.charAt(0) == '#')
    {
        return [...output][0]
    }
    else
    {
        return [...output]
    }
}

export function _new(type)
{
    return document.createElement(type);
}

export function _addClass(htmlElement, className)
{
    htmlElement.classList.add(className);
}

export function _setAtributes(htmlElement ,attrObjArray)
{
    for(var key in attrObjArray)
    {
        htmlElement.setAttribute(key.attribute, key.attributeValue);
    }
}