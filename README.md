# Clippy
Play Twitch Clips on demand
## Usage
To use, go to https://sugoidogo.github.io/clippy and authorize clippy.
Then adjust the settings to your liking, and click the `Copy Overlay URL` button.
You can paste that URL into your browser source and start using the configured chat commands.
## Settings
The settings are listed in the order they are applied.
Most settings are best-effort filters, which will adjust or skip themselves if no clips pass the filter.
| Name | Description |
|   -  |   -   |
| Auto-play clips from my channel | Instead of waiting for chat commands, loop clips from the broadcaster's channel |
| Automatically send the first clippy command when getting raided | Play a clip and shoutout any channel that raids you automatically |
| Search the last # clips | The number of clips to filter through |
| Don't use clips already played this session | Remember what clips have played and avoid re-playing them. History is reset if all clips have been played. |
| Find clips in my category | Filters clips by whatever category you are currently streaming. |
| Find clips in the target's category | Filter clips by whatever category the target's channel has set |
| Max clip duration  | Clips longer than this will be filtered out. If no clips are left, the filter is re-applied using the duration of the shortest clip availible. |
| Most Viewed  | This filter always uses the best-effort fallback to filter clips by the view count of the highest viewed clip |
| Clip cutoff | This starts a timer when the clip starts playing that will end playback, cutting off the clip if it's too long. Make sure to use max clip duration with this setting to avoid having to cut clips. |
## Customization
The options in the right-side panel are for customizing the overlay to your channel.
| Name | Description |
| - | - |
| Target Prefix | The text displayed above the name of the streamer, next to their profile image |
| Custom CSS URI | Use this to apply custom styling to the overlay, like fonts and text size |
| Custom CSS File | Same as above, but load from file instead of URL |
| Send /shoutout command | Use Twitch's new [shoutout command](https://help.twitch.tv/s/article/shoutouts) |
| Send a message in chat | Send a message as soon as a valid shoutout target is found |

Clippy comes with some custom CSS files to get you started:
- `inline.css`: Display the header at the top of the video instead of above it
- `no-header.css`: Hide the header entirely
## Support
- Get support via [Discord](https://discord.gg/zxDnYSvMNw)
- Give support via [PayPal](https://paypal.me/SugoiDogo)
