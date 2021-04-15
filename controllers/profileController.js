module.exports = {
    index: (req, res) => {
        return res.render("profile")
    },

    edit: (req, res) => {
        return res.render("profile-edit")
    }
    
}