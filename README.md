# Clippy
Play Twitch Clips on demand
## Usage
To use, go to https://sugoidogo.github.io/clippy/v2 and authorize clippy.
Type in a name for your clippy instance and hit `Create New Instance`.
Then adjust the settings to your liking, and click the `Copy Overlay URL` button.
That url contains all your settings for the selected instance of clippy.
Use it as a browser source in obs or any other streaming software.
## Support
Support information for all my software is on my [GitHub profile](https://github.com/sugoidogo)
## Variables
In the `Behavior` section, you'll notice the default values have things like `$display_name` or `$title`.
These are variables, and clippy has a dynamic variable system that lets you use any if the info the twitch api is sending clippy.
The full list of variables, as pulled from your own twitch account, are viewable [here](v2/vars.html) (after authorizing clippy).