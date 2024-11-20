const locales: Record<string, string> = {
  'en': '🇬🇧',
  'az': '🇦🇿',
  'bg': '🇧🇬',
  'de': '🇩🇪',
  'fo': '🇫🇴',
  'fj': '🇫🇯',
  'fi': '🇫🇮',
  'fr': '🇫🇷',
  'ht': '🇭🇹',
  'hr': '🇭🇷',
  'hu': '🇭🇺',
  'id': '🇮🇩',
  'is': '🇮🇸',
  'it': '🇮🇹',
  'rw': '🇷🇼',
  'lv': '🇱🇻',
  'lt': '🇱🇹',
  'mh': '🇲🇭',
  'mk': '🇲🇰',
  'mg': '🇲🇬',
  'mt': '🇲🇹',
  'mn': '🇲🇳',
  'nl': '🇳🇱',
  'no': '🇳🇴',
  'pl': '🇵🇱',
  'pt': '🇵🇹',
  'ro': '🇷🇴',
  'ru': '🇷🇺',
  'sk': '🇸🇰',
  'so': '🇸🇴',
  'es': '🇪🇸',
  'th': '🇹🇭',
  'to': '🇹🇴',
  'tr': '🇹🇷',
  'uz': '🇺🇿',
  'aa-ER': '🇪🇷',
  'aa': '🇪🇷',
  'af-NA': '🇳🇦',
  'af': '🇳🇦',
  'af-ZA': '🇿🇦',
  'am-ET': '🇪🇹',
  'am': '🇪🇹',
  'ar-EG': '🇪🇬',
  'ar': '🇪🇬',
  'ar-DZ': '🇩🇿',
  'ar-BH': '🇧🇭',
  'ar-DJ': '🇩🇯',
  'ar-ER': '🇪🇷',
  'ar-IQ': '🇮🇶',
  'ar-IL': '🇮🇱',
  'ar-YE': '🇾🇪',
  'ar-JO': '🇯🇴',
  'ar-QA': '🇶🇦',
  'ar-KM': '🇰🇲',
  'ar-KW': '🇰🇼',
  'ar-LB': '🇱🇧',
  'ar-LY': '🇱🇾',
  'ar-MA': '🇲🇦',
  'ar-MR': '🇲🇷',
  'ar-OM': '🇴🇲',
  'ar-PS': '🇵🇸',
  'ar-SA': '🇸🇦',
  'ar-SO': '🇸🇴',
  'ar-SD': '🇸🇩',
  'ar-SY': '🇸🇾',
  'ar-TD': '🇹🇩',
  'ar-TN': '🇹🇳',
  'ar-AE': '🇦🇪',
  'ay-BO': '🇧🇴',
  'ay': '🇧🇴',
  'az-AZ': '🇦🇿',
  'be-BY': '🇧🇾',
  'be': '🇧🇾',
  'bn-BD': '🇧🇩',
  'bn': '🇧🇩',
  'bi-VU': '🇻🇺',
  'bi': '🇻🇺',
  'bs-BA': '🇧🇦',
  'bs': '🇧🇦',
  'bs-ME': '🇲🇪',
  'bg-BG': '🇧🇬',
  'byn-ER': '🇪🇷',
  'byn': '🇪🇷',
  'ca-AD': '🇦🇩',
  'ca': '🇦🇩',
  'cs-CZ': '🇨🇿',
  'cs': '🇨🇿',
  'ch-GU': '🇬🇺',
  'ch': '🇬🇺',
  'ch-MP': '🇲🇵',
  'da-DK': '🇩🇰',
  'da': '🇩🇰',
  'de-BE': '🇧🇪',
  'de-DE': '🇩🇪',
  'de-LI': '🇱🇮',
  'de-LU': '🇱🇺',
  'de-AT': '🇦🇹',
  'de-CH': '🇨🇭',
  'de-VA': '🇻🇦',
  'dv-MV': '🇲🇻',
  'dv': '🇲🇻',
  'dz-BT': '🇧🇹',
  'dz': '🇧🇹',
  'el-GR': '🇬🇷',
  'el': '🇬🇷',
  'el-CY': '🇨🇾',
  'en-AS': '🇦🇸',
  'en-AI': '🇦🇮',
  'en-AQ': '🇦🇶',
  'en-AG': '🇦🇬',
  'en-AU': '🇦🇺',
  'en-BS': '🇧🇸',
  'en-BB': '🇧🇧',
  'en-BZ': '🇧🇿',
  'en-BM': '🇧🇲',
  'en-BW': '🇧🇼',
  'en-IO': '🇮🇴',
  'en-CK': '🇨🇰',
  'en-CW': '🇨🇼',
  'en-DM': '🇩🇲',
  'en-ER': '🇪🇷',
  'en-SZ': '🇸🇿',
  'en-FK': '🇫🇰',
  'en-FJ': '🇫🇯',
  'en-FM': '🇫🇲',
  'en-GM': '🇬🇲',
  'en-GH': '🇬🇭',
  'en-GI': '🇬🇮',
  'en-GD': '🇬🇩',
  'en-GU': '🇬🇺',
  'en-GG': '🇬🇬',
  'en-GY': '🇬🇾',
  'en-HM': '🇭🇲',
  'en-HK': '🇭🇰',
  'en-IN': '🇮🇳',
  'en-IM': '🇮🇲',
  'en-IE': '🇮🇪',
  'en-JM': '🇯🇲',
  'en-JE': '🇯🇪',
  'en-VG': '🇻🇬',
  'en-VI': '🇻🇮',
  'en-KY': '🇰🇾',
  'en-CM': '🇨🇲',
  'en-CA': '🇨🇦',
  'en-KE': '🇰🇪',
  'en-KI': '🇰🇮',
  'en-UM': '🇺🇲',
  'en-CC': '🇨🇨',
  'en-LS': '🇱🇸',
  'en-LR': '🇱🇷',
  'en-MW': '🇲🇼',
  'en-MT': '🇲🇹',
  'en-MH': '🇲🇭',
  'en-MU': '🇲🇺',
  'en-MS': '🇲🇸',
  'en-NA': '🇳🇦',
  'en-NR': '🇳🇷',
  'en-NZ': '🇳🇿',
  'en-NG': '🇳🇬',
  'en-NU': '🇳🇺',
  'en-MP': '🇲🇵',
  'en-NF': '🇳🇫',
  'en-PK': '🇵🇰',
  'en-PW': '🇵🇼',
  'en-PG': '🇵🇬',
  'en-PH': '🇵🇭',
  'en-PN': '🇵🇳',
  'en-PR': '🇵🇷',
  'en-RW': '🇷🇼',
  'en-MF': '🇲🇫',
  'en-SB': '🇸🇧',
  'en-ZM': '🇿🇲',
  'en-WS': '🇼🇸',
  'en-SC': '🇸🇨',
  'en-SL': '🇸🇱',
  'en-ZW': '🇿🇼',
  'en-SG': '🇸🇬',
  'en-SX': '🇸🇽',
  'en-SH': '🇸🇭',
  'en-KN': '🇰🇳',
  'en-LC': '🇱🇨',
  'en-VC': '🇻🇨',
  'en-ZA': '🇿🇦',
  'en-SD': '🇸🇩',
  'en-GS': '🇬🇸',
  'en-SS': '🇸🇸',
  'en-TZ': '🇹🇿',
  'en-TK': '🇹🇰',
  'en-TO': '🇹🇴',
  'en-TT': '🇹🇹',
  'en-TC': '🇹🇨',
  'en-TV': '🇹🇻',
  'en-UG': '🇺🇬',
  'en-VU': '🇻🇺',
  'en-US': '🇺🇸',
  'en-GB': '🇬🇧',
  'en-CX': '🇨🇽',
  'et-EE': '🇪🇪',
  'et': '🇪🇪',
  'fan-GQ': '🇬🇶',
  'fan': '🇬🇶',
  'fo-FO': '🇫🇴',
  'fa-IR': '🇮🇷',
  'fa': '🇮🇷',
  'fj-FJ': '🇫🇯',
  'fi-FI': '🇫🇮',
  'fr-GQ': '🇬🇶',
  'fr-BE': '🇧🇪',
  'fr-BJ': '🇧🇯',
  'fr-BF': '🇧🇫',
  'fr-BI': '🇧🇮',
  'fr-CD': '🇨🇩',
  'fr-DJ': '🇩🇯',
  'fr-CI': '🇨🇮',
  'fr-FR': '🇫🇷',
  'fr-GF': '🇬🇫',
  'fr-PF': '🇵🇫',
  'fr-TF': '🇹🇫',
  'fr-MC': '🇲🇨',
  'fr-GA': '🇬🇦',
  'fr-GP': '🇬🇵',
  'fr-GG': '🇬🇬',
  'fr-GN': '🇬🇳',
  'fr-HT': '🇭🇹',
  'fr-JE': '🇯🇪',
  'fr-CM': '🇨🇲',
  'fr-CA': '🇨🇦',
  'fr-KM': '🇰🇲',
  'fr-LB': '🇱🇧',
  'fr-LU': '🇱🇺',
  'fr-MG': '🇲🇬',
  'fr-ML': '🇲🇱',
  'fr-MQ': '🇲🇶',
  'fr-YT': '🇾🇹',
  'fr-NC': '🇳🇨',
  'fr-NE': '🇳🇪',
  'fr-CG': '🇨🇬',
  'fr-RE': '🇷🇪',
  'fr-RW': '🇷🇼',
  'fr-MF': '🇲🇫',
  'fr-BL': '🇧🇱',
  'fr-CH': '🇨🇭',
  'fr-SN': '🇸🇳',
  'fr-SC': '🇸🇨',
  'fr-PM': '🇵🇲',
  'fr-TG': '🇹🇬',
  'fr-TD': '🇹🇩',
  'fr-VU': '🇻🇺',
  'fr-VA': '🇻🇦',
  'fr-WF': '🇼🇫',
  'fr-CF': '🇨🇫',
  'ff-BF': '🇧🇫',
  'ff': '🇧🇫',
  'ff-GN': '🇬🇳',
  'ga-IE': '🇮🇪',
  'ga': '🇮🇪',
  'gv-IM': '🇮🇲',
  'gv': '🇮🇲',
  'gn-AR': '🇦🇷',
  'gn': '🇦🇷',
  'gn-PY': '🇵🇾',
  'ht-HT': '🇭🇹',
  'he-IL': '🇮🇱',
  'he': '🇮🇱',
  'hif-FJ': '🇫🇯',
  'hif': '🇫🇯',
  'hi-IN': '🇮🇳',
  'hi': '🇮🇳',
  'hr-BA': '🇧🇦',
  'hr-HR': '🇭🇷',
  'hr-ME': '🇲🇪',
  'hu-HU': '🇭🇺',
  'hy-AM': '🇦🇲',
  'hy': '🇦🇲',
  'hy-CY': '🇨🇾',
  'id-ID': '🇮🇩',
  'is-IS': '🇮🇸',
  'it-IT': '🇮🇹',
  'it-SM': '🇸🇲',
  'it-CH': '🇨🇭',
  'it-VA': '🇻🇦',
  'ja-JP': '🇯🇵',
  'ja': '🇯🇵',
  'kl-GL': '🇬🇱',
  'kl': '🇬🇱',
  'ka-GE': '🇬🇪',
  'ka': '🇬🇪',
  'kk-KZ': '🇰🇿',
  'kk': '🇰🇿',
  'km-KH': '🇰🇭',
  'km': '🇰🇭',
  'rw-RW': '🇷🇼',
  'ky-KG': '🇰🇬',
  'ky': '🇰🇬',
  'kg-CD': '🇨🇩',
  'kg': '🇨🇩',
  'ko-KP': '🇰🇵',
  'ko': '🇰🇵',
  'ko-KR': '🇰🇷',
  'kun-ER': '🇪🇷',
  'kun': '🇪🇷',
  'ku-IQ': '🇮🇶',
  'ku': '🇮🇶',
  'lo-LA': '🇱🇦',
  'lo': '🇱🇦',
  'la-VA': '🇻🇦',
  'la': '🇻🇦',
  'lv-LV': '🇱🇻',
  'ln-CD': '🇨🇩',
  'ln': '🇨🇩',
  'ln-CG': '🇨🇬',
  'lt-LT': '🇱🇹',
  'lb-LU': '🇱🇺',
  'lb': '🇱🇺',
  'lu-CD': '🇨🇩',
  'lu': '🇨🇩',
  'mh-MH': '🇲🇭',
  'mk-MK': '🇲🇰',
  'mg-MG': '🇲🇬',
  'mt-MT': '🇲🇹',
  'mn-MN': '🇲🇳',
  'mi-NZ': '🇳🇿',
  'mi': '🇳🇿',
  'ms-BN': '🇧🇳',
  'ms': '🇧🇳',
  'ms-SG': '🇸🇬',
  'my-MM': '🇲🇲',
  'my': '🇲🇲',
  'na-NR': '🇳🇷',
  'na': '🇳🇷',
  'nr-ZA': '🇿🇦',
  'nr': '🇿🇦',
  'nd-ZW': '🇿🇼',
  'nd': '🇿🇼',
  'ne-NP': '🇳🇵',
  'ne': '🇳🇵',
  'nl-AW': '🇦🇼',
  'nl-BE': '🇧🇪',
  'nl-CW': '🇨🇼',
  'nl-BQ': '🇧🇶',
  'nl-NL': '🇳🇱',
  'nl-MF': '🇲🇫',
  'nl-SX': '🇸🇽',
  'nl-SR': '🇸🇷',
  'nn-BV': '🇧🇻',
  'nn': '🇧🇻',
  'nn-NO': '🇳🇴',
  'nb-BV': '🇧🇻',
  'nb': '🇧🇻',
  'nb-NO': '🇳🇴',
  'no-BV': '🇧🇻',
  'no-NO': '🇳🇴',
  'no-SJ': '🇸🇯',
  'nrb-ER': '🇪🇷',
  'nrb': '🇪🇷',
  'ny-MW': '🇲🇼',
  'ny': '🇲🇼',
  'pa-AW': '🇦🇼',
  'pa': '🇦🇼',
  'pa-CW': '🇨🇼',
  'pl-PL': '🇵🇱',
  'pt-AO': '🇦🇴',
  'pt-GQ': '🇬🇶',
  'pt-BR': '🇧🇷',
  'pt-GW': '🇬🇼',
  'pt-CV': '🇨🇻',
  'pt-MO': '🇲🇴',
  'pt-MZ': '🇲🇿',
  'pt-TL': '🇹🇱',
  'pt-PT': '🇵🇹',
  'pt-ST': '🇸🇹',
  'ps-AF': '🇦🇫',
  'ps': '🇦🇫',
  'qu-BO': '🇧🇴',
  'qu': '🇧🇴',
  'rar-CK': '🇨🇰',
  'rar': '🇨🇰',
  'rm-CH': '🇨🇭',
  'rm': '🇨🇭',
  'ro-MD': '🇲🇩',
  'ro-RO': '🇷🇴',
  'rtm-FJ': '🇫🇯',
  'rtm': '🇫🇯',
  'rn-BI': '🇧🇮',
  'rn': '🇧🇮',
  'ru-AQ': '🇦🇶',
  'ru-BY': '🇧🇾',
  'ru-KZ': '🇰🇿',
  'ru-KG': '🇰🇬',
  'ru-RU': '🇷🇺',
  'ru-TJ': '🇹🇯',
  'ru-TM': '🇹🇲',
  'ru-UZ': '🇺🇿',
  'sg-CF': '🇨🇫',
  'sg': '🇨🇫',
  'si-LK': '🇱🇰',
  'si': '🇱🇰',
  'sk-SK': '🇸🇰',
  'sk-CZ': '🇨🇿',
  'sl-SI': '🇸🇮',
  'sl': '🇸🇮',
  'sm-AS': '🇦🇸',
  'sm': '🇦🇸',
  'sm-WS': '🇼🇸',
  'sn-ZW': '🇿🇼',
  'sn': '🇿🇼',
  'so-SO': '🇸🇴',
  'st-LS': '🇱🇸',
  'st': '🇱🇸',
  'st-ZA': '🇿🇦',
  'es-GQ': '🇬🇶',
  'es-AR': '🇦🇷',
  'es-BZ': '🇧🇿',
  'es-BO': '🇧🇴',
  'es-CL': '🇨🇱',
  'es-CR': '🇨🇷',
  'es-DO': '🇩🇴',
  'es-EC': '🇪🇨',
  'es-SV': '🇸🇻',
  'es-GU': '🇬🇺',
  'es-GT': '🇬🇹',
  'es-HN': '🇭🇳',
  'es-CO': '🇨🇴',
  'es-CU': '🇨🇺',
  'es-MX': '🇲🇽',
  'es-NI': '🇳🇮',
  'es-PA': '🇵🇦',
  'es-PY': '🇵🇾',
  'es-PE': '🇵🇪',
  'es-PR': '🇵🇷',
  'es-ES': '🇪🇸',
  'es-UY': '🇺🇾',
  'es-VE': '🇻🇪',
  'es-EH': '🇪🇭',
  'sq-AL': '🇦🇱',
  'sq': '🇦🇱',
  'sq-XK': '🇽🇰',
  'sq-ME': '🇲🇪',
  'sr-BA': '🇧🇦',
  'sr': '🇧🇦',
  'sr-XK': '🇽🇰',
  'sr-ME': '🇲🇪',
  'sr-RS': '🇷🇸',
  'ss-SZ': '🇸🇿',
  'ss': '🇸🇿',
  'ss-ZA': '🇿🇦',
  'ssy-ER': '🇪🇷',
  'ssy': '🇪🇷',
  'sw-CD': '🇨🇩',
  'sw': '🇨🇩',
  'sw-KE': '🇰🇪',
  'sw-TZ': '🇹🇿',
  'sw-UG': '🇺🇬',
  'sv-AX': '🇦🇽',
  'sv': '🇦🇽',
  'sv-FI': '🇫🇮',
  'sv-SE': '🇸🇪',
  'ta-SG': '🇸🇬',
  'ta': '🇸🇬',
  'ta-LK': '🇱🇰',
  'tg-TJ': '🇹🇯',
  'tg': '🇹🇯',
  'th-TH': '🇹🇭',
  'tig-ER': '🇪🇷',
  'tig': '🇪🇷',
  'ti-ER': '🇪🇷',
  'ti': '🇪🇷',
  'to-TO': '🇹🇴',
  'tn-BW': '🇧🇼',
  'tn': '🇧🇼',
  'tn-ZA': '🇿🇦',
  'ts-ZA': '🇿🇦',
  'ts': '🇿🇦',
  'tk-AF': '🇦🇫',
  'tk': '🇦🇫',
  'tk-TM': '🇹🇲',
  'tr-TR': '🇹🇷',
  'tr-CY': '🇨🇾',
  'uk-UA': '🇺🇦',
  'uk': '🇺🇦',
  'ur-PK': '🇵🇰',
  'ur': '🇵🇰',
  'uz-AF': '🇦🇫',
  'uz-UZ': '🇺🇿',
  've-ZA': '🇿🇦',
  've': '🇿🇦',
  'vi-VN': '🇻🇳',
  'vi': '🇻🇳',
  'xh-ZA': '🇿🇦',
  'xh': '🇿🇦',
  'zh-CN': '🇨🇳',
  'zh': '🇨🇳',
  'zh-HK': '🇭🇰',
  'zh-MO': '🇲🇴',
  'zh-SG': '🇸🇬',
  'zh-TW': '🇹🇼',
  'ms-MY': '🇲🇾',
  'zu-ZA': '🇿🇦',
  'zu': '🇿🇦'
}

export default eventHandler(async () => locales)
