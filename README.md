# Clippy
Play Twitch Clips on demand
## Usage
To use, go to https://sugoidogo.github.io/clippy and authorize clippy.
Then adjust the settings to your liking, and click the `Copy Overlay URL` button.
You can paste that URL into your browser source and start using the configured chat commands.
## Settings
The settings are listed in the order they are applied.
Some settings are best-effort filters, which will adjust themselves if no clips match your criteria.
Strict filters don't self-adjust and will simply disable if no clips match.
| Name | Type | Description |
|   -  |    -   |   -   |
| Auto-play clips from my channel | Strict | Instead of waiting for chat commands, loop clips from the broadcaster's channel |
| Search the last # clips | Strict | The number of clips to filter through |
| Don't use clips already played this session | Strict | Remember what clips have played and avoid re-playing them. History is reset if all clips have been played. |
| Find clips in my category | Strict | Filters clips by whatever category you are currently streaming. |
| Find clips in the target's category | strict | Filter clips by whatever category the target's channel has set |
| Max clip duration | best-effort | Clips longer than this will be filtered out. If no clips are left, the filter is re-applied using the duration of the shortest clip availible. |
| Most Viewed | best-effort | This filter always uses the best-effort fallback to filter clips by the view count of the highest viewed clip |
| Clip cutoff | Strict | This starts a timer when the clip starts playing that will end playback, cutting off the clip if it's too long.