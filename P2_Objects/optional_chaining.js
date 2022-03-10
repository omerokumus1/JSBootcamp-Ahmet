// ? -> objelere erişmenin güvenli yolu
{
    let o = {}
    // console.log(o.school.name) // unsafe

    console.log(o.school?.name) // safe
    // optional bir alan varsa veya bir objenin null olabileceğini düşünüyorsan kullan

    // safe function call
    o.introduce?.()

    // safe key access
    o?.["name"]

}