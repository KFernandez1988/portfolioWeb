const jwt = require('jsonwebtoken');

exports.logIn = (req, res) => {
    const { user, password } = req.body;

    try {
        const staticUser = "Kevin_Fernandez";
        const staticpPassword = "Nerd_Progammer";
        if (user.toEqual(staticUser)
            && password.toEqual(staticpPassword)) {
            const token = jwt.sign({ id: staticUser }, process.env.SECRET);
            res.status(200).json({
                token,
                loggedIn: true,
            });
     }

    } catch (e) {
    
    }
}