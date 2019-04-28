
(async () => {
    let schedule_base = await window.ky.default.get("/static/whatsnext/schedule2018-19.json").json()
    let instance = new whatsnext.Whatsnext(schedule_base)
    setInterval(() => {
        $("#thisClassCountdown").text(instance.thisClassCountdown())
        $("#nextClassCountdown").text(instance.enumerateNextClassCountdown())
        $("#endOfSchoolCountdown").text(instance.endOfSchoolCountdown())
        let thisClass = instance.thisClass()
        let nextClass = instance.enumerateNextClass()
        $("#thisClass").text(thisClass? thisClass.name: "")
        $("#nextClass").text(nextClass? nextClass.name: "")
    }, 1000)
    console.log(schedule_base)
})()