import { DateTime } from "@spt-aki/models/enums/DateTime";
import { PlayersSpawnPlace } from "@spt-aki/models/enums/PlayersSpawnPlace";
import { RaidMode } from "@spt-aki/models/enums/RaidMode";
import { BotAmount } from "@spt-aki/models/enums/RaidSettings/BotAmount";
import { BotDifficulty } from "@spt-aki/models/enums/RaidSettings/BotDifficulty";
import { CloudinessType } from "@spt-aki/models/enums/RaidSettings/TimeAndWeather/CloudinessType";
import { FogType } from "@spt-aki/models/enums/RaidSettings/TimeAndWeather/FogType";
import { RainType } from "@spt-aki/models/enums/RaidSettings/TimeAndWeather/RainType";
import { TimeFlowType } from "@spt-aki/models/enums/RaidSettings/TimeAndWeather/TimeFlowType";
import { WindSpeed } from "@spt-aki/models/enums/RaidSettings/TimeAndWeather/WindSpeed";
import { SideType } from "@spt-aki/models/enums/SideType";
export interface IRaidSettings {
    location: string;
    timeVariant: DateTime;
    raidMode: RaidMode;
    metabolismDisabled: boolean;
    playersSpawnPlace: PlayersSpawnPlace;
    timeAndWeatherSettings: TimeAndWeatherSettings;
    botSettings: BotSettings;
    wavesSettings: WavesSettings;
    side: SideType;
}
export interface TimeAndWeatherSettings {
    isRandomTime: boolean;
    isRandomWeather: boolean;
    cloudinessType: CloudinessType;
    rainType: RainType;
    fogType: FogType;
    windType: WindSpeed;
    timeFlowType: TimeFlowType;
    hourOfDay: number;
}
export interface BotSettings {
    isScavWars: boolean;
    botAmount: BotAmount;
}
export interface WavesSettings {
    botAmount: BotAmount;
    botDifficulty: BotDifficulty;
    isBosses: boolean;
    isTaggedAndCursed: boolean;
}
