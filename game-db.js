// Editable JSON-compatible fantasy RPG database.
window.GAME_DB = {
  "meta": {
    "version": "3.2",
    "title": "에버돈",
    "subtitle": "왕국의 동료들",
    "description": "마을에서 시작해 나만의 직업 빌드를 완성하는 판타지 액션 RPG"
  },
  "theme": {
    "fonts": {
      "body": "\"Noto Sans KR\", \"Malgun Gothic\", \"Apple SD Gothic Neo\", system-ui, sans-serif",
      "display": "\"Noto Serif KR\", \"Nanum Myeongjo\", \"Batang\", \"AppleMyungjo\", Georgia, serif"
    },
    "colors": {
      "paper": "#f0e5cd",
      "paperLight": "#fff6e1",
      "paperShade": "#e4d3ae",
      "paperEdge": "#c4aa77",
      "wood": "#403426",
      "woodLight": "#55432e",
      "woodDeep": "#29241c",
      "brass": "#b49558",
      "brassLight": "#e8cf94",
      "brassDark": "#816535",
      "ivory": "#fff1d1",
      "oxblood": "#7f4436",
      "oxbloodLight": "#995644",
      "olive": "#4e6949",
      "iron": "#687568",
      "deepInk": "#2b241b",
      "shadowColor": "#080705",
      "hpFill": "#944d3e",
      "staminaFill": "#b08a43",
      "guardFill": "#708078",
      "stoneDark": "#717c70",
      "stoneJoint": "#5b5b47",
      "stoneTop": "#9d9276",
      "torch": "#f1c078",
      "torchCore": "#fff0bd",
      "bannerCloth": "#573a2d",
      "bannerTrim": "#baa16d",
      "equippedWood": "#263d32",
      "equippedWoodLight": "#34513e",
      "equippedBorder": "#8b9d75",
      "equippedPaper": "#e1e8d3",
      "equippedInk": "#304b33",
      "bg": "#29271f",
      "ink": "#302a20",
      "muted": "#6d604a",
      "danger": "#a34538",
      "hp": "#bd5b4a",
      "mp": "#668caf",
      "xp": "#b89849",
      "good": "#3f7151",
      "rare": "#4c83b8",
      "epic": "#925ea4",
      "loot": "#efce77",
      "shadow": "#16251b88",
      "outline": "#252b24",
      "grass": "#8aab6a",
      "grassAlt": "#83a263",
      "path": "#cab28a",
      "water": "#689fa5",
      "waterDeep": "#4b858f",
      "stone": "#929887",
      "floor": "#a5a18c",
      "mud": "#8c9868",
      "sand": "#dbc894",
      "lava": "#ce6f42",
      "bark": "#765c3a",
      "leaf": "#557b4e",
      "leafLight": "#739258",
      "roof": "#9a6550",
      "roofDark": "#744d40",
      "wall": "#ddcba3",
      "window": "#f3d69b",
      "hazard": "#c94c37",
      "hazardFill": "#c94c3738",
      "nightTint": "#263a5b",
      "snow": "#cbd8d2",
      "ice": "#7eafb6",
      "ash": "#8f8680",
      "dusk": "#8e8c9e",
      "redSand": "#bd9870"
    },
    "icons": {
      "brand": "<circle cx='12' cy='12' r='9'/><path d='m12 5 3 7-3 7-3-7 3-7Zm-8 7h4m8 0h4'/>",
      "attack": "<path d='m6 20 3-6L19 3l2 2L10 16l-4 4Zm1-7 5 5M4 22l3-3M6 4l3 2m-4 2 2 1'/>",
      "bait": "<path d='M19 3C8 2 3 10 7 17l-3 4 7-6c7 1 10-5 8-12ZM7 17l9-10M10 13l5 1m-2-4 1-4'/>",
      "recover": "<path d='M12 3v18M10 18C3 18 2 13 4 9c5 0 8 4 6 9Zm4-5c-1-6 2-10 7-10 1 5-1 10-7 10ZM7 6l2 2m7 10 3-3'/>",
      "signature": "<path d='m12 2 3 6 7 1-5 5 1 8-6-4-6 4 1-8-5-5 7-1 3-6Z'/><circle cx='12' cy='12' r='3'/>",
      "settings": "<path d='m9 3 3-1 3 1 1 3 3 1 2 3-1 3-3 1-1 3-3 2-3-1-1-3-3-1-2-3 1-3 3-1 1-3Z'/><circle cx='12' cy='11' r='3'/>",
      "fullscreen": "<path d='M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5'/>",
      "pause": "<path d='M8 4v16m8-16v16'/>",
      "close": "<path d=\"m5 5 14 14M19 5 5 19\"/>",
      "home": "<path d=\"m2 11 10-9 10 9M5 9v13h5v-7h4v7h5V9\"/>",
      "resume": "<path d='m8 4 12 8-12 8V4Z'/>",
      "save": "<path d='M4 3h14l3 3v15H3V3h1Zm3 0v6h10V3M7 21v-8h10v8'/>",
      "load": "<path d='M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5'/>",
      "scroll": "<path d='M6 3h13v14a4 4 0 0 1-4 4H5a3 3 0 0 1-3-3h12a3 3 0 0 0 3 3M6 3a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3Zm3 4h5m-5 4h5'/>",
      "rename": "<path d='m4 17 1 4 4-1L21 8l-5-5L4 17Zm10-12 5 5M4 17l5 3'/>",
      "moon": "<path d='M20 15A9 9 0 0 1 9 3a9 9 0 1 0 11 12Z'/>",
      "sound": "<path d='m3 9 5 0 5-5v16l-5-5H3V9Zm13-2a7 7 0 0 1 0 10m3-13a11 11 0 0 1 0 16'/>",
      "training": "<path d='m4 20 6-6m4-4 6-6M7 3l14 14-4 4L3 7l4-4Z'/>",
      "gear": "<path d='M7 3 3 7l3 5 3-2v11h6V10l3 2 3-5-4-4-5 3-5-3Z'/>",
      "fight": "<path d='m4 3 17 18M20 3 3 20M3 3l5 1-4 4-1-5Zm18 0-5 1 4 4 1-5Z'/>",
      "coins": "<ellipse cx='12' cy='12' rx='8' ry='9'/><path d='m12 7 3 5-3 5-3-5 3-5Z'/>",
      "rank": "<path d='m12 3 3 6 6 1-5 5 1 6-5-3-5 3 1-6-5-5 6-1 3-6Z'/>",
      "chevron": "<path d='m9 5 7 7-7 7'/>",
      "grip": "<path d=\"M6 12V9a2 2 0 0 1 4 0v2-6a2 2 0 0 1 4 0v6-4a2 2 0 0 1 4 0v6l2-2 2 2-5 7H9l-5-6z\"/>",
      "shield": "<path d=\"m12 2 8 4v6q-1 6-8 10-7-4-8-10V6zM8 12l3 3 5-6\"/>",
      "anvil": "<path d=\"M3 6h18l-4 6h-5l-2 3v4h7v2H4v-2h4v-4l-3-3H3z\"/>",
      "compare": "<path d=\"M8 3v18M16 3v18M3 8h10M11 16h10m-6-4-4 4 4 4M9 4l4 4-4 4\"/>",
      "check": "<path d=\"m4 12 5 5L20 5\"/>",
      "plus": "<path d=\"M12 4v16M4 12h16\"/>",
      "bag": "<path d=\"M5 7h14l2 14H3zM8 7V5a4 4 0 0 1 8 0v2\"/>",
      "quest": "<path d=\"M6 3h12v18H6zM9 7h6m-6 4h6m-6 4h3\"/>",
      "map": "<path d=\"m3 5 6-2 6 3 6-2v15l-6 2-6-3-6 2zM9 3v15m6-12v15\"/>",
      "potion": "<path d=\"M9 3h6m-5 0v6L5 17q-1 4 3 4h8q4 0 3-4l-5-8V3M8 15h8\"/>",
      "staff": "<path d=\"m5 21 9-14m-2-5 7 2 1 6-6 2-4-5z\"/>",
      "bow": "<path d=\"M6 3q16 9 0 18L10 12zM3 12h18m-4-4 4 4-4 4\"/>",
      "portal": "<path d=\"M5 21V10a7 7 0 0 1 14 0v11M2 21h20M10 7h4v14h-4z\"/>",
      "heart": "<path d=\"M12 21S1 14 3 7q3-7 9-1 6-6 9 1 2 7-9 14z\"/>",
      "tree": "<path d=\"M12 2 4 12h4l-5 6h7v4h4v-4h7l-5-6h4z\"/>",
      "music": "<path d=\"M9 18V5l11-2v13M9 8l11-2M9 18q-2-3-5-1t1 4q4 0 4-3m11-2q-2-3-5-1t1 4q4 0 4-3\"/>",
      "dash": "<path d=\"m13 3-8 10h6l-1 8 9-12h-7z\"/>",
      "online": "<circle cx='8' cy='7' r='3'/><circle cx='17' cy='8' r='2'/><path d='M2 21v-5a6 6 0 0 1 12 0v5m1-8a5 5 0 0 1 7 4v4'/>"
    }
  },
  "config": {
    "saveVersion": 1,
    "storageKey": "tactics.everdawn.rpg.v1",
    "prefsKey": "tactics.everdawn.prefs.v1",
    "saveInterval": 4,
    "step": 0.025,
    "maxFrame": 0.1,
    "milliseconds": 1000,
    "maxLevel": 50,
    "maxMonsterLevel": 65,
    "startGold": 55,
    "startPotions": 5,
    "startPoints": 2,
    "pointsPerLevel": 1,
    "xpBase": 40,
    "xpGrowth": 20,
    "xpPower": 1.26,
    "playerRadius": 0.28,
    "interactRadius": 2.15,
    "targetRadius": 7.5,
    "pickupRadius": 1.4,
    "outOfCombat": 4,
    "safeRegen": 0,
    "manaRegenDelay": 0.25,
    "hurtInvulnerability": 0.38,
    "defenseFactor": 0.045,
    "minDamage": 1,
    "critBase": 1.65,
    "aggroRange": 5.5,
    "leashRange": 10,
    "returnHeal": 0.2,
    "meleeReach": 0.85,
    "mobSeparation": 0.5,
    "mobSeparationForce": 1.9,
    "spawnClearance": 0.5,
    "respawnField": 18,
    "maxProjectiles": 120,
    "maxFloats": 32,
    "floatTime": 1.1,
    "effectTime": 0.4,
    "noticeTime": 3.2,
    "lootFeedCount": 4,
    "deathGoldRatio": 0.06,
    "deathGoldCap": 65,
    "potionHealRatio": 0.55,
    "potionCooldown": 7,
    "recallCooldown": 12,
    "respawnHpRatio": 1,
    "shieldCapRatio": 0.65,
    "statusTick": 0.5,
    "dotDuration": 4,
    "slowDuration": 2.8,
    "slowFactor": 0.6,
    "cleaveRadius": 1.4,
    "chainRange": 3,
    "maxChain": 4,
    "bossPhaseRatio": 0.5,
    "bossEnrageRate": 1.22,
    "dropLevelScale": 0.08,
    "dropBaseChance": 0.085,
    "smartWeaponChance": 0.46,
    "lootTierChance": 0.08,
    "upgradeMax": 10,
    "upgradePower": 0.065,
    "upgradeGoldBase": 26,
    "upgradeGoldGrowth": 1.4,
    "upgradeOreBase": 2,
    "upgradeOreStep": 3,
    "sellValue": 4,
    "salvageOre": 1,
    "itemLevelScale": 0.09,
    "affixScale": 0.045,
    "eliteXp": 1.6,
    "eliteHp": 1.65,
    "eliteDamage": 1.18,
    "enemyHpGrowth": 0.17,
    "enemyDamageGrowth": 0.095,
    "enemyXpGrowth": 0.12,
    "goldGrowth": 0.04,
    "runRewardGrowth": 0.18,
    "inventorySortLimit": 120,
    "toastMax": 3,
    "renderDpr": 1.8,
    "portraitPixels": 3,
    "musicLookAhead": 0.24,
    "musicInterval": 0.08,
    "effectVolume": 0.28,
    "musicVolume": 0.14,
    "maxGold": 9999999,
    "maxMaterials": 99999,
    "maxInventory": 160,
    "initialQuest": "welcome",
    "startMap": "oakwood",
    "startPosition": [
      17.5,
      12.5
    ],
    "nameLength": 14,
    "hashSeed": 2166136261,
    "hashPrime": 16777619,
    "randomMultiplier": 1664525,
    "randomIncrement": 1013904223,
    "randomModulus": 4294967296,
    "percentage": 100,
    "decimalDigits": 1,
    "inputDeadzone": 0.1,
    "joystickRadius": 42,
    "cameraLerp": 9,
    "cameraMinZoom": 0.68,
    "cameraZoomWidth": 1000,
    "cameraMaxZoom": 1,
    "dropMagnetSpeed": 8,
    "bossRewardItemChance": 1,
    "trainingRespecTownOnly": true,
    "skillSlots": 2,
    "lowHpThreshold": 0.5,
    "echoDamageRatio": 0.65,
    "extraShotDamage": 0.66,
    "projectileLife": 2.5,
    "projectileFanAngle": 0.15,
    "enemyThinkDelay": 0.45,
    "enemyAttackStartDelay": 1,
    "hazardActiveTime": 0.24,
    "hazardDashFraction": 0.68,
    "floatMergeTime": 0.16,
    "buffMax": 12,
    "bossAddOffsets": [
      [
        -2,
        1
      ],
      [
        2,
        1
      ]
    ],
    "itemDropJitter": 0.35,
    "orbCount": 3,
    "orbAttraction": 7.5,
    "orbDelay": 0.3,
    "nearbyNpcRange": 6,
    "autoSkillGap": 0.25,
    "interactionRepeatDelay": 0.3,
    "startingArmor": "padded_armor",
    "startingRing": "copper_ring",
    "maxProjectileHits": 8,
    "enemyAttackMinimum": 0.6,
    "minimumCooldown": 0.3,
    "foodBuffId": "inn_food",
    "lightningSegments": 6,
    "moveSubstep": 0.2,
    "lootRarityTierBonus": 0.015,
    "autoSalvageRarities": [
      "common"
    ],
    "secondsPerMinute": 60,
    "hudInterval": 0.1,
    "comparisonLimit": 7,
    "titlePreviewScale": 5,
    "joystickSize": 112,
    "mobileMenuWidth": 720,
    "enemyPathReview": 0.75,
    "pathMaxNodes": 1000,
    "pathWaypointTolerance": 0.24,
    "pathNeighborOffsets": [
      [
        1,
        0
      ],
      [
        -1,
        0
      ],
      [
        0,
        1
      ],
      [
        0,
        -1
      ]
    ],
    "dashCharges": 2,
    "dashCooldown": 5,
    "dashDistance": 1.5,
    "dashDuration": 0.16,
    "dashInvulnerability": 0.12,
    "dashDeadzone": 0.12,
    "fieldSpawnRevision": 2,
    "discoveryRevealRadius": 5.5,
    "vendorRestock": 300,
    "dayLength": 420,
    "nightLength": 180,
    "nightDamageMultiplier": 1.1,
    "bossEquipmentChance": 0.65,
    "bossUniqueChance": 0.12,
    "defaultChestEquipmentChance": 0.3,
    "materialDropMultiplier": 0.55,
    "blessingRefreshTolerance": 0.1,
    "eventInteractRadius": 2.15,
    "healingConsumable": "healing",
    "manaConsumable": "mana",
    "contentRevision": 3,
    "questRepeatCooldown": 180,
    "repMax": 9999,
    "codexKills": [
      15,
      45,
      100
    ],
    "companionFollowDistance": 1.25,
    "companionBondPerBoss": 3,
    "companionBondPerEvent": 1,
    "companionBondCap": 100,
    "companionBondScale": 0.004,
    "trialNextWave": 2,
    "mechanismReduction": 0.12,
    "advancementRespecCost": 60,
    "questListPage": 10,
    "enemyPatternMax": 32,
    "advancementPreviewStats": 3,
    "companionVisualSize": 1,
    "hazardDefaultAngle": 3.141592653589793,
    "byteBits": 8
  },
  "controls": {
    "left": [
      "KeyA",
      "ArrowLeft"
    ],
    "right": [
      "KeyD",
      "ArrowRight"
    ],
    "up": [
      "KeyW",
      "ArrowUp"
    ],
    "down": [
      "KeyS",
      "ArrowDown"
    ],
    "interact": [
      "KeyE"
    ],
    "potion": [
      "KeyR"
    ],
    "inventory": [
      "Tab",
      "KeyI"
    ],
    "talents": [
      "KeyK"
    ],
    "quests": [
      "KeyQ",
      "KeyJ"
    ],
    "map": [
      "KeyM"
    ],
    "dash": [
      "ShiftLeft",
      "ShiftRight"
    ],
    "manaPotion": [
      "KeyF"
    ]
  },
  "world": {
    "title": "다섯 왕관의 여정",
    "body": "별의 봉인이 무너진 뒤, 왕국의 변경에서 다섯 왕관을 노리는 군세가 깨어납니다. 작은 길드의 모험가가 되어 동료와 함께 숲·고원·설원·사막·황혼 성채를 누비세요.",
    "chapter": "에버돈 대륙",
    "goal": "지역 의뢰로 성장하고 여덟 던전의 군주를 넘어 황혼 성채의 왕관을 되찾으세요.",
    "completed": "황혼의 왕관을 되찾았습니다. 전설 던전과 길드 연전, 세력 장비와 전직 완성에 도전하세요."
  },
  "baseStats": {
    "hp": 100,
    "mp": 60,
    "attack": 12,
    "spell": 12,
    "defense": 3,
    "speed": 3.1,
    "range": 1.1,
    "attackInterval": 0.8,
    "manaRegen": 1.8,
    "hpRegen": 0,
    "basicDamage": 1,
    "skillDamage": 1,
    "attackSpeed": 1,
    "cooldownRate": 1,
    "crit": 0.06,
    "critDamage": 1.65,
    "lifesteal": 0,
    "lifeOnKill": 0,
    "manaOnHit": 0,
    "burnChance": 0,
    "burnDamage": 0.24,
    "poisonChance": 0,
    "poisonDamage": 0.22,
    "slowChance": 0,
    "extraShots": 0,
    "chain": 0,
    "cleave": 0,
    "shieldOnSkill": 0,
    "thorns": 0,
    "xpGain": 1,
    "goldGain": 1,
    "lowHpDamage": 0,
    "damageReduction": 0,
    "skillEcho": 0,
    "potionPower": 1,
    "physicalResist": 0,
    "fireResist": 0,
    "frostResist": 0,
    "natureResist": 0,
    "arcaneResist": 0,
    "threatGain": 1
  },
  "statCaps": {
    "crit": [
      0,
      0.7
    ],
    "damageReduction": [
      0,
      0.6
    ],
    "lifesteal": [
      0,
      0.3
    ],
    "attackSpeed": [
      0.4,
      2.8
    ],
    "cooldownRate": [
      0.35,
      2
    ],
    "speed": [
      1.7,
      5.4
    ],
    "extraShots": [
      0,
      3
    ],
    "chain": [
      0,
      4
    ],
    "burnChance": [
      0,
      1
    ],
    "poisonChance": [
      0,
      1
    ],
    "slowChance": [
      0,
      0.8
    ],
    "skillEcho": [
      0,
      0.75
    ],
    "physicalResist": [
      -0.3,
      0.5
    ],
    "fireResist": [
      -0.3,
      0.5
    ],
    "frostResist": [
      -0.3,
      0.5
    ],
    "natureResist": [
      -0.3,
      0.5
    ],
    "arcaneResist": [
      -0.3,
      0.5
    ]
  },
  "statLabels": {
    "hp": "최대 체력",
    "mp": "최대 마력",
    "attack": "공격력",
    "spell": "주문력",
    "defense": "방어력",
    "speed": "이동 속도",
    "range": "공격 거리",
    "attackInterval": "기본 공격 간격",
    "manaRegen": "마력 회복",
    "hpRegen": "체력 회복",
    "basicDamage": "평타 피해",
    "skillDamage": "기술 피해",
    "attackSpeed": "공격 속도",
    "cooldownRate": "기술 재사용 시간",
    "crit": "치명타 확률",
    "critDamage": "치명타 피해",
    "lifesteal": "흡혈",
    "lifeOnKill": "처치 시 회복",
    "manaOnHit": "평타 적중 마력",
    "burnChance": "화상 확률",
    "burnDamage": "화상 피해",
    "poisonChance": "중독 확률",
    "poisonDamage": "중독 피해",
    "slowChance": "둔화 확률",
    "extraShots": "추가 투사체",
    "chain": "연쇄 횟수",
    "cleave": "평타 광역 피해",
    "shieldOnSkill": "기술 사용 보호막",
    "thorns": "근접 반사 피해",
    "xpGain": "경험치 획득",
    "goldGain": "금화 획득",
    "lowHpDamage": "위기 화력",
    "damageReduction": "받는 피해 감소",
    "skillEcho": "기술 메아리 확률",
    "potionPower": "물약 효율",
    "physicalResist": "물리 저항",
    "fireResist": "화염 저항",
    "frostResist": "냉기 저항",
    "natureResist": "자연 저항",
    "arcaneResist": "비전 저항",
    "threatGain": "위협도"
  },
  "percentStats": [
    "crit",
    "lifesteal",
    "lifeOnKill",
    "burnChance",
    "poisonChance",
    "slowChance",
    "cleave",
    "lowHpDamage",
    "damageReduction",
    "skillEcho",
    "physicalResist",
    "fireResist",
    "frostResist",
    "natureResist",
    "arcaneResist",
    "threatGain"
  ],
  "multiplierStats": [
    "basicDamage",
    "skillDamage",
    "attackSpeed",
    "cooldownRate",
    "critDamage",
    "xpGain",
    "goldGain",
    "potionPower"
  ],
  "statDirections": {
    "cooldownRate": -1,
    "attackInterval": -1
  },
  "races": [
    {
      "id": "human",
      "name": "인간",
      "tag": "균형 · 빠른 성장",
      "description": "어느 길에도 잘 적응하는 에버돈의 모험가.",
      "stats": [
        {
          "stat": "xpGain",
          "op": "multiply",
          "value": 1.1
        }
      ],
      "skin": "#e5bd91",
      "hair": "#725039",
      "overlay": null,
      "scale": 1
    },
    {
      "id": "elf",
      "name": "엘프",
      "tag": "긴 사거리 · 풍부한 마력",
      "description": "숲의 감각으로 먼 표적을 노리지만 체력이 낮습니다.",
      "stats": [
        {
          "stat": "range",
          "op": "multiply",
          "value": 1.12
        },
        {
          "stat": "mp",
          "op": "multiply",
          "value": 1.16
        },
        {
          "stat": "hp",
          "op": "multiply",
          "value": 0.92
        }
      ],
      "skin": "#e9d0a5",
      "hair": "#d7be74",
      "overlay": "elf_ears",
      "scale": 1
    },
    {
      "id": "dragon",
      "name": "드래고뉴트",
      "tag": "강한 기술 · 단단한 비늘",
      "description": "용의 피가 기술을 강화하지만 걸음이 조금 느립니다.",
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.12
        },
        {
          "stat": "defense",
          "op": "add",
          "value": 1.5
        },
        {
          "stat": "speed",
          "op": "multiply",
          "value": 0.95
        }
      ],
      "skin": "#c98c60",
      "hair": "#774933",
      "overlay": "dragon_horns",
      "scale": 1.05
    },
    {
      "id": "dwarf",
      "name": "드워프",
      "tag": "높은 체력 · 방어",
      "description": "작고 강인한 산악 민족. 기동보다 생존을 택합니다.",
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.18
        },
        {
          "stat": "defense",
          "op": "add",
          "value": 2
        },
        {
          "stat": "speed",
          "op": "multiply",
          "value": 0.92
        }
      ],
      "skin": "#d6af89",
      "hair": "#a6957b",
      "overlay": "dwarf_beard",
      "scale": 0.92
    },
    {
      "id": "beast",
      "name": "수인",
      "tag": "빠른 이동 · 연속 공격",
      "description": "민첩한 사냥꾼. 마력이 적은 대신 공세가 빠릅니다.",
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.12
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.08
        },
        {
          "stat": "mp",
          "op": "multiply",
          "value": 0.9
        }
      ],
      "skin": "#d4ae83",
      "hair": "#a76c42",
      "overlay": "beast_ears",
      "scale": 1
    }
  ],
  "classes": [
    {
      "id": "warrior",
      "name": "워리어",
      "role": "딜·체력 균형 / 평타·기술 혼합",
      "description": "검과 체력으로 전선을 지키는 근접 브루저.",
      "icon": "attack",
      "sprite": "warrior",
      "cloth": "#68877c",
      "accent": "#d5bd73",
      "stats": {
        "hp": 145,
        "mp": 64,
        "attack": 15,
        "spell": 12,
        "defense": 5,
        "speed": 3.1,
        "range": 1.2,
        "attackInterval": 0.76,
        "threatGain": 1.3
      },
      "growth": {
        "hp": 12,
        "mp": 3,
        "attack": 1.6,
        "spell": 1.1,
        "defense": 0.35
      },
      "basic": {
        "kind": "melee",
        "sound": "sword",
        "effect": "slash",
        "coefficient": 1
      },
      "skills": [
        "sweeping_blade",
        "war_cry",
        "runic_wave",
        "steel_rush",
        "royal_cleave",
        "astral_blade",
        "veteran_warrior_0",
        "veteran_warrior_1",
        "veteran_warrior_2",
        "veteran_warrior_3",
        "veteran_warrior_4",
        "veteran_warrior_5",
        "veteran_warrior_6",
        "veteran_warrior_7",
        "support_warrior",
        "lineage_gladiator",
        "lineage_berserker",
        "lineage_rune",
        "lineage_gladiator_s0",
        "lineage_gladiator_s0_t0",
        "lineage_gladiator_s0_t1",
        "lineage_gladiator_s1",
        "lineage_gladiator_s1_t0",
        "lineage_gladiator_s1_t1",
        "lineage_berserker_s0",
        "lineage_berserker_s0_t0",
        "lineage_berserker_s0_t1",
        "lineage_berserker_s1",
        "lineage_berserker_s1_t0",
        "lineage_berserker_s1_t1",
        "lineage_rune_s0",
        "lineage_rune_s0_t0",
        "lineage_rune_s0_t1",
        "lineage_rune_s1",
        "lineage_rune_s1_t0",
        "lineage_rune_s1_t1"
      ],
      "starter": "iron_sword",
      "branches": [
        "gladiator",
        "berserker",
        "rune"
      ],
      "backSprite": "warrior_back",
      "onlineRole": "damage"
    },
    {
      "id": "archer",
      "name": "아처",
      "role": "높은 평타 피해 / 낮은 체력",
      "description": "멀리서 화살을 쏘고 간격을 지키는 사냥꾼.",
      "icon": "bow",
      "sprite": "archer",
      "cloth": "#638353",
      "accent": "#dac08a",
      "stats": {
        "hp": 92,
        "mp": 54,
        "attack": 20,
        "spell": 10,
        "defense": 2,
        "speed": 3.1,
        "range": 5.2,
        "attackInterval": 0.7,
        "threatGain": 0.8
      },
      "growth": {
        "hp": 8,
        "mp": 2,
        "attack": 2,
        "spell": 0.8,
        "defense": 0.2
      },
      "basic": {
        "kind": "projectile",
        "projectile": "arrow",
        "sound": "arrow",
        "coefficient": 1
      },
      "skills": [
        "arrow_rain",
        "hunter_mark",
        "piercing_shot",
        "wind_step",
        "hawk_volley",
        "star_arrow",
        "veteran_archer_0",
        "veteran_archer_1",
        "veteran_archer_2",
        "veteran_archer_3",
        "veteran_archer_4",
        "veteran_archer_5",
        "veteran_archer_6",
        "veteran_archer_7",
        "support_archer",
        "lineage_marksman",
        "lineage_ranger",
        "lineage_venom",
        "lineage_marksman_s0",
        "lineage_marksman_s0_t0",
        "lineage_marksman_s0_t1",
        "lineage_marksman_s1",
        "lineage_marksman_s1_t0",
        "lineage_marksman_s1_t1",
        "lineage_ranger_s0",
        "lineage_ranger_s0_t0",
        "lineage_ranger_s0_t1",
        "lineage_ranger_s1",
        "lineage_ranger_s1_t0",
        "lineage_ranger_s1_t1",
        "lineage_venom_s0",
        "lineage_venom_s0_t0",
        "lineage_venom_s0_t1",
        "lineage_venom_s1",
        "lineage_venom_s1_t0",
        "lineage_venom_s1_t1"
      ],
      "starter": "hunting_bow",
      "branches": [
        "marksman",
        "ranger",
        "venom"
      ],
      "backSprite": "archer_back",
      "onlineRole": "damage"
    },
    {
      "id": "magician",
      "name": "매지션",
      "role": "매우 높은 기술 피해 / 낮은 체력·이동",
      "description": "마력을 관리하며 넓은 범위에 주문을 펼칩니다.",
      "icon": "staff",
      "sprite": "magician",
      "cloth": "#8b7397",
      "accent": "#d9b965",
      "stats": {
        "hp": 78,
        "mp": 108,
        "attack": 11,
        "spell": 28,
        "defense": 1.5,
        "speed": 2.65,
        "range": 4.5,
        "attackInterval": 1.05,
        "manaRegen": 2.7,
        "threatGain": 1
      },
      "growth": {
        "hp": 7,
        "mp": 6,
        "attack": 0.7,
        "spell": 2.7,
        "defense": 0.18
      },
      "basic": {
        "kind": "projectile",
        "projectile": "spark",
        "sound": "magic",
        "coefficient": 1
      },
      "skills": [
        "fire_orb",
        "frost_nova",
        "arcane_chain",
        "meteor",
        "solar_orb",
        "cosmic_chain",
        "veteran_magician_0",
        "veteran_magician_1",
        "veteran_magician_2",
        "veteran_magician_3",
        "veteran_magician_4",
        "veteran_magician_5",
        "veteran_magician_6",
        "veteran_magician_7",
        "support_magician",
        "lineage_pyromancer",
        "lineage_frost",
        "lineage_arcanist",
        "lineage_pyromancer_s0",
        "lineage_pyromancer_s0_t0",
        "lineage_pyromancer_s0_t1",
        "lineage_pyromancer_s1",
        "lineage_pyromancer_s1_t0",
        "lineage_pyromancer_s1_t1",
        "lineage_frost_s0",
        "lineage_frost_s0_t0",
        "lineage_frost_s0_t1",
        "lineage_frost_s1",
        "lineage_frost_s1_t0",
        "lineage_frost_s1_t1",
        "lineage_arcanist_s0",
        "lineage_arcanist_s0_t0",
        "lineage_arcanist_s0_t1",
        "lineage_arcanist_s1",
        "lineage_arcanist_s1_t0",
        "lineage_arcanist_s1_t1"
      ],
      "starter": "apprentice_staff",
      "branches": [
        "pyromancer",
        "frost",
        "arcanist"
      ],
      "backSprite": "magician_back",
      "onlineRole": "support"
    },
    {
      "id": "guardian",
      "name": "가디언",
      "role": "높은 체력 / 기술 중심 / 느린 이동",
      "description": "방패와 성역 기술로 버티며 반격하는 수호자.",
      "icon": "shield",
      "sprite": "guardian",
      "cloth": "#82939a",
      "accent": "#d9bb75",
      "stats": {
        "hp": 210,
        "mp": 82,
        "attack": 11,
        "spell": 15,
        "defense": 10,
        "speed": 2.5,
        "range": 1.3,
        "attackInterval": 0.96,
        "manaRegen": 2.25,
        "threatGain": 3
      },
      "growth": {
        "hp": 17,
        "mp": 4,
        "attack": 1,
        "spell": 1.4,
        "defense": 0.65
      },
      "basic": {
        "kind": "melee",
        "sound": "shield",
        "effect": "slash",
        "coefficient": 1
      },
      "skills": [
        "shield_bash",
        "sacred_ground",
        "judgment",
        "iron_oath",
        "royal_verdict",
        "aegis_crash",
        "veteran_guardian_0",
        "veteran_guardian_1",
        "veteran_guardian_2",
        "veteran_guardian_3",
        "veteran_guardian_4",
        "veteran_guardian_5",
        "veteran_guardian_6",
        "veteran_guardian_7",
        "support_guardian",
        "lineage_fortress",
        "lineage_paladin",
        "lineage_avenger",
        "lineage_fortress_s0",
        "lineage_fortress_s0_t0",
        "lineage_fortress_s0_t1",
        "lineage_fortress_s1",
        "lineage_fortress_s1_t0",
        "lineage_fortress_s1_t1",
        "lineage_paladin_s0",
        "lineage_paladin_s0_t0",
        "lineage_paladin_s0_t1",
        "lineage_paladin_s1",
        "lineage_paladin_s1_t0",
        "lineage_paladin_s1_t1",
        "lineage_avenger_s0",
        "lineage_avenger_s0_t0",
        "lineage_avenger_s0_t1",
        "lineage_avenger_s1",
        "lineage_avenger_s1_t0",
        "lineage_avenger_s1_t1"
      ],
      "starter": "oath_mace",
      "branches": [
        "fortress",
        "paladin",
        "avenger"
      ],
      "backSprite": "guardian_back",
      "onlineRole": "tank"
    }
  ],
  "skills": {
    "sweeping_blade": {
      "name": "회전 베기",
      "icon": "attack",
      "unlock": 1,
      "kind": "nova",
      "scale": "attack",
      "coefficient": 2.2,
      "radius": 1.8,
      "range": 1.8,
      "cooldown": 5,
      "cost": 12,
      "color": "#e0ca90",
      "sound": "sword"
    },
    "war_cry": {
      "name": "전장의 함성",
      "icon": "heart",
      "unlock": 3,
      "kind": "self",
      "cooldown": 10,
      "cost": 15,
      "heal": 0.12,
      "buff": {
        "duration": 5,
        "stats": [
          {
            "stat": "basicDamage",
            "op": "multiply",
            "value": 1.2
          }
        ]
      },
      "conditionHp": 0.8,
      "color": "#d9af6d",
      "sound": "buff"
    },
    "runic_wave": {
      "name": "룬의 파동",
      "icon": "staff",
      "unlock": 6,
      "kind": "projectile",
      "projectile": "rune",
      "scale": "attack",
      "coefficient": 2.4,
      "range": 5,
      "radius": 1.1,
      "cooldown": 7,
      "cost": 18,
      "color": "#9fcac2",
      "sound": "magic"
    },
    "steel_rush": {
      "name": "강철 충격",
      "icon": "shield",
      "unlock": 10,
      "kind": "nova",
      "scale": "attack",
      "coefficient": 3.3,
      "radius": 2.4,
      "range": 2.4,
      "cooldown": 8,
      "cost": 21,
      "knockback": 1.2,
      "color": "#d5ddd3",
      "sound": "heavy"
    },
    "arrow_rain": {
      "name": "화살비",
      "icon": "bow",
      "unlock": 1,
      "kind": "targetArea",
      "scale": "attack",
      "coefficient": 2,
      "range": 5.7,
      "radius": 1.6,
      "cooldown": 7,
      "cost": 12,
      "color": "#e2d39c",
      "sound": "arrow"
    },
    "hunter_mark": {
      "name": "사냥꾼의 눈",
      "icon": "signature",
      "unlock": 3,
      "kind": "self",
      "cooldown": 11,
      "cost": 10,
      "buff": {
        "duration": 6,
        "stats": [
          {
            "stat": "crit",
            "op": "add",
            "value": 0.2
          },
          {
            "stat": "basicDamage",
            "op": "multiply",
            "value": 1.15
          }
        ]
      },
      "color": "#aac57d",
      "sound": "buff"
    },
    "piercing_shot": {
      "name": "관통 사격",
      "icon": "bow",
      "unlock": 6,
      "kind": "projectile",
      "projectile": "arrow",
      "scale": "attack",
      "coefficient": 3.1,
      "range": 6,
      "radius": 0.9,
      "cooldown": 8,
      "cost": 15,
      "pierce": 3,
      "color": "#f5ddb2",
      "sound": "arrow"
    },
    "wind_step": {
      "name": "바람의 가호",
      "icon": "bait",
      "unlock": 10,
      "kind": "self",
      "cooldown": 12,
      "cost": 13,
      "buff": {
        "duration": 6,
        "stats": [
          {
            "stat": "speed",
            "op": "multiply",
            "value": 1.25
          },
          {
            "stat": "attackSpeed",
            "op": "multiply",
            "value": 1.2
          }
        ]
      },
      "color": "#c8ddc1",
      "sound": "buff"
    },
    "fire_orb": {
      "name": "화염구",
      "icon": "staff",
      "unlock": 1,
      "kind": "projectile",
      "projectile": "fire",
      "scale": "spell",
      "coefficient": 2.2,
      "range": 5.5,
      "radius": 1.5,
      "cooldown": 3.8,
      "cost": 18,
      "burn": true,
      "color": "#edb16f",
      "sound": "fire"
    },
    "frost_nova": {
      "name": "서리 고리",
      "icon": "signature",
      "unlock": 3,
      "kind": "nova",
      "scale": "spell",
      "coefficient": 1.7,
      "radius": 2.8,
      "range": 2.8,
      "cooldown": 6,
      "cost": 20,
      "slow": true,
      "color": "#b4dce2",
      "sound": "ice"
    },
    "arcane_chain": {
      "name": "비전 연쇄",
      "icon": "staff",
      "unlock": 6,
      "kind": "chain",
      "scale": "spell",
      "coefficient": 2,
      "range": 5.8,
      "chain": 4,
      "cooldown": 5.5,
      "cost": 22,
      "color": "#d1bbe8",
      "sound": "magic"
    },
    "meteor": {
      "name": "낙성",
      "icon": "signature",
      "unlock": 10,
      "kind": "targetArea",
      "scale": "spell",
      "coefficient": 4,
      "range": 6,
      "radius": 2.5,
      "cooldown": 9,
      "cost": 32,
      "burn": true,
      "color": "#efad78",
      "sound": "heavy"
    },
    "shield_bash": {
      "name": "방패 강타",
      "icon": "shield",
      "unlock": 1,
      "kind": "nova",
      "scale": "spell",
      "defenseScale": 1.4,
      "coefficient": 1.8,
      "radius": 1.7,
      "range": 1.7,
      "cooldown": 4.8,
      "cost": 12,
      "knockback": 0.65,
      "color": "#e4d3a2",
      "sound": "shield"
    },
    "sacred_ground": {
      "name": "성역",
      "icon": "heart",
      "unlock": 3,
      "kind": "self",
      "cooldown": 10,
      "cost": 18,
      "heal": 0.2,
      "shield": 0.08,
      "conditionHp": 0.8,
      "color": "#f0e2ac",
      "sound": "heal"
    },
    "judgment": {
      "name": "빛의 심판",
      "icon": "signature",
      "unlock": 6,
      "kind": "targetArea",
      "scale": "spell",
      "defenseScale": 1.8,
      "coefficient": 2.5,
      "range": 4.5,
      "radius": 2,
      "cooldown": 7,
      "cost": 20,
      "color": "#f6e7b9",
      "sound": "magic"
    },
    "iron_oath": {
      "name": "강철 서약",
      "icon": "shield",
      "unlock": 10,
      "kind": "self",
      "cooldown": 12,
      "cost": 19,
      "shield": 0.25,
      "buff": {
        "duration": 6,
        "stats": [
          {
            "stat": "damageReduction",
            "op": "add",
            "value": 0.2
          },
          {
            "stat": "thorns",
            "op": "add",
            "value": 8
          }
        ]
      },
      "color": "#d8dccf",
      "sound": "buff"
    },
    "royal_cleave": {
      "name": "왕의 참격",
      "icon": "attack",
      "unlock": 20,
      "kind": "nova",
      "scale": "attack",
      "coefficient": 3.19,
      "radius": 1.8,
      "range": 1.8,
      "cooldown": 5.8,
      "cost": 16,
      "color": "#e0ca90",
      "sound": "sword",
      "id": "royal_cleave"
    },
    "astral_blade": {
      "name": "성운검",
      "icon": "staff",
      "unlock": 32,
      "kind": "projectile",
      "projectile": "rune",
      "scale": "attack",
      "coefficient": 4.08,
      "range": 5,
      "radius": 1.1,
      "cooldown": 8.0,
      "cost": 24,
      "color": "#9fcac2",
      "sound": "magic",
      "id": "astral_blade"
    },
    "hawk_volley": {
      "name": "매의 연사",
      "icon": "bow",
      "unlock": 20,
      "kind": "targetArea",
      "scale": "attack",
      "coefficient": 3.0,
      "range": 5.7,
      "radius": 1.6,
      "cooldown": 8.0,
      "cost": 16,
      "color": "#e2d39c",
      "sound": "arrow",
      "id": "hawk_volley"
    },
    "star_arrow": {
      "name": "별을 꿰는 화살",
      "icon": "bow",
      "unlock": 32,
      "kind": "projectile",
      "projectile": "arrow",
      "scale": "attack",
      "coefficient": 5.42,
      "range": 6,
      "radius": 0.9,
      "cooldown": 9.2,
      "cost": 20,
      "pierce": 3,
      "color": "#f5ddb2",
      "sound": "arrow",
      "id": "star_arrow"
    },
    "solar_orb": {
      "name": "태양구",
      "icon": "staff",
      "unlock": 20,
      "kind": "projectile",
      "projectile": "fire",
      "scale": "spell",
      "coefficient": 3.41,
      "range": 5.5,
      "radius": 1.5,
      "cooldown": 4.4,
      "cost": 24,
      "burn": true,
      "color": "#edb16f",
      "sound": "fire",
      "id": "solar_orb"
    },
    "cosmic_chain": {
      "name": "천체 연쇄",
      "icon": "staff",
      "unlock": 32,
      "kind": "chain",
      "scale": "spell",
      "coefficient": 3.6,
      "range": 5.8,
      "chain": 4,
      "cooldown": 6.3,
      "cost": 30,
      "color": "#d1bbe8",
      "sound": "magic",
      "id": "cosmic_chain"
    },
    "royal_verdict": {
      "name": "왕국의 심판",
      "icon": "signature",
      "unlock": 20,
      "kind": "targetArea",
      "scale": "spell",
      "defenseScale": 1.8,
      "coefficient": 3.75,
      "range": 4.5,
      "radius": 2,
      "cooldown": 8.0,
      "cost": 27,
      "color": "#f6e7b9",
      "sound": "magic",
      "id": "royal_verdict"
    },
    "aegis_crash": {
      "name": "성채 붕괴",
      "icon": "shield",
      "unlock": 32,
      "kind": "nova",
      "scale": "spell",
      "defenseScale": 1.4,
      "coefficient": 3.24,
      "radius": 1.7,
      "range": 1.7,
      "cooldown": 5.5,
      "cost": 16,
      "knockback": 0.65,
      "color": "#e4d3a2",
      "sound": "shield",
      "id": "aegis_crash"
    },
    "veteran_warrior_0": {
      "name": "노련한 회전 베기",
      "icon": "attack",
      "unlock": 8,
      "kind": "nova",
      "scale": "attack",
      "coefficient": 2.38,
      "radius": 1.8,
      "range": 1.8,
      "cooldown": 5.5,
      "cost": 13,
      "color": "#e0ca90",
      "sound": "sword",
      "element": "physical"
    },
    "veteran_warrior_1": {
      "name": "연속 전장의 함성",
      "icon": "heart",
      "unlock": 13,
      "kind": "self",
      "cooldown": 11.2,
      "cost": 17,
      "heal": 0.12,
      "buff": {
        "duration": 5,
        "stats": [
          {
            "stat": "basicDamage",
            "op": "multiply",
            "value": 1.2
          }
        ]
      },
      "conditionHp": 0.8,
      "color": "#d9af6d",
      "sound": "buff",
      "coefficient": 0.0,
      "element": "fire"
    },
    "veteran_warrior_2": {
      "name": "집중 룬의 파동",
      "icon": "staff",
      "unlock": 18,
      "kind": "projectile",
      "projectile": "rune",
      "scale": "attack",
      "coefficient": 2.71,
      "range": 5,
      "radius": 1.1,
      "cooldown": 8.0,
      "cost": 21,
      "color": "#9fcac2",
      "sound": "magic",
      "element": "frost"
    },
    "veteran_warrior_3": {
      "name": "정밀 강철 충격",
      "icon": "shield",
      "unlock": 23,
      "kind": "nova",
      "scale": "attack",
      "coefficient": 3.81,
      "radius": 2.4,
      "range": 2.4,
      "cooldown": 9.3,
      "cost": 25,
      "knockback": 1.2,
      "color": "#d5ddd3",
      "sound": "heavy",
      "element": "nature"
    },
    "veteran_warrior_4": {
      "name": "깊은 회전 베기",
      "icon": "attack",
      "unlock": 28,
      "kind": "nova",
      "scale": "attack",
      "coefficient": 2.6,
      "radius": 1.8,
      "range": 1.8,
      "cooldown": 5.9,
      "cost": 15,
      "color": "#e0ca90",
      "sound": "sword",
      "element": "arcane"
    },
    "veteran_warrior_5": {
      "name": "폭풍의 전장의 함성",
      "icon": "heart",
      "unlock": 33,
      "kind": "self",
      "cooldown": 12.0,
      "cost": 19,
      "heal": 0.12,
      "buff": {
        "duration": 5,
        "stats": [
          {
            "stat": "basicDamage",
            "op": "multiply",
            "value": 1.2
          }
        ]
      },
      "conditionHp": 0.8,
      "color": "#d9af6d",
      "sound": "buff",
      "coefficient": 0.0,
      "element": "physical"
    },
    "veteran_warrior_6": {
      "name": "왕립 룬의 파동",
      "icon": "staff",
      "unlock": 38,
      "kind": "projectile",
      "projectile": "rune",
      "scale": "attack",
      "coefficient": 2.95,
      "range": 5,
      "radius": 1.1,
      "cooldown": 8.5,
      "cost": 23,
      "color": "#9fcac2",
      "sound": "magic",
      "element": "fire"
    },
    "veteran_warrior_7": {
      "name": "계승의 강철 충격",
      "icon": "shield",
      "unlock": 43,
      "kind": "nova",
      "scale": "attack",
      "coefficient": 4.14,
      "radius": 2.4,
      "range": 2.4,
      "cooldown": 9.9,
      "cost": 28,
      "knockback": 1.2,
      "color": "#d5ddd3",
      "sound": "heavy",
      "element": "frost"
    },
    "support_warrior": {
      "name": "전우의 깃발",
      "kind": "self",
      "icon": "attack",
      "unlock": 10,
      "cooldown": 18,
      "cost": 22,
      "party": {
        "stats": [
          {
            "stat": "attack",
            "value": 1.1,
            "op": "multiply"
          }
        ],
        "duration": 6,
        "range": 6,
        "taunt": 1.5
      },
      "color": "#e5d6a0",
      "sound": "buff"
    },
    "lineage_gladiator": {
      "name": "검투사의 비기",
      "icon": "attack",
      "unlock": 3,
      "kind": "nova",
      "scale": "attack",
      "coefficient": 2.6,
      "radius": 1.8,
      "range": 1.8,
      "cooldown": 5.4,
      "cost": 14,
      "color": "#e0ca90",
      "sound": "sword",
      "requiredBranch": "gladiator",
      "element": "arcane"
    },
    "lineage_berserker": {
      "name": "버서커의 비기",
      "icon": "attack",
      "unlock": 3,
      "kind": "nova",
      "scale": "attack",
      "coefficient": 2.6,
      "radius": 1.8,
      "range": 1.8,
      "cooldown": 5.4,
      "cost": 14,
      "color": "#e0ca90",
      "sound": "sword",
      "requiredBranch": "berserker",
      "element": "arcane"
    },
    "lineage_rune": {
      "name": "룬 기사의 비기",
      "icon": "attack",
      "unlock": 3,
      "kind": "nova",
      "scale": "attack",
      "coefficient": 2.6,
      "radius": 1.8,
      "range": 1.8,
      "cooldown": 5.4,
      "cost": 14,
      "color": "#e0ca90",
      "sound": "sword",
      "requiredBranch": "rune",
      "element": "arcane"
    },
    "lineage_gladiator_s0": {
      "name": "소드마스터의 비기",
      "icon": "heart",
      "unlock": 18,
      "kind": "self",
      "cooldown": 11.6,
      "cost": 19,
      "heal": 0.12,
      "buff": {
        "duration": 5,
        "stats": [
          {
            "stat": "basicDamage",
            "op": "multiply",
            "value": 1.2
          }
        ]
      },
      "conditionHp": 0.8,
      "color": "#d9af6d",
      "sound": "buff",
      "requiredBranch": "gladiator_s0",
      "coefficient": 0.0,
      "element": "frost"
    },
    "lineage_gladiator_s0_t0": {
      "name": "검성의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "rune",
      "scale": "attack",
      "coefficient": 3.7,
      "range": 5,
      "radius": 1.1,
      "cooldown": 8.7,
      "cost": 26,
      "color": "#9fcac2",
      "sound": "magic",
      "requiredBranch": "gladiator_s0_t0",
      "element": "physical"
    },
    "lineage_gladiator_s0_t1": {
      "name": "결투의 군주의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "rune",
      "scale": "attack",
      "coefficient": 3.7,
      "range": 5,
      "radius": 1.1,
      "cooldown": 8.7,
      "cost": 26,
      "color": "#9fcac2",
      "sound": "magic",
      "requiredBranch": "gladiator_s0_t1",
      "element": "physical"
    },
    "lineage_gladiator_s1": {
      "name": "블레이드댄서의 비기",
      "icon": "heart",
      "unlock": 18,
      "kind": "self",
      "cooldown": 11.6,
      "cost": 19,
      "heal": 0.12,
      "buff": {
        "duration": 5,
        "stats": [
          {
            "stat": "basicDamage",
            "op": "multiply",
            "value": 1.2
          }
        ]
      },
      "conditionHp": 0.8,
      "color": "#d9af6d",
      "sound": "buff",
      "requiredBranch": "gladiator_s1",
      "coefficient": 0.0,
      "element": "frost"
    },
    "lineage_gladiator_s1_t0": {
      "name": "폭풍 검무가의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "rune",
      "scale": "attack",
      "coefficient": 3.7,
      "range": 5,
      "radius": 1.1,
      "cooldown": 8.7,
      "cost": 26,
      "color": "#9fcac2",
      "sound": "magic",
      "requiredBranch": "gladiator_s1_t0",
      "element": "physical"
    },
    "lineage_gladiator_s1_t1": {
      "name": "혈월 무희의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "rune",
      "scale": "attack",
      "coefficient": 3.7,
      "range": 5,
      "radius": 1.1,
      "cooldown": 8.7,
      "cost": 26,
      "color": "#9fcac2",
      "sound": "magic",
      "requiredBranch": "gladiator_s1_t1",
      "element": "physical"
    },
    "lineage_berserker_s0": {
      "name": "블러드리버의 비기",
      "icon": "heart",
      "unlock": 18,
      "kind": "self",
      "cooldown": 11.6,
      "cost": 19,
      "heal": 0.12,
      "buff": {
        "duration": 5,
        "stats": [
          {
            "stat": "basicDamage",
            "op": "multiply",
            "value": 1.2
          }
        ]
      },
      "conditionHp": 0.8,
      "color": "#d9af6d",
      "sound": "buff",
      "requiredBranch": "berserker_s0",
      "coefficient": 0.0,
      "element": "frost"
    },
    "lineage_berserker_s0_t0": {
      "name": "혈왕의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "rune",
      "scale": "attack",
      "coefficient": 3.7,
      "range": 5,
      "radius": 1.1,
      "cooldown": 8.7,
      "cost": 26,
      "color": "#9fcac2",
      "sound": "magic",
      "requiredBranch": "berserker_s0_t0",
      "element": "physical"
    },
    "lineage_berserker_s0_t1": {
      "name": "불멸의 광전사의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "rune",
      "scale": "attack",
      "coefficient": 3.7,
      "range": 5,
      "radius": 1.1,
      "cooldown": 8.7,
      "cost": 26,
      "color": "#9fcac2",
      "sound": "magic",
      "requiredBranch": "berserker_s0_t1",
      "element": "physical"
    },
    "lineage_berserker_s1": {
      "name": "워로드의 비기",
      "icon": "heart",
      "unlock": 18,
      "kind": "self",
      "cooldown": 11.6,
      "cost": 19,
      "heal": 0.12,
      "buff": {
        "duration": 5,
        "stats": [
          {
            "stat": "basicDamage",
            "op": "multiply",
            "value": 1.2
          }
        ]
      },
      "conditionHp": 0.8,
      "color": "#d9af6d",
      "sound": "buff",
      "requiredBranch": "berserker_s1",
      "coefficient": 0.0,
      "element": "frost"
    },
    "lineage_berserker_s1_t0": {
      "name": "전쟁군주의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "rune",
      "scale": "attack",
      "coefficient": 3.7,
      "range": 5,
      "radius": 1.1,
      "cooldown": 8.7,
      "cost": 26,
      "color": "#9fcac2",
      "sound": "magic",
      "requiredBranch": "berserker_s1_t0",
      "element": "physical"
    },
    "lineage_berserker_s1_t1": {
      "name": "철혈 지휘관의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "rune",
      "scale": "attack",
      "coefficient": 3.7,
      "range": 5,
      "radius": 1.1,
      "cooldown": 8.7,
      "cost": 26,
      "color": "#9fcac2",
      "sound": "magic",
      "requiredBranch": "berserker_s1_t1",
      "element": "physical"
    },
    "lineage_rune_s0": {
      "name": "마검사의 비기",
      "icon": "heart",
      "unlock": 18,
      "kind": "self",
      "cooldown": 11.6,
      "cost": 19,
      "heal": 0.12,
      "buff": {
        "duration": 5,
        "stats": [
          {
            "stat": "basicDamage",
            "op": "multiply",
            "value": 1.2
          }
        ]
      },
      "conditionHp": 0.8,
      "color": "#d9af6d",
      "sound": "buff",
      "requiredBranch": "rune_s0",
      "coefficient": 0.0,
      "element": "frost"
    },
    "lineage_rune_s0_t0": {
      "name": "별의 마검사의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "rune",
      "scale": "attack",
      "coefficient": 3.7,
      "range": 5,
      "radius": 1.1,
      "cooldown": 8.7,
      "cost": 26,
      "color": "#9fcac2",
      "sound": "magic",
      "requiredBranch": "rune_s0_t0",
      "element": "physical"
    },
    "lineage_rune_s0_t1": {
      "name": "심연의 칼날의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "rune",
      "scale": "attack",
      "coefficient": 3.7,
      "range": 5,
      "radius": 1.1,
      "cooldown": 8.7,
      "cost": 26,
      "color": "#9fcac2",
      "sound": "magic",
      "requiredBranch": "rune_s0_t1",
      "element": "physical"
    },
    "lineage_rune_s1": {
      "name": "룬 수호자의 비기",
      "icon": "heart",
      "unlock": 18,
      "kind": "self",
      "cooldown": 11.6,
      "cost": 19,
      "heal": 0.12,
      "buff": {
        "duration": 5,
        "stats": [
          {
            "stat": "basicDamage",
            "op": "multiply",
            "value": 1.2
          }
        ]
      },
      "conditionHp": 0.8,
      "color": "#d9af6d",
      "sound": "buff",
      "requiredBranch": "rune_s1",
      "coefficient": 0.0,
      "element": "frost"
    },
    "lineage_rune_s1_t0": {
      "name": "봉인의 기사의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "rune",
      "scale": "attack",
      "coefficient": 3.7,
      "range": 5,
      "radius": 1.1,
      "cooldown": 8.7,
      "cost": 26,
      "color": "#9fcac2",
      "sound": "magic",
      "requiredBranch": "rune_s1_t0",
      "element": "physical"
    },
    "lineage_rune_s1_t1": {
      "name": "황금 서약자의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "rune",
      "scale": "attack",
      "coefficient": 3.7,
      "range": 5,
      "radius": 1.1,
      "cooldown": 8.7,
      "cost": 26,
      "color": "#9fcac2",
      "sound": "magic",
      "requiredBranch": "rune_s1_t1",
      "element": "physical"
    },
    "veteran_archer_0": {
      "name": "노련한 화살비",
      "icon": "bow",
      "unlock": 8,
      "kind": "targetArea",
      "scale": "attack",
      "coefficient": 2.16,
      "range": 5.7,
      "radius": 1.6,
      "cooldown": 7.7,
      "cost": 13,
      "color": "#e2d39c",
      "sound": "arrow",
      "element": "physical"
    },
    "veteran_archer_1": {
      "name": "연속 사냥꾼의 눈",
      "icon": "signature",
      "unlock": 13,
      "kind": "self",
      "cooldown": 12.3,
      "cost": 11,
      "buff": {
        "duration": 6,
        "stats": [
          {
            "stat": "crit",
            "op": "add",
            "value": 0.2
          },
          {
            "stat": "basicDamage",
            "op": "multiply",
            "value": 1.15
          }
        ]
      },
      "color": "#aac57d",
      "sound": "buff",
      "coefficient": 0.0,
      "element": "fire"
    },
    "veteran_archer_2": {
      "name": "집중 관통 사격",
      "icon": "bow",
      "unlock": 18,
      "kind": "projectile",
      "projectile": "arrow",
      "scale": "attack",
      "coefficient": 3.5,
      "range": 6,
      "radius": 0.9,
      "cooldown": 9.1,
      "cost": 17,
      "pierce": 3,
      "color": "#f5ddb2",
      "sound": "arrow",
      "element": "frost"
    },
    "veteran_archer_3": {
      "name": "정밀 바람의 가호",
      "icon": "bait",
      "unlock": 23,
      "kind": "self",
      "cooldown": 13.9,
      "cost": 15,
      "buff": {
        "duration": 6,
        "stats": [
          {
            "stat": "speed",
            "op": "multiply",
            "value": 1.25
          },
          {
            "stat": "attackSpeed",
            "op": "multiply",
            "value": 1.2
          }
        ]
      },
      "color": "#c8ddc1",
      "sound": "buff",
      "coefficient": 0.0,
      "element": "nature"
    },
    "veteran_archer_4": {
      "name": "깊은 화살비",
      "icon": "bow",
      "unlock": 28,
      "kind": "targetArea",
      "scale": "attack",
      "coefficient": 2.36,
      "range": 5.7,
      "radius": 1.6,
      "cooldown": 8.3,
      "cost": 15,
      "color": "#e2d39c",
      "sound": "arrow",
      "element": "arcane"
    },
    "veteran_archer_5": {
      "name": "폭풍의 사냥꾼의 눈",
      "icon": "signature",
      "unlock": 33,
      "kind": "self",
      "cooldown": 13.2,
      "cost": 12,
      "buff": {
        "duration": 6,
        "stats": [
          {
            "stat": "crit",
            "op": "add",
            "value": 0.2
          },
          {
            "stat": "basicDamage",
            "op": "multiply",
            "value": 1.15
          }
        ]
      },
      "color": "#aac57d",
      "sound": "buff",
      "coefficient": 0.0,
      "element": "physical"
    },
    "veteran_archer_6": {
      "name": "왕립 관통 사격",
      "icon": "bow",
      "unlock": 38,
      "kind": "projectile",
      "projectile": "arrow",
      "scale": "attack",
      "coefficient": 3.81,
      "range": 6,
      "radius": 0.9,
      "cooldown": 9.8,
      "cost": 19,
      "pierce": 3,
      "color": "#f5ddb2",
      "sound": "arrow",
      "element": "fire"
    },
    "veteran_archer_7": {
      "name": "계승의 바람의 가호",
      "icon": "bait",
      "unlock": 43,
      "kind": "self",
      "cooldown": 14.9,
      "cost": 17,
      "buff": {
        "duration": 6,
        "stats": [
          {
            "stat": "speed",
            "op": "multiply",
            "value": 1.25
          },
          {
            "stat": "attackSpeed",
            "op": "multiply",
            "value": 1.2
          }
        ]
      },
      "color": "#c8ddc1",
      "sound": "buff",
      "coefficient": 0.0,
      "element": "frost"
    },
    "support_archer": {
      "name": "사냥꾼의 신호",
      "kind": "self",
      "icon": "bow",
      "unlock": 10,
      "cooldown": 18,
      "cost": 22,
      "party": {
        "stats": [
          {
            "stat": "crit",
            "value": 0.035,
            "op": "add"
          }
        ],
        "duration": 7,
        "range": 7
      },
      "color": "#e5d6a0",
      "sound": "buff"
    },
    "lineage_marksman": {
      "name": "명사수의 비기",
      "icon": "bow",
      "unlock": 3,
      "kind": "targetArea",
      "scale": "attack",
      "coefficient": 2.36,
      "range": 5.7,
      "radius": 1.6,
      "cooldown": 7.6,
      "cost": 14,
      "color": "#e2d39c",
      "sound": "arrow",
      "requiredBranch": "marksman",
      "element": "nature"
    },
    "lineage_ranger": {
      "name": "추적자의 비기",
      "icon": "bow",
      "unlock": 3,
      "kind": "targetArea",
      "scale": "attack",
      "coefficient": 2.36,
      "range": 5.7,
      "radius": 1.6,
      "cooldown": 7.6,
      "cost": 14,
      "color": "#e2d39c",
      "sound": "arrow",
      "requiredBranch": "ranger",
      "element": "fire"
    },
    "lineage_venom": {
      "name": "독 사냥꾼의 비기",
      "icon": "bow",
      "unlock": 3,
      "kind": "targetArea",
      "scale": "attack",
      "coefficient": 2.36,
      "range": 5.7,
      "radius": 1.6,
      "cooldown": 7.6,
      "cost": 14,
      "color": "#e2d39c",
      "sound": "arrow",
      "requiredBranch": "venom",
      "element": "physical"
    },
    "lineage_marksman_s0": {
      "name": "데드아이의 비기",
      "icon": "signature",
      "unlock": 18,
      "kind": "self",
      "cooldown": 12.8,
      "cost": 13,
      "buff": {
        "duration": 6,
        "stats": [
          {
            "stat": "crit",
            "op": "add",
            "value": 0.2
          },
          {
            "stat": "basicDamage",
            "op": "multiply",
            "value": 1.15
          }
        ]
      },
      "color": "#aac57d",
      "sound": "buff",
      "requiredBranch": "marksman_s0",
      "coefficient": 0.0,
      "element": "fire"
    },
    "lineage_marksman_s0_t0": {
      "name": "왕국 저격수의 비기",
      "icon": "bow",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "arrow",
      "scale": "attack",
      "coefficient": 4.77,
      "range": 6,
      "radius": 0.9,
      "cooldown": 9.9,
      "cost": 21,
      "pierce": 3,
      "color": "#f5ddb2",
      "sound": "arrow",
      "requiredBranch": "marksman_s0_t0",
      "element": "arcane"
    },
    "lineage_marksman_s0_t1": {
      "name": "유성 사수의 비기",
      "icon": "bow",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "arrow",
      "scale": "attack",
      "coefficient": 4.77,
      "range": 6,
      "radius": 0.9,
      "cooldown": 9.9,
      "cost": 21,
      "pierce": 3,
      "color": "#f5ddb2",
      "sound": "arrow",
      "requiredBranch": "marksman_s0_t1",
      "element": "arcane"
    },
    "lineage_marksman_s1": {
      "name": "호크아이의 비기",
      "icon": "signature",
      "unlock": 18,
      "kind": "self",
      "cooldown": 12.8,
      "cost": 13,
      "buff": {
        "duration": 6,
        "stats": [
          {
            "stat": "crit",
            "op": "add",
            "value": 0.2
          },
          {
            "stat": "basicDamage",
            "op": "multiply",
            "value": 1.15
          }
        ]
      },
      "color": "#aac57d",
      "sound": "buff",
      "requiredBranch": "marksman_s1",
      "coefficient": 0.0,
      "element": "fire"
    },
    "lineage_marksman_s1_t0": {
      "name": "매의 군주의 비기",
      "icon": "bow",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "arrow",
      "scale": "attack",
      "coefficient": 4.77,
      "range": 6,
      "radius": 0.9,
      "cooldown": 9.9,
      "cost": 21,
      "pierce": 3,
      "color": "#f5ddb2",
      "sound": "arrow",
      "requiredBranch": "marksman_s1_t0",
      "element": "arcane"
    },
    "lineage_marksman_s1_t1": {
      "name": "천리안의 비기",
      "icon": "bow",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "arrow",
      "scale": "attack",
      "coefficient": 4.77,
      "range": 6,
      "radius": 0.9,
      "cooldown": 9.9,
      "cost": 21,
      "pierce": 3,
      "color": "#f5ddb2",
      "sound": "arrow",
      "requiredBranch": "marksman_s1_t1",
      "element": "arcane"
    },
    "lineage_ranger_s0": {
      "name": "숲의 파수꾼의 비기",
      "icon": "signature",
      "unlock": 18,
      "kind": "self",
      "cooldown": 12.8,
      "cost": 13,
      "buff": {
        "duration": 6,
        "stats": [
          {
            "stat": "crit",
            "op": "add",
            "value": 0.2
          },
          {
            "stat": "basicDamage",
            "op": "multiply",
            "value": 1.15
          }
        ]
      },
      "color": "#aac57d",
      "sound": "buff",
      "requiredBranch": "ranger_s0",
      "coefficient": 0.0,
      "element": "arcane"
    },
    "lineage_ranger_s0_t0": {
      "name": "야생의 수호자의 비기",
      "icon": "bow",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "arrow",
      "scale": "attack",
      "coefficient": 4.77,
      "range": 6,
      "radius": 0.9,
      "cooldown": 9.9,
      "cost": 21,
      "pierce": 3,
      "color": "#f5ddb2",
      "sound": "arrow",
      "requiredBranch": "ranger_s0_t0",
      "element": "frost"
    },
    "lineage_ranger_s0_t1": {
      "name": "녹풍 사냥꾼의 비기",
      "icon": "bow",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "arrow",
      "scale": "attack",
      "coefficient": 4.77,
      "range": 6,
      "radius": 0.9,
      "cooldown": 9.9,
      "cost": 21,
      "pierce": 3,
      "color": "#f5ddb2",
      "sound": "arrow",
      "requiredBranch": "ranger_s0_t1",
      "element": "frost"
    },
    "lineage_ranger_s1": {
      "name": "트래퍼의 비기",
      "icon": "signature",
      "unlock": 18,
      "kind": "self",
      "cooldown": 12.8,
      "cost": 13,
      "buff": {
        "duration": 6,
        "stats": [
          {
            "stat": "crit",
            "op": "add",
            "value": 0.2
          },
          {
            "stat": "basicDamage",
            "op": "multiply",
            "value": 1.15
          }
        ]
      },
      "color": "#aac57d",
      "sound": "buff",
      "requiredBranch": "ranger_s1",
      "coefficient": 0.0,
      "element": "arcane"
    },
    "lineage_ranger_s1_t0": {
      "name": "덫의 장인의 비기",
      "icon": "bow",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "arrow",
      "scale": "attack",
      "coefficient": 4.77,
      "range": 6,
      "radius": 0.9,
      "cooldown": 9.9,
      "cost": 21,
      "pierce": 3,
      "color": "#f5ddb2",
      "sound": "arrow",
      "requiredBranch": "ranger_s1_t0",
      "element": "frost"
    },
    "lineage_ranger_s1_t1": {
      "name": "독안개 추적자의 비기",
      "icon": "bow",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "arrow",
      "scale": "attack",
      "coefficient": 4.77,
      "range": 6,
      "radius": 0.9,
      "cooldown": 9.9,
      "cost": 21,
      "pierce": 3,
      "color": "#f5ddb2",
      "sound": "arrow",
      "requiredBranch": "ranger_s1_t1",
      "element": "frost"
    },
    "lineage_venom_s0": {
      "name": "나이트스토커의 비기",
      "icon": "signature",
      "unlock": 18,
      "kind": "self",
      "cooldown": 12.8,
      "cost": 13,
      "buff": {
        "duration": 6,
        "stats": [
          {
            "stat": "crit",
            "op": "add",
            "value": 0.2
          },
          {
            "stat": "basicDamage",
            "op": "multiply",
            "value": 1.15
          }
        ]
      },
      "color": "#aac57d",
      "sound": "buff",
      "requiredBranch": "venom_s0",
      "coefficient": 0.0,
      "element": "nature"
    },
    "lineage_venom_s0_t0": {
      "name": "월영 추적자의 비기",
      "icon": "bow",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "arrow",
      "scale": "attack",
      "coefficient": 4.77,
      "range": 6,
      "radius": 0.9,
      "cooldown": 9.9,
      "cost": 21,
      "pierce": 3,
      "color": "#f5ddb2",
      "sound": "arrow",
      "requiredBranch": "venom_s0_t0",
      "element": "fire"
    },
    "lineage_venom_s0_t1": {
      "name": "칠흑의 화살의 비기",
      "icon": "bow",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "arrow",
      "scale": "attack",
      "coefficient": 4.77,
      "range": 6,
      "radius": 0.9,
      "cooldown": 9.9,
      "cost": 21,
      "pierce": 3,
      "color": "#f5ddb2",
      "sound": "arrow",
      "requiredBranch": "venom_s0_t1",
      "element": "fire"
    },
    "lineage_venom_s1": {
      "name": "베놈레인저의 비기",
      "icon": "signature",
      "unlock": 18,
      "kind": "self",
      "cooldown": 12.8,
      "cost": 13,
      "buff": {
        "duration": 6,
        "stats": [
          {
            "stat": "crit",
            "op": "add",
            "value": 0.2
          },
          {
            "stat": "basicDamage",
            "op": "multiply",
            "value": 1.15
          }
        ]
      },
      "color": "#aac57d",
      "sound": "buff",
      "requiredBranch": "venom_s1",
      "coefficient": 0.0,
      "element": "nature"
    },
    "lineage_venom_s1_t0": {
      "name": "독왕의 비기",
      "icon": "bow",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "arrow",
      "scale": "attack",
      "coefficient": 4.77,
      "range": 6,
      "radius": 0.9,
      "cooldown": 9.9,
      "cost": 21,
      "pierce": 3,
      "color": "#f5ddb2",
      "sound": "arrow",
      "requiredBranch": "venom_s1_t0",
      "element": "fire"
    },
    "lineage_venom_s1_t1": {
      "name": "가시 심장의 비기",
      "icon": "bow",
      "unlock": 34,
      "kind": "projectile",
      "projectile": "arrow",
      "scale": "attack",
      "coefficient": 4.77,
      "range": 6,
      "radius": 0.9,
      "cooldown": 9.9,
      "cost": 21,
      "pierce": 3,
      "color": "#f5ddb2",
      "sound": "arrow",
      "requiredBranch": "venom_s1_t1",
      "element": "fire"
    },
    "veteran_magician_0": {
      "name": "노련한 화염구",
      "icon": "staff",
      "unlock": 8,
      "kind": "projectile",
      "projectile": "fire",
      "scale": "spell",
      "coefficient": 2.38,
      "range": 5.5,
      "radius": 1.5,
      "cooldown": 4.2,
      "cost": 20,
      "burn": true,
      "color": "#edb16f",
      "sound": "fire",
      "element": "physical"
    },
    "veteran_magician_1": {
      "name": "연속 서리 고리",
      "icon": "signature",
      "unlock": 13,
      "kind": "nova",
      "scale": "spell",
      "coefficient": 1.88,
      "radius": 2.8,
      "range": 2.8,
      "cooldown": 6.7,
      "cost": 23,
      "slow": true,
      "color": "#b4dce2",
      "sound": "ice",
      "element": "fire"
    },
    "veteran_magician_2": {
      "name": "집중 비전 연쇄",
      "icon": "staff",
      "unlock": 18,
      "kind": "chain",
      "scale": "spell",
      "coefficient": 2.26,
      "range": 5.8,
      "chain": 4,
      "cooldown": 6.3,
      "cost": 26,
      "color": "#d1bbe8",
      "sound": "magic",
      "element": "frost"
    },
    "veteran_magician_3": {
      "name": "정밀 낙성",
      "icon": "signature",
      "unlock": 23,
      "kind": "targetArea",
      "scale": "spell",
      "coefficient": 4.62,
      "range": 6,
      "radius": 2.5,
      "cooldown": 10.4,
      "cost": 38,
      "burn": true,
      "color": "#efad78",
      "sound": "heavy",
      "element": "nature"
    },
    "veteran_magician_4": {
      "name": "깊은 화염구",
      "icon": "staff",
      "unlock": 28,
      "kind": "projectile",
      "projectile": "fire",
      "scale": "spell",
      "coefficient": 2.6,
      "range": 5.5,
      "radius": 1.5,
      "cooldown": 4.5,
      "cost": 22,
      "burn": true,
      "color": "#edb16f",
      "sound": "fire",
      "element": "arcane"
    },
    "veteran_magician_5": {
      "name": "폭풍의 서리 고리",
      "icon": "signature",
      "unlock": 33,
      "kind": "nova",
      "scale": "spell",
      "coefficient": 2.05,
      "radius": 2.8,
      "range": 2.8,
      "cooldown": 7.2,
      "cost": 25,
      "slow": true,
      "color": "#b4dce2",
      "sound": "ice",
      "element": "physical"
    },
    "veteran_magician_6": {
      "name": "왕립 비전 연쇄",
      "icon": "staff",
      "unlock": 38,
      "kind": "chain",
      "scale": "spell",
      "coefficient": 2.46,
      "range": 5.8,
      "chain": 4,
      "cooldown": 6.7,
      "cost": 28,
      "color": "#d1bbe8",
      "sound": "magic",
      "element": "fire"
    },
    "veteran_magician_7": {
      "name": "계승의 낙성",
      "icon": "signature",
      "unlock": 43,
      "kind": "targetArea",
      "scale": "spell",
      "coefficient": 5.02,
      "range": 6,
      "radius": 2.5,
      "cooldown": 11.2,
      "cost": 42,
      "burn": true,
      "color": "#efad78",
      "sound": "heavy",
      "element": "frost"
    },
    "support_magician": {
      "name": "별빛의 샘",
      "kind": "self",
      "icon": "staff",
      "unlock": 10,
      "cooldown": 18,
      "cost": 22,
      "party": {
        "heal": 0.1,
        "mana": 0.1,
        "range": 6
      },
      "color": "#e5d6a0",
      "sound": "buff"
    },
    "lineage_pyromancer": {
      "name": "화염술사의 비기",
      "icon": "staff",
      "unlock": 3,
      "kind": "projectile",
      "projectile": "fire",
      "scale": "spell",
      "coefficient": 2.6,
      "range": 5.5,
      "radius": 1.5,
      "cooldown": 4.1,
      "cost": 21,
      "burn": true,
      "color": "#edb16f",
      "sound": "fire",
      "requiredBranch": "pyromancer",
      "element": "physical"
    },
    "lineage_frost": {
      "name": "빙결술사의 비기",
      "icon": "staff",
      "unlock": 3,
      "kind": "projectile",
      "projectile": "fire",
      "scale": "spell",
      "coefficient": 2.6,
      "range": 5.5,
      "radius": 1.5,
      "cooldown": 4.1,
      "cost": 21,
      "burn": true,
      "color": "#edb16f",
      "sound": "fire",
      "requiredBranch": "frost",
      "element": "physical"
    },
    "lineage_arcanist": {
      "name": "비전술사의 비기",
      "icon": "staff",
      "unlock": 3,
      "kind": "projectile",
      "projectile": "fire",
      "scale": "spell",
      "coefficient": 2.6,
      "range": 5.5,
      "radius": 1.5,
      "cooldown": 4.1,
      "cost": 21,
      "burn": true,
      "color": "#edb16f",
      "sound": "fire",
      "requiredBranch": "arcanist",
      "element": "nature"
    },
    "lineage_pyromancer_s0": {
      "name": "인페르노의 비기",
      "icon": "signature",
      "unlock": 18,
      "kind": "nova",
      "scale": "spell",
      "coefficient": 2.31,
      "radius": 2.8,
      "range": 2.8,
      "cooldown": 7.0,
      "cost": 26,
      "slow": true,
      "color": "#b4dce2",
      "sound": "ice",
      "requiredBranch": "pyromancer_s0",
      "element": "nature"
    },
    "lineage_pyromancer_s0_t0": {
      "name": "불사조 현자의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "chain",
      "scale": "spell",
      "coefficient": 3.08,
      "range": 5.8,
      "chain": 4,
      "cooldown": 6.8,
      "cost": 31,
      "color": "#d1bbe8",
      "sound": "magic",
      "requiredBranch": "pyromancer_s0_t0",
      "element": "fire"
    },
    "lineage_pyromancer_s0_t1": {
      "name": "홍련의 군주의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "chain",
      "scale": "spell",
      "coefficient": 3.08,
      "range": 5.8,
      "chain": 4,
      "cooldown": 6.8,
      "cost": 31,
      "color": "#d1bbe8",
      "sound": "magic",
      "requiredBranch": "pyromancer_s0_t1",
      "element": "fire"
    },
    "lineage_pyromancer_s1": {
      "name": "플레임위버의 비기",
      "icon": "signature",
      "unlock": 18,
      "kind": "nova",
      "scale": "spell",
      "coefficient": 2.31,
      "radius": 2.8,
      "range": 2.8,
      "cooldown": 7.0,
      "cost": 26,
      "slow": true,
      "color": "#b4dce2",
      "sound": "ice",
      "requiredBranch": "pyromancer_s1",
      "element": "nature"
    },
    "lineage_pyromancer_s1_t0": {
      "name": "태양의 직조자의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "chain",
      "scale": "spell",
      "coefficient": 3.08,
      "range": 5.8,
      "chain": 4,
      "cooldown": 6.8,
      "cost": 31,
      "color": "#d1bbe8",
      "sound": "magic",
      "requiredBranch": "pyromancer_s1_t0",
      "element": "fire"
    },
    "lineage_pyromancer_s1_t1": {
      "name": "재의 예언자의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "chain",
      "scale": "spell",
      "coefficient": 3.08,
      "range": 5.8,
      "chain": 4,
      "cooldown": 6.8,
      "cost": 31,
      "color": "#d1bbe8",
      "sound": "magic",
      "requiredBranch": "pyromancer_s1_t1",
      "element": "fire"
    },
    "lineage_frost_s0": {
      "name": "글레이셜의 비기",
      "icon": "signature",
      "unlock": 18,
      "kind": "nova",
      "scale": "spell",
      "coefficient": 2.31,
      "radius": 2.8,
      "range": 2.8,
      "cooldown": 7.0,
      "cost": 26,
      "slow": true,
      "color": "#b4dce2",
      "sound": "ice",
      "requiredBranch": "frost_s0",
      "element": "nature"
    },
    "lineage_frost_s0_t0": {
      "name": "겨울의 현자의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "chain",
      "scale": "spell",
      "coefficient": 3.08,
      "range": 5.8,
      "chain": 4,
      "cooldown": 6.8,
      "cost": 31,
      "color": "#d1bbe8",
      "sound": "magic",
      "requiredBranch": "frost_s0_t0",
      "element": "fire"
    },
    "lineage_frost_s0_t1": {
      "name": "빙관의 군주의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "chain",
      "scale": "spell",
      "coefficient": 3.08,
      "range": 5.8,
      "chain": 4,
      "cooldown": 6.8,
      "cost": 31,
      "color": "#d1bbe8",
      "sound": "magic",
      "requiredBranch": "frost_s0_t1",
      "element": "fire"
    },
    "lineage_frost_s1": {
      "name": "프로스트가드의 비기",
      "icon": "signature",
      "unlock": 18,
      "kind": "nova",
      "scale": "spell",
      "coefficient": 2.31,
      "radius": 2.8,
      "range": 2.8,
      "cooldown": 7.0,
      "cost": 26,
      "slow": true,
      "color": "#b4dce2",
      "sound": "ice",
      "requiredBranch": "frost_s1",
      "element": "nature"
    },
    "lineage_frost_s1_t0": {
      "name": "서리 수호자의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "chain",
      "scale": "spell",
      "coefficient": 3.08,
      "range": 5.8,
      "chain": 4,
      "cooldown": 6.8,
      "cost": 31,
      "color": "#d1bbe8",
      "sound": "magic",
      "requiredBranch": "frost_s1_t0",
      "element": "fire"
    },
    "lineage_frost_s1_t1": {
      "name": "영원의 얼음의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "chain",
      "scale": "spell",
      "coefficient": 3.08,
      "range": 5.8,
      "chain": 4,
      "cooldown": 6.8,
      "cost": 31,
      "color": "#d1bbe8",
      "sound": "magic",
      "requiredBranch": "frost_s1_t1",
      "element": "fire"
    },
    "lineage_arcanist_s0": {
      "name": "아크메이지의 비기",
      "icon": "signature",
      "unlock": 18,
      "kind": "nova",
      "scale": "spell",
      "coefficient": 2.31,
      "radius": 2.8,
      "range": 2.8,
      "cooldown": 7.0,
      "cost": 26,
      "slow": true,
      "color": "#b4dce2",
      "sound": "ice",
      "requiredBranch": "arcanist_s0",
      "element": "fire"
    },
    "lineage_arcanist_s0_t0": {
      "name": "별의 대마도사의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "chain",
      "scale": "spell",
      "coefficient": 3.08,
      "range": 5.8,
      "chain": 4,
      "cooldown": 6.8,
      "cost": 31,
      "color": "#d1bbe8",
      "sound": "magic",
      "requiredBranch": "arcanist_s0_t0",
      "element": "arcane"
    },
    "lineage_arcanist_s0_t1": {
      "name": "차원 여행자의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "chain",
      "scale": "spell",
      "coefficient": 3.08,
      "range": 5.8,
      "chain": 4,
      "cooldown": 6.8,
      "cost": 31,
      "color": "#d1bbe8",
      "sound": "magic",
      "requiredBranch": "arcanist_s0_t1",
      "element": "arcane"
    },
    "lineage_arcanist_s1": {
      "name": "에테르위버의 비기",
      "icon": "signature",
      "unlock": 18,
      "kind": "nova",
      "scale": "spell",
      "coefficient": 2.31,
      "radius": 2.8,
      "range": 2.8,
      "cooldown": 7.0,
      "cost": 26,
      "slow": true,
      "color": "#b4dce2",
      "sound": "ice",
      "requiredBranch": "arcanist_s1",
      "element": "fire"
    },
    "lineage_arcanist_s1_t0": {
      "name": "마력의 지배자의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "chain",
      "scale": "spell",
      "coefficient": 3.08,
      "range": 5.8,
      "chain": 4,
      "cooldown": 6.8,
      "cost": 31,
      "color": "#d1bbe8",
      "sound": "magic",
      "requiredBranch": "arcanist_s1_t0",
      "element": "arcane"
    },
    "lineage_arcanist_s1_t1": {
      "name": "시간의 현자의 비기",
      "icon": "staff",
      "unlock": 34,
      "kind": "chain",
      "scale": "spell",
      "coefficient": 3.08,
      "range": 5.8,
      "chain": 4,
      "cooldown": 6.8,
      "cost": 31,
      "color": "#d1bbe8",
      "sound": "magic",
      "requiredBranch": "arcanist_s1_t1",
      "element": "arcane"
    },
    "veteran_guardian_0": {
      "name": "노련한 방패 강타",
      "icon": "shield",
      "unlock": 8,
      "kind": "nova",
      "scale": "spell",
      "defenseScale": 1.4,
      "coefficient": 1.94,
      "radius": 1.7,
      "range": 1.7,
      "cooldown": 5.3,
      "cost": 13,
      "knockback": 0.65,
      "color": "#e4d3a2",
      "sound": "shield",
      "element": "physical"
    },
    "veteran_guardian_1": {
      "name": "연속 성역",
      "icon": "heart",
      "unlock": 13,
      "kind": "self",
      "cooldown": 11.2,
      "cost": 20,
      "heal": 0.2,
      "shield": 0.08,
      "conditionHp": 0.8,
      "color": "#f0e2ac",
      "sound": "heal",
      "coefficient": 0.0,
      "element": "fire"
    },
    "veteran_guardian_2": {
      "name": "집중 빛의 심판",
      "icon": "signature",
      "unlock": 18,
      "kind": "targetArea",
      "scale": "spell",
      "defenseScale": 1.8,
      "coefficient": 2.83,
      "range": 4.5,
      "radius": 2,
      "cooldown": 8.0,
      "cost": 23,
      "color": "#f6e7b9",
      "sound": "magic",
      "element": "frost"
    },
    "veteran_guardian_3": {
      "name": "정밀 강철 서약",
      "icon": "shield",
      "unlock": 23,
      "kind": "self",
      "cooldown": 13.9,
      "cost": 23,
      "shield": 0.25,
      "buff": {
        "duration": 6,
        "stats": [
          {
            "stat": "damageReduction",
            "op": "add",
            "value": 0.2
          },
          {
            "stat": "thorns",
            "op": "add",
            "value": 8
          }
        ]
      },
      "color": "#d8dccf",
      "sound": "buff",
      "coefficient": 0.0,
      "element": "nature"
    },
    "veteran_guardian_4": {
      "name": "깊은 방패 강타",
      "icon": "shield",
      "unlock": 28,
      "kind": "nova",
      "scale": "spell",
      "defenseScale": 1.4,
      "coefficient": 2.12,
      "radius": 1.7,
      "range": 1.7,
      "cooldown": 5.7,
      "cost": 15,
      "knockback": 0.65,
      "color": "#e4d3a2",
      "sound": "shield",
      "element": "arcane"
    },
    "veteran_guardian_5": {
      "name": "폭풍의 성역",
      "icon": "heart",
      "unlock": 33,
      "kind": "self",
      "cooldown": 12.0,
      "cost": 22,
      "heal": 0.2,
      "shield": 0.08,
      "conditionHp": 0.8,
      "color": "#f0e2ac",
      "sound": "heal",
      "coefficient": 0.0,
      "element": "physical"
    },
    "veteran_guardian_6": {
      "name": "왕립 빛의 심판",
      "icon": "signature",
      "unlock": 38,
      "kind": "targetArea",
      "scale": "spell",
      "defenseScale": 1.8,
      "coefficient": 3.08,
      "range": 4.5,
      "radius": 2,
      "cooldown": 8.5,
      "cost": 26,
      "color": "#f6e7b9",
      "sound": "magic",
      "element": "fire"
    },
    "veteran_guardian_7": {
      "name": "계승의 강철 서약",
      "icon": "shield",
      "unlock": 43,
      "kind": "self",
      "cooldown": 14.9,
      "cost": 25,
      "shield": 0.25,
      "buff": {
        "duration": 6,
        "stats": [
          {
            "stat": "damageReduction",
            "op": "add",
            "value": 0.2
          },
          {
            "stat": "thorns",
            "op": "add",
            "value": 8
          }
        ]
      },
      "color": "#d8dccf",
      "sound": "buff",
      "coefficient": 0.0,
      "element": "frost"
    },
    "support_guardian": {
      "name": "수호자의 진형",
      "kind": "self",
      "icon": "shield",
      "unlock": 10,
      "cooldown": 18,
      "cost": 22,
      "party": {
        "shield": 0.12,
        "stats": [
          {
            "stat": "damageReduction",
            "value": 0.05,
            "op": "add"
          }
        ],
        "duration": 6,
        "range": 5,
        "taunt": 4
      },
      "color": "#e5d6a0",
      "sound": "buff"
    },
    "lineage_fortress": {
      "name": "철벽의 비기",
      "icon": "shield",
      "unlock": 3,
      "kind": "nova",
      "scale": "spell",
      "defenseScale": 1.4,
      "coefficient": 2.12,
      "radius": 1.7,
      "range": 1.7,
      "cooldown": 5.2,
      "cost": 14,
      "knockback": 0.65,
      "color": "#e4d3a2",
      "sound": "shield",
      "requiredBranch": "fortress",
      "element": "nature"
    },
    "lineage_paladin": {
      "name": "성기사의 비기",
      "icon": "shield",
      "unlock": 3,
      "kind": "nova",
      "scale": "spell",
      "defenseScale": 1.4,
      "coefficient": 2.12,
      "radius": 1.7,
      "range": 1.7,
      "cooldown": 5.2,
      "cost": 14,
      "knockback": 0.65,
      "color": "#e4d3a2",
      "sound": "shield",
      "requiredBranch": "paladin",
      "element": "frost"
    },
    "lineage_avenger": {
      "name": "응징자의 비기",
      "icon": "shield",
      "unlock": 3,
      "kind": "nova",
      "scale": "spell",
      "defenseScale": 1.4,
      "coefficient": 2.12,
      "radius": 1.7,
      "range": 1.7,
      "cooldown": 5.2,
      "cost": 14,
      "knockback": 0.65,
      "color": "#e4d3a2",
      "sound": "shield",
      "requiredBranch": "avenger",
      "element": "frost"
    },
    "lineage_fortress_s0": {
      "name": "바스티온의 비기",
      "icon": "heart",
      "unlock": 18,
      "kind": "self",
      "cooldown": 11.6,
      "cost": 23,
      "heal": 0.2,
      "shield": 0.08,
      "conditionHp": 0.8,
      "color": "#f0e2ac",
      "sound": "heal",
      "requiredBranch": "fortress_s0",
      "coefficient": 0.0,
      "element": "fire"
    },
    "lineage_fortress_s0_t0": {
      "name": "불굴의 성채의 비기",
      "icon": "signature",
      "unlock": 34,
      "kind": "targetArea",
      "scale": "spell",
      "defenseScale": 1.8,
      "coefficient": 3.85,
      "range": 4.5,
      "radius": 2,
      "cooldown": 8.7,
      "cost": 28,
      "color": "#f6e7b9",
      "sound": "magic",
      "requiredBranch": "fortress_s0_t0",
      "element": "arcane"
    },
    "lineage_fortress_s0_t1": {
      "name": "왕국의 보루의 비기",
      "icon": "signature",
      "unlock": 34,
      "kind": "targetArea",
      "scale": "spell",
      "defenseScale": 1.8,
      "coefficient": 3.85,
      "range": 4.5,
      "radius": 2,
      "cooldown": 8.7,
      "cost": 28,
      "color": "#f6e7b9",
      "sound": "magic",
      "requiredBranch": "fortress_s0_t1",
      "element": "arcane"
    },
    "lineage_fortress_s1": {
      "name": "아이언가드의 비기",
      "icon": "heart",
      "unlock": 18,
      "kind": "self",
      "cooldown": 11.6,
      "cost": 23,
      "heal": 0.2,
      "shield": 0.08,
      "conditionHp": 0.8,
      "color": "#f0e2ac",
      "sound": "heal",
      "requiredBranch": "fortress_s1",
      "coefficient": 0.0,
      "element": "fire"
    },
    "lineage_fortress_s1_t0": {
      "name": "강철의 거인의 비기",
      "icon": "signature",
      "unlock": 34,
      "kind": "targetArea",
      "scale": "spell",
      "defenseScale": 1.8,
      "coefficient": 3.85,
      "range": 4.5,
      "radius": 2,
      "cooldown": 8.7,
      "cost": 28,
      "color": "#f6e7b9",
      "sound": "magic",
      "requiredBranch": "fortress_s1_t0",
      "element": "arcane"
    },
    "lineage_fortress_s1_t1": {
      "name": "아다만트 수호자의 비기",
      "icon": "signature",
      "unlock": 34,
      "kind": "targetArea",
      "scale": "spell",
      "defenseScale": 1.8,
      "coefficient": 3.85,
      "range": 4.5,
      "radius": 2,
      "cooldown": 8.7,
      "cost": 28,
      "color": "#f6e7b9",
      "sound": "magic",
      "requiredBranch": "fortress_s1_t1",
      "element": "arcane"
    },
    "lineage_paladin_s0": {
      "name": "하이템플러의 비기",
      "icon": "heart",
      "unlock": 18,
      "kind": "self",
      "cooldown": 11.6,
      "cost": 23,
      "heal": 0.2,
      "shield": 0.08,
      "conditionHp": 0.8,
      "color": "#f0e2ac",
      "sound": "heal",
      "requiredBranch": "paladin_s0",
      "coefficient": 0.0,
      "element": "physical"
    },
    "lineage_paladin_s0_t0": {
      "name": "새벽의 성자의 비기",
      "icon": "signature",
      "unlock": 34,
      "kind": "targetArea",
      "scale": "spell",
      "defenseScale": 1.8,
      "coefficient": 3.85,
      "range": 4.5,
      "radius": 2,
      "cooldown": 8.7,
      "cost": 28,
      "color": "#f6e7b9",
      "sound": "magic",
      "requiredBranch": "paladin_s0_t0",
      "element": "nature"
    },
    "lineage_paladin_s0_t1": {
      "name": "태양의 심판관의 비기",
      "icon": "signature",
      "unlock": 34,
      "kind": "targetArea",
      "scale": "spell",
      "defenseScale": 1.8,
      "coefficient": 3.85,
      "range": 4.5,
      "radius": 2,
      "cooldown": 8.7,
      "cost": 28,
      "color": "#f6e7b9",
      "sound": "magic",
      "requiredBranch": "paladin_s0_t1",
      "element": "nature"
    },
    "lineage_paladin_s1": {
      "name": "세이크리드가드의 비기",
      "icon": "heart",
      "unlock": 18,
      "kind": "self",
      "cooldown": 11.6,
      "cost": 23,
      "heal": 0.2,
      "shield": 0.08,
      "conditionHp": 0.8,
      "color": "#f0e2ac",
      "sound": "heal",
      "requiredBranch": "paladin_s1",
      "coefficient": 0.0,
      "element": "physical"
    },
    "lineage_paladin_s1_t0": {
      "name": "성역의 수호자의 비기",
      "icon": "signature",
      "unlock": 34,
      "kind": "targetArea",
      "scale": "spell",
      "defenseScale": 1.8,
      "coefficient": 3.85,
      "range": 4.5,
      "radius": 2,
      "cooldown": 8.7,
      "cost": 28,
      "color": "#f6e7b9",
      "sound": "magic",
      "requiredBranch": "paladin_s1_t0",
      "element": "nature"
    },
    "lineage_paladin_s1_t1": {
      "name": "빛의 순례자의 비기",
      "icon": "signature",
      "unlock": 34,
      "kind": "targetArea",
      "scale": "spell",
      "defenseScale": 1.8,
      "coefficient": 3.85,
      "range": 4.5,
      "radius": 2,
      "cooldown": 8.7,
      "cost": 28,
      "color": "#f6e7b9",
      "sound": "magic",
      "requiredBranch": "paladin_s1_t1",
      "element": "nature"
    },
    "lineage_avenger_s0": {
      "name": "드레드노트의 비기",
      "icon": "heart",
      "unlock": 18,
      "kind": "self",
      "cooldown": 11.6,
      "cost": 23,
      "heal": 0.2,
      "shield": 0.08,
      "conditionHp": 0.8,
      "color": "#f0e2ac",
      "sound": "heal",
      "requiredBranch": "avenger_s0",
      "coefficient": 0.0,
      "element": "physical"
    },
    "lineage_avenger_s0_t0": {
      "name": "복수의 군주의 비기",
      "icon": "signature",
      "unlock": 34,
      "kind": "targetArea",
      "scale": "spell",
      "defenseScale": 1.8,
      "coefficient": 3.85,
      "range": 4.5,
      "radius": 2,
      "cooldown": 8.7,
      "cost": 28,
      "color": "#f6e7b9",
      "sound": "magic",
      "requiredBranch": "avenger_s0_t0",
      "element": "nature"
    },
    "lineage_avenger_s0_t1": {
      "name": "파멸의 방패의 비기",
      "icon": "signature",
      "unlock": 34,
      "kind": "targetArea",
      "scale": "spell",
      "defenseScale": 1.8,
      "coefficient": 3.85,
      "range": 4.5,
      "radius": 2,
      "cooldown": 8.7,
      "cost": 28,
      "color": "#f6e7b9",
      "sound": "magic",
      "requiredBranch": "avenger_s0_t1",
      "element": "nature"
    },
    "lineage_avenger_s1": {
      "name": "저거너트의 비기",
      "icon": "heart",
      "unlock": 18,
      "kind": "self",
      "cooldown": 11.6,
      "cost": 23,
      "heal": 0.2,
      "shield": 0.08,
      "conditionHp": 0.8,
      "color": "#f0e2ac",
      "sound": "heal",
      "requiredBranch": "avenger_s1",
      "coefficient": 0.0,
      "element": "physical"
    },
    "lineage_avenger_s1_t0": {
      "name": "전장의 거신의 비기",
      "icon": "signature",
      "unlock": 34,
      "kind": "targetArea",
      "scale": "spell",
      "defenseScale": 1.8,
      "coefficient": 3.85,
      "range": 4.5,
      "radius": 2,
      "cooldown": 8.7,
      "cost": 28,
      "color": "#f6e7b9",
      "sound": "magic",
      "requiredBranch": "avenger_s1_t0",
      "element": "nature"
    },
    "lineage_avenger_s1_t1": {
      "name": "불굴의 응징자의 비기",
      "icon": "signature",
      "unlock": 34,
      "kind": "targetArea",
      "scale": "spell",
      "defenseScale": 1.8,
      "coefficient": 3.85,
      "range": 4.5,
      "radius": 2,
      "cooldown": 8.7,
      "cost": 28,
      "color": "#f6e7b9",
      "sound": "magic",
      "requiredBranch": "avenger_s1_t1",
      "element": "nature"
    }
  },
  "branches": {
    "gladiator": {
      "id": "gladiator",
      "name": "검투사",
      "class": "warrior",
      "description": "평타와 치명타로 꾸준히 밀어붙입니다.",
      "stage": 1,
      "parent": null,
      "root": "gladiator",
      "level": 3
    },
    "berserker": {
      "id": "berserker",
      "name": "버서커",
      "class": "warrior",
      "description": "생존 여유를 화력과 흡혈로 바꿉니다.",
      "stage": 1,
      "parent": null,
      "root": "berserker",
      "level": 3
    },
    "rune": {
      "id": "rune",
      "name": "룬 기사",
      "class": "warrior",
      "description": "마력을 순환시켜 기술 전투에 집중합니다.",
      "stage": 1,
      "parent": null,
      "root": "rune",
      "level": 3
    },
    "marksman": {
      "id": "marksman",
      "name": "명사수",
      "class": "archer",
      "description": "먼 거리에서 치명적인 평타를 노립니다.",
      "stage": 1,
      "parent": null,
      "root": "marksman",
      "level": 3
    },
    "ranger": {
      "id": "ranger",
      "name": "추적자",
      "class": "archer",
      "description": "화살을 늘려 무리를 빠르게 정리합니다.",
      "stage": 1,
      "parent": null,
      "root": "ranger",
      "level": 3
    },
    "venom": {
      "id": "venom",
      "name": "독 사냥꾼",
      "class": "archer",
      "description": "독과 둔화로 추격을 끊고 누적 피해를 줍니다.",
      "stage": 1,
      "parent": null,
      "root": "venom",
      "level": 3
    },
    "pyromancer": {
      "id": "pyromancer",
      "name": "화염술사",
      "class": "magician",
      "description": "화염 주문과 화상으로 무리를 녹입니다.",
      "stage": 1,
      "parent": null,
      "root": "pyromancer",
      "level": 3
    },
    "frost": {
      "id": "frost",
      "name": "빙결술사",
      "class": "magician",
      "description": "느려진 적을 제어하고 보호막으로 버팁니다.",
      "stage": 1,
      "parent": null,
      "root": "frost",
      "level": 3
    },
    "arcanist": {
      "id": "arcanist",
      "name": "비전술사",
      "class": "magician",
      "description": "마력 회복과 메아리로 주문을 연속 사용합니다.",
      "stage": 1,
      "parent": null,
      "root": "arcanist",
      "level": 3
    },
    "fortress": {
      "id": "fortress",
      "name": "철벽",
      "class": "guardian",
      "description": "막강한 체력과 보호막으로 전선을 지킵니다.",
      "stage": 1,
      "parent": null,
      "root": "fortress",
      "level": 3
    },
    "paladin": {
      "id": "paladin",
      "name": "성기사",
      "class": "guardian",
      "description": "성역과 심판의 힘을 키우는 기술 수호자.",
      "stage": 1,
      "parent": null,
      "root": "paladin",
      "level": 3
    },
    "avenger": {
      "id": "avenger",
      "name": "응징자",
      "class": "guardian",
      "description": "맞을수록 반사와 근접 화력이 강해집니다.",
      "stage": 1,
      "parent": null,
      "root": "avenger",
      "level": 3
    },
    "gladiator_s0": {
      "id": "gladiator_s0",
      "name": "소드마스터",
      "class": "warrior",
      "parent": "gladiator",
      "root": "gladiator",
      "stage": 2,
      "level": 18,
      "description": "계열의 주력 화력을 극대화합니다."
    },
    "gladiator_s0_t0": {
      "id": "gladiator_s0_t0",
      "name": "검성",
      "class": "warrior",
      "parent": "gladiator_s0",
      "root": "gladiator",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "gladiator_s0_t1": {
      "id": "gladiator_s0_t1",
      "name": "결투의 군주",
      "class": "warrior",
      "parent": "gladiator_s0",
      "root": "gladiator",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "gladiator_s1": {
      "id": "gladiator_s1",
      "name": "블레이드댄서",
      "class": "warrior",
      "parent": "gladiator",
      "root": "gladiator",
      "stage": 2,
      "level": 18,
      "description": "계열의 약점을 보완하고 운용을 바꿉니다."
    },
    "gladiator_s1_t0": {
      "id": "gladiator_s1_t0",
      "name": "폭풍 검무가",
      "class": "warrior",
      "parent": "gladiator_s1",
      "root": "gladiator",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "gladiator_s1_t1": {
      "id": "gladiator_s1_t1",
      "name": "혈월 무희",
      "class": "warrior",
      "parent": "gladiator_s1",
      "root": "gladiator",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "berserker_s0": {
      "id": "berserker_s0",
      "name": "블러드리버",
      "class": "warrior",
      "parent": "berserker",
      "root": "berserker",
      "stage": 2,
      "level": 18,
      "description": "계열의 주력 화력을 극대화합니다."
    },
    "berserker_s0_t0": {
      "id": "berserker_s0_t0",
      "name": "혈왕",
      "class": "warrior",
      "parent": "berserker_s0",
      "root": "berserker",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "berserker_s0_t1": {
      "id": "berserker_s0_t1",
      "name": "불멸의 광전사",
      "class": "warrior",
      "parent": "berserker_s0",
      "root": "berserker",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "berserker_s1": {
      "id": "berserker_s1",
      "name": "워로드",
      "class": "warrior",
      "parent": "berserker",
      "root": "berserker",
      "stage": 2,
      "level": 18,
      "description": "계열의 약점을 보완하고 운용을 바꿉니다."
    },
    "berserker_s1_t0": {
      "id": "berserker_s1_t0",
      "name": "전쟁군주",
      "class": "warrior",
      "parent": "berserker_s1",
      "root": "berserker",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "berserker_s1_t1": {
      "id": "berserker_s1_t1",
      "name": "철혈 지휘관",
      "class": "warrior",
      "parent": "berserker_s1",
      "root": "berserker",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "rune_s0": {
      "id": "rune_s0",
      "name": "마검사",
      "class": "warrior",
      "parent": "rune",
      "root": "rune",
      "stage": 2,
      "level": 18,
      "description": "계열의 주력 화력을 극대화합니다."
    },
    "rune_s0_t0": {
      "id": "rune_s0_t0",
      "name": "별의 마검사",
      "class": "warrior",
      "parent": "rune_s0",
      "root": "rune",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "rune_s0_t1": {
      "id": "rune_s0_t1",
      "name": "심연의 칼날",
      "class": "warrior",
      "parent": "rune_s0",
      "root": "rune",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "rune_s1": {
      "id": "rune_s1",
      "name": "룬 수호자",
      "class": "warrior",
      "parent": "rune",
      "root": "rune",
      "stage": 2,
      "level": 18,
      "description": "계열의 약점을 보완하고 운용을 바꿉니다."
    },
    "rune_s1_t0": {
      "id": "rune_s1_t0",
      "name": "봉인의 기사",
      "class": "warrior",
      "parent": "rune_s1",
      "root": "rune",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "rune_s1_t1": {
      "id": "rune_s1_t1",
      "name": "황금 서약자",
      "class": "warrior",
      "parent": "rune_s1",
      "root": "rune",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "marksman_s0": {
      "id": "marksman_s0",
      "name": "데드아이",
      "class": "archer",
      "parent": "marksman",
      "root": "marksman",
      "stage": 2,
      "level": 18,
      "description": "계열의 주력 화력을 극대화합니다."
    },
    "marksman_s0_t0": {
      "id": "marksman_s0_t0",
      "name": "왕국 저격수",
      "class": "archer",
      "parent": "marksman_s0",
      "root": "marksman",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "marksman_s0_t1": {
      "id": "marksman_s0_t1",
      "name": "유성 사수",
      "class": "archer",
      "parent": "marksman_s0",
      "root": "marksman",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "marksman_s1": {
      "id": "marksman_s1",
      "name": "호크아이",
      "class": "archer",
      "parent": "marksman",
      "root": "marksman",
      "stage": 2,
      "level": 18,
      "description": "계열의 약점을 보완하고 운용을 바꿉니다."
    },
    "marksman_s1_t0": {
      "id": "marksman_s1_t0",
      "name": "매의 군주",
      "class": "archer",
      "parent": "marksman_s1",
      "root": "marksman",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "marksman_s1_t1": {
      "id": "marksman_s1_t1",
      "name": "천리안",
      "class": "archer",
      "parent": "marksman_s1",
      "root": "marksman",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "ranger_s0": {
      "id": "ranger_s0",
      "name": "숲의 파수꾼",
      "class": "archer",
      "parent": "ranger",
      "root": "ranger",
      "stage": 2,
      "level": 18,
      "description": "계열의 주력 화력을 극대화합니다."
    },
    "ranger_s0_t0": {
      "id": "ranger_s0_t0",
      "name": "야생의 수호자",
      "class": "archer",
      "parent": "ranger_s0",
      "root": "ranger",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "ranger_s0_t1": {
      "id": "ranger_s0_t1",
      "name": "녹풍 사냥꾼",
      "class": "archer",
      "parent": "ranger_s0",
      "root": "ranger",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "ranger_s1": {
      "id": "ranger_s1",
      "name": "트래퍼",
      "class": "archer",
      "parent": "ranger",
      "root": "ranger",
      "stage": 2,
      "level": 18,
      "description": "계열의 약점을 보완하고 운용을 바꿉니다."
    },
    "ranger_s1_t0": {
      "id": "ranger_s1_t0",
      "name": "덫의 장인",
      "class": "archer",
      "parent": "ranger_s1",
      "root": "ranger",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "ranger_s1_t1": {
      "id": "ranger_s1_t1",
      "name": "독안개 추적자",
      "class": "archer",
      "parent": "ranger_s1",
      "root": "ranger",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "venom_s0": {
      "id": "venom_s0",
      "name": "나이트스토커",
      "class": "archer",
      "parent": "venom",
      "root": "venom",
      "stage": 2,
      "level": 18,
      "description": "계열의 주력 화력을 극대화합니다."
    },
    "venom_s0_t0": {
      "id": "venom_s0_t0",
      "name": "월영 추적자",
      "class": "archer",
      "parent": "venom_s0",
      "root": "venom",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "venom_s0_t1": {
      "id": "venom_s0_t1",
      "name": "칠흑의 화살",
      "class": "archer",
      "parent": "venom_s0",
      "root": "venom",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "venom_s1": {
      "id": "venom_s1",
      "name": "베놈레인저",
      "class": "archer",
      "parent": "venom",
      "root": "venom",
      "stage": 2,
      "level": 18,
      "description": "계열의 약점을 보완하고 운용을 바꿉니다."
    },
    "venom_s1_t0": {
      "id": "venom_s1_t0",
      "name": "독왕",
      "class": "archer",
      "parent": "venom_s1",
      "root": "venom",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "venom_s1_t1": {
      "id": "venom_s1_t1",
      "name": "가시 심장",
      "class": "archer",
      "parent": "venom_s1",
      "root": "venom",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "pyromancer_s0": {
      "id": "pyromancer_s0",
      "name": "인페르노",
      "class": "magician",
      "parent": "pyromancer",
      "root": "pyromancer",
      "stage": 2,
      "level": 18,
      "description": "계열의 주력 화력을 극대화합니다."
    },
    "pyromancer_s0_t0": {
      "id": "pyromancer_s0_t0",
      "name": "불사조 현자",
      "class": "magician",
      "parent": "pyromancer_s0",
      "root": "pyromancer",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "pyromancer_s0_t1": {
      "id": "pyromancer_s0_t1",
      "name": "홍련의 군주",
      "class": "magician",
      "parent": "pyromancer_s0",
      "root": "pyromancer",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "pyromancer_s1": {
      "id": "pyromancer_s1",
      "name": "플레임위버",
      "class": "magician",
      "parent": "pyromancer",
      "root": "pyromancer",
      "stage": 2,
      "level": 18,
      "description": "계열의 약점을 보완하고 운용을 바꿉니다."
    },
    "pyromancer_s1_t0": {
      "id": "pyromancer_s1_t0",
      "name": "태양의 직조자",
      "class": "magician",
      "parent": "pyromancer_s1",
      "root": "pyromancer",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "pyromancer_s1_t1": {
      "id": "pyromancer_s1_t1",
      "name": "재의 예언자",
      "class": "magician",
      "parent": "pyromancer_s1",
      "root": "pyromancer",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "frost_s0": {
      "id": "frost_s0",
      "name": "글레이셜",
      "class": "magician",
      "parent": "frost",
      "root": "frost",
      "stage": 2,
      "level": 18,
      "description": "계열의 주력 화력을 극대화합니다."
    },
    "frost_s0_t0": {
      "id": "frost_s0_t0",
      "name": "겨울의 현자",
      "class": "magician",
      "parent": "frost_s0",
      "root": "frost",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "frost_s0_t1": {
      "id": "frost_s0_t1",
      "name": "빙관의 군주",
      "class": "magician",
      "parent": "frost_s0",
      "root": "frost",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "frost_s1": {
      "id": "frost_s1",
      "name": "프로스트가드",
      "class": "magician",
      "parent": "frost",
      "root": "frost",
      "stage": 2,
      "level": 18,
      "description": "계열의 약점을 보완하고 운용을 바꿉니다."
    },
    "frost_s1_t0": {
      "id": "frost_s1_t0",
      "name": "서리 수호자",
      "class": "magician",
      "parent": "frost_s1",
      "root": "frost",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "frost_s1_t1": {
      "id": "frost_s1_t1",
      "name": "영원의 얼음",
      "class": "magician",
      "parent": "frost_s1",
      "root": "frost",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "arcanist_s0": {
      "id": "arcanist_s0",
      "name": "아크메이지",
      "class": "magician",
      "parent": "arcanist",
      "root": "arcanist",
      "stage": 2,
      "level": 18,
      "description": "계열의 주력 화력을 극대화합니다."
    },
    "arcanist_s0_t0": {
      "id": "arcanist_s0_t0",
      "name": "별의 대마도사",
      "class": "magician",
      "parent": "arcanist_s0",
      "root": "arcanist",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "arcanist_s0_t1": {
      "id": "arcanist_s0_t1",
      "name": "차원 여행자",
      "class": "magician",
      "parent": "arcanist_s0",
      "root": "arcanist",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "arcanist_s1": {
      "id": "arcanist_s1",
      "name": "에테르위버",
      "class": "magician",
      "parent": "arcanist",
      "root": "arcanist",
      "stage": 2,
      "level": 18,
      "description": "계열의 약점을 보완하고 운용을 바꿉니다."
    },
    "arcanist_s1_t0": {
      "id": "arcanist_s1_t0",
      "name": "마력의 지배자",
      "class": "magician",
      "parent": "arcanist_s1",
      "root": "arcanist",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "arcanist_s1_t1": {
      "id": "arcanist_s1_t1",
      "name": "시간의 현자",
      "class": "magician",
      "parent": "arcanist_s1",
      "root": "arcanist",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "fortress_s0": {
      "id": "fortress_s0",
      "name": "바스티온",
      "class": "guardian",
      "parent": "fortress",
      "root": "fortress",
      "stage": 2,
      "level": 18,
      "description": "계열의 주력 화력을 극대화합니다."
    },
    "fortress_s0_t0": {
      "id": "fortress_s0_t0",
      "name": "불굴의 성채",
      "class": "guardian",
      "parent": "fortress_s0",
      "root": "fortress",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "fortress_s0_t1": {
      "id": "fortress_s0_t1",
      "name": "왕국의 보루",
      "class": "guardian",
      "parent": "fortress_s0",
      "root": "fortress",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "fortress_s1": {
      "id": "fortress_s1",
      "name": "아이언가드",
      "class": "guardian",
      "parent": "fortress",
      "root": "fortress",
      "stage": 2,
      "level": 18,
      "description": "계열의 약점을 보완하고 운용을 바꿉니다."
    },
    "fortress_s1_t0": {
      "id": "fortress_s1_t0",
      "name": "강철의 거인",
      "class": "guardian",
      "parent": "fortress_s1",
      "root": "fortress",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "fortress_s1_t1": {
      "id": "fortress_s1_t1",
      "name": "아다만트 수호자",
      "class": "guardian",
      "parent": "fortress_s1",
      "root": "fortress",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "paladin_s0": {
      "id": "paladin_s0",
      "name": "하이템플러",
      "class": "guardian",
      "parent": "paladin",
      "root": "paladin",
      "stage": 2,
      "level": 18,
      "description": "계열의 주력 화력을 극대화합니다."
    },
    "paladin_s0_t0": {
      "id": "paladin_s0_t0",
      "name": "새벽의 성자",
      "class": "guardian",
      "parent": "paladin_s0",
      "root": "paladin",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "paladin_s0_t1": {
      "id": "paladin_s0_t1",
      "name": "태양의 심판관",
      "class": "guardian",
      "parent": "paladin_s0",
      "root": "paladin",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "paladin_s1": {
      "id": "paladin_s1",
      "name": "세이크리드가드",
      "class": "guardian",
      "parent": "paladin",
      "root": "paladin",
      "stage": 2,
      "level": 18,
      "description": "계열의 약점을 보완하고 운용을 바꿉니다."
    },
    "paladin_s1_t0": {
      "id": "paladin_s1_t0",
      "name": "성역의 수호자",
      "class": "guardian",
      "parent": "paladin_s1",
      "root": "paladin",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "paladin_s1_t1": {
      "id": "paladin_s1_t1",
      "name": "빛의 순례자",
      "class": "guardian",
      "parent": "paladin_s1",
      "root": "paladin",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "avenger_s0": {
      "id": "avenger_s0",
      "name": "드레드노트",
      "class": "guardian",
      "parent": "avenger",
      "root": "avenger",
      "stage": 2,
      "level": 18,
      "description": "계열의 주력 화력을 극대화합니다."
    },
    "avenger_s0_t0": {
      "id": "avenger_s0_t0",
      "name": "복수의 군주",
      "class": "guardian",
      "parent": "avenger_s0",
      "root": "avenger",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "avenger_s0_t1": {
      "id": "avenger_s0_t1",
      "name": "파멸의 방패",
      "class": "guardian",
      "parent": "avenger_s0",
      "root": "avenger",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    },
    "avenger_s1": {
      "id": "avenger_s1",
      "name": "저거너트",
      "class": "guardian",
      "parent": "avenger",
      "root": "avenger",
      "stage": 2,
      "level": 18,
      "description": "계열의 약점을 보완하고 운용을 바꿉니다."
    },
    "avenger_s1_t0": {
      "id": "avenger_s1_t0",
      "name": "전장의 거신",
      "class": "guardian",
      "parent": "avenger_s1",
      "root": "avenger",
      "stage": 3,
      "level": 34,
      "description": "극대화된 주력 능력으로 정점을 노립니다."
    },
    "avenger_s1_t1": {
      "id": "avenger_s1_t1",
      "name": "불굴의 응징자",
      "class": "guardian",
      "parent": "avenger_s1",
      "root": "avenger",
      "stage": 3,
      "level": 34,
      "description": "생존·자원 순환을 더한 독자적인 완성형입니다."
    }
  },
  "talents": [
    {
      "id": "gladiator_1",
      "name": "검의 기본",
      "branch": "gladiator",
      "class": "warrior",
      "tier": 0,
      "maxRank": 3,
      "requires": 0,
      "cost": 1,
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.09
        }
      ],
      "description": "평타 피해 +9%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "gladiator_2",
      "name": "검의 연계",
      "branch": "gladiator",
      "class": "warrior",
      "tier": 1,
      "maxRank": 2,
      "requires": 2,
      "cost": 1,
      "stats": [
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.07
        }
      ],
      "description": "공격 속도 +7%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "gladiator_3",
      "name": "가벼운 갑옷",
      "branch": "gladiator",
      "class": "warrior",
      "tier": 2,
      "maxRank": 2,
      "requires": 4,
      "cost": 1,
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.05
        },
        {
          "stat": "hp",
          "op": "multiply",
          "value": 0.96
        }
      ],
      "description": "치명타 +5%p / 최대 체력 -4%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "gladiator_4",
      "name": "칼날의 원",
      "branch": "gladiator",
      "class": "warrior",
      "tier": 3,
      "maxRank": 1,
      "requires": 6,
      "cost": 1,
      "stats": [
        {
          "stat": "cleave",
          "op": "add",
          "value": 0.45
        }
      ],
      "description": "평타가 주변에 45% 피해",
      "capstone": true,
      "minLevel": 3
    },
    {
      "id": "berserker_1",
      "name": "맹공",
      "branch": "berserker",
      "class": "warrior",
      "tier": 0,
      "maxRank": 3,
      "requires": 0,
      "cost": 1,
      "stats": [
        {
          "stat": "attack",
          "op": "multiply",
          "value": 1.08
        }
      ],
      "description": "공격력 +8%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "berserker_2",
      "name": "피의 호흡",
      "branch": "berserker",
      "class": "warrior",
      "tier": 1,
      "maxRank": 2,
      "requires": 2,
      "cost": 1,
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "흡혈 +2.5%p",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "berserker_3",
      "name": "격노",
      "branch": "berserker",
      "class": "warrior",
      "tier": 2,
      "maxRank": 2,
      "requires": 4,
      "cost": 1,
      "stats": [
        {
          "stat": "lowHpDamage",
          "op": "add",
          "value": 0.12
        },
        {
          "stat": "defense",
          "op": "multiply",
          "value": 0.92
        }
      ],
      "description": "체력 절반 아래 화력 +12% / 방어 -8%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "berserker_4",
      "name": "불굴의 피",
      "branch": "berserker",
      "class": "warrior",
      "tier": 3,
      "maxRank": 1,
      "requires": 6,
      "cost": 1,
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.08
        },
        {
          "stat": "lifeOnKill",
          "op": "add",
          "value": 0.04
        }
      ],
      "description": "흡혈 +8%p / 처치 시 최대 체력 4% 회복",
      "capstone": true,
      "minLevel": 3
    },
    {
      "id": "rune_1",
      "name": "룬 각인",
      "branch": "rune",
      "class": "warrior",
      "tier": 0,
      "maxRank": 3,
      "requires": 0,
      "cost": 1,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.09
        }
      ],
      "description": "기술 피해 +9%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "rune_2",
      "name": "마력 순환",
      "branch": "rune",
      "class": "warrior",
      "tier": 1,
      "maxRank": 2,
      "requires": 2,
      "cost": 1,
      "stats": [
        {
          "stat": "manaOnHit",
          "op": "add",
          "value": 1.2
        }
      ],
      "description": "평타 적중 시 마력 1.2 회복",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "rune_3",
      "name": "주문의 무게",
      "branch": "rune",
      "class": "warrior",
      "tier": 2,
      "maxRank": 2,
      "requires": 4,
      "cost": 1,
      "stats": [
        {
          "stat": "cooldownRate",
          "op": "multiply",
          "value": 0.92
        },
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 0.96
        }
      ],
      "description": "기술 재사용 -8% / 평타 피해 -4%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "rune_4",
      "name": "메아리 검",
      "branch": "rune",
      "class": "warrior",
      "tier": 3,
      "maxRank": 1,
      "requires": 6,
      "cost": 1,
      "stats": [
        {
          "stat": "skillEcho",
          "op": "add",
          "value": 0.4
        }
      ],
      "description": "피해 기술이 40% 확률로 메아리 발동",
      "capstone": true,
      "minLevel": 3
    },
    {
      "id": "marksman_1",
      "name": "정밀 사격",
      "branch": "marksman",
      "class": "archer",
      "tier": 0,
      "maxRank": 3,
      "requires": 0,
      "cost": 1,
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.1
        }
      ],
      "description": "평타 피해 +10%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "marksman_2",
      "name": "먼 시야",
      "branch": "marksman",
      "class": "archer",
      "tier": 1,
      "maxRank": 2,
      "requires": 2,
      "cost": 1,
      "stats": [
        {
          "stat": "range",
          "op": "add",
          "value": 0.35
        }
      ],
      "description": "공격 거리 +0.35",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "marksman_3",
      "name": "저격 자세",
      "branch": "marksman",
      "class": "archer",
      "tier": 2,
      "maxRank": 2,
      "requires": 4,
      "cost": 1,
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.06
        },
        {
          "stat": "speed",
          "op": "multiply",
          "value": 0.97
        }
      ],
      "description": "치명타 +6%p / 이동 속도 -3%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "marksman_4",
      "name": "급소 관통",
      "branch": "marksman",
      "class": "archer",
      "tier": 3,
      "maxRank": 1,
      "requires": 6,
      "cost": 1,
      "stats": [
        {
          "stat": "critDamage",
          "op": "add",
          "value": 0.6
        },
        {
          "stat": "crit",
          "op": "add",
          "value": 0.12
        }
      ],
      "description": "치명타 피해 +0.6배 / 확률 +12%p",
      "capstone": true,
      "minLevel": 3
    },
    {
      "id": "ranger_1",
      "name": "빠른 시위",
      "branch": "ranger",
      "class": "archer",
      "tier": 0,
      "maxRank": 3,
      "requires": 0,
      "cost": 1,
      "stats": [
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.08
        }
      ],
      "description": "공격 속도 +8%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "ranger_2",
      "name": "추격자의 발",
      "branch": "ranger",
      "class": "archer",
      "tier": 1,
      "maxRank": 2,
      "requires": 2,
      "cost": 1,
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.06
        }
      ],
      "description": "이동 속도 +6%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "ranger_3",
      "name": "분산 사격",
      "branch": "ranger",
      "class": "archer",
      "tier": 2,
      "maxRank": 2,
      "requires": 4,
      "cost": 1,
      "stats": [
        {
          "stat": "extraShots",
          "op": "add",
          "value": 1
        },
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 0.91
        }
      ],
      "description": "추가 화살 +1 / 평타 피해 -9%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "ranger_4",
      "name": "쏟아지는 화살",
      "branch": "ranger",
      "class": "archer",
      "tier": 3,
      "maxRank": 1,
      "requires": 6,
      "cost": 1,
      "stats": [
        {
          "stat": "extraShots",
          "op": "add",
          "value": 1
        },
        {
          "stat": "manaOnHit",
          "op": "add",
          "value": 1
        }
      ],
      "description": "추가 화살 +1 / 적중 마력 +1",
      "capstone": true,
      "minLevel": 3
    },
    {
      "id": "venom_1",
      "name": "독 바르기",
      "branch": "venom",
      "class": "archer",
      "tier": 0,
      "maxRank": 3,
      "requires": 0,
      "cost": 1,
      "stats": [
        {
          "stat": "poisonChance",
          "op": "add",
          "value": 0.16
        }
      ],
      "description": "중독 확률 +16%p",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "venom_2",
      "name": "늪의 발걸음",
      "branch": "venom",
      "class": "archer",
      "tier": 1,
      "maxRank": 2,
      "requires": 2,
      "cost": 1,
      "stats": [
        {
          "stat": "slowChance",
          "op": "add",
          "value": 0.1
        }
      ],
      "description": "둔화 확률 +10%p",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "venom_3",
      "name": "지독한 독",
      "branch": "venom",
      "class": "archer",
      "tier": 2,
      "maxRank": 2,
      "requires": 4,
      "cost": 1,
      "stats": [
        {
          "stat": "poisonDamage",
          "op": "multiply",
          "value": 1.25
        },
        {
          "stat": "attack",
          "op": "multiply",
          "value": 0.96
        }
      ],
      "description": "중독 피해 +25% / 공격력 -4%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "venom_4",
      "name": "맹독의 사냥",
      "branch": "venom",
      "class": "archer",
      "tier": 3,
      "maxRank": 1,
      "requires": 6,
      "cost": 1,
      "stats": [
        {
          "stat": "poisonChance",
          "op": "add",
          "value": 0.5
        },
        {
          "stat": "poisonDamage",
          "op": "multiply",
          "value": 1.7
        }
      ],
      "description": "중독 확률 +50%p / 중독 피해 +70%",
      "capstone": true,
      "minLevel": 3
    },
    {
      "id": "pyromancer_1",
      "name": "화염 학파",
      "branch": "pyromancer",
      "class": "magician",
      "tier": 0,
      "maxRank": 3,
      "requires": 0,
      "cost": 1,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.1
        }
      ],
      "description": "기술 피해 +10%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "pyromancer_2",
      "name": "불씨",
      "branch": "pyromancer",
      "class": "magician",
      "tier": 1,
      "maxRank": 2,
      "requires": 2,
      "cost": 1,
      "stats": [
        {
          "stat": "burnChance",
          "op": "add",
          "value": 0.16
        }
      ],
      "description": "화상 확률 +16%p",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "pyromancer_3",
      "name": "과열",
      "branch": "pyromancer",
      "class": "magician",
      "tier": 2,
      "maxRank": 2,
      "requires": 4,
      "cost": 1,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.12
        },
        {
          "stat": "hp",
          "op": "multiply",
          "value": 0.95
        }
      ],
      "description": "주문력 +12% / 최대 체력 -5%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "pyromancer_4",
      "name": "불꽃의 왕관",
      "branch": "pyromancer",
      "class": "magician",
      "tier": 3,
      "maxRank": 1,
      "requires": 6,
      "cost": 1,
      "stats": [
        {
          "stat": "burnChance",
          "op": "add",
          "value": 0.5
        },
        {
          "stat": "burnDamage",
          "op": "multiply",
          "value": 1.8
        }
      ],
      "description": "화상 확률 +50%p / 화상 피해 +80%",
      "capstone": true,
      "minLevel": 3
    },
    {
      "id": "frost_1",
      "name": "서리 감각",
      "branch": "frost",
      "class": "magician",
      "tier": 0,
      "maxRank": 3,
      "requires": 0,
      "cost": 1,
      "stats": [
        {
          "stat": "slowChance",
          "op": "add",
          "value": 0.15
        }
      ],
      "description": "둔화 확률 +15%p",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "frost_2",
      "name": "얼음 보호",
      "branch": "frost",
      "class": "magician",
      "tier": 1,
      "maxRank": 2,
      "requires": 2,
      "cost": 1,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 5
        }
      ],
      "description": "기술 사용 시 보호막 +5",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "frost_3",
      "name": "얼음 장벽",
      "branch": "frost",
      "class": "magician",
      "tier": 2,
      "maxRank": 2,
      "requires": 4,
      "cost": 1,
      "stats": [
        {
          "stat": "defense",
          "op": "add",
          "value": 2
        },
        {
          "stat": "speed",
          "op": "multiply",
          "value": 0.97
        }
      ],
      "description": "방어력 +2 / 이동 속도 -3%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "frost_4",
      "name": "겨울의 심장",
      "branch": "frost",
      "class": "magician",
      "tier": 3,
      "maxRank": 1,
      "requires": 6,
      "cost": 1,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 18
        },
        {
          "stat": "slowChance",
          "op": "add",
          "value": 0.25
        }
      ],
      "description": "기술 보호막 +18 / 둔화 확률 +25%p",
      "capstone": true,
      "minLevel": 3
    },
    {
      "id": "arcanist_1",
      "name": "마력의 샘",
      "branch": "arcanist",
      "class": "magician",
      "tier": 0,
      "maxRank": 3,
      "requires": 0,
      "cost": 1,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.9
        }
      ],
      "description": "마력 회복 +0.9/초",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "arcanist_2",
      "name": "빠른 시전",
      "branch": "arcanist",
      "class": "magician",
      "tier": 1,
      "maxRank": 2,
      "requires": 2,
      "cost": 1,
      "stats": [
        {
          "stat": "cooldownRate",
          "op": "multiply",
          "value": 0.94
        }
      ],
      "description": "기술 재사용 -6%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "arcanist_3",
      "name": "비전 집중",
      "branch": "arcanist",
      "class": "magician",
      "tier": 2,
      "maxRank": 2,
      "requires": 4,
      "cost": 1,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.12
        },
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 0.93
        }
      ],
      "description": "기술 피해 +12% / 평타 피해 -7%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "arcanist_4",
      "name": "이중 시전",
      "branch": "arcanist",
      "class": "magician",
      "tier": 3,
      "maxRank": 1,
      "requires": 6,
      "cost": 1,
      "stats": [
        {
          "stat": "skillEcho",
          "op": "add",
          "value": 0.5
        }
      ],
      "description": "피해 기술이 50% 확률로 메아리 발동",
      "capstone": true,
      "minLevel": 3
    },
    {
      "id": "fortress_1",
      "name": "강인함",
      "branch": "fortress",
      "class": "guardian",
      "tier": 0,
      "maxRank": 3,
      "requires": 0,
      "cost": 1,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.09
        }
      ],
      "description": "최대 체력 +9%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "fortress_2",
      "name": "방패 단련",
      "branch": "fortress",
      "class": "guardian",
      "tier": 1,
      "maxRank": 2,
      "requires": 2,
      "cost": 1,
      "stats": [
        {
          "stat": "defense",
          "op": "add",
          "value": 1.8
        }
      ],
      "description": "방어력 +1.8",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "fortress_3",
      "name": "중갑 서약",
      "branch": "fortress",
      "class": "guardian",
      "tier": 2,
      "maxRank": 2,
      "requires": 4,
      "cost": 1,
      "stats": [
        {
          "stat": "damageReduction",
          "op": "add",
          "value": 0.045
        },
        {
          "stat": "speed",
          "op": "multiply",
          "value": 0.97
        }
      ],
      "description": "받는 피해 -4.5% / 이동 속도 -3%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "fortress_4",
      "name": "움직이는 성채",
      "branch": "fortress",
      "class": "guardian",
      "tier": 3,
      "maxRank": 1,
      "requires": 6,
      "cost": 1,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 25
        },
        {
          "stat": "damageReduction",
          "op": "add",
          "value": 0.1
        }
      ],
      "description": "기술 보호막 +25 / 받는 피해 -10%",
      "capstone": true,
      "minLevel": 3
    },
    {
      "id": "paladin_1",
      "name": "성스러운 힘",
      "branch": "paladin",
      "class": "guardian",
      "tier": 0,
      "maxRank": 3,
      "requires": 0,
      "cost": 1,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.1
        }
      ],
      "description": "주문력 +10%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "paladin_2",
      "name": "마력 기도",
      "branch": "paladin",
      "class": "guardian",
      "tier": 1,
      "maxRank": 2,
      "requires": 2,
      "cost": 1,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.8
        }
      ],
      "description": "마력 회복 +0.8/초",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "paladin_3",
      "name": "엄숙한 심판",
      "branch": "paladin",
      "class": "guardian",
      "tier": 2,
      "maxRank": 2,
      "requires": 4,
      "cost": 1,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.13
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 0.96
        }
      ],
      "description": "기술 피해 +13% / 공격 속도 -4%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "paladin_4",
      "name": "빛의 서약",
      "branch": "paladin",
      "class": "guardian",
      "tier": 3,
      "maxRank": 1,
      "requires": 6,
      "cost": 1,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.3
        },
        {
          "stat": "lifeOnKill",
          "op": "add",
          "value": 0.05
        }
      ],
      "description": "기술 피해 +30% / 처치 시 체력 5% 회복",
      "capstone": true,
      "minLevel": 3
    },
    {
      "id": "avenger_1",
      "name": "응징의 갑주",
      "branch": "avenger",
      "class": "guardian",
      "tier": 0,
      "maxRank": 3,
      "requires": 0,
      "cost": 1,
      "stats": [
        {
          "stat": "thorns",
          "op": "add",
          "value": 2.5
        }
      ],
      "description": "근접 반사 피해 +2.5",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "avenger_2",
      "name": "전투 회복",
      "branch": "avenger",
      "class": "guardian",
      "tier": 1,
      "maxRank": 2,
      "requires": 2,
      "cost": 1,
      "stats": [
        {
          "stat": "hpRegen",
          "op": "add",
          "value": 0.6
        }
      ],
      "description": "체력 회복 +0.6/초",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "avenger_3",
      "name": "가시의 맹세",
      "branch": "avenger",
      "class": "guardian",
      "tier": 2,
      "maxRank": 2,
      "requires": 4,
      "cost": 1,
      "stats": [
        {
          "stat": "thorns",
          "op": "add",
          "value": 4
        },
        {
          "stat": "mp",
          "op": "multiply",
          "value": 0.96
        }
      ],
      "description": "근접 반사 피해 +4 / 최대 마력 -4%",
      "capstone": false,
      "minLevel": 3
    },
    {
      "id": "avenger_4",
      "name": "불패의 방패",
      "branch": "avenger",
      "class": "guardian",
      "tier": 3,
      "maxRank": 1,
      "requires": 6,
      "cost": 1,
      "stats": [
        {
          "stat": "thorns",
          "op": "add",
          "value": 15
        },
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.06
        }
      ],
      "description": "근접 반사 피해 +15 / 흡혈 +6%p",
      "capstone": true,
      "minLevel": 3
    },
    {
      "id": "gladiator_deep_0",
      "name": "검투사의 연마",
      "branch": "gladiator",
      "class": "warrior",
      "tier": 4,
      "maxRank": 6,
      "requires": 7,
      "cost": 1,
      "minLevel": 10,
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "gladiator_deep_1",
      "name": "검투사의 비전",
      "branch": "gladiator",
      "class": "warrior",
      "tier": 5,
      "maxRank": 6,
      "requires": 10,
      "cost": 1,
      "minLevel": 14,
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.015
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s0_0",
      "name": "소드마스터의 단련",
      "branch": "gladiator_s0",
      "class": "warrior",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s0_1",
      "name": "소드마스터의 기예",
      "branch": "gladiator_s0",
      "class": "warrior",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.015
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s0_2",
      "name": "소드마스터의 신념",
      "branch": "gladiator_s0",
      "class": "warrior",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.025
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s0_3",
      "name": "소드마스터의 오의",
      "branch": "gladiator_s0",
      "class": "warrior",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "gladiator_s0_t0_0",
      "name": "검성의 기초",
      "branch": "gladiator_s0_t0",
      "class": "warrior",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s0_t0_1",
      "name": "검성의 계승",
      "branch": "gladiator_s0_t0",
      "class": "warrior",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.015
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s0_t0_2",
      "name": "검성의 완성",
      "branch": "gladiator_s0_t0",
      "class": "warrior",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s0_t0_3",
      "name": "검성의 초월",
      "branch": "gladiator_s0_t0",
      "class": "warrior",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s0_t0_4",
      "name": "검성의 궁극",
      "branch": "gladiator_s0_t0",
      "class": "warrior",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.015
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "gladiator_s0_t1_0",
      "name": "결투의 군주의 기초",
      "branch": "gladiator_s0_t1",
      "class": "warrior",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.015
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s0_t1_1",
      "name": "결투의 군주의 계승",
      "branch": "gladiator_s0_t1",
      "class": "warrior",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s0_t1_2",
      "name": "결투의 군주의 완성",
      "branch": "gladiator_s0_t1",
      "class": "warrior",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s0_t1_3",
      "name": "결투의 군주의 초월",
      "branch": "gladiator_s0_t1",
      "class": "warrior",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.015
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s0_t1_4",
      "name": "결투의 군주의 궁극",
      "branch": "gladiator_s0_t1",
      "class": "warrior",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "gladiator_s1_0",
      "name": "블레이드댄서의 단련",
      "branch": "gladiator_s1",
      "class": "warrior",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.015
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s1_1",
      "name": "블레이드댄서의 기예",
      "branch": "gladiator_s1",
      "class": "warrior",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s1_2",
      "name": "블레이드댄서의 신념",
      "branch": "gladiator_s1",
      "class": "warrior",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s1_3",
      "name": "블레이드댄서의 오의",
      "branch": "gladiator_s1",
      "class": "warrior",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.015
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "gladiator_s1_t0_0",
      "name": "폭풍 검무가의 기초",
      "branch": "gladiator_s1_t0",
      "class": "warrior",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.015
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s1_t0_1",
      "name": "폭풍 검무가의 계승",
      "branch": "gladiator_s1_t0",
      "class": "warrior",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s1_t0_2",
      "name": "폭풍 검무가의 완성",
      "branch": "gladiator_s1_t0",
      "class": "warrior",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s1_t0_3",
      "name": "폭풍 검무가의 초월",
      "branch": "gladiator_s1_t0",
      "class": "warrior",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.015
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s1_t0_4",
      "name": "폭풍 검무가의 궁극",
      "branch": "gladiator_s1_t0",
      "class": "warrior",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "gladiator_s1_t1_0",
      "name": "혈월 무희의 기초",
      "branch": "gladiator_s1_t1",
      "class": "warrior",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s1_t1_1",
      "name": "혈월 무희의 계승",
      "branch": "gladiator_s1_t1",
      "class": "warrior",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s1_t1_2",
      "name": "혈월 무희의 완성",
      "branch": "gladiator_s1_t1",
      "class": "warrior",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s1_t1_3",
      "name": "혈월 무희의 초월",
      "branch": "gladiator_s1_t1",
      "class": "warrior",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "gladiator_s1_t1_4",
      "name": "혈월 무희의 궁극",
      "branch": "gladiator_s1_t1",
      "class": "warrior",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "berserker_deep_0",
      "name": "버서커의 연마",
      "branch": "berserker",
      "class": "warrior",
      "tier": 4,
      "maxRank": 6,
      "requires": 7,
      "cost": 1,
      "minLevel": 10,
      "stats": [
        {
          "stat": "attack",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "berserker_deep_1",
      "name": "버서커의 비전",
      "branch": "berserker",
      "class": "warrior",
      "tier": 5,
      "maxRank": 6,
      "requires": 10,
      "cost": 1,
      "minLevel": 14,
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.008
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "berserker_s0_0",
      "name": "블러드리버의 단련",
      "branch": "berserker_s0",
      "class": "warrior",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "attack",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "berserker_s0_1",
      "name": "블러드리버의 기예",
      "branch": "berserker_s0",
      "class": "warrior",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.008
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "berserker_s0_2",
      "name": "블러드리버의 신념",
      "branch": "berserker_s0",
      "class": "warrior",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "lowHpDamage",
          "op": "add",
          "value": 0.035
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "berserker_s0_3",
      "name": "블러드리버의 오의",
      "branch": "berserker_s0",
      "class": "warrior",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "attack",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "berserker_s0_t0_0",
      "name": "혈왕의 기초",
      "branch": "berserker_s0_t0",
      "class": "warrior",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "attack",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "berserker_s0_t0_1",
      "name": "혈왕의 계승",
      "branch": "berserker_s0_t0",
      "class": "warrior",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.008
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "berserker_s0_t0_2",
      "name": "혈왕의 완성",
      "branch": "berserker_s0_t0",
      "class": "warrior",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "lowHpDamage",
          "op": "add",
          "value": 0.035
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "berserker_s0_t0_3",
      "name": "혈왕의 초월",
      "branch": "berserker_s0_t0",
      "class": "warrior",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "attack",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "berserker_s0_t0_4",
      "name": "혈왕의 궁극",
      "branch": "berserker_s0_t0",
      "class": "warrior",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.008
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "berserker_s0_t1_0",
      "name": "불멸의 광전사의 기초",
      "branch": "berserker_s0_t1",
      "class": "warrior",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.008
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "berserker_s0_t1_1",
      "name": "불멸의 광전사의 계승",
      "branch": "berserker_s0_t1",
      "class": "warrior",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "lowHpDamage",
          "op": "add",
          "value": 0.035
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "berserker_s0_t1_2",
      "name": "불멸의 광전사의 완성",
      "branch": "berserker_s0_t1",
      "class": "warrior",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "berserker_s0_t1_3",
      "name": "불멸의 광전사의 초월",
      "branch": "berserker_s0_t1",
      "class": "warrior",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.008
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "berserker_s0_t1_4",
      "name": "불멸의 광전사의 궁극",
      "branch": "berserker_s0_t1",
      "class": "warrior",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "lowHpDamage",
          "op": "add",
          "value": 0.035
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "berserker_s1_0",
      "name": "워로드의 단련",
      "branch": "berserker_s1",
      "class": "warrior",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.008
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "berserker_s1_1",
      "name": "워로드의 기예",
      "branch": "berserker_s1",
      "class": "warrior",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "berserker_s1_2",
      "name": "워로드의 신념",
      "branch": "berserker_s1",
      "class": "warrior",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "attack",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "berserker_s1_3",
      "name": "워로드의 오의",
      "branch": "berserker_s1",
      "class": "warrior",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.008
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "berserker_s1_t0_0",
      "name": "전쟁군주의 기초",
      "branch": "berserker_s1_t0",
      "class": "warrior",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.008
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "berserker_s1_t0_1",
      "name": "전쟁군주의 계승",
      "branch": "berserker_s1_t0",
      "class": "warrior",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "lowHpDamage",
          "op": "add",
          "value": 0.035
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "berserker_s1_t0_2",
      "name": "전쟁군주의 완성",
      "branch": "berserker_s1_t0",
      "class": "warrior",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "attack",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "berserker_s1_t0_3",
      "name": "전쟁군주의 초월",
      "branch": "berserker_s1_t0",
      "class": "warrior",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.008
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "berserker_s1_t0_4",
      "name": "전쟁군주의 궁극",
      "branch": "berserker_s1_t0",
      "class": "warrior",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "lowHpDamage",
          "op": "add",
          "value": 0.035
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "berserker_s1_t1_0",
      "name": "철혈 지휘관의 기초",
      "branch": "berserker_s1_t1",
      "class": "warrior",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "lowHpDamage",
          "op": "add",
          "value": 0.035
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "berserker_s1_t1_1",
      "name": "철혈 지휘관의 계승",
      "branch": "berserker_s1_t1",
      "class": "warrior",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "attack",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "berserker_s1_t1_2",
      "name": "철혈 지휘관의 완성",
      "branch": "berserker_s1_t1",
      "class": "warrior",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "berserker_s1_t1_3",
      "name": "철혈 지휘관의 초월",
      "branch": "berserker_s1_t1",
      "class": "warrior",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "lowHpDamage",
          "op": "add",
          "value": 0.035
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "berserker_s1_t1_4",
      "name": "철혈 지휘관의 궁극",
      "branch": "berserker_s1_t1",
      "class": "warrior",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "attack",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "rune_deep_0",
      "name": "룬 기사의 연마",
      "branch": "rune",
      "class": "warrior",
      "tier": 4,
      "maxRank": 6,
      "requires": 7,
      "cost": 1,
      "minLevel": 10,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.06
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "rune_deep_1",
      "name": "룬 기사의 비전",
      "branch": "rune",
      "class": "warrior",
      "tier": 5,
      "maxRank": 6,
      "requires": 10,
      "cost": 1,
      "minLevel": 14,
      "stats": [
        {
          "stat": "manaOnHit",
          "op": "add",
          "value": 0.25
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "rune_s0_0",
      "name": "마검사의 단련",
      "branch": "rune_s0",
      "class": "warrior",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.06
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "rune_s0_1",
      "name": "마검사의 기예",
      "branch": "rune_s0",
      "class": "warrior",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "manaOnHit",
          "op": "add",
          "value": 0.25
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "rune_s0_2",
      "name": "마검사의 신념",
      "branch": "rune_s0",
      "class": "warrior",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "cooldownRate",
          "op": "multiply",
          "value": 0.98
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "rune_s0_3",
      "name": "마검사의 오의",
      "branch": "rune_s0",
      "class": "warrior",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.06
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "rune_s0_t0_0",
      "name": "별의 마검사의 기초",
      "branch": "rune_s0_t0",
      "class": "warrior",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.06
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "rune_s0_t0_1",
      "name": "별의 마검사의 계승",
      "branch": "rune_s0_t0",
      "class": "warrior",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "manaOnHit",
          "op": "add",
          "value": 0.25
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "rune_s0_t0_2",
      "name": "별의 마검사의 완성",
      "branch": "rune_s0_t0",
      "class": "warrior",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "cooldownRate",
          "op": "multiply",
          "value": 0.98
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "rune_s0_t0_3",
      "name": "별의 마검사의 초월",
      "branch": "rune_s0_t0",
      "class": "warrior",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.06
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "rune_s0_t0_4",
      "name": "별의 마검사의 궁극",
      "branch": "rune_s0_t0",
      "class": "warrior",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "manaOnHit",
          "op": "add",
          "value": 0.25
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "rune_s0_t1_0",
      "name": "심연의 칼날의 기초",
      "branch": "rune_s0_t1",
      "class": "warrior",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "manaOnHit",
          "op": "add",
          "value": 0.25
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "rune_s0_t1_1",
      "name": "심연의 칼날의 계승",
      "branch": "rune_s0_t1",
      "class": "warrior",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "cooldownRate",
          "op": "multiply",
          "value": 0.98
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "rune_s0_t1_2",
      "name": "심연의 칼날의 완성",
      "branch": "rune_s0_t1",
      "class": "warrior",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "rune_s0_t1_3",
      "name": "심연의 칼날의 초월",
      "branch": "rune_s0_t1",
      "class": "warrior",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "manaOnHit",
          "op": "add",
          "value": 0.25
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "rune_s0_t1_4",
      "name": "심연의 칼날의 궁극",
      "branch": "rune_s0_t1",
      "class": "warrior",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "cooldownRate",
          "op": "multiply",
          "value": 0.98
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "rune_s1_0",
      "name": "룬 수호자의 단련",
      "branch": "rune_s1",
      "class": "warrior",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "manaOnHit",
          "op": "add",
          "value": 0.25
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "rune_s1_1",
      "name": "룬 수호자의 기예",
      "branch": "rune_s1",
      "class": "warrior",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "rune_s1_2",
      "name": "룬 수호자의 신념",
      "branch": "rune_s1",
      "class": "warrior",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.06
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "rune_s1_3",
      "name": "룬 수호자의 오의",
      "branch": "rune_s1",
      "class": "warrior",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "manaOnHit",
          "op": "add",
          "value": 0.25
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "rune_s1_t0_0",
      "name": "봉인의 기사의 기초",
      "branch": "rune_s1_t0",
      "class": "warrior",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "manaOnHit",
          "op": "add",
          "value": 0.25
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "rune_s1_t0_1",
      "name": "봉인의 기사의 계승",
      "branch": "rune_s1_t0",
      "class": "warrior",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "cooldownRate",
          "op": "multiply",
          "value": 0.98
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "rune_s1_t0_2",
      "name": "봉인의 기사의 완성",
      "branch": "rune_s1_t0",
      "class": "warrior",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.06
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "rune_s1_t0_3",
      "name": "봉인의 기사의 초월",
      "branch": "rune_s1_t0",
      "class": "warrior",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "manaOnHit",
          "op": "add",
          "value": 0.25
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "rune_s1_t0_4",
      "name": "봉인의 기사의 궁극",
      "branch": "rune_s1_t0",
      "class": "warrior",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "cooldownRate",
          "op": "multiply",
          "value": 0.98
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "rune_s1_t1_0",
      "name": "황금 서약자의 기초",
      "branch": "rune_s1_t1",
      "class": "warrior",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "cooldownRate",
          "op": "multiply",
          "value": 0.98
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "rune_s1_t1_1",
      "name": "황금 서약자의 계승",
      "branch": "rune_s1_t1",
      "class": "warrior",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.06
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "rune_s1_t1_2",
      "name": "황금 서약자의 완성",
      "branch": "rune_s1_t1",
      "class": "warrior",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "rune_s1_t1_3",
      "name": "황금 서약자의 초월",
      "branch": "rune_s1_t1",
      "class": "warrior",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "cooldownRate",
          "op": "multiply",
          "value": 0.98
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "rune_s1_t1_4",
      "name": "황금 서약자의 궁극",
      "branch": "rune_s1_t1",
      "class": "warrior",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.06
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "marksman_deep_0",
      "name": "명사수의 연마",
      "branch": "marksman",
      "class": "archer",
      "tier": 4,
      "maxRank": 6,
      "requires": 7,
      "cost": 1,
      "minLevel": 10,
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.06
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "marksman_deep_1",
      "name": "명사수의 비전",
      "branch": "marksman",
      "class": "archer",
      "tier": 5,
      "maxRank": 6,
      "requires": 10,
      "cost": 1,
      "minLevel": 14,
      "stats": [
        {
          "stat": "critDamage",
          "op": "add",
          "value": 0.04
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "marksman_s0_0",
      "name": "데드아이의 단련",
      "branch": "marksman_s0",
      "class": "archer",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.06
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "marksman_s0_1",
      "name": "데드아이의 기예",
      "branch": "marksman_s0",
      "class": "archer",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "critDamage",
          "op": "add",
          "value": 0.04
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "marksman_s0_2",
      "name": "데드아이의 신념",
      "branch": "marksman_s0",
      "class": "archer",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "range",
          "op": "add",
          "value": 0.1
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "marksman_s0_3",
      "name": "데드아이의 오의",
      "branch": "marksman_s0",
      "class": "archer",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.06
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "marksman_s0_t0_0",
      "name": "왕국 저격수의 기초",
      "branch": "marksman_s0_t0",
      "class": "archer",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.06
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "marksman_s0_t0_1",
      "name": "왕국 저격수의 계승",
      "branch": "marksman_s0_t0",
      "class": "archer",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "critDamage",
          "op": "add",
          "value": 0.04
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "marksman_s0_t0_2",
      "name": "왕국 저격수의 완성",
      "branch": "marksman_s0_t0",
      "class": "archer",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "range",
          "op": "add",
          "value": 0.1
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "marksman_s0_t0_3",
      "name": "왕국 저격수의 초월",
      "branch": "marksman_s0_t0",
      "class": "archer",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.06
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "marksman_s0_t0_4",
      "name": "왕국 저격수의 궁극",
      "branch": "marksman_s0_t0",
      "class": "archer",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "critDamage",
          "op": "add",
          "value": 0.04
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "marksman_s0_t1_0",
      "name": "유성 사수의 기초",
      "branch": "marksman_s0_t1",
      "class": "archer",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "critDamage",
          "op": "add",
          "value": 0.04
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "marksman_s0_t1_1",
      "name": "유성 사수의 계승",
      "branch": "marksman_s0_t1",
      "class": "archer",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "range",
          "op": "add",
          "value": 0.1
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "marksman_s0_t1_2",
      "name": "유성 사수의 완성",
      "branch": "marksman_s0_t1",
      "class": "archer",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "marksman_s0_t1_3",
      "name": "유성 사수의 초월",
      "branch": "marksman_s0_t1",
      "class": "archer",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "critDamage",
          "op": "add",
          "value": 0.04
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "marksman_s0_t1_4",
      "name": "유성 사수의 궁극",
      "branch": "marksman_s0_t1",
      "class": "archer",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "range",
          "op": "add",
          "value": 0.1
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "marksman_s1_0",
      "name": "호크아이의 단련",
      "branch": "marksman_s1",
      "class": "archer",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "critDamage",
          "op": "add",
          "value": 0.04
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "marksman_s1_1",
      "name": "호크아이의 기예",
      "branch": "marksman_s1",
      "class": "archer",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "marksman_s1_2",
      "name": "호크아이의 신념",
      "branch": "marksman_s1",
      "class": "archer",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.06
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "marksman_s1_3",
      "name": "호크아이의 오의",
      "branch": "marksman_s1",
      "class": "archer",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "critDamage",
          "op": "add",
          "value": 0.04
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "marksman_s1_t0_0",
      "name": "매의 군주의 기초",
      "branch": "marksman_s1_t0",
      "class": "archer",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "critDamage",
          "op": "add",
          "value": 0.04
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "marksman_s1_t0_1",
      "name": "매의 군주의 계승",
      "branch": "marksman_s1_t0",
      "class": "archer",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "range",
          "op": "add",
          "value": 0.1
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "marksman_s1_t0_2",
      "name": "매의 군주의 완성",
      "branch": "marksman_s1_t0",
      "class": "archer",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.06
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "marksman_s1_t0_3",
      "name": "매의 군주의 초월",
      "branch": "marksman_s1_t0",
      "class": "archer",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "critDamage",
          "op": "add",
          "value": 0.04
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "marksman_s1_t0_4",
      "name": "매의 군주의 궁극",
      "branch": "marksman_s1_t0",
      "class": "archer",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "range",
          "op": "add",
          "value": 0.1
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "marksman_s1_t1_0",
      "name": "천리안의 기초",
      "branch": "marksman_s1_t1",
      "class": "archer",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "range",
          "op": "add",
          "value": 0.1
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "marksman_s1_t1_1",
      "name": "천리안의 계승",
      "branch": "marksman_s1_t1",
      "class": "archer",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.06
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "marksman_s1_t1_2",
      "name": "천리안의 완성",
      "branch": "marksman_s1_t1",
      "class": "archer",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "marksman_s1_t1_3",
      "name": "천리안의 초월",
      "branch": "marksman_s1_t1",
      "class": "archer",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "range",
          "op": "add",
          "value": 0.1
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "marksman_s1_t1_4",
      "name": "천리안의 궁극",
      "branch": "marksman_s1_t1",
      "class": "archer",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.06
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "ranger_deep_0",
      "name": "추적자의 연마",
      "branch": "ranger",
      "class": "archer",
      "tier": 4,
      "maxRank": 6,
      "requires": 7,
      "cost": 1,
      "minLevel": 10,
      "stats": [
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.035
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "ranger_deep_1",
      "name": "추적자의 비전",
      "branch": "ranger",
      "class": "archer",
      "tier": 5,
      "maxRank": 6,
      "requires": 10,
      "cost": 1,
      "minLevel": 14,
      "stats": [
        {
          "stat": "poisonChance",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "ranger_s0_0",
      "name": "숲의 파수꾼의 단련",
      "branch": "ranger_s0",
      "class": "archer",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.035
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "ranger_s0_1",
      "name": "숲의 파수꾼의 기예",
      "branch": "ranger_s0",
      "class": "archer",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "poisonChance",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "ranger_s0_2",
      "name": "숲의 파수꾼의 신념",
      "branch": "ranger_s0",
      "class": "archer",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.015
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "ranger_s0_3",
      "name": "숲의 파수꾼의 오의",
      "branch": "ranger_s0",
      "class": "archer",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.035
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "ranger_s0_t0_0",
      "name": "야생의 수호자의 기초",
      "branch": "ranger_s0_t0",
      "class": "archer",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.035
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "ranger_s0_t0_1",
      "name": "야생의 수호자의 계승",
      "branch": "ranger_s0_t0",
      "class": "archer",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "poisonChance",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "ranger_s0_t0_2",
      "name": "야생의 수호자의 완성",
      "branch": "ranger_s0_t0",
      "class": "archer",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.015
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "ranger_s0_t0_3",
      "name": "야생의 수호자의 초월",
      "branch": "ranger_s0_t0",
      "class": "archer",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.035
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "ranger_s0_t0_4",
      "name": "야생의 수호자의 궁극",
      "branch": "ranger_s0_t0",
      "class": "archer",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "poisonChance",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "ranger_s0_t1_0",
      "name": "녹풍 사냥꾼의 기초",
      "branch": "ranger_s0_t1",
      "class": "archer",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "poisonChance",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "ranger_s0_t1_1",
      "name": "녹풍 사냥꾼의 계승",
      "branch": "ranger_s0_t1",
      "class": "archer",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.015
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "ranger_s0_t1_2",
      "name": "녹풍 사냥꾼의 완성",
      "branch": "ranger_s0_t1",
      "class": "archer",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "ranger_s0_t1_3",
      "name": "녹풍 사냥꾼의 초월",
      "branch": "ranger_s0_t1",
      "class": "archer",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "poisonChance",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "ranger_s0_t1_4",
      "name": "녹풍 사냥꾼의 궁극",
      "branch": "ranger_s0_t1",
      "class": "archer",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.015
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "ranger_s1_0",
      "name": "트래퍼의 단련",
      "branch": "ranger_s1",
      "class": "archer",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "poisonChance",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "ranger_s1_1",
      "name": "트래퍼의 기예",
      "branch": "ranger_s1",
      "class": "archer",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "ranger_s1_2",
      "name": "트래퍼의 신념",
      "branch": "ranger_s1",
      "class": "archer",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.035
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "ranger_s1_3",
      "name": "트래퍼의 오의",
      "branch": "ranger_s1",
      "class": "archer",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "poisonChance",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "ranger_s1_t0_0",
      "name": "덫의 장인의 기초",
      "branch": "ranger_s1_t0",
      "class": "archer",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "poisonChance",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "ranger_s1_t0_1",
      "name": "덫의 장인의 계승",
      "branch": "ranger_s1_t0",
      "class": "archer",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.015
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "ranger_s1_t0_2",
      "name": "덫의 장인의 완성",
      "branch": "ranger_s1_t0",
      "class": "archer",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.035
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "ranger_s1_t0_3",
      "name": "덫의 장인의 초월",
      "branch": "ranger_s1_t0",
      "class": "archer",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "poisonChance",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "ranger_s1_t0_4",
      "name": "덫의 장인의 궁극",
      "branch": "ranger_s1_t0",
      "class": "archer",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.015
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "ranger_s1_t1_0",
      "name": "독안개 추적자의 기초",
      "branch": "ranger_s1_t1",
      "class": "archer",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.015
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "ranger_s1_t1_1",
      "name": "독안개 추적자의 계승",
      "branch": "ranger_s1_t1",
      "class": "archer",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.035
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "ranger_s1_t1_2",
      "name": "독안개 추적자의 완성",
      "branch": "ranger_s1_t1",
      "class": "archer",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "ranger_s1_t1_3",
      "name": "독안개 추적자의 초월",
      "branch": "ranger_s1_t1",
      "class": "archer",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.015
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "ranger_s1_t1_4",
      "name": "독안개 추적자의 궁극",
      "branch": "ranger_s1_t1",
      "class": "archer",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.035
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "venom_deep_0",
      "name": "독 사냥꾼의 연마",
      "branch": "venom",
      "class": "archer",
      "tier": 4,
      "maxRank": 6,
      "requires": 7,
      "cost": 1,
      "minLevel": 10,
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.02
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "venom_deep_1",
      "name": "독 사냥꾼의 비전",
      "branch": "venom",
      "class": "archer",
      "tier": 5,
      "maxRank": 6,
      "requires": 10,
      "cost": 1,
      "minLevel": 14,
      "stats": [
        {
          "stat": "poisonDamage",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "venom_s0_0",
      "name": "나이트스토커의 단련",
      "branch": "venom_s0",
      "class": "archer",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.02
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "venom_s0_1",
      "name": "나이트스토커의 기예",
      "branch": "venom_s0",
      "class": "archer",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "poisonDamage",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "venom_s0_2",
      "name": "나이트스토커의 신념",
      "branch": "venom_s0",
      "class": "archer",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.006
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "venom_s0_3",
      "name": "나이트스토커의 오의",
      "branch": "venom_s0",
      "class": "archer",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.02
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "venom_s0_t0_0",
      "name": "월영 추적자의 기초",
      "branch": "venom_s0_t0",
      "class": "archer",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.02
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "venom_s0_t0_1",
      "name": "월영 추적자의 계승",
      "branch": "venom_s0_t0",
      "class": "archer",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "poisonDamage",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "venom_s0_t0_2",
      "name": "월영 추적자의 완성",
      "branch": "venom_s0_t0",
      "class": "archer",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.006
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "venom_s0_t0_3",
      "name": "월영 추적자의 초월",
      "branch": "venom_s0_t0",
      "class": "archer",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.02
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "venom_s0_t0_4",
      "name": "월영 추적자의 궁극",
      "branch": "venom_s0_t0",
      "class": "archer",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "poisonDamage",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "venom_s0_t1_0",
      "name": "칠흑의 화살의 기초",
      "branch": "venom_s0_t1",
      "class": "archer",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "poisonDamage",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "venom_s0_t1_1",
      "name": "칠흑의 화살의 계승",
      "branch": "venom_s0_t1",
      "class": "archer",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.006
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "venom_s0_t1_2",
      "name": "칠흑의 화살의 완성",
      "branch": "venom_s0_t1",
      "class": "archer",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "venom_s0_t1_3",
      "name": "칠흑의 화살의 초월",
      "branch": "venom_s0_t1",
      "class": "archer",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "poisonDamage",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "venom_s0_t1_4",
      "name": "칠흑의 화살의 궁극",
      "branch": "venom_s0_t1",
      "class": "archer",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.006
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "venom_s1_0",
      "name": "베놈레인저의 단련",
      "branch": "venom_s1",
      "class": "archer",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "poisonDamage",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "venom_s1_1",
      "name": "베놈레인저의 기예",
      "branch": "venom_s1",
      "class": "archer",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "venom_s1_2",
      "name": "베놈레인저의 신념",
      "branch": "venom_s1",
      "class": "archer",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.02
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "venom_s1_3",
      "name": "베놈레인저의 오의",
      "branch": "venom_s1",
      "class": "archer",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "poisonDamage",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "venom_s1_t0_0",
      "name": "독왕의 기초",
      "branch": "venom_s1_t0",
      "class": "archer",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "poisonDamage",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "venom_s1_t0_1",
      "name": "독왕의 계승",
      "branch": "venom_s1_t0",
      "class": "archer",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.006
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "venom_s1_t0_2",
      "name": "독왕의 완성",
      "branch": "venom_s1_t0",
      "class": "archer",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.02
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "venom_s1_t0_3",
      "name": "독왕의 초월",
      "branch": "venom_s1_t0",
      "class": "archer",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "poisonDamage",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "venom_s1_t0_4",
      "name": "독왕의 궁극",
      "branch": "venom_s1_t0",
      "class": "archer",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.006
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "venom_s1_t1_0",
      "name": "가시 심장의 기초",
      "branch": "venom_s1_t1",
      "class": "archer",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.006
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "venom_s1_t1_1",
      "name": "가시 심장의 계승",
      "branch": "venom_s1_t1",
      "class": "archer",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.02
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "venom_s1_t1_2",
      "name": "가시 심장의 완성",
      "branch": "venom_s1_t1",
      "class": "archer",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "venom_s1_t1_3",
      "name": "가시 심장의 초월",
      "branch": "venom_s1_t1",
      "class": "archer",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.006
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "venom_s1_t1_4",
      "name": "가시 심장의 궁극",
      "branch": "venom_s1_t1",
      "class": "archer",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.02
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "pyromancer_deep_0",
      "name": "화염술사의 연마",
      "branch": "pyromancer",
      "class": "magician",
      "tier": 4,
      "maxRank": 6,
      "requires": 7,
      "cost": 1,
      "minLevel": 10,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_deep_1",
      "name": "화염술사의 비전",
      "branch": "pyromancer",
      "class": "magician",
      "tier": 5,
      "maxRank": 6,
      "requires": 10,
      "cost": 1,
      "minLevel": 14,
      "stats": [
        {
          "stat": "burnDamage",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s0_0",
      "name": "인페르노의 단련",
      "branch": "pyromancer_s0",
      "class": "magician",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s0_1",
      "name": "인페르노의 기예",
      "branch": "pyromancer_s0",
      "class": "magician",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "burnDamage",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s0_2",
      "name": "인페르노의 신념",
      "branch": "pyromancer_s0",
      "class": "magician",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s0_3",
      "name": "인페르노의 오의",
      "branch": "pyromancer_s0",
      "class": "magician",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "pyromancer_s0_t0_0",
      "name": "불사조 현자의 기초",
      "branch": "pyromancer_s0_t0",
      "class": "magician",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s0_t0_1",
      "name": "불사조 현자의 계승",
      "branch": "pyromancer_s0_t0",
      "class": "magician",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "burnDamage",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s0_t0_2",
      "name": "불사조 현자의 완성",
      "branch": "pyromancer_s0_t0",
      "class": "magician",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s0_t0_3",
      "name": "불사조 현자의 초월",
      "branch": "pyromancer_s0_t0",
      "class": "magician",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s0_t0_4",
      "name": "불사조 현자의 궁극",
      "branch": "pyromancer_s0_t0",
      "class": "magician",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "burnDamage",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "pyromancer_s0_t1_0",
      "name": "홍련의 군주의 기초",
      "branch": "pyromancer_s0_t1",
      "class": "magician",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "burnDamage",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s0_t1_1",
      "name": "홍련의 군주의 계승",
      "branch": "pyromancer_s0_t1",
      "class": "magician",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s0_t1_2",
      "name": "홍련의 군주의 완성",
      "branch": "pyromancer_s0_t1",
      "class": "magician",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s0_t1_3",
      "name": "홍련의 군주의 초월",
      "branch": "pyromancer_s0_t1",
      "class": "magician",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "burnDamage",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s0_t1_4",
      "name": "홍련의 군주의 궁극",
      "branch": "pyromancer_s0_t1",
      "class": "magician",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "pyromancer_s1_0",
      "name": "플레임위버의 단련",
      "branch": "pyromancer_s1",
      "class": "magician",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "burnDamage",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s1_1",
      "name": "플레임위버의 기예",
      "branch": "pyromancer_s1",
      "class": "magician",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s1_2",
      "name": "플레임위버의 신념",
      "branch": "pyromancer_s1",
      "class": "magician",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s1_3",
      "name": "플레임위버의 오의",
      "branch": "pyromancer_s1",
      "class": "magician",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "burnDamage",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "pyromancer_s1_t0_0",
      "name": "태양의 직조자의 기초",
      "branch": "pyromancer_s1_t0",
      "class": "magician",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "burnDamage",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s1_t0_1",
      "name": "태양의 직조자의 계승",
      "branch": "pyromancer_s1_t0",
      "class": "magician",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s1_t0_2",
      "name": "태양의 직조자의 완성",
      "branch": "pyromancer_s1_t0",
      "class": "magician",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s1_t0_3",
      "name": "태양의 직조자의 초월",
      "branch": "pyromancer_s1_t0",
      "class": "magician",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "burnDamage",
          "op": "add",
          "value": 0.025
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s1_t0_4",
      "name": "태양의 직조자의 궁극",
      "branch": "pyromancer_s1_t0",
      "class": "magician",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "pyromancer_s1_t1_0",
      "name": "재의 예언자의 기초",
      "branch": "pyromancer_s1_t1",
      "class": "magician",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s1_t1_1",
      "name": "재의 예언자의 계승",
      "branch": "pyromancer_s1_t1",
      "class": "magician",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s1_t1_2",
      "name": "재의 예언자의 완성",
      "branch": "pyromancer_s1_t1",
      "class": "magician",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s1_t1_3",
      "name": "재의 예언자의 초월",
      "branch": "pyromancer_s1_t1",
      "class": "magician",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "pyromancer_s1_t1_4",
      "name": "재의 예언자의 궁극",
      "branch": "pyromancer_s1_t1",
      "class": "magician",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.055
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "frost_deep_0",
      "name": "빙결술사의 연마",
      "branch": "frost",
      "class": "magician",
      "tier": 4,
      "maxRank": 6,
      "requires": 7,
      "cost": 1,
      "minLevel": 10,
      "stats": [
        {
          "stat": "slowChance",
          "op": "add",
          "value": 0.03
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "frost_deep_1",
      "name": "빙결술사의 비전",
      "branch": "frost",
      "class": "magician",
      "tier": 5,
      "maxRank": 6,
      "requires": 10,
      "cost": 1,
      "minLevel": 14,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 1.2
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "frost_s0_0",
      "name": "글레이셜의 단련",
      "branch": "frost_s0",
      "class": "magician",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "slowChance",
          "op": "add",
          "value": 0.03
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "frost_s0_1",
      "name": "글레이셜의 기예",
      "branch": "frost_s0",
      "class": "magician",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 1.2
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "frost_s0_2",
      "name": "글레이셜의 신념",
      "branch": "frost_s0",
      "class": "magician",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "frost_s0_3",
      "name": "글레이셜의 오의",
      "branch": "frost_s0",
      "class": "magician",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "slowChance",
          "op": "add",
          "value": 0.03
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "frost_s0_t0_0",
      "name": "겨울의 현자의 기초",
      "branch": "frost_s0_t0",
      "class": "magician",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "slowChance",
          "op": "add",
          "value": 0.03
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "frost_s0_t0_1",
      "name": "겨울의 현자의 계승",
      "branch": "frost_s0_t0",
      "class": "magician",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 1.2
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "frost_s0_t0_2",
      "name": "겨울의 현자의 완성",
      "branch": "frost_s0_t0",
      "class": "magician",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "frost_s0_t0_3",
      "name": "겨울의 현자의 초월",
      "branch": "frost_s0_t0",
      "class": "magician",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "slowChance",
          "op": "add",
          "value": 0.03
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "frost_s0_t0_4",
      "name": "겨울의 현자의 궁극",
      "branch": "frost_s0_t0",
      "class": "magician",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 1.2
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "frost_s0_t1_0",
      "name": "빙관의 군주의 기초",
      "branch": "frost_s0_t1",
      "class": "magician",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 1.2
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "frost_s0_t1_1",
      "name": "빙관의 군주의 계승",
      "branch": "frost_s0_t1",
      "class": "magician",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "frost_s0_t1_2",
      "name": "빙관의 군주의 완성",
      "branch": "frost_s0_t1",
      "class": "magician",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "frost_s0_t1_3",
      "name": "빙관의 군주의 초월",
      "branch": "frost_s0_t1",
      "class": "magician",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 1.2
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "frost_s0_t1_4",
      "name": "빙관의 군주의 궁극",
      "branch": "frost_s0_t1",
      "class": "magician",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "frost_s1_0",
      "name": "프로스트가드의 단련",
      "branch": "frost_s1",
      "class": "magician",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 1.2
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "frost_s1_1",
      "name": "프로스트가드의 기예",
      "branch": "frost_s1",
      "class": "magician",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "frost_s1_2",
      "name": "프로스트가드의 신념",
      "branch": "frost_s1",
      "class": "magician",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "slowChance",
          "op": "add",
          "value": 0.03
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "frost_s1_3",
      "name": "프로스트가드의 오의",
      "branch": "frost_s1",
      "class": "magician",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 1.2
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "frost_s1_t0_0",
      "name": "서리 수호자의 기초",
      "branch": "frost_s1_t0",
      "class": "magician",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 1.2
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "frost_s1_t0_1",
      "name": "서리 수호자의 계승",
      "branch": "frost_s1_t0",
      "class": "magician",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "frost_s1_t0_2",
      "name": "서리 수호자의 완성",
      "branch": "frost_s1_t0",
      "class": "magician",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "slowChance",
          "op": "add",
          "value": 0.03
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "frost_s1_t0_3",
      "name": "서리 수호자의 초월",
      "branch": "frost_s1_t0",
      "class": "magician",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 1.2
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "frost_s1_t0_4",
      "name": "서리 수호자의 궁극",
      "branch": "frost_s1_t0",
      "class": "magician",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "frost_s1_t1_0",
      "name": "영원의 얼음의 기초",
      "branch": "frost_s1_t1",
      "class": "magician",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "frost_s1_t1_1",
      "name": "영원의 얼음의 계승",
      "branch": "frost_s1_t1",
      "class": "magician",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "slowChance",
          "op": "add",
          "value": 0.03
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "frost_s1_t1_2",
      "name": "영원의 얼음의 완성",
      "branch": "frost_s1_t1",
      "class": "magician",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "frost_s1_t1_3",
      "name": "영원의 얼음의 초월",
      "branch": "frost_s1_t1",
      "class": "magician",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "frost_s1_t1_4",
      "name": "영원의 얼음의 궁극",
      "branch": "frost_s1_t1",
      "class": "magician",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "slowChance",
          "op": "add",
          "value": 0.03
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "arcanist_deep_0",
      "name": "비전술사의 연마",
      "branch": "arcanist",
      "class": "magician",
      "tier": 4,
      "maxRank": 6,
      "requires": 7,
      "cost": 1,
      "minLevel": 10,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.15
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "arcanist_deep_1",
      "name": "비전술사의 비전",
      "branch": "arcanist",
      "class": "magician",
      "tier": 5,
      "maxRank": 6,
      "requires": 10,
      "cost": 1,
      "minLevel": 14,
      "stats": [
        {
          "stat": "skillEcho",
          "op": "add",
          "value": 0.015
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s0_0",
      "name": "아크메이지의 단련",
      "branch": "arcanist_s0",
      "class": "magician",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.15
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s0_1",
      "name": "아크메이지의 기예",
      "branch": "arcanist_s0",
      "class": "magician",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "skillEcho",
          "op": "add",
          "value": 0.015
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s0_2",
      "name": "아크메이지의 신념",
      "branch": "arcanist_s0",
      "class": "magician",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s0_3",
      "name": "아크메이지의 오의",
      "branch": "arcanist_s0",
      "class": "magician",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.15
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "arcanist_s0_t0_0",
      "name": "별의 대마도사의 기초",
      "branch": "arcanist_s0_t0",
      "class": "magician",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.15
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s0_t0_1",
      "name": "별의 대마도사의 계승",
      "branch": "arcanist_s0_t0",
      "class": "magician",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "skillEcho",
          "op": "add",
          "value": 0.015
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s0_t0_2",
      "name": "별의 대마도사의 완성",
      "branch": "arcanist_s0_t0",
      "class": "magician",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s0_t0_3",
      "name": "별의 대마도사의 초월",
      "branch": "arcanist_s0_t0",
      "class": "magician",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.15
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s0_t0_4",
      "name": "별의 대마도사의 궁극",
      "branch": "arcanist_s0_t0",
      "class": "magician",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "skillEcho",
          "op": "add",
          "value": 0.015
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "arcanist_s0_t1_0",
      "name": "차원 여행자의 기초",
      "branch": "arcanist_s0_t1",
      "class": "magician",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "skillEcho",
          "op": "add",
          "value": 0.015
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s0_t1_1",
      "name": "차원 여행자의 계승",
      "branch": "arcanist_s0_t1",
      "class": "magician",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s0_t1_2",
      "name": "차원 여행자의 완성",
      "branch": "arcanist_s0_t1",
      "class": "magician",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s0_t1_3",
      "name": "차원 여행자의 초월",
      "branch": "arcanist_s0_t1",
      "class": "magician",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "skillEcho",
          "op": "add",
          "value": 0.015
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s0_t1_4",
      "name": "차원 여행자의 궁극",
      "branch": "arcanist_s0_t1",
      "class": "magician",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "arcanist_s1_0",
      "name": "에테르위버의 단련",
      "branch": "arcanist_s1",
      "class": "magician",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "skillEcho",
          "op": "add",
          "value": 0.015
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s1_1",
      "name": "에테르위버의 기예",
      "branch": "arcanist_s1",
      "class": "magician",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s1_2",
      "name": "에테르위버의 신념",
      "branch": "arcanist_s1",
      "class": "magician",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.15
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s1_3",
      "name": "에테르위버의 오의",
      "branch": "arcanist_s1",
      "class": "magician",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "skillEcho",
          "op": "add",
          "value": 0.015
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "arcanist_s1_t0_0",
      "name": "마력의 지배자의 기초",
      "branch": "arcanist_s1_t0",
      "class": "magician",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "skillEcho",
          "op": "add",
          "value": 0.015
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s1_t0_1",
      "name": "마력의 지배자의 계승",
      "branch": "arcanist_s1_t0",
      "class": "magician",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s1_t0_2",
      "name": "마력의 지배자의 완성",
      "branch": "arcanist_s1_t0",
      "class": "magician",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.15
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s1_t0_3",
      "name": "마력의 지배자의 초월",
      "branch": "arcanist_s1_t0",
      "class": "magician",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "skillEcho",
          "op": "add",
          "value": 0.015
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s1_t0_4",
      "name": "마력의 지배자의 궁극",
      "branch": "arcanist_s1_t0",
      "class": "magician",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "arcanist_s1_t1_0",
      "name": "시간의 현자의 기초",
      "branch": "arcanist_s1_t1",
      "class": "magician",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s1_t1_1",
      "name": "시간의 현자의 계승",
      "branch": "arcanist_s1_t1",
      "class": "magician",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.15
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s1_t1_2",
      "name": "시간의 현자의 완성",
      "branch": "arcanist_s1_t1",
      "class": "magician",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s1_t1_3",
      "name": "시간의 현자의 초월",
      "branch": "arcanist_s1_t1",
      "class": "magician",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "arcanist_s1_t1_4",
      "name": "시간의 현자의 궁극",
      "branch": "arcanist_s1_t1",
      "class": "magician",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.15
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "fortress_deep_0",
      "name": "철벽의 연마",
      "branch": "fortress",
      "class": "guardian",
      "tier": 4,
      "maxRank": 6,
      "requires": 7,
      "cost": 1,
      "minLevel": 10,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "fortress_deep_1",
      "name": "철벽의 비전",
      "branch": "fortress",
      "class": "guardian",
      "tier": 5,
      "maxRank": 6,
      "requires": 10,
      "cost": 1,
      "minLevel": 14,
      "stats": [
        {
          "stat": "defense",
          "op": "add",
          "value": 0.8
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "fortress_s0_0",
      "name": "바스티온의 단련",
      "branch": "fortress_s0",
      "class": "guardian",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "fortress_s0_1",
      "name": "바스티온의 기예",
      "branch": "fortress_s0",
      "class": "guardian",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "defense",
          "op": "add",
          "value": 0.8
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "fortress_s0_2",
      "name": "바스티온의 신념",
      "branch": "fortress_s0",
      "class": "guardian",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "damageReduction",
          "op": "add",
          "value": 0.01
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "fortress_s0_3",
      "name": "바스티온의 오의",
      "branch": "fortress_s0",
      "class": "guardian",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "fortress_s0_t0_0",
      "name": "불굴의 성채의 기초",
      "branch": "fortress_s0_t0",
      "class": "guardian",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "fortress_s0_t0_1",
      "name": "불굴의 성채의 계승",
      "branch": "fortress_s0_t0",
      "class": "guardian",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "defense",
          "op": "add",
          "value": 0.8
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "fortress_s0_t0_2",
      "name": "불굴의 성채의 완성",
      "branch": "fortress_s0_t0",
      "class": "guardian",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "damageReduction",
          "op": "add",
          "value": 0.01
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "fortress_s0_t0_3",
      "name": "불굴의 성채의 초월",
      "branch": "fortress_s0_t0",
      "class": "guardian",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "fortress_s0_t0_4",
      "name": "불굴의 성채의 궁극",
      "branch": "fortress_s0_t0",
      "class": "guardian",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "defense",
          "op": "add",
          "value": 0.8
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "fortress_s0_t1_0",
      "name": "왕국의 보루의 기초",
      "branch": "fortress_s0_t1",
      "class": "guardian",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "defense",
          "op": "add",
          "value": 0.8
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "fortress_s0_t1_1",
      "name": "왕국의 보루의 계승",
      "branch": "fortress_s0_t1",
      "class": "guardian",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "damageReduction",
          "op": "add",
          "value": 0.01
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "fortress_s0_t1_2",
      "name": "왕국의 보루의 완성",
      "branch": "fortress_s0_t1",
      "class": "guardian",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "fortress_s0_t1_3",
      "name": "왕국의 보루의 초월",
      "branch": "fortress_s0_t1",
      "class": "guardian",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "defense",
          "op": "add",
          "value": 0.8
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "fortress_s0_t1_4",
      "name": "왕국의 보루의 궁극",
      "branch": "fortress_s0_t1",
      "class": "guardian",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "damageReduction",
          "op": "add",
          "value": 0.01
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "fortress_s1_0",
      "name": "아이언가드의 단련",
      "branch": "fortress_s1",
      "class": "guardian",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "defense",
          "op": "add",
          "value": 0.8
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "fortress_s1_1",
      "name": "아이언가드의 기예",
      "branch": "fortress_s1",
      "class": "guardian",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "fortress_s1_2",
      "name": "아이언가드의 신념",
      "branch": "fortress_s1",
      "class": "guardian",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "fortress_s1_3",
      "name": "아이언가드의 오의",
      "branch": "fortress_s1",
      "class": "guardian",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "defense",
          "op": "add",
          "value": 0.8
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "fortress_s1_t0_0",
      "name": "강철의 거인의 기초",
      "branch": "fortress_s1_t0",
      "class": "guardian",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "defense",
          "op": "add",
          "value": 0.8
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "fortress_s1_t0_1",
      "name": "강철의 거인의 계승",
      "branch": "fortress_s1_t0",
      "class": "guardian",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "damageReduction",
          "op": "add",
          "value": 0.01
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "fortress_s1_t0_2",
      "name": "강철의 거인의 완성",
      "branch": "fortress_s1_t0",
      "class": "guardian",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "fortress_s1_t0_3",
      "name": "강철의 거인의 초월",
      "branch": "fortress_s1_t0",
      "class": "guardian",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "defense",
          "op": "add",
          "value": 0.8
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "fortress_s1_t0_4",
      "name": "강철의 거인의 궁극",
      "branch": "fortress_s1_t0",
      "class": "guardian",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "damageReduction",
          "op": "add",
          "value": 0.01
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "fortress_s1_t1_0",
      "name": "아다만트 수호자의 기초",
      "branch": "fortress_s1_t1",
      "class": "guardian",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "damageReduction",
          "op": "add",
          "value": 0.01
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "fortress_s1_t1_1",
      "name": "아다만트 수호자의 계승",
      "branch": "fortress_s1_t1",
      "class": "guardian",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "fortress_s1_t1_2",
      "name": "아다만트 수호자의 완성",
      "branch": "fortress_s1_t1",
      "class": "guardian",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "fortress_s1_t1_3",
      "name": "아다만트 수호자의 초월",
      "branch": "fortress_s1_t1",
      "class": "guardian",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "damageReduction",
          "op": "add",
          "value": 0.01
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "fortress_s1_t1_4",
      "name": "아다만트 수호자의 궁극",
      "branch": "fortress_s1_t1",
      "class": "guardian",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "paladin_deep_0",
      "name": "성기사의 연마",
      "branch": "paladin",
      "class": "guardian",
      "tier": 4,
      "maxRank": 6,
      "requires": 7,
      "cost": 1,
      "minLevel": 10,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "paladin_deep_1",
      "name": "성기사의 비전",
      "branch": "paladin",
      "class": "guardian",
      "tier": 5,
      "maxRank": 6,
      "requires": 10,
      "cost": 1,
      "minLevel": 14,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 1.4
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "paladin_s0_0",
      "name": "하이템플러의 단련",
      "branch": "paladin_s0",
      "class": "guardian",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "paladin_s0_1",
      "name": "하이템플러의 기예",
      "branch": "paladin_s0",
      "class": "guardian",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 1.4
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "paladin_s0_2",
      "name": "하이템플러의 신념",
      "branch": "paladin_s0",
      "class": "guardian",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "paladin_s0_3",
      "name": "하이템플러의 오의",
      "branch": "paladin_s0",
      "class": "guardian",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "paladin_s0_t0_0",
      "name": "새벽의 성자의 기초",
      "branch": "paladin_s0_t0",
      "class": "guardian",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "paladin_s0_t0_1",
      "name": "새벽의 성자의 계승",
      "branch": "paladin_s0_t0",
      "class": "guardian",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 1.4
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "paladin_s0_t0_2",
      "name": "새벽의 성자의 완성",
      "branch": "paladin_s0_t0",
      "class": "guardian",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "paladin_s0_t0_3",
      "name": "새벽의 성자의 초월",
      "branch": "paladin_s0_t0",
      "class": "guardian",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "paladin_s0_t0_4",
      "name": "새벽의 성자의 궁극",
      "branch": "paladin_s0_t0",
      "class": "guardian",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 1.4
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "paladin_s0_t1_0",
      "name": "태양의 심판관의 기초",
      "branch": "paladin_s0_t1",
      "class": "guardian",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 1.4
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "paladin_s0_t1_1",
      "name": "태양의 심판관의 계승",
      "branch": "paladin_s0_t1",
      "class": "guardian",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "paladin_s0_t1_2",
      "name": "태양의 심판관의 완성",
      "branch": "paladin_s0_t1",
      "class": "guardian",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "paladin_s0_t1_3",
      "name": "태양의 심판관의 초월",
      "branch": "paladin_s0_t1",
      "class": "guardian",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 1.4
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "paladin_s0_t1_4",
      "name": "태양의 심판관의 궁극",
      "branch": "paladin_s0_t1",
      "class": "guardian",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "paladin_s1_0",
      "name": "세이크리드가드의 단련",
      "branch": "paladin_s1",
      "class": "guardian",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 1.4
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "paladin_s1_1",
      "name": "세이크리드가드의 기예",
      "branch": "paladin_s1",
      "class": "guardian",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "paladin_s1_2",
      "name": "세이크리드가드의 신념",
      "branch": "paladin_s1",
      "class": "guardian",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "paladin_s1_3",
      "name": "세이크리드가드의 오의",
      "branch": "paladin_s1",
      "class": "guardian",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 1.4
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "paladin_s1_t0_0",
      "name": "성역의 수호자의 기초",
      "branch": "paladin_s1_t0",
      "class": "guardian",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 1.4
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "paladin_s1_t0_1",
      "name": "성역의 수호자의 계승",
      "branch": "paladin_s1_t0",
      "class": "guardian",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "paladin_s1_t0_2",
      "name": "성역의 수호자의 완성",
      "branch": "paladin_s1_t0",
      "class": "guardian",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "paladin_s1_t0_3",
      "name": "성역의 수호자의 초월",
      "branch": "paladin_s1_t0",
      "class": "guardian",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 1.4
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "paladin_s1_t0_4",
      "name": "성역의 수호자의 궁극",
      "branch": "paladin_s1_t0",
      "class": "guardian",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "paladin_s1_t1_0",
      "name": "빛의 순례자의 기초",
      "branch": "paladin_s1_t1",
      "class": "guardian",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "paladin_s1_t1_1",
      "name": "빛의 순례자의 계승",
      "branch": "paladin_s1_t1",
      "class": "guardian",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "paladin_s1_t1_2",
      "name": "빛의 순례자의 완성",
      "branch": "paladin_s1_t1",
      "class": "guardian",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "paladin_s1_t1_3",
      "name": "빛의 순례자의 초월",
      "branch": "paladin_s1_t1",
      "class": "guardian",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "paladin_s1_t1_4",
      "name": "빛의 순례자의 궁극",
      "branch": "paladin_s1_t1",
      "class": "guardian",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "spell",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "avenger_deep_0",
      "name": "응징자의 연마",
      "branch": "avenger",
      "class": "guardian",
      "tier": 4,
      "maxRank": 6,
      "requires": 7,
      "cost": 1,
      "minLevel": 10,
      "stats": [
        {
          "stat": "thorns",
          "op": "add",
          "value": 0.08
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "avenger_deep_1",
      "name": "응징자의 비전",
      "branch": "avenger",
      "class": "guardian",
      "tier": 5,
      "maxRank": 6,
      "requires": 10,
      "cost": 1,
      "minLevel": 14,
      "stats": [
        {
          "stat": "attack",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "계열 능력을 반복 수련합니다.",
      "capstone": false
    },
    {
      "id": "avenger_s0_0",
      "name": "드레드노트의 단련",
      "branch": "avenger_s0",
      "class": "guardian",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "thorns",
          "op": "add",
          "value": 0.08
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "avenger_s0_1",
      "name": "드레드노트의 기예",
      "branch": "avenger_s0",
      "class": "guardian",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "attack",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "avenger_s0_2",
      "name": "드레드노트의 신념",
      "branch": "avenger_s0",
      "class": "guardian",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.04
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "avenger_s0_3",
      "name": "드레드노트의 오의",
      "branch": "avenger_s0",
      "class": "guardian",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "thorns",
          "op": "add",
          "value": 0.08
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "avenger_s0_t0_0",
      "name": "복수의 군주의 기초",
      "branch": "avenger_s0_t0",
      "class": "guardian",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "thorns",
          "op": "add",
          "value": 0.08
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "avenger_s0_t0_1",
      "name": "복수의 군주의 계승",
      "branch": "avenger_s0_t0",
      "class": "guardian",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "attack",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "avenger_s0_t0_2",
      "name": "복수의 군주의 완성",
      "branch": "avenger_s0_t0",
      "class": "guardian",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.04
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "avenger_s0_t0_3",
      "name": "복수의 군주의 초월",
      "branch": "avenger_s0_t0",
      "class": "guardian",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "thorns",
          "op": "add",
          "value": 0.08
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "avenger_s0_t0_4",
      "name": "복수의 군주의 궁극",
      "branch": "avenger_s0_t0",
      "class": "guardian",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "attack",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "avenger_s0_t1_0",
      "name": "파멸의 방패의 기초",
      "branch": "avenger_s0_t1",
      "class": "guardian",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "attack",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "avenger_s0_t1_1",
      "name": "파멸의 방패의 계승",
      "branch": "avenger_s0_t1",
      "class": "guardian",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.04
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "avenger_s0_t1_2",
      "name": "파멸의 방패의 완성",
      "branch": "avenger_s0_t1",
      "class": "guardian",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "avenger_s0_t1_3",
      "name": "파멸의 방패의 초월",
      "branch": "avenger_s0_t1",
      "class": "guardian",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "attack",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "avenger_s0_t1_4",
      "name": "파멸의 방패의 궁극",
      "branch": "avenger_s0_t1",
      "class": "guardian",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.04
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "avenger_s1_0",
      "name": "저거너트의 단련",
      "branch": "avenger_s1",
      "class": "guardian",
      "tier": 0,
      "maxRank": 5,
      "requires": 0,
      "cost": 1,
      "minLevel": 18,
      "stats": [
        {
          "stat": "attack",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "avenger_s1_1",
      "name": "저거너트의 기예",
      "branch": "avenger_s1",
      "class": "guardian",
      "tier": 1,
      "maxRank": 5,
      "requires": 3,
      "cost": 1,
      "minLevel": 21,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "avenger_s1_2",
      "name": "저거너트의 신념",
      "branch": "avenger_s1",
      "class": "guardian",
      "tier": 2,
      "maxRank": 4,
      "requires": 6,
      "cost": 1,
      "minLevel": 24,
      "stats": [
        {
          "stat": "thorns",
          "op": "add",
          "value": 0.08
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": false
    },
    {
      "id": "avenger_s1_3",
      "name": "저거너트의 오의",
      "branch": "avenger_s1",
      "class": "guardian",
      "tier": 3,
      "maxRank": 2,
      "requires": 9,
      "cost": 1,
      "minLevel": 27,
      "stats": [
        {
          "stat": "attack",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "선택한 전직의 능력을 강화합니다.",
      "capstone": true
    },
    {
      "id": "avenger_s1_t0_0",
      "name": "전장의 거신의 기초",
      "branch": "avenger_s1_t0",
      "class": "guardian",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "attack",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "avenger_s1_t0_1",
      "name": "전장의 거신의 계승",
      "branch": "avenger_s1_t0",
      "class": "guardian",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.04
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "avenger_s1_t0_2",
      "name": "전장의 거신의 완성",
      "branch": "avenger_s1_t0",
      "class": "guardian",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "thorns",
          "op": "add",
          "value": 0.08
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "avenger_s1_t0_3",
      "name": "전장의 거신의 초월",
      "branch": "avenger_s1_t0",
      "class": "guardian",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "attack",
          "op": "multiply",
          "value": 1.045
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "avenger_s1_t0_4",
      "name": "전장의 거신의 궁극",
      "branch": "avenger_s1_t0",
      "class": "guardian",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.04
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    },
    {
      "id": "avenger_s1_t1_0",
      "name": "불굴의 응징자의 기초",
      "branch": "avenger_s1_t1",
      "class": "guardian",
      "tier": 0,
      "maxRank": 6,
      "requires": 0,
      "cost": 1,
      "minLevel": 34,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.04
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "avenger_s1_t1_1",
      "name": "불굴의 응징자의 계승",
      "branch": "avenger_s1_t1",
      "class": "guardian",
      "tier": 1,
      "maxRank": 6,
      "requires": 3,
      "cost": 1,
      "minLevel": 37,
      "stats": [
        {
          "stat": "thorns",
          "op": "add",
          "value": 0.08
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "avenger_s1_t1_2",
      "name": "불굴의 응징자의 완성",
      "branch": "avenger_s1_t1",
      "class": "guardian",
      "tier": 2,
      "maxRank": 5,
      "requires": 6,
      "cost": 1,
      "minLevel": 40,
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.18
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "avenger_s1_t1_3",
      "name": "불굴의 응징자의 초월",
      "branch": "avenger_s1_t1",
      "class": "guardian",
      "tier": 3,
      "maxRank": 5,
      "requires": 9,
      "cost": 1,
      "minLevel": 43,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.04
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": false
    },
    {
      "id": "avenger_s1_t1_4",
      "name": "불굴의 응징자의 궁극",
      "branch": "avenger_s1_t1",
      "class": "guardian",
      "tier": 4,
      "maxRank": 3,
      "requires": 12,
      "cost": 1,
      "minLevel": 46,
      "stats": [
        {
          "stat": "thorns",
          "op": "add",
          "value": 0.08
        }
      ],
      "description": "최종 전직의 고유 능력을 성장시킵니다.",
      "capstone": true
    }
  ],
  "slots": [
    {
      "id": "weapon",
      "name": "무기",
      "icon": "attack"
    },
    {
      "id": "armor",
      "name": "갑옷",
      "icon": "shield"
    },
    {
      "id": "accessory",
      "name": "장신구",
      "icon": "signature"
    },
    {
      "id": "relic",
      "name": "유물",
      "icon": "staff"
    }
  ],
  "rarities": [
    {
      "id": "common",
      "name": "일반",
      "color": "#746b59",
      "multiplier": 1,
      "affixes": 0,
      "weight": 85.6,
      "salvage": 1
    },
    {
      "id": "uncommon",
      "name": "고급",
      "color": "#4f8055",
      "multiplier": 1.16,
      "affixes": 1,
      "weight": 13.6,
      "salvage": 2
    },
    {
      "id": "rare",
      "name": "희귀",
      "color": "#4d80b2",
      "multiplier": 1.36,
      "affixes": 2,
      "weight": 0.75,
      "salvage": 4
    },
    {
      "id": "epic",
      "name": "영웅",
      "color": "#9669a4",
      "multiplier": 1.62,
      "affixes": 2,
      "weight": 0.05,
      "salvage": 7
    },
    {
      "id": "legendary",
      "name": "전설",
      "color": "#c89b45",
      "multiplier": 1.9,
      "affixes": 3,
      "weight": 0.005,
      "salvage": 12
    }
  ],
  "items": [
    {
      "id": "iron_sword",
      "name": "철제 장검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "stats": [
        {
          "stat": "attack",
          "op": "add",
          "value": 5
        }
      ],
      "icon": "attack",
      "description": "균형 잡힌 모험가의 검."
    },
    {
      "id": "hunting_bow",
      "name": "사냥꾼의 활",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "stats": [
        {
          "stat": "attack",
          "op": "add",
          "value": 5
        }
      ],
      "icon": "bow",
      "description": "평타 사격을 돕는 튼튼한 활."
    },
    {
      "id": "apprentice_staff",
      "name": "견습 지팡이",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "stats": [
        {
          "stat": "spell",
          "op": "add",
          "value": 7
        }
      ],
      "icon": "staff",
      "description": "마력을 증폭시키는 나무 지팡이."
    },
    {
      "id": "oath_mace",
      "name": "서약의 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "stats": [
        {
          "stat": "spell",
          "op": "add",
          "value": 4
        },
        {
          "stat": "defense",
          "op": "add",
          "value": 2
        }
      ],
      "icon": "shield",
      "description": "방패 기술과 함께 사용하는 철퇴."
    },
    {
      "id": "padded_armor",
      "name": "누비 갑옷",
      "slot": "armor",
      "stats": [
        {
          "stat": "hp",
          "op": "add",
          "value": 18
        },
        {
          "stat": "defense",
          "op": "add",
          "value": 1
        }
      ],
      "icon": "shield",
      "description": "가볍고 편안한 기본 방호구."
    },
    {
      "id": "hunter_leather",
      "name": "추적자의 가죽갑옷",
      "slot": "armor",
      "stats": [
        {
          "stat": "defense",
          "op": "add",
          "value": 2
        },
        {
          "stat": "crit",
          "op": "add",
          "value": 0.025
        }
      ],
      "icon": "shield",
      "description": "치명타 사격과 가벼운 전투에 적합."
    },
    {
      "id": "rune_robe",
      "name": "룬 비단 로브",
      "slot": "armor",
      "stats": [
        {
          "stat": "mp",
          "op": "add",
          "value": 16
        },
        {
          "stat": "spell",
          "op": "add",
          "value": 4
        }
      ],
      "icon": "staff",
      "description": "방어보다 주문 전투에 집중."
    },
    {
      "id": "knight_plate",
      "name": "기사의 판금갑옷",
      "slot": "armor",
      "stats": [
        {
          "stat": "hp",
          "op": "add",
          "value": 30
        },
        {
          "stat": "defense",
          "op": "add",
          "value": 4
        },
        {
          "stat": "speed",
          "op": "multiply",
          "value": 0.94
        }
      ],
      "icon": "shield",
      "description": "단단한 대신 움직임이 느려집니다."
    },
    {
      "id": "copper_ring",
      "name": "동빛 반지",
      "slot": "accessory",
      "stats": [
        {
          "stat": "attack",
          "op": "add",
          "value": 2
        },
        {
          "stat": "spell",
          "op": "add",
          "value": 2
        }
      ],
      "icon": "signature",
      "description": "모든 전투에 도움이 되는 작은 반지."
    },
    {
      "id": "wolf_charm",
      "name": "늑대 송곳니 목걸이",
      "slot": "accessory",
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.05
        },
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.1
        }
      ],
      "icon": "signature",
      "description": "평타와 치명타를 위한 사냥꾼의 장신구."
    },
    {
      "id": "sapphire_ring",
      "name": "사파이어 반지",
      "slot": "accessory",
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 1.1
        },
        {
          "stat": "mp",
          "op": "add",
          "value": 12
        }
      ],
      "icon": "signature",
      "description": "마력 소모가 큰 기술 빌드를 보조합니다."
    },
    {
      "id": "oak_amulet",
      "name": "고목 수호 부적",
      "slot": "accessory",
      "stats": [
        {
          "stat": "hp",
          "op": "add",
          "value": 28
        },
        {
          "stat": "hpRegen",
          "op": "add",
          "value": 0.4
        }
      ],
      "icon": "heart",
      "description": "생존에 집중하는 모험가를 위한 부적."
    },
    {
      "id": "quartz",
      "name": "별빛 수정",
      "slot": "relic",
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.13
        },
        {
          "stat": "cooldownRate",
          "op": "multiply",
          "value": 0.96
        }
      ],
      "icon": "staff",
      "description": "기술의 위력을 높이고 재사용 시간을 줄입니다."
    },
    {
      "id": "wind_feather",
      "name": "바람의 깃털",
      "slot": "relic",
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.08
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.06
        }
      ],
      "icon": "bait",
      "description": "빠른 이동과 평타를 함께 강화합니다."
    },
    {
      "id": "thorn_seed",
      "name": "가시나무 씨앗",
      "slot": "relic",
      "stats": [
        {
          "stat": "thorns",
          "op": "add",
          "value": 5
        },
        {
          "stat": "defense",
          "op": "add",
          "value": 1
        }
      ],
      "icon": "tree",
      "description": "근접 공격자에게 피해를 돌려줍니다."
    },
    {
      "id": "wolf_crown",
      "name": "은빛 늑대왕의 이빨",
      "slot": "relic",
      "boss": "wolf_king",
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.2
        },
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.035
        },
        {
          "stat": "hp",
          "op": "multiply",
          "value": 0.95
        }
      ],
      "icon": "bow",
      "description": "평타 피해와 흡혈을 얻는 대신 체력을 조금 잃습니다."
    },
    {
      "id": "golem_heart",
      "name": "고대 골렘의 심장",
      "slot": "relic",
      "boss": "mine_golem",
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 14
        },
        {
          "stat": "defense",
          "op": "add",
          "value": 4
        },
        {
          "stat": "speed",
          "op": "multiply",
          "value": 0.96
        }
      ],
      "icon": "shield",
      "description": "기술마다 보호막을 얻지만 무게가 있습니다."
    },
    {
      "id": "drake_ember",
      "name": "원룡의 불씨",
      "slot": "relic",
      "boss": "ancient_drake",
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.28
        },
        {
          "stat": "burnChance",
          "op": "add",
          "value": 0.3
        },
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 0.92
        }
      ],
      "icon": "staff",
      "description": "평타를 희생하고 화염 기술에 집중합니다."
    },
    {
      "id": "knight_blade",
      "name": "기사단 장검",
      "slot": "weapon",
      "stats": [
        {
          "stat": "attack",
          "op": "add",
          "value": 8
        },
        {
          "stat": "defense",
          "op": "add",
          "value": 1
        }
      ],
      "icon": "attack",
      "description": "공격과 방어의 균형을 잡는 장검.",
      "classes": [
        "warrior"
      ]
    },
    {
      "id": "berserker_axe",
      "name": "광전사의 전투도끼",
      "slot": "weapon",
      "stats": [
        {
          "stat": "attack",
          "op": "add",
          "value": 11
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 0.92
        }
      ],
      "icon": "attack",
      "description": "느린 공격을 강한 일격으로 보상합니다.",
      "classes": [
        "warrior"
      ]
    },
    {
      "id": "oak_longbow",
      "name": "참나무 장궁",
      "slot": "weapon",
      "stats": [
        {
          "stat": "attack",
          "op": "add",
          "value": 7
        },
        {
          "stat": "range",
          "op": "add",
          "value": 0.35
        },
        {
          "stat": "speed",
          "op": "multiply",
          "value": 0.97
        }
      ],
      "icon": "bow",
      "description": "거리를 늘리는 대신 발걸음이 조금 느려집니다.",
      "classes": [
        "archer"
      ]
    },
    {
      "id": "swift_bow",
      "name": "속사 사냥궁",
      "slot": "weapon",
      "stats": [
        {
          "stat": "attack",
          "op": "add",
          "value": 6
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.08
        }
      ],
      "icon": "bow",
      "description": "끊임없이 평타 화살을 이어가는 활.",
      "classes": [
        "archer"
      ]
    },
    {
      "id": "ember_staff",
      "name": "불씨 지팡이",
      "slot": "weapon",
      "stats": [
        {
          "stat": "spell",
          "op": "add",
          "value": 11
        },
        {
          "stat": "burnChance",
          "op": "add",
          "value": 0.06
        },
        {
          "stat": "manaRegen",
          "op": "add",
          "value": -0.2
        }
      ],
      "icon": "staff",
      "description": "마력 회복을 희생하고 화상을 강화합니다.",
      "classes": [
        "magician"
      ]
    },
    {
      "id": "silver_grimoire",
      "name": "은빛 마도서",
      "slot": "weapon",
      "stats": [
        {
          "stat": "spell",
          "op": "add",
          "value": 7
        },
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.7
        }
      ],
      "icon": "staff",
      "description": "장기전의 마력 순환을 돕습니다.",
      "classes": [
        "magician"
      ]
    },
    {
      "id": "crusader_hammer",
      "name": "성전의 망치",
      "slot": "weapon",
      "stats": [
        {
          "stat": "spell",
          "op": "add",
          "value": 8
        },
        {
          "stat": "defense",
          "op": "add",
          "value": 3
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 0.94
        }
      ],
      "icon": "shield",
      "description": "평타 속도보다 방패 기술을 택합니다.",
      "classes": [
        "guardian"
      ]
    },
    {
      "id": "warden_scepter",
      "name": "수호자의 홀",
      "slot": "weapon",
      "stats": [
        {
          "stat": "defense",
          "op": "add",
          "value": 4
        },
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 5
        },
        {
          "stat": "manaRegen",
          "op": "add",
          "value": -0.2
        }
      ],
      "icon": "shield",
      "description": "기술마다 보호막을 얻는 수호 무기.",
      "classes": [
        "guardian"
      ]
    },
    {
      "id": "soldier_mail",
      "name": "병사의 사슬갑옷",
      "slot": "armor",
      "stats": [
        {
          "stat": "defense",
          "op": "add",
          "value": 3
        },
        {
          "stat": "hp",
          "op": "add",
          "value": 22
        },
        {
          "stat": "speed",
          "op": "multiply",
          "value": 0.96
        }
      ],
      "icon": "shield",
      "description": "병사의 사슬갑옷의 특성을 살린 모험 장비."
    },
    {
      "id": "shadow_jacket",
      "name": "그림자 사냥복",
      "slot": "armor",
      "stats": [
        {
          "stat": "defense",
          "op": "add",
          "value": 1
        },
        {
          "stat": "hp",
          "op": "add",
          "value": 10
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.06
        }
      ],
      "icon": "shield",
      "description": "그림자 사냥복의 특성을 살린 모험 장비."
    },
    {
      "id": "scholar_robe",
      "name": "별빛 학자의 로브",
      "slot": "armor",
      "stats": [
        {
          "stat": "spell",
          "op": "add",
          "value": 6
        },
        {
          "stat": "mp",
          "op": "add",
          "value": 25
        }
      ],
      "icon": "staff",
      "description": "별빛 학자의 로브의 특성을 살린 모험 장비."
    },
    {
      "id": "bastion_plate",
      "name": "성벽의 중갑",
      "slot": "armor",
      "stats": [
        {
          "stat": "hp",
          "op": "add",
          "value": 45
        },
        {
          "stat": "defense",
          "op": "add",
          "value": 6
        },
        {
          "stat": "speed",
          "op": "multiply",
          "value": 0.9
        }
      ],
      "icon": "shield",
      "description": "매우 단단하지만 이동이 느려집니다."
    },
    {
      "id": "mana_pendant",
      "name": "마력 순환 목걸이",
      "slot": "accessory",
      "stats": [
        {
          "stat": "manaOnHit",
          "op": "add",
          "value": 0.8
        },
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.4
        }
      ],
      "icon": "staff",
      "description": "평타와 회복으로 마력 소모를 보완합니다."
    },
    {
      "id": "bloodstone_ring",
      "name": "핏빛 돌 반지",
      "slot": "accessory",
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.025
        },
        {
          "stat": "hp",
          "op": "multiply",
          "value": 0.96
        }
      ],
      "icon": "heart",
      "description": "체력을 조금 포기하고 흡혈을 얻습니다."
    },
    {
      "id": "precision_ring",
      "name": "정밀 사격 반지",
      "slot": "accessory",
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.035
        },
        {
          "stat": "attack",
          "op": "add",
          "value": 2
        }
      ],
      "icon": "bow",
      "description": "정밀 사격 반지의 특성을 살린 모험 장비."
    },
    {
      "id": "pilgrim_seal",
      "name": "순례자의 수호패",
      "slot": "accessory",
      "stats": [
        {
          "stat": "hp",
          "op": "add",
          "value": 25
        },
        {
          "stat": "damageReduction",
          "op": "add",
          "value": 0.035
        }
      ],
      "icon": "shield",
      "description": "순례자의 수호패의 특성을 살린 모험 장비."
    },
    {
      "id": "spirit_leaf",
      "name": "정령의 잎",
      "slot": "relic",
      "stats": [
        {
          "stat": "hpRegen",
          "op": "add",
          "value": 0.5
        },
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.03
        }
      ],
      "icon": "tree",
      "description": "정령의 잎의 특성을 살린 모험 장비."
    },
    {
      "id": "frost_memory",
      "name": "얼음 기억 수정",
      "slot": "relic",
      "stats": [
        {
          "stat": "slowChance",
          "op": "add",
          "value": 0.1
        },
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.05
        }
      ],
      "icon": "staff",
      "description": "얼음 기억 수정의 특성을 살린 모험 장비."
    },
    {
      "id": "hunter_mark",
      "name": "추적자의 표식",
      "slot": "relic",
      "stats": [
        {
          "stat": "extraShots",
          "op": "add",
          "value": 1
        },
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 0.88
        }
      ],
      "icon": "bow",
      "description": "각 투사체의 피해를 낮추고 추가 사격을 얻습니다."
    },
    {
      "id": "forbidden_seal",
      "name": "금단의 잿빛 인장",
      "slot": "relic",
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.13
        },
        {
          "stat": "mp",
          "op": "multiply",
          "value": 0.92
        }
      ],
      "icon": "signature",
      "description": "마력 총량을 희생해 기술 화력을 올립니다."
    },
    {
      "id": "highland_heart",
      "name": "가시 심장",
      "slot": "relic",
      "icon": "signature",
      "boss": true,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.12
        },
        {
          "stat": "hp",
          "op": "multiply",
          "value": 0.95
        },
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.25
        }
      ],
      "description": "기술 화력을 얻는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "frost_crest",
      "name": "서리왕 문장",
      "slot": "relic",
      "icon": "signature",
      "boss": true,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.1300000000000001
        },
        {
          "stat": "hp",
          "op": "multiply",
          "value": 0.95
        },
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.3
        }
      ],
      "description": "기술 화력을 얻는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "sun_carapace",
      "name": "태양의 갑각",
      "slot": "relic",
      "icon": "signature",
      "boss": true,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.1400000000000001
        },
        {
          "stat": "hp",
          "op": "multiply",
          "value": 0.95
        },
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.35
        }
      ],
      "description": "기술 화력을 얻는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "grave_seal",
      "name": "망자의 인장",
      "slot": "relic",
      "icon": "signature",
      "boss": true,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.1500000000000001
        },
        {
          "stat": "hp",
          "op": "multiply",
          "value": 0.95
        },
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.4
        }
      ],
      "description": "기술 화력을 얻는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "eclipse_crown",
      "name": "황혼의 왕관",
      "slot": "relic",
      "icon": "signature",
      "boss": true,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.1600000000000001
        },
        {
          "stat": "hp",
          "op": "multiply",
          "value": 0.95
        },
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.45
        }
      ],
      "description": "기술 화력을 얻는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "변경_warrior",
      "name": "변경 철제 장검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "stats": [
        {
          "stat": "attack",
          "op": "add",
          "value": 8
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.04
        },
        {
          "stat": "mp",
          "op": "multiply",
          "value": 0.94
        }
      ],
      "icon": "attack",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "minLevel": 16
    },
    {
      "id": "변경_archer",
      "name": "변경 사냥꾼의 활",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "stats": [
        {
          "stat": "attack",
          "op": "add",
          "value": 8
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.04
        },
        {
          "stat": "mp",
          "op": "multiply",
          "value": 0.94
        }
      ],
      "icon": "bow",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "minLevel": 16
    },
    {
      "id": "변경_magician",
      "name": "변경 견습 지팡이",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "stats": [
        {
          "stat": "spell",
          "op": "add",
          "value": 8
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.04
        },
        {
          "stat": "mp",
          "op": "multiply",
          "value": 0.94
        }
      ],
      "icon": "staff",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "minLevel": 16
    },
    {
      "id": "변경_guardian",
      "name": "변경 서약의 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "stats": [
        {
          "stat": "attack",
          "op": "add",
          "value": 8
        },
        {
          "stat": "defense",
          "op": "add",
          "value": 2
        },
        {
          "stat": "mp",
          "op": "multiply",
          "value": 0.94
        }
      ],
      "icon": "shield",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "minLevel": 16
    },
    {
      "id": "region_0_armor",
      "name": "변경 사슬갑옷",
      "slot": "armor",
      "icon": "shield",
      "stats": [
        {
          "stat": "hp",
          "op": "add",
          "value": 25
        },
        {
          "stat": "speed",
          "op": "multiply",
          "value": 0.97
        }
      ],
      "description": "체력 / 이동 속도 감소.",
      "minLevel": 16
    },
    {
      "id": "region_0_accessory",
      "name": "변경 사냥 반지",
      "slot": "accessory",
      "icon": "rank",
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.045
        },
        {
          "stat": "defense",
          "op": "add",
          "value": -1
        }
      ],
      "description": "치명타 / 방어력 감소.",
      "minLevel": 16
    },
    {
      "id": "서리_warrior",
      "name": "서리 철제 장검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "stats": [
        {
          "stat": "attack",
          "op": "add",
          "value": 10
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.04
        },
        {
          "stat": "mp",
          "op": "multiply",
          "value": 0.94
        }
      ],
      "icon": "attack",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "minLevel": 24
    },
    {
      "id": "서리_archer",
      "name": "서리 사냥꾼의 활",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "stats": [
        {
          "stat": "attack",
          "op": "add",
          "value": 10
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.04
        },
        {
          "stat": "mp",
          "op": "multiply",
          "value": 0.94
        }
      ],
      "icon": "bow",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "minLevel": 24
    },
    {
      "id": "서리_magician",
      "name": "서리 견습 지팡이",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "stats": [
        {
          "stat": "spell",
          "op": "add",
          "value": 10
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.04
        },
        {
          "stat": "mp",
          "op": "multiply",
          "value": 0.94
        }
      ],
      "icon": "staff",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "minLevel": 24
    },
    {
      "id": "서리_guardian",
      "name": "서리 서약의 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "stats": [
        {
          "stat": "attack",
          "op": "add",
          "value": 10
        },
        {
          "stat": "defense",
          "op": "add",
          "value": 3
        },
        {
          "stat": "mp",
          "op": "multiply",
          "value": 0.94
        }
      ],
      "icon": "shield",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "minLevel": 24
    },
    {
      "id": "region_1_armor",
      "name": "서리 사슬갑옷",
      "slot": "armor",
      "icon": "shield",
      "stats": [
        {
          "stat": "hp",
          "op": "add",
          "value": 37
        },
        {
          "stat": "speed",
          "op": "multiply",
          "value": 0.97
        }
      ],
      "description": "체력 / 이동 속도 감소.",
      "minLevel": 24
    },
    {
      "id": "region_1_accessory",
      "name": "서리 사냥 반지",
      "slot": "accessory",
      "icon": "rank",
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.053
        },
        {
          "stat": "defense",
          "op": "add",
          "value": -1
        }
      ],
      "description": "치명타 / 방어력 감소.",
      "minLevel": 24
    },
    {
      "id": "사막_warrior",
      "name": "사막 철제 장검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "stats": [
        {
          "stat": "attack",
          "op": "add",
          "value": 12
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.04
        },
        {
          "stat": "mp",
          "op": "multiply",
          "value": 0.94
        }
      ],
      "icon": "attack",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "minLevel": 31
    },
    {
      "id": "사막_archer",
      "name": "사막 사냥꾼의 활",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "stats": [
        {
          "stat": "attack",
          "op": "add",
          "value": 12
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.04
        },
        {
          "stat": "mp",
          "op": "multiply",
          "value": 0.94
        }
      ],
      "icon": "bow",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "minLevel": 31
    },
    {
      "id": "사막_magician",
      "name": "사막 견습 지팡이",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "stats": [
        {
          "stat": "spell",
          "op": "add",
          "value": 12
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.04
        },
        {
          "stat": "mp",
          "op": "multiply",
          "value": 0.94
        }
      ],
      "icon": "staff",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "minLevel": 31
    },
    {
      "id": "사막_guardian",
      "name": "사막 서약의 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "stats": [
        {
          "stat": "attack",
          "op": "add",
          "value": 12
        },
        {
          "stat": "defense",
          "op": "add",
          "value": 4
        },
        {
          "stat": "mp",
          "op": "multiply",
          "value": 0.94
        }
      ],
      "icon": "shield",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "minLevel": 31
    },
    {
      "id": "region_2_armor",
      "name": "사막 사슬갑옷",
      "slot": "armor",
      "icon": "shield",
      "stats": [
        {
          "stat": "hp",
          "op": "add",
          "value": 49
        },
        {
          "stat": "speed",
          "op": "multiply",
          "value": 0.97
        }
      ],
      "description": "체력 / 이동 속도 감소.",
      "minLevel": 31
    },
    {
      "id": "region_2_accessory",
      "name": "사막 사냥 반지",
      "slot": "accessory",
      "icon": "rank",
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.061
        },
        {
          "stat": "defense",
          "op": "add",
          "value": -1
        }
      ],
      "description": "치명타 / 방어력 감소.",
      "minLevel": 31
    },
    {
      "id": "황혼_warrior",
      "name": "황혼 철제 장검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "stats": [
        {
          "stat": "attack",
          "op": "add",
          "value": 14
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.04
        },
        {
          "stat": "mp",
          "op": "multiply",
          "value": 0.94
        }
      ],
      "icon": "attack",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "minLevel": 40
    },
    {
      "id": "황혼_archer",
      "name": "황혼 사냥꾼의 활",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "stats": [
        {
          "stat": "attack",
          "op": "add",
          "value": 14
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.04
        },
        {
          "stat": "mp",
          "op": "multiply",
          "value": 0.94
        }
      ],
      "icon": "bow",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "minLevel": 40
    },
    {
      "id": "황혼_magician",
      "name": "황혼 견습 지팡이",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "stats": [
        {
          "stat": "spell",
          "op": "add",
          "value": 14
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.04
        },
        {
          "stat": "mp",
          "op": "multiply",
          "value": 0.94
        }
      ],
      "icon": "staff",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "minLevel": 40
    },
    {
      "id": "황혼_guardian",
      "name": "황혼 서약의 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "stats": [
        {
          "stat": "attack",
          "op": "add",
          "value": 14
        },
        {
          "stat": "defense",
          "op": "add",
          "value": 5
        },
        {
          "stat": "mp",
          "op": "multiply",
          "value": 0.94
        }
      ],
      "icon": "shield",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "minLevel": 40
    },
    {
      "id": "region_3_armor",
      "name": "황혼 사슬갑옷",
      "slot": "armor",
      "icon": "shield",
      "stats": [
        {
          "stat": "hp",
          "op": "add",
          "value": 61
        },
        {
          "stat": "speed",
          "op": "multiply",
          "value": 0.97
        }
      ],
      "description": "체력 / 이동 속도 감소.",
      "minLevel": 40
    },
    {
      "id": "region_3_accessory",
      "name": "황혼 사냥 반지",
      "slot": "accessory",
      "icon": "rank",
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.069
        },
        {
          "stat": "defense",
          "op": "add",
          "value": -1
        }
      ],
      "description": "치명타 / 방어력 감소.",
      "minLevel": 40
    },
    {
      "id": "faction_rangers",
      "name": "매의 맹약",
      "slot": "relic",
      "icon": "rank",
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.18
        },
        {
          "stat": "goldGain",
          "op": "multiply",
          "value": 0.92
        }
      ],
      "description": "세력의 힘 / 금화 획득 -8%.",
      "boss": true
    },
    {
      "id": "faction_wardens",
      "name": "수호의 서약",
      "slot": "relic",
      "icon": "rank",
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.18
        },
        {
          "stat": "goldGain",
          "op": "multiply",
          "value": 0.92
        }
      ],
      "description": "세력의 힘 / 금화 획득 -8%.",
      "boss": true
    },
    {
      "id": "faction_arcanum",
      "name": "학회의 별",
      "slot": "relic",
      "icon": "rank",
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.2
        },
        {
          "stat": "goldGain",
          "op": "multiply",
          "value": 0.92
        }
      ],
      "description": "세력의 힘 / 금화 획득 -8%.",
      "boss": true
    },
    {
      "id": "set_ember_warrior",
      "name": "불씨 성전 장검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "icon": "attack",
      "element": "fire",
      "set": "ember",
      "minLevel": 12,
      "stats": [
        {
          "stat": "attack",
          "value": 7.0,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_ember_archer",
      "name": "불씨 성전 활",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "icon": "bow",
      "element": "fire",
      "set": "ember",
      "minLevel": 12,
      "stats": [
        {
          "stat": "attack",
          "value": 7.0,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_ember_magician",
      "name": "불씨 성전 지팡이",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "icon": "staff",
      "element": "fire",
      "set": "ember",
      "minLevel": 12,
      "stats": [
        {
          "stat": "spell",
          "value": 7.0,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_ember_guardian",
      "name": "불씨 성전 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "icon": "shield",
      "element": "fire",
      "set": "ember",
      "minLevel": 12,
      "stats": [
        {
          "stat": "attack",
          "value": 7.0,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 10,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_ember_armor",
      "name": "불씨 성전 예복",
      "slot": "armor",
      "icon": "shield",
      "set": "ember",
      "element": "fire",
      "minLevel": 12,
      "stats": [
        {
          "stat": "hp",
          "value": 18,
          "op": "add"
        },
        {
          "stat": "fireResist",
          "value": 0.05,
          "op": "add"
        },
        {
          "stat": "speed",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_ember_accessory",
      "name": "불씨 성전 인장",
      "slot": "accessory",
      "icon": "rank",
      "set": "ember",
      "element": "fire",
      "minLevel": 12,
      "stats": [
        {
          "stat": "crit",
          "value": 0.025,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_ember_relic",
      "name": "불씨 성전 성물",
      "slot": "relic",
      "icon": "rank",
      "set": "ember",
      "element": "fire",
      "minLevel": 12,
      "stats": [
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "manaRegen",
          "value": 0.15,
          "op": "add"
        },
        {
          "stat": "attackSpeed",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_glacier_warrior",
      "name": "빙관 맹약 장검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "icon": "attack",
      "element": "frost",
      "set": "glacier",
      "minLevel": 17,
      "stats": [
        {
          "stat": "attack",
          "value": 7.5,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_glacier_archer",
      "name": "빙관 맹약 활",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "icon": "bow",
      "element": "frost",
      "set": "glacier",
      "minLevel": 17,
      "stats": [
        {
          "stat": "attack",
          "value": 7.5,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_glacier_magician",
      "name": "빙관 맹약 지팡이",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "icon": "staff",
      "element": "frost",
      "set": "glacier",
      "minLevel": 17,
      "stats": [
        {
          "stat": "spell",
          "value": 7.5,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_glacier_guardian",
      "name": "빙관 맹약 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "icon": "shield",
      "element": "frost",
      "set": "glacier",
      "minLevel": 17,
      "stats": [
        {
          "stat": "attack",
          "value": 7.5,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 10,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_glacier_armor",
      "name": "빙관 맹약 예복",
      "slot": "armor",
      "icon": "shield",
      "set": "glacier",
      "element": "frost",
      "minLevel": 17,
      "stats": [
        {
          "stat": "hp",
          "value": 19,
          "op": "add"
        },
        {
          "stat": "frostResist",
          "value": 0.05,
          "op": "add"
        },
        {
          "stat": "speed",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_glacier_accessory",
      "name": "빙관 맹약 인장",
      "slot": "accessory",
      "icon": "rank",
      "set": "glacier",
      "element": "frost",
      "minLevel": 17,
      "stats": [
        {
          "stat": "crit",
          "value": 0.025,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_glacier_relic",
      "name": "빙관 맹약 성물",
      "slot": "relic",
      "icon": "rank",
      "set": "glacier",
      "element": "frost",
      "minLevel": 17,
      "stats": [
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "manaRegen",
          "value": 0.15,
          "op": "add"
        },
        {
          "stat": "attackSpeed",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_wild_warrior",
      "name": "야생 수호 장검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "icon": "attack",
      "element": "nature",
      "set": "wild",
      "minLevel": 22,
      "stats": [
        {
          "stat": "attack",
          "value": 8.0,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_wild_archer",
      "name": "야생 수호 활",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "icon": "bow",
      "element": "nature",
      "set": "wild",
      "minLevel": 22,
      "stats": [
        {
          "stat": "attack",
          "value": 8.0,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_wild_magician",
      "name": "야생 수호 지팡이",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "icon": "staff",
      "element": "nature",
      "set": "wild",
      "minLevel": 22,
      "stats": [
        {
          "stat": "spell",
          "value": 8.0,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_wild_guardian",
      "name": "야생 수호 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "icon": "shield",
      "element": "nature",
      "set": "wild",
      "minLevel": 22,
      "stats": [
        {
          "stat": "attack",
          "value": 8.0,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 10,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_wild_armor",
      "name": "야생 수호 예복",
      "slot": "armor",
      "icon": "shield",
      "set": "wild",
      "element": "nature",
      "minLevel": 22,
      "stats": [
        {
          "stat": "hp",
          "value": 20,
          "op": "add"
        },
        {
          "stat": "natureResist",
          "value": 0.05,
          "op": "add"
        },
        {
          "stat": "speed",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_wild_accessory",
      "name": "야생 수호 인장",
      "slot": "accessory",
      "icon": "rank",
      "set": "wild",
      "element": "nature",
      "minLevel": 22,
      "stats": [
        {
          "stat": "crit",
          "value": 0.025,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_wild_relic",
      "name": "야생 수호 성물",
      "slot": "relic",
      "icon": "rank",
      "set": "wild",
      "element": "nature",
      "minLevel": 22,
      "stats": [
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "manaRegen",
          "value": 0.15,
          "op": "add"
        },
        {
          "stat": "attackSpeed",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_astral_warrior",
      "name": "성운 기록 장검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "icon": "attack",
      "element": "arcane",
      "set": "astral",
      "minLevel": 27,
      "stats": [
        {
          "stat": "attack",
          "value": 8.5,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_astral_archer",
      "name": "성운 기록 활",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "icon": "bow",
      "element": "arcane",
      "set": "astral",
      "minLevel": 27,
      "stats": [
        {
          "stat": "attack",
          "value": 8.5,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_astral_magician",
      "name": "성운 기록 지팡이",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "icon": "staff",
      "element": "arcane",
      "set": "astral",
      "minLevel": 27,
      "stats": [
        {
          "stat": "spell",
          "value": 8.5,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_astral_guardian",
      "name": "성운 기록 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "icon": "shield",
      "element": "arcane",
      "set": "astral",
      "minLevel": 27,
      "stats": [
        {
          "stat": "attack",
          "value": 8.5,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 10,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_astral_armor",
      "name": "성운 기록 예복",
      "slot": "armor",
      "icon": "shield",
      "set": "astral",
      "element": "arcane",
      "minLevel": 27,
      "stats": [
        {
          "stat": "hp",
          "value": 21,
          "op": "add"
        },
        {
          "stat": "arcaneResist",
          "value": 0.05,
          "op": "add"
        },
        {
          "stat": "speed",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_astral_accessory",
      "name": "성운 기록 인장",
      "slot": "accessory",
      "icon": "rank",
      "set": "astral",
      "element": "arcane",
      "minLevel": 27,
      "stats": [
        {
          "stat": "crit",
          "value": 0.025,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_astral_relic",
      "name": "성운 기록 성물",
      "slot": "relic",
      "icon": "rank",
      "set": "astral",
      "element": "arcane",
      "minLevel": 27,
      "stats": [
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "manaRegen",
          "value": 0.15,
          "op": "add"
        },
        {
          "stat": "attackSpeed",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_bastion_warrior",
      "name": "왕국 성채 장검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "icon": "attack",
      "element": "physical",
      "set": "bastion",
      "minLevel": 32,
      "stats": [
        {
          "stat": "attack",
          "value": 9.0,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_bastion_archer",
      "name": "왕국 성채 활",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "icon": "bow",
      "element": "physical",
      "set": "bastion",
      "minLevel": 32,
      "stats": [
        {
          "stat": "attack",
          "value": 9.0,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_bastion_magician",
      "name": "왕국 성채 지팡이",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "icon": "staff",
      "element": "physical",
      "set": "bastion",
      "minLevel": 32,
      "stats": [
        {
          "stat": "spell",
          "value": 9.0,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_bastion_guardian",
      "name": "왕국 성채 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "icon": "shield",
      "element": "physical",
      "set": "bastion",
      "minLevel": 32,
      "stats": [
        {
          "stat": "attack",
          "value": 9.0,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 10,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_bastion_armor",
      "name": "왕국 성채 예복",
      "slot": "armor",
      "icon": "shield",
      "set": "bastion",
      "element": "physical",
      "minLevel": 32,
      "stats": [
        {
          "stat": "hp",
          "value": 22,
          "op": "add"
        },
        {
          "stat": "physicalResist",
          "value": 0.05,
          "op": "add"
        },
        {
          "stat": "speed",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_bastion_accessory",
      "name": "왕국 성채 인장",
      "slot": "accessory",
      "icon": "rank",
      "set": "bastion",
      "element": "physical",
      "minLevel": 32,
      "stats": [
        {
          "stat": "crit",
          "value": 0.025,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_bastion_relic",
      "name": "왕국 성채 성물",
      "slot": "relic",
      "icon": "rank",
      "set": "bastion",
      "element": "physical",
      "minLevel": 32,
      "stats": [
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "manaRegen",
          "value": 0.15,
          "op": "add"
        },
        {
          "stat": "attackSpeed",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_storm_warrior",
      "name": "폭풍 사냥 장검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "icon": "attack",
      "element": "frost",
      "set": "storm",
      "minLevel": 37,
      "stats": [
        {
          "stat": "attack",
          "value": 9.5,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_storm_archer",
      "name": "폭풍 사냥 활",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "icon": "bow",
      "element": "frost",
      "set": "storm",
      "minLevel": 37,
      "stats": [
        {
          "stat": "attack",
          "value": 9.5,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_storm_magician",
      "name": "폭풍 사냥 지팡이",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "icon": "staff",
      "element": "frost",
      "set": "storm",
      "minLevel": 37,
      "stats": [
        {
          "stat": "spell",
          "value": 9.5,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_storm_guardian",
      "name": "폭풍 사냥 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "icon": "shield",
      "element": "frost",
      "set": "storm",
      "minLevel": 37,
      "stats": [
        {
          "stat": "attack",
          "value": 9.5,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 10,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_storm_armor",
      "name": "폭풍 사냥 예복",
      "slot": "armor",
      "icon": "shield",
      "set": "storm",
      "element": "frost",
      "minLevel": 37,
      "stats": [
        {
          "stat": "hp",
          "value": 23,
          "op": "add"
        },
        {
          "stat": "frostResist",
          "value": 0.05,
          "op": "add"
        },
        {
          "stat": "speed",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_storm_accessory",
      "name": "폭풍 사냥 인장",
      "slot": "accessory",
      "icon": "rank",
      "set": "storm",
      "element": "frost",
      "minLevel": 37,
      "stats": [
        {
          "stat": "crit",
          "value": 0.025,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_storm_relic",
      "name": "폭풍 사냥 성물",
      "slot": "relic",
      "icon": "rank",
      "set": "storm",
      "element": "frost",
      "minLevel": 37,
      "stats": [
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "manaRegen",
          "value": 0.15,
          "op": "add"
        },
        {
          "stat": "attackSpeed",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_dusk_warrior",
      "name": "황혼 유산 장검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "icon": "attack",
      "element": "arcane",
      "set": "dusk",
      "minLevel": 42,
      "stats": [
        {
          "stat": "attack",
          "value": 10.0,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_dusk_archer",
      "name": "황혼 유산 활",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "icon": "bow",
      "element": "arcane",
      "set": "dusk",
      "minLevel": 42,
      "stats": [
        {
          "stat": "attack",
          "value": 10.0,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_dusk_magician",
      "name": "황혼 유산 지팡이",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "icon": "staff",
      "element": "arcane",
      "set": "dusk",
      "minLevel": 42,
      "stats": [
        {
          "stat": "spell",
          "value": 10.0,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_dusk_guardian",
      "name": "황혼 유산 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "icon": "shield",
      "element": "arcane",
      "set": "dusk",
      "minLevel": 42,
      "stats": [
        {
          "stat": "attack",
          "value": 10.0,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 10,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_dusk_armor",
      "name": "황혼 유산 예복",
      "slot": "armor",
      "icon": "shield",
      "set": "dusk",
      "element": "arcane",
      "minLevel": 42,
      "stats": [
        {
          "stat": "hp",
          "value": 24,
          "op": "add"
        },
        {
          "stat": "arcaneResist",
          "value": 0.05,
          "op": "add"
        },
        {
          "stat": "speed",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_dusk_accessory",
      "name": "황혼 유산 인장",
      "slot": "accessory",
      "icon": "rank",
      "set": "dusk",
      "element": "arcane",
      "minLevel": 42,
      "stats": [
        {
          "stat": "crit",
          "value": 0.025,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_dusk_relic",
      "name": "황혼 유산 성물",
      "slot": "relic",
      "icon": "rank",
      "set": "dusk",
      "element": "arcane",
      "minLevel": 42,
      "stats": [
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "manaRegen",
          "value": 0.15,
          "op": "add"
        },
        {
          "stat": "attackSpeed",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_dawn_warrior",
      "name": "여명 순례 장검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "icon": "attack",
      "element": "fire",
      "set": "dawn",
      "minLevel": 47,
      "stats": [
        {
          "stat": "attack",
          "value": 10.5,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_dawn_archer",
      "name": "여명 순례 활",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "icon": "bow",
      "element": "fire",
      "set": "dawn",
      "minLevel": 47,
      "stats": [
        {
          "stat": "attack",
          "value": 10.5,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_dawn_magician",
      "name": "여명 순례 지팡이",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "icon": "staff",
      "element": "fire",
      "set": "dawn",
      "minLevel": 47,
      "stats": [
        {
          "stat": "spell",
          "value": 10.5,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_dawn_guardian",
      "name": "여명 순례 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "icon": "shield",
      "element": "fire",
      "set": "dawn",
      "minLevel": 47,
      "stats": [
        {
          "stat": "attack",
          "value": 10.5,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 10,
          "op": "add"
        }
      ],
      "description": "세트 무기. 속성 상성과 세트 효과를 조합하세요."
    },
    {
      "id": "set_dawn_armor",
      "name": "여명 순례 예복",
      "slot": "armor",
      "icon": "shield",
      "set": "dawn",
      "element": "fire",
      "minLevel": 47,
      "stats": [
        {
          "stat": "hp",
          "value": 25,
          "op": "add"
        },
        {
          "stat": "fireResist",
          "value": 0.05,
          "op": "add"
        },
        {
          "stat": "speed",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_dawn_accessory",
      "name": "여명 순례 인장",
      "slot": "accessory",
      "icon": "rank",
      "set": "dawn",
      "element": "fire",
      "minLevel": 47,
      "stats": [
        {
          "stat": "crit",
          "value": 0.025,
          "op": "add"
        },
        {
          "stat": "defense",
          "value": -1,
          "op": "add"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "set_dawn_relic",
      "name": "여명 순례 성물",
      "slot": "relic",
      "icon": "rank",
      "set": "dawn",
      "element": "fire",
      "minLevel": 47,
      "stats": [
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "manaRegen",
          "value": 0.15,
          "op": "add"
        },
        {
          "stat": "attackSpeed",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "세트 2개·4개 장착 시 추가 효과."
    },
    {
      "id": "craftline_0_warrior",
      "name": "여행자 파쇄검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "icon": "attack",
      "minLevel": 5,
      "stats": [
        {
          "stat": "attack",
          "value": 6.0,
          "op": "add"
        },
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_0_archer",
      "name": "여행자 연사궁",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "icon": "bow",
      "minLevel": 5,
      "stats": [
        {
          "stat": "attack",
          "value": 6.0,
          "op": "add"
        },
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_0_magician",
      "name": "여행자 마도봉",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "icon": "staff",
      "minLevel": 5,
      "stats": [
        {
          "stat": "spell",
          "value": 6.0,
          "op": "add"
        },
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_0_guardian",
      "name": "여행자 수호 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "icon": "shield",
      "minLevel": 5,
      "stats": [
        {
          "stat": "attack",
          "value": 6.0,
          "op": "add"
        },
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_1_warrior",
      "name": "개척자 파쇄검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "icon": "attack",
      "minLevel": 11,
      "stats": [
        {
          "stat": "attack",
          "value": 6.6,
          "op": "add"
        },
        {
          "stat": "basicDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_1_archer",
      "name": "개척자 연사궁",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "icon": "bow",
      "minLevel": 11,
      "stats": [
        {
          "stat": "attack",
          "value": 6.6,
          "op": "add"
        },
        {
          "stat": "basicDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_1_magician",
      "name": "개척자 마도봉",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "icon": "staff",
      "minLevel": 11,
      "stats": [
        {
          "stat": "spell",
          "value": 6.6,
          "op": "add"
        },
        {
          "stat": "basicDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_1_guardian",
      "name": "개척자 수호 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "icon": "shield",
      "minLevel": 11,
      "stats": [
        {
          "stat": "attack",
          "value": 6.6,
          "op": "add"
        },
        {
          "stat": "basicDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_2_warrior",
      "name": "은빛 파쇄검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "icon": "attack",
      "minLevel": 17,
      "stats": [
        {
          "stat": "attack",
          "value": 7.2,
          "op": "add"
        },
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_2_archer",
      "name": "은빛 연사궁",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "icon": "bow",
      "minLevel": 17,
      "stats": [
        {
          "stat": "attack",
          "value": 7.2,
          "op": "add"
        },
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_2_magician",
      "name": "은빛 마도봉",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "icon": "staff",
      "minLevel": 17,
      "stats": [
        {
          "stat": "spell",
          "value": 7.2,
          "op": "add"
        },
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_2_guardian",
      "name": "은빛 수호 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "icon": "shield",
      "minLevel": 17,
      "stats": [
        {
          "stat": "attack",
          "value": 7.2,
          "op": "add"
        },
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_3_warrior",
      "name": "왕립 파쇄검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "icon": "attack",
      "minLevel": 23,
      "stats": [
        {
          "stat": "attack",
          "value": 7.8,
          "op": "add"
        },
        {
          "stat": "basicDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_3_archer",
      "name": "왕립 연사궁",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "icon": "bow",
      "minLevel": 23,
      "stats": [
        {
          "stat": "attack",
          "value": 7.8,
          "op": "add"
        },
        {
          "stat": "basicDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_3_magician",
      "name": "왕립 마도봉",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "icon": "staff",
      "minLevel": 23,
      "stats": [
        {
          "stat": "spell",
          "value": 7.8,
          "op": "add"
        },
        {
          "stat": "basicDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_3_guardian",
      "name": "왕립 수호 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "icon": "shield",
      "minLevel": 23,
      "stats": [
        {
          "stat": "attack",
          "value": 7.8,
          "op": "add"
        },
        {
          "stat": "basicDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_4_warrior",
      "name": "황혼 파쇄검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "icon": "attack",
      "minLevel": 29,
      "stats": [
        {
          "stat": "attack",
          "value": 8.4,
          "op": "add"
        },
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_4_archer",
      "name": "황혼 연사궁",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "icon": "bow",
      "minLevel": 29,
      "stats": [
        {
          "stat": "attack",
          "value": 8.4,
          "op": "add"
        },
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_4_magician",
      "name": "황혼 마도봉",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "icon": "staff",
      "minLevel": 29,
      "stats": [
        {
          "stat": "spell",
          "value": 8.4,
          "op": "add"
        },
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_4_guardian",
      "name": "황혼 수호 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "icon": "shield",
      "minLevel": 29,
      "stats": [
        {
          "stat": "attack",
          "value": 8.4,
          "op": "add"
        },
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_5_warrior",
      "name": "고대 파쇄검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "icon": "attack",
      "minLevel": 35,
      "stats": [
        {
          "stat": "attack",
          "value": 9.0,
          "op": "add"
        },
        {
          "stat": "basicDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_5_archer",
      "name": "고대 연사궁",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "icon": "bow",
      "minLevel": 35,
      "stats": [
        {
          "stat": "attack",
          "value": 9.0,
          "op": "add"
        },
        {
          "stat": "basicDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_5_magician",
      "name": "고대 마도봉",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "icon": "staff",
      "minLevel": 35,
      "stats": [
        {
          "stat": "spell",
          "value": 9.0,
          "op": "add"
        },
        {
          "stat": "basicDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_5_guardian",
      "name": "고대 수호 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "icon": "shield",
      "minLevel": 35,
      "stats": [
        {
          "stat": "attack",
          "value": 9.0,
          "op": "add"
        },
        {
          "stat": "basicDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_6_warrior",
      "name": "별빛 파쇄검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "icon": "attack",
      "minLevel": 41,
      "stats": [
        {
          "stat": "attack",
          "value": 9.6,
          "op": "add"
        },
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_6_archer",
      "name": "별빛 연사궁",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "icon": "bow",
      "minLevel": 41,
      "stats": [
        {
          "stat": "attack",
          "value": 9.6,
          "op": "add"
        },
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_6_magician",
      "name": "별빛 마도봉",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "icon": "staff",
      "minLevel": 41,
      "stats": [
        {
          "stat": "spell",
          "value": 9.6,
          "op": "add"
        },
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_6_guardian",
      "name": "별빛 수호 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "icon": "shield",
      "minLevel": 41,
      "stats": [
        {
          "stat": "attack",
          "value": 9.6,
          "op": "add"
        },
        {
          "stat": "skillDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_7_warrior",
      "name": "계승자 파쇄검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "icon": "attack",
      "minLevel": 47,
      "stats": [
        {
          "stat": "attack",
          "value": 10.2,
          "op": "add"
        },
        {
          "stat": "basicDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_7_archer",
      "name": "계승자 연사궁",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "icon": "bow",
      "minLevel": 47,
      "stats": [
        {
          "stat": "attack",
          "value": 10.2,
          "op": "add"
        },
        {
          "stat": "basicDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_7_magician",
      "name": "계승자 마도봉",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "icon": "staff",
      "minLevel": 47,
      "stats": [
        {
          "stat": "spell",
          "value": 10.2,
          "op": "add"
        },
        {
          "stat": "basicDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "craftline_7_guardian",
      "name": "계승자 수호 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "icon": "shield",
      "minLevel": 47,
      "stats": [
        {
          "stat": "attack",
          "value": 10.2,
          "op": "add"
        },
        {
          "stat": "basicDamage",
          "value": 1.04,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.97,
          "op": "multiply"
        }
      ],
      "description": "공격 성향을 강화하는 대신 최대 체력을 내줍니다."
    },
    {
      "id": "relic_0",
      "name": "순환 반지",
      "slot": "accessory",
      "icon": "rank",
      "minLevel": 8,
      "stats": [
        {
          "stat": "manaRegen",
          "value": 0.25,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_1",
      "name": "매의 눈 반지",
      "slot": "accessory",
      "icon": "rank",
      "minLevel": 9,
      "stats": [
        {
          "stat": "crit",
          "value": 0.025,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_2",
      "name": "거인의 숨 반지",
      "slot": "accessory",
      "icon": "rank",
      "minLevel": 10,
      "stats": [
        {
          "stat": "hp",
          "value": 18,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_3",
      "name": "질풍 반지",
      "slot": "accessory",
      "icon": "rank",
      "minLevel": 11,
      "stats": [
        {
          "stat": "attackSpeed",
          "value": 1.035,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_4",
      "name": "비전 반지",
      "slot": "accessory",
      "icon": "rank",
      "minLevel": 12,
      "stats": [
        {
          "stat": "spell",
          "value": 3,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_5",
      "name": "수호 반지",
      "slot": "accessory",
      "icon": "rank",
      "minLevel": 13,
      "stats": [
        {
          "stat": "defense",
          "value": 2,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_6",
      "name": "흡혈 반지",
      "slot": "accessory",
      "icon": "rank",
      "minLevel": 14,
      "stats": [
        {
          "stat": "lifesteal",
          "value": 0.008,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_7",
      "name": "흐르는 시간 반지",
      "slot": "accessory",
      "icon": "rank",
      "minLevel": 15,
      "stats": [
        {
          "stat": "cooldownRate",
          "value": 0.975,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_8",
      "name": "순환 목걸이",
      "slot": "accessory",
      "icon": "rank",
      "minLevel": 16,
      "stats": [
        {
          "stat": "manaRegen",
          "value": 0.25,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_9",
      "name": "매의 눈 목걸이",
      "slot": "accessory",
      "icon": "rank",
      "minLevel": 17,
      "stats": [
        {
          "stat": "crit",
          "value": 0.025,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_10",
      "name": "거인의 숨 목걸이",
      "slot": "accessory",
      "icon": "rank",
      "minLevel": 18,
      "stats": [
        {
          "stat": "hp",
          "value": 18,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_11",
      "name": "질풍 목걸이",
      "slot": "accessory",
      "icon": "rank",
      "minLevel": 19,
      "stats": [
        {
          "stat": "attackSpeed",
          "value": 1.035,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_12",
      "name": "비전 목걸이",
      "slot": "accessory",
      "icon": "rank",
      "minLevel": 20,
      "stats": [
        {
          "stat": "spell",
          "value": 3,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_13",
      "name": "수호 목걸이",
      "slot": "accessory",
      "icon": "rank",
      "minLevel": 21,
      "stats": [
        {
          "stat": "defense",
          "value": 2,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_14",
      "name": "흡혈 목걸이",
      "slot": "accessory",
      "icon": "rank",
      "minLevel": 22,
      "stats": [
        {
          "stat": "lifesteal",
          "value": 0.008,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_15",
      "name": "흐르는 시간 목걸이",
      "slot": "accessory",
      "icon": "rank",
      "minLevel": 23,
      "stats": [
        {
          "stat": "cooldownRate",
          "value": 0.975,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_16",
      "name": "순환 부적",
      "slot": "relic",
      "icon": "rank",
      "minLevel": 24,
      "stats": [
        {
          "stat": "manaRegen",
          "value": 0.25,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_17",
      "name": "매의 눈 부적",
      "slot": "relic",
      "icon": "rank",
      "minLevel": 25,
      "stats": [
        {
          "stat": "crit",
          "value": 0.025,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_18",
      "name": "거인의 숨 부적",
      "slot": "relic",
      "icon": "rank",
      "minLevel": 26,
      "stats": [
        {
          "stat": "hp",
          "value": 18,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_19",
      "name": "질풍 부적",
      "slot": "relic",
      "icon": "rank",
      "minLevel": 27,
      "stats": [
        {
          "stat": "attackSpeed",
          "value": 1.035,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_20",
      "name": "비전 부적",
      "slot": "relic",
      "icon": "rank",
      "minLevel": 28,
      "stats": [
        {
          "stat": "spell",
          "value": 3,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_21",
      "name": "수호 부적",
      "slot": "relic",
      "icon": "rank",
      "minLevel": 29,
      "stats": [
        {
          "stat": "defense",
          "value": 2,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_22",
      "name": "흡혈 부적",
      "slot": "relic",
      "icon": "rank",
      "minLevel": 30,
      "stats": [
        {
          "stat": "lifesteal",
          "value": 0.008,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_23",
      "name": "흐르는 시간 부적",
      "slot": "relic",
      "icon": "rank",
      "minLevel": 31,
      "stats": [
        {
          "stat": "cooldownRate",
          "value": 0.975,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_24",
      "name": "순환 수정",
      "slot": "relic",
      "icon": "rank",
      "minLevel": 32,
      "stats": [
        {
          "stat": "manaRegen",
          "value": 0.25,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_25",
      "name": "매의 눈 수정",
      "slot": "relic",
      "icon": "rank",
      "minLevel": 33,
      "stats": [
        {
          "stat": "crit",
          "value": 0.025,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_26",
      "name": "거인의 숨 수정",
      "slot": "relic",
      "icon": "rank",
      "minLevel": 34,
      "stats": [
        {
          "stat": "hp",
          "value": 18,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_27",
      "name": "질풍 수정",
      "slot": "relic",
      "icon": "rank",
      "minLevel": 35,
      "stats": [
        {
          "stat": "attackSpeed",
          "value": 1.035,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_28",
      "name": "비전 수정",
      "slot": "relic",
      "icon": "rank",
      "minLevel": 36,
      "stats": [
        {
          "stat": "spell",
          "value": 3,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_29",
      "name": "수호 수정",
      "slot": "relic",
      "icon": "rank",
      "minLevel": 37,
      "stats": [
        {
          "stat": "defense",
          "value": 2,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_30",
      "name": "흡혈 수정",
      "slot": "relic",
      "icon": "rank",
      "minLevel": 38,
      "stats": [
        {
          "stat": "lifesteal",
          "value": 0.008,
          "op": "add"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "relic_31",
      "name": "흐르는 시간 수정",
      "slot": "relic",
      "icon": "rank",
      "minLevel": 39,
      "stats": [
        {
          "stat": "cooldownRate",
          "value": 0.975,
          "op": "multiply"
        },
        {
          "stat": "hp",
          "value": 0.98,
          "op": "multiply"
        }
      ],
      "description": "하나의 능력을 특화합니다. 최대 체력 -2%."
    },
    {
      "id": "element_fire_warrior",
      "name": "화염 룬검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "icon": "attack",
      "element": "fire",
      "minLevel": 18,
      "stats": [
        {
          "stat": "attack",
          "value": 8,
          "op": "add"
        },
        {
          "stat": "fireResist",
          "value": 0.04,
          "op": "add"
        },
        {
          "stat": "mp",
          "value": 0.96,
          "op": "multiply"
        }
      ],
      "description": "평타 속성을 바꿔 몬스터 상성을 공략합니다."
    },
    {
      "id": "element_frost_warrior",
      "name": "냉기 룬검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "icon": "attack",
      "element": "frost",
      "minLevel": 18,
      "stats": [
        {
          "stat": "attack",
          "value": 8,
          "op": "add"
        },
        {
          "stat": "frostResist",
          "value": 0.04,
          "op": "add"
        },
        {
          "stat": "mp",
          "value": 0.96,
          "op": "multiply"
        }
      ],
      "description": "평타 속성을 바꿔 몬스터 상성을 공략합니다."
    },
    {
      "id": "element_nature_warrior",
      "name": "자연 룬검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "icon": "attack",
      "element": "nature",
      "minLevel": 18,
      "stats": [
        {
          "stat": "attack",
          "value": 8,
          "op": "add"
        },
        {
          "stat": "natureResist",
          "value": 0.04,
          "op": "add"
        },
        {
          "stat": "mp",
          "value": 0.96,
          "op": "multiply"
        }
      ],
      "description": "평타 속성을 바꿔 몬스터 상성을 공략합니다."
    },
    {
      "id": "element_arcane_warrior",
      "name": "비전 룬검",
      "slot": "weapon",
      "classes": [
        "warrior"
      ],
      "icon": "attack",
      "element": "arcane",
      "minLevel": 18,
      "stats": [
        {
          "stat": "attack",
          "value": 8,
          "op": "add"
        },
        {
          "stat": "arcaneResist",
          "value": 0.04,
          "op": "add"
        },
        {
          "stat": "mp",
          "value": 0.96,
          "op": "multiply"
        }
      ],
      "description": "평타 속성을 바꿔 몬스터 상성을 공략합니다."
    },
    {
      "id": "element_fire_archer",
      "name": "화염 룬궁",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "icon": "bow",
      "element": "fire",
      "minLevel": 18,
      "stats": [
        {
          "stat": "attack",
          "value": 8,
          "op": "add"
        },
        {
          "stat": "fireResist",
          "value": 0.04,
          "op": "add"
        },
        {
          "stat": "mp",
          "value": 0.96,
          "op": "multiply"
        }
      ],
      "description": "평타 속성을 바꿔 몬스터 상성을 공략합니다."
    },
    {
      "id": "element_frost_archer",
      "name": "냉기 룬궁",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "icon": "bow",
      "element": "frost",
      "minLevel": 18,
      "stats": [
        {
          "stat": "attack",
          "value": 8,
          "op": "add"
        },
        {
          "stat": "frostResist",
          "value": 0.04,
          "op": "add"
        },
        {
          "stat": "mp",
          "value": 0.96,
          "op": "multiply"
        }
      ],
      "description": "평타 속성을 바꿔 몬스터 상성을 공략합니다."
    },
    {
      "id": "element_nature_archer",
      "name": "자연 룬궁",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "icon": "bow",
      "element": "nature",
      "minLevel": 18,
      "stats": [
        {
          "stat": "attack",
          "value": 8,
          "op": "add"
        },
        {
          "stat": "natureResist",
          "value": 0.04,
          "op": "add"
        },
        {
          "stat": "mp",
          "value": 0.96,
          "op": "multiply"
        }
      ],
      "description": "평타 속성을 바꿔 몬스터 상성을 공략합니다."
    },
    {
      "id": "element_arcane_archer",
      "name": "비전 룬궁",
      "slot": "weapon",
      "classes": [
        "archer"
      ],
      "icon": "bow",
      "element": "arcane",
      "minLevel": 18,
      "stats": [
        {
          "stat": "attack",
          "value": 8,
          "op": "add"
        },
        {
          "stat": "arcaneResist",
          "value": 0.04,
          "op": "add"
        },
        {
          "stat": "mp",
          "value": 0.96,
          "op": "multiply"
        }
      ],
      "description": "평타 속성을 바꿔 몬스터 상성을 공략합니다."
    },
    {
      "id": "element_fire_magician",
      "name": "화염 룬봉",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "icon": "staff",
      "element": "fire",
      "minLevel": 18,
      "stats": [
        {
          "stat": "spell",
          "value": 8,
          "op": "add"
        },
        {
          "stat": "fireResist",
          "value": 0.04,
          "op": "add"
        },
        {
          "stat": "mp",
          "value": 0.96,
          "op": "multiply"
        }
      ],
      "description": "평타 속성을 바꿔 몬스터 상성을 공략합니다."
    },
    {
      "id": "element_frost_magician",
      "name": "냉기 룬봉",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "icon": "staff",
      "element": "frost",
      "minLevel": 18,
      "stats": [
        {
          "stat": "spell",
          "value": 8,
          "op": "add"
        },
        {
          "stat": "frostResist",
          "value": 0.04,
          "op": "add"
        },
        {
          "stat": "mp",
          "value": 0.96,
          "op": "multiply"
        }
      ],
      "description": "평타 속성을 바꿔 몬스터 상성을 공략합니다."
    },
    {
      "id": "element_nature_magician",
      "name": "자연 룬봉",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "icon": "staff",
      "element": "nature",
      "minLevel": 18,
      "stats": [
        {
          "stat": "spell",
          "value": 8,
          "op": "add"
        },
        {
          "stat": "natureResist",
          "value": 0.04,
          "op": "add"
        },
        {
          "stat": "mp",
          "value": 0.96,
          "op": "multiply"
        }
      ],
      "description": "평타 속성을 바꿔 몬스터 상성을 공략합니다."
    },
    {
      "id": "element_arcane_magician",
      "name": "비전 룬봉",
      "slot": "weapon",
      "classes": [
        "magician"
      ],
      "icon": "staff",
      "element": "arcane",
      "minLevel": 18,
      "stats": [
        {
          "stat": "spell",
          "value": 8,
          "op": "add"
        },
        {
          "stat": "arcaneResist",
          "value": 0.04,
          "op": "add"
        },
        {
          "stat": "mp",
          "value": 0.96,
          "op": "multiply"
        }
      ],
      "description": "평타 속성을 바꿔 몬스터 상성을 공략합니다."
    },
    {
      "id": "element_fire_guardian",
      "name": "화염 룬 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "icon": "shield",
      "element": "fire",
      "minLevel": 18,
      "stats": [
        {
          "stat": "attack",
          "value": 8,
          "op": "add"
        },
        {
          "stat": "fireResist",
          "value": 0.04,
          "op": "add"
        },
        {
          "stat": "mp",
          "value": 0.96,
          "op": "multiply"
        }
      ],
      "description": "평타 속성을 바꿔 몬스터 상성을 공략합니다."
    },
    {
      "id": "element_frost_guardian",
      "name": "냉기 룬 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "icon": "shield",
      "element": "frost",
      "minLevel": 18,
      "stats": [
        {
          "stat": "attack",
          "value": 8,
          "op": "add"
        },
        {
          "stat": "frostResist",
          "value": 0.04,
          "op": "add"
        },
        {
          "stat": "mp",
          "value": 0.96,
          "op": "multiply"
        }
      ],
      "description": "평타 속성을 바꿔 몬스터 상성을 공략합니다."
    },
    {
      "id": "element_nature_guardian",
      "name": "자연 룬 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "icon": "shield",
      "element": "nature",
      "minLevel": 18,
      "stats": [
        {
          "stat": "attack",
          "value": 8,
          "op": "add"
        },
        {
          "stat": "natureResist",
          "value": 0.04,
          "op": "add"
        },
        {
          "stat": "mp",
          "value": 0.96,
          "op": "multiply"
        }
      ],
      "description": "평타 속성을 바꿔 몬스터 상성을 공략합니다."
    },
    {
      "id": "element_arcane_guardian",
      "name": "비전 룬 철퇴",
      "slot": "weapon",
      "classes": [
        "guardian"
      ],
      "icon": "shield",
      "element": "arcane",
      "minLevel": 18,
      "stats": [
        {
          "stat": "attack",
          "value": 8,
          "op": "add"
        },
        {
          "stat": "arcaneResist",
          "value": 0.04,
          "op": "add"
        },
        {
          "stat": "mp",
          "value": 0.96,
          "op": "multiply"
        }
      ],
      "description": "평타 속성을 바꿔 몬스터 상성을 공략합니다."
    }
  ],
  "affixes": [
    {
      "id": "fierce",
      "name": "맹렬한",
      "stats": [
        {
          "stat": "attack",
          "op": "add",
          "value": 2
        }
      ]
    },
    {
      "id": "arcane",
      "name": "비전의",
      "stats": [
        {
          "stat": "spell",
          "op": "add",
          "value": 3
        }
      ]
    },
    {
      "id": "vital",
      "name": "강인한",
      "stats": [
        {
          "stat": "hp",
          "op": "add",
          "value": 14
        }
      ]
    },
    {
      "id": "swift",
      "name": "날렵한",
      "stats": [
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.055
        }
      ]
    },
    {
      "id": "keen",
      "name": "예리한",
      "stats": [
        {
          "stat": "crit",
          "op": "add",
          "value": 0.025
        }
      ]
    },
    {
      "id": "flow",
      "name": "순환의",
      "stats": [
        {
          "stat": "manaRegen",
          "op": "add",
          "value": 0.6
        }
      ]
    },
    {
      "id": "stout",
      "name": "수호의",
      "stats": [
        {
          "stat": "defense",
          "op": "add",
          "value": 1.2
        }
      ]
    },
    {
      "id": "wise",
      "name": "현자의",
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.055
        }
      ]
    },
    {
      "id": "harvest",
      "name": "수확의",
      "stats": [
        {
          "stat": "goldGain",
          "op": "multiply",
          "value": 1.05
        }
      ]
    },
    {
      "id": "scholarly",
      "name": "학구적인",
      "stats": [
        {
          "stat": "xpGain",
          "op": "multiply",
          "value": 1.05
        }
      ]
    },
    {
      "id": "vampiric",
      "name": "흡혈의",
      "stats": [
        {
          "stat": "lifesteal",
          "op": "add",
          "value": 0.01
        }
      ]
    },
    {
      "id": "restoring",
      "name": "회복의",
      "stats": [
        {
          "stat": "hpRegen",
          "op": "add",
          "value": 0.2
        }
      ]
    },
    {
      "id": "agile",
      "name": "기동의",
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.03
        }
      ]
    },
    {
      "id": "warding",
      "name": "결계의",
      "stats": [
        {
          "stat": "shieldOnSkill",
          "op": "add",
          "value": 3
        }
      ]
    }
  ],
  "materials": [
    {
      "id": "ore",
      "name": "철광석",
      "icon": "anvil"
    },
    {
      "id": "herb",
      "name": "약초",
      "icon": "recover"
    },
    {
      "id": "hide",
      "name": "질긴 가죽",
      "icon": "shield"
    },
    {
      "id": "crystal",
      "name": "마력 결정",
      "icon": "signature"
    },
    {
      "id": "wood",
      "name": "단단한 목재",
      "icon": "tree"
    },
    {
      "id": "moonstone",
      "name": "월광석",
      "icon": "signature"
    },
    {
      "id": "ember",
      "name": "불씨 핵",
      "icon": "signature"
    },
    {
      "id": "sigil",
      "name": "정복 인장",
      "icon": "rank"
    }
  ],
  "recipes": [
    {
      "id": "weapon",
      "name": "직업 무기 제작",
      "description": "내 직업의 희귀 무기를 제작합니다.",
      "smartWeapon": true,
      "rarity": "rare",
      "gold": 240,
      "materials": {
        "ore": 18,
        "crystal": 8,
        "wood": 8
      },
      "minLevel": 6
    },
    {
      "id": "fang",
      "name": "사냥 목걸이 제작",
      "item": "wolf_charm",
      "rarity": "rare",
      "gold": 180,
      "materials": {
        "hide": 14,
        "ore": 8
      },
      "minLevel": 5
    },
    {
      "id": "focus",
      "name": "별빛 수정 제작",
      "item": "quartz",
      "rarity": "rare",
      "gold": 220,
      "materials": {
        "crystal": 12,
        "ore": 8
      },
      "minLevel": 6
    },
    {
      "id": "craft_knight_blade",
      "name": "기사단 장검 제작",
      "description": "공격과 방어의 균형을 잡는 장검.",
      "item": "knight_blade",
      "rarity": "uncommon",
      "gold": 130,
      "materials": {
        "ore": 10,
        "wood": 5
      },
      "minLevel": 3,
      "classes": [
        "warrior"
      ]
    },
    {
      "id": "craft_oak_longbow",
      "name": "참나무 장궁 제작",
      "description": "거리를 늘리는 대신 발걸음이 조금 느려집니다.",
      "item": "oak_longbow",
      "rarity": "uncommon",
      "gold": 130,
      "materials": {
        "wood": 12,
        "hide": 5
      },
      "minLevel": 3,
      "classes": [
        "archer"
      ]
    },
    {
      "id": "craft_silver_grimoire",
      "name": "은빛 마도서 제작",
      "description": "장기전의 마력 순환을 돕습니다.",
      "item": "silver_grimoire",
      "rarity": "uncommon",
      "gold": 145,
      "materials": {
        "wood": 8,
        "crystal": 5
      },
      "minLevel": 3,
      "classes": [
        "magician"
      ]
    },
    {
      "id": "craft_crusader_hammer",
      "name": "성전의 망치 제작",
      "description": "평타 속도보다 방패 기술을 택합니다.",
      "item": "crusader_hammer",
      "rarity": "uncommon",
      "gold": 150,
      "materials": {
        "ore": 12,
        "wood": 4
      },
      "minLevel": 3,
      "classes": [
        "guardian"
      ]
    },
    {
      "id": "craft_shadow_jacket",
      "name": "그림자 사냥복 제작",
      "description": "그림자 사냥복의 특성을 살린 모험 장비.",
      "item": "shadow_jacket",
      "rarity": "uncommon",
      "gold": 140,
      "materials": {
        "hide": 12,
        "wood": 3
      },
      "minLevel": 3,
      "classes": null
    },
    {
      "id": "craft_scholar_robe",
      "name": "별빛 학자의 로브 제작",
      "description": "별빛 학자의 로브의 특성을 살린 모험 장비.",
      "item": "scholar_robe",
      "rarity": "uncommon",
      "gold": 165,
      "materials": {
        "hide": 8,
        "crystal": 6
      },
      "minLevel": 4,
      "classes": null
    },
    {
      "id": "craft_bastion_plate",
      "name": "성벽의 중갑 제작",
      "description": "매우 단단하지만 이동이 느려집니다.",
      "item": "bastion_plate",
      "rarity": "uncommon",
      "gold": 210,
      "materials": {
        "ore": 18,
        "hide": 8
      },
      "minLevel": 5,
      "classes": null
    },
    {
      "id": "craft_bloodstone_ring",
      "name": "핏빛 돌 반지 제작",
      "description": "체력을 조금 포기하고 흡혈을 얻습니다.",
      "item": "bloodstone_ring",
      "rarity": "rare",
      "gold": 270,
      "materials": {
        "ore": 12,
        "crystal": 10
      },
      "minLevel": 7,
      "classes": null
    },
    {
      "id": "craft_mana_pendant",
      "name": "마력 순환 목걸이 제작",
      "description": "평타와 회복으로 마력 소모를 보완합니다.",
      "item": "mana_pendant",
      "rarity": "rare",
      "gold": 250,
      "materials": {
        "ore": 8,
        "crystal": 12
      },
      "minLevel": 6,
      "classes": null
    },
    {
      "id": "craft_frost_memory",
      "name": "얼음 기억 수정 제작",
      "description": "얼음 기억 수정의 특성을 살린 모험 장비.",
      "item": "frost_memory",
      "rarity": "rare",
      "gold": 310,
      "materials": {
        "crystal": 16,
        "ore": 10
      },
      "minLevel": 8,
      "classes": null
    },
    {
      "id": "craft_forbidden_seal",
      "name": "금단의 잿빛 인장 제작",
      "description": "마력 총량을 희생해 기술 화력을 올립니다.",
      "item": "forbidden_seal",
      "rarity": "rare",
      "gold": 340,
      "materials": {
        "crystal": 18,
        "hide": 8
      },
      "minLevel": 8,
      "classes": null
    },
    {
      "id": "craft_hunter_mark",
      "name": "추적자의 표식 제작",
      "description": "각 투사체의 피해를 낮추고 추가 사격을 얻습니다.",
      "item": "hunter_mark",
      "rarity": "rare",
      "gold": 320,
      "materials": {
        "wood": 15,
        "hide": 14,
        "crystal": 5
      },
      "minLevel": 8,
      "classes": null
    },
    {
      "id": "craft_변경_warrior",
      "name": "변경 철제 장검 제작",
      "item": "변경_warrior",
      "rarity": "rare",
      "gold": 620,
      "materials": {
        "ore": 12,
        "wood": 10,
        "crystal": 8
      },
      "minLevel": 16,
      "classes": [
        "warrior"
      ]
    },
    {
      "id": "craft_변경_archer",
      "name": "변경 사냥꾼의 활 제작",
      "item": "변경_archer",
      "rarity": "rare",
      "gold": 620,
      "materials": {
        "ore": 12,
        "wood": 10,
        "crystal": 8
      },
      "minLevel": 16,
      "classes": [
        "archer"
      ]
    },
    {
      "id": "craft_변경_magician",
      "name": "변경 견습 지팡이 제작",
      "item": "변경_magician",
      "rarity": "rare",
      "gold": 620,
      "materials": {
        "ore": 12,
        "wood": 10,
        "crystal": 8
      },
      "minLevel": 16,
      "classes": [
        "magician"
      ]
    },
    {
      "id": "craft_변경_guardian",
      "name": "변경 서약의 철퇴 제작",
      "item": "변경_guardian",
      "rarity": "rare",
      "gold": 620,
      "materials": {
        "ore": 12,
        "wood": 10,
        "crystal": 8
      },
      "minLevel": 16,
      "classes": [
        "guardian"
      ]
    },
    {
      "id": "craft_서리_warrior",
      "name": "서리 철제 장검 제작",
      "item": "서리_warrior",
      "rarity": "rare",
      "gold": 1140,
      "materials": {
        "moonstone": 16,
        "wood": 13,
        "crystal": 11
      },
      "minLevel": 24,
      "classes": [
        "warrior"
      ]
    },
    {
      "id": "craft_서리_archer",
      "name": "서리 사냥꾼의 활 제작",
      "item": "서리_archer",
      "rarity": "rare",
      "gold": 1140,
      "materials": {
        "moonstone": 16,
        "wood": 13,
        "crystal": 11
      },
      "minLevel": 24,
      "classes": [
        "archer"
      ]
    },
    {
      "id": "craft_서리_magician",
      "name": "서리 견습 지팡이 제작",
      "item": "서리_magician",
      "rarity": "rare",
      "gold": 1140,
      "materials": {
        "moonstone": 16,
        "wood": 13,
        "crystal": 11
      },
      "minLevel": 24,
      "classes": [
        "magician"
      ]
    },
    {
      "id": "craft_서리_guardian",
      "name": "서리 서약의 철퇴 제작",
      "item": "서리_guardian",
      "rarity": "rare",
      "gold": 1140,
      "materials": {
        "moonstone": 16,
        "wood": 13,
        "crystal": 11
      },
      "minLevel": 24,
      "classes": [
        "guardian"
      ]
    },
    {
      "id": "craft_사막_warrior",
      "name": "사막 철제 장검 제작",
      "item": "사막_warrior",
      "rarity": "rare",
      "gold": 1660,
      "materials": {
        "ember": 20,
        "wood": 16,
        "crystal": 14
      },
      "minLevel": 31,
      "classes": [
        "warrior"
      ]
    },
    {
      "id": "craft_사막_archer",
      "name": "사막 사냥꾼의 활 제작",
      "item": "사막_archer",
      "rarity": "rare",
      "gold": 1660,
      "materials": {
        "ember": 20,
        "wood": 16,
        "crystal": 14
      },
      "minLevel": 31,
      "classes": [
        "archer"
      ]
    },
    {
      "id": "craft_사막_magician",
      "name": "사막 견습 지팡이 제작",
      "item": "사막_magician",
      "rarity": "rare",
      "gold": 1660,
      "materials": {
        "ember": 20,
        "wood": 16,
        "crystal": 14
      },
      "minLevel": 31,
      "classes": [
        "magician"
      ]
    },
    {
      "id": "craft_사막_guardian",
      "name": "사막 서약의 철퇴 제작",
      "item": "사막_guardian",
      "rarity": "rare",
      "gold": 1660,
      "materials": {
        "ember": 20,
        "wood": 16,
        "crystal": 14
      },
      "minLevel": 31,
      "classes": [
        "guardian"
      ]
    },
    {
      "id": "craft_황혼_warrior",
      "name": "황혼 철제 장검 제작",
      "item": "황혼_warrior",
      "rarity": "rare",
      "gold": 2180,
      "materials": {
        "sigil": 24,
        "wood": 19,
        "crystal": 17
      },
      "minLevel": 40,
      "classes": [
        "warrior"
      ]
    },
    {
      "id": "craft_황혼_archer",
      "name": "황혼 사냥꾼의 활 제작",
      "item": "황혼_archer",
      "rarity": "rare",
      "gold": 2180,
      "materials": {
        "sigil": 24,
        "wood": 19,
        "crystal": 17
      },
      "minLevel": 40,
      "classes": [
        "archer"
      ]
    },
    {
      "id": "craft_황혼_magician",
      "name": "황혼 견습 지팡이 제작",
      "item": "황혼_magician",
      "rarity": "rare",
      "gold": 2180,
      "materials": {
        "sigil": 24,
        "wood": 19,
        "crystal": 17
      },
      "minLevel": 40,
      "classes": [
        "magician"
      ]
    },
    {
      "id": "craft_황혼_guardian",
      "name": "황혼 서약의 철퇴 제작",
      "item": "황혼_guardian",
      "rarity": "rare",
      "gold": 2180,
      "materials": {
        "sigil": 24,
        "wood": 19,
        "crystal": 17
      },
      "minLevel": 40,
      "classes": [
        "guardian"
      ]
    },
    {
      "id": "faction_rangers",
      "name": "매의 맹약 제작",
      "item": "faction_rangers",
      "rarity": "rare",
      "gold": 1300,
      "materials": {
        "sigil": 12,
        "crystal": 20,
        "moonstone": 10
      },
      "minLevel": 25,
      "reputation": {
        "rangers": 120
      },
      "description": "세력 평판 120과 정복 인장이 필요합니다."
    },
    {
      "id": "faction_wardens",
      "name": "수호의 서약 제작",
      "item": "faction_wardens",
      "rarity": "rare",
      "gold": 1300,
      "materials": {
        "sigil": 12,
        "crystal": 20,
        "moonstone": 10
      },
      "minLevel": 25,
      "reputation": {
        "wardens": 120
      },
      "description": "세력 평판 120과 정복 인장이 필요합니다."
    },
    {
      "id": "faction_arcanum",
      "name": "학회의 별 제작",
      "item": "faction_arcanum",
      "rarity": "rare",
      "gold": 1300,
      "materials": {
        "sigil": 12,
        "crystal": 20,
        "moonstone": 10
      },
      "minLevel": 25,
      "reputation": {
        "arcanum": 120
      },
      "description": "세력 평판 120과 정복 인장이 필요합니다."
    },
    {
      "id": "craftline_0_warrior",
      "name": "여행자 파쇄검 제작",
      "item": "craftline_0_warrior",
      "classes": [
        "warrior"
      ],
      "rarity": "uncommon",
      "minLevel": 5,
      "gold": 150,
      "materials": {
        "ore": 8,
        "wood": 6,
        "crystal": 3
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_0_archer",
      "name": "여행자 연사궁 제작",
      "item": "craftline_0_archer",
      "classes": [
        "archer"
      ],
      "rarity": "uncommon",
      "minLevel": 5,
      "gold": 150,
      "materials": {
        "ore": 8,
        "wood": 6,
        "crystal": 3
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_0_magician",
      "name": "여행자 마도봉 제작",
      "item": "craftline_0_magician",
      "classes": [
        "magician"
      ],
      "rarity": "uncommon",
      "minLevel": 5,
      "gold": 150,
      "materials": {
        "ore": 8,
        "wood": 6,
        "crystal": 3
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_0_guardian",
      "name": "여행자 수호 철퇴 제작",
      "item": "craftline_0_guardian",
      "classes": [
        "guardian"
      ],
      "rarity": "uncommon",
      "minLevel": 5,
      "gold": 150,
      "materials": {
        "ore": 8,
        "wood": 6,
        "crystal": 3
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_1_warrior",
      "name": "개척자 파쇄검 제작",
      "item": "craftline_1_warrior",
      "classes": [
        "warrior"
      ],
      "rarity": "uncommon",
      "minLevel": 11,
      "gold": 370,
      "materials": {
        "ore": 11,
        "wood": 8,
        "crystal": 5
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_1_archer",
      "name": "개척자 연사궁 제작",
      "item": "craftline_1_archer",
      "classes": [
        "archer"
      ],
      "rarity": "uncommon",
      "minLevel": 11,
      "gold": 370,
      "materials": {
        "ore": 11,
        "wood": 8,
        "crystal": 5
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_1_magician",
      "name": "개척자 마도봉 제작",
      "item": "craftline_1_magician",
      "classes": [
        "magician"
      ],
      "rarity": "uncommon",
      "minLevel": 11,
      "gold": 370,
      "materials": {
        "ore": 11,
        "wood": 8,
        "crystal": 5
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_1_guardian",
      "name": "개척자 수호 철퇴 제작",
      "item": "craftline_1_guardian",
      "classes": [
        "guardian"
      ],
      "rarity": "uncommon",
      "minLevel": 11,
      "gold": 370,
      "materials": {
        "ore": 11,
        "wood": 8,
        "crystal": 5
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_2_warrior",
      "name": "은빛 파쇄검 제작",
      "item": "craftline_2_warrior",
      "classes": [
        "warrior"
      ],
      "rarity": "rare",
      "minLevel": 17,
      "gold": 590,
      "materials": {
        "ore": 14,
        "wood": 10,
        "crystal": 7
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_2_archer",
      "name": "은빛 연사궁 제작",
      "item": "craftline_2_archer",
      "classes": [
        "archer"
      ],
      "rarity": "rare",
      "minLevel": 17,
      "gold": 590,
      "materials": {
        "ore": 14,
        "wood": 10,
        "crystal": 7
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_2_magician",
      "name": "은빛 마도봉 제작",
      "item": "craftline_2_magician",
      "classes": [
        "magician"
      ],
      "rarity": "rare",
      "minLevel": 17,
      "gold": 590,
      "materials": {
        "ore": 14,
        "wood": 10,
        "crystal": 7
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_2_guardian",
      "name": "은빛 수호 철퇴 제작",
      "item": "craftline_2_guardian",
      "classes": [
        "guardian"
      ],
      "rarity": "rare",
      "minLevel": 17,
      "gold": 590,
      "materials": {
        "ore": 14,
        "wood": 10,
        "crystal": 7
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_3_warrior",
      "name": "왕립 파쇄검 제작",
      "item": "craftline_3_warrior",
      "classes": [
        "warrior"
      ],
      "rarity": "rare",
      "minLevel": 23,
      "gold": 810,
      "materials": {
        "ore": 17,
        "wood": 12,
        "crystal": 9
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_3_archer",
      "name": "왕립 연사궁 제작",
      "item": "craftline_3_archer",
      "classes": [
        "archer"
      ],
      "rarity": "rare",
      "minLevel": 23,
      "gold": 810,
      "materials": {
        "ore": 17,
        "wood": 12,
        "crystal": 9
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_3_magician",
      "name": "왕립 마도봉 제작",
      "item": "craftline_3_magician",
      "classes": [
        "magician"
      ],
      "rarity": "rare",
      "minLevel": 23,
      "gold": 810,
      "materials": {
        "ore": 17,
        "wood": 12,
        "crystal": 9
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_3_guardian",
      "name": "왕립 수호 철퇴 제작",
      "item": "craftline_3_guardian",
      "classes": [
        "guardian"
      ],
      "rarity": "rare",
      "minLevel": 23,
      "gold": 810,
      "materials": {
        "ore": 17,
        "wood": 12,
        "crystal": 9
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_4_warrior",
      "name": "황혼 파쇄검 제작",
      "item": "craftline_4_warrior",
      "classes": [
        "warrior"
      ],
      "rarity": "rare",
      "minLevel": 29,
      "gold": 1030,
      "materials": {
        "ore": 20,
        "wood": 14,
        "crystal": 11
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_4_archer",
      "name": "황혼 연사궁 제작",
      "item": "craftline_4_archer",
      "classes": [
        "archer"
      ],
      "rarity": "rare",
      "minLevel": 29,
      "gold": 1030,
      "materials": {
        "ore": 20,
        "wood": 14,
        "crystal": 11
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_4_magician",
      "name": "황혼 마도봉 제작",
      "item": "craftline_4_magician",
      "classes": [
        "magician"
      ],
      "rarity": "rare",
      "minLevel": 29,
      "gold": 1030,
      "materials": {
        "ore": 20,
        "wood": 14,
        "crystal": 11
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_4_guardian",
      "name": "황혼 수호 철퇴 제작",
      "item": "craftline_4_guardian",
      "classes": [
        "guardian"
      ],
      "rarity": "rare",
      "minLevel": 29,
      "gold": 1030,
      "materials": {
        "ore": 20,
        "wood": 14,
        "crystal": 11
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_5_warrior",
      "name": "고대 파쇄검 제작",
      "item": "craftline_5_warrior",
      "classes": [
        "warrior"
      ],
      "rarity": "rare",
      "minLevel": 35,
      "gold": 1250,
      "materials": {
        "ore": 23,
        "wood": 16,
        "crystal": 13
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_5_archer",
      "name": "고대 연사궁 제작",
      "item": "craftline_5_archer",
      "classes": [
        "archer"
      ],
      "rarity": "rare",
      "minLevel": 35,
      "gold": 1250,
      "materials": {
        "ore": 23,
        "wood": 16,
        "crystal": 13
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_5_magician",
      "name": "고대 마도봉 제작",
      "item": "craftline_5_magician",
      "classes": [
        "magician"
      ],
      "rarity": "rare",
      "minLevel": 35,
      "gold": 1250,
      "materials": {
        "ore": 23,
        "wood": 16,
        "crystal": 13
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_5_guardian",
      "name": "고대 수호 철퇴 제작",
      "item": "craftline_5_guardian",
      "classes": [
        "guardian"
      ],
      "rarity": "rare",
      "minLevel": 35,
      "gold": 1250,
      "materials": {
        "ore": 23,
        "wood": 16,
        "crystal": 13
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_6_warrior",
      "name": "별빛 파쇄검 제작",
      "item": "craftline_6_warrior",
      "classes": [
        "warrior"
      ],
      "rarity": "rare",
      "minLevel": 41,
      "gold": 1470,
      "materials": {
        "ore": 26,
        "wood": 18,
        "crystal": 15
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_6_archer",
      "name": "별빛 연사궁 제작",
      "item": "craftline_6_archer",
      "classes": [
        "archer"
      ],
      "rarity": "rare",
      "minLevel": 41,
      "gold": 1470,
      "materials": {
        "ore": 26,
        "wood": 18,
        "crystal": 15
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_6_magician",
      "name": "별빛 마도봉 제작",
      "item": "craftline_6_magician",
      "classes": [
        "magician"
      ],
      "rarity": "rare",
      "minLevel": 41,
      "gold": 1470,
      "materials": {
        "ore": 26,
        "wood": 18,
        "crystal": 15
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_6_guardian",
      "name": "별빛 수호 철퇴 제작",
      "item": "craftline_6_guardian",
      "classes": [
        "guardian"
      ],
      "rarity": "rare",
      "minLevel": 41,
      "gold": 1470,
      "materials": {
        "ore": 26,
        "wood": 18,
        "crystal": 15
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_7_warrior",
      "name": "계승자 파쇄검 제작",
      "item": "craftline_7_warrior",
      "classes": [
        "warrior"
      ],
      "rarity": "rare",
      "minLevel": 47,
      "gold": 1690,
      "materials": {
        "ore": 29,
        "wood": 20,
        "crystal": 17
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_7_archer",
      "name": "계승자 연사궁 제작",
      "item": "craftline_7_archer",
      "classes": [
        "archer"
      ],
      "rarity": "rare",
      "minLevel": 47,
      "gold": 1690,
      "materials": {
        "ore": 29,
        "wood": 20,
        "crystal": 17
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_7_magician",
      "name": "계승자 마도봉 제작",
      "item": "craftline_7_magician",
      "classes": [
        "magician"
      ],
      "rarity": "rare",
      "minLevel": 47,
      "gold": 1690,
      "materials": {
        "ore": 29,
        "wood": 20,
        "crystal": 17
      },
      "description": "파밍 재료로 확정 제작합니다."
    },
    {
      "id": "craftline_7_guardian",
      "name": "계승자 수호 철퇴 제작",
      "item": "craftline_7_guardian",
      "classes": [
        "guardian"
      ],
      "rarity": "rare",
      "minLevel": 47,
      "gold": 1690,
      "materials": {
        "ore": 29,
        "wood": 20,
        "crystal": 17
      },
      "description": "파밍 재료로 확정 제작합니다."
    }
  ],
  "shop": [
    {
      "id": "potion",
      "kind": "consumable",
      "consumable": "healing",
      "name": "회복 물약",
      "description": "최대 체력의 55% 회복",
      "price": 22,
      "amount": 1,
      "icon": "potion"
    },
    {
      "id": "potion_bundle",
      "kind": "consumable",
      "consumable": "healing",
      "name": "회복 물약 5개",
      "description": "위험한 모험을 위한 물약 묶음.",
      "price": 100,
      "amount": 5,
      "icon": "potion"
    },
    {
      "id": "mana_potion",
      "kind": "consumable",
      "consumable": "mana",
      "name": "마력 물약",
      "description": "최대 마력의 45% 회복",
      "price": 26,
      "amount": 1,
      "icon": "staff"
    },
    {
      "id": "mana_bundle",
      "kind": "consumable",
      "consumable": "mana",
      "name": "마력 물약 3개",
      "description": "마력이 부족한 기술 빌드를 위한 준비.",
      "price": 72,
      "amount": 3,
      "icon": "staff"
    },
    {
      "id": "supply_ration",
      "kind": "consumable",
      "consumable": "ration",
      "name": "여행자의 건량",
      "description": "3분간 초당 체력 회복 +0.35",
      "price": 30,
      "amount": 1,
      "icon": "home"
    },
    {
      "id": "supply_sharpening",
      "kind": "consumable",
      "consumable": "sharpening",
      "name": "숫돌 가루",
      "description": "3분간 평타 피해 +10%",
      "price": 42,
      "amount": 1,
      "icon": "attack"
    },
    {
      "id": "supply_arcane_dust",
      "kind": "consumable",
      "consumable": "arcane_dust",
      "name": "비전 향로",
      "description": "3분간 기술 피해 +10%",
      "price": 44,
      "amount": 1,
      "icon": "staff"
    },
    {
      "id": "supply_ward_tonic",
      "kind": "consumable",
      "consumable": "ward_tonic",
      "name": "수호의 영약",
      "description": "3분간 방어력 +2, 받는 피해 -3%",
      "price": 45,
      "amount": 1,
      "icon": "shield"
    },
    {
      "id": "supply_wind_tonic",
      "kind": "consumable",
      "consumable": "wind_tonic",
      "name": "바람의 영약",
      "description": "3분간 이동 속도 +10%",
      "price": 35,
      "amount": 1,
      "icon": "bait"
    },
    {
      "id": "material_ore",
      "kind": "material",
      "material": "ore",
      "name": "철광석",
      "description": "제작에 필요한 재료 1개.",
      "price": 18,
      "amount": 1,
      "icon": "anvil"
    },
    {
      "id": "material_wood",
      "kind": "material",
      "material": "wood",
      "name": "단단한 목재",
      "description": "제작에 필요한 재료 1개.",
      "price": 12,
      "amount": 1,
      "icon": "tree"
    },
    {
      "id": "material_crystal",
      "kind": "material",
      "material": "crystal",
      "name": "마력 결정",
      "description": "제작에 필요한 재료 1개.",
      "price": 32,
      "amount": 1,
      "icon": "signature"
    },
    {
      "id": "gear_knight_blade",
      "kind": "equipment",
      "item": "knight_blade",
      "rarity": "common",
      "level": 3,
      "minLevel": 3,
      "limit": 1,
      "name": "기사단 장검",
      "description": "공격과 방어의 균형을 잡는 장검.",
      "price": 95,
      "icon": "attack"
    },
    {
      "id": "gear_oak_longbow",
      "kind": "equipment",
      "item": "oak_longbow",
      "rarity": "common",
      "level": 3,
      "minLevel": 3,
      "limit": 1,
      "name": "참나무 장궁",
      "description": "거리를 늘리는 대신 발걸음이 조금 느려집니다.",
      "price": 95,
      "icon": "bow"
    },
    {
      "id": "gear_silver_grimoire",
      "kind": "equipment",
      "item": "silver_grimoire",
      "rarity": "common",
      "level": 3,
      "minLevel": 3,
      "limit": 1,
      "name": "은빛 마도서",
      "description": "장기전의 마력 순환을 돕습니다.",
      "price": 100,
      "icon": "staff"
    },
    {
      "id": "gear_crusader_hammer",
      "kind": "equipment",
      "item": "crusader_hammer",
      "rarity": "common",
      "level": 3,
      "minLevel": 3,
      "limit": 1,
      "name": "성전의 망치",
      "description": "평타 속도보다 방패 기술을 택합니다.",
      "price": 105,
      "icon": "shield"
    },
    {
      "id": "gear_soldier_mail",
      "kind": "equipment",
      "item": "soldier_mail",
      "rarity": "common",
      "level": 3,
      "minLevel": 3,
      "limit": 1,
      "name": "병사의 사슬갑옷",
      "description": "병사의 사슬갑옷의 특성을 살린 모험 장비.",
      "price": 90,
      "icon": "shield"
    },
    {
      "id": "gear_shadow_jacket",
      "kind": "equipment",
      "item": "shadow_jacket",
      "rarity": "common",
      "level": 3,
      "minLevel": 3,
      "limit": 1,
      "name": "그림자 사냥복",
      "description": "그림자 사냥복의 특성을 살린 모험 장비.",
      "price": 100,
      "icon": "shield"
    },
    {
      "id": "gear_scholar_robe",
      "kind": "equipment",
      "item": "scholar_robe",
      "rarity": "common",
      "level": 3,
      "minLevel": 3,
      "limit": 1,
      "name": "별빛 학자의 로브",
      "description": "별빛 학자의 로브의 특성을 살린 모험 장비.",
      "price": 105,
      "icon": "staff"
    },
    {
      "id": "gear_bastion_plate",
      "kind": "equipment",
      "item": "bastion_plate",
      "rarity": "common",
      "level": 5,
      "minLevel": 5,
      "limit": 1,
      "name": "성벽의 중갑",
      "description": "매우 단단하지만 이동이 느려집니다.",
      "price": 155,
      "icon": "shield"
    },
    {
      "id": "gear_mana_pendant",
      "kind": "equipment",
      "item": "mana_pendant",
      "rarity": "common",
      "level": 4,
      "minLevel": 4,
      "limit": 1,
      "name": "마력 순환 목걸이",
      "description": "평타와 회복으로 마력 소모를 보완합니다.",
      "price": 135,
      "icon": "staff"
    },
    {
      "id": "gear_precision_ring",
      "kind": "equipment",
      "item": "precision_ring",
      "rarity": "common",
      "level": 4,
      "minLevel": 4,
      "limit": 1,
      "name": "정밀 사격 반지",
      "description": "정밀 사격 반지의 특성을 살린 모험 장비.",
      "price": 135,
      "icon": "bow"
    },
    {
      "id": "gear_pilgrim_seal",
      "kind": "equipment",
      "item": "pilgrim_seal",
      "rarity": "common",
      "level": 4,
      "minLevel": 4,
      "limit": 1,
      "name": "순례자의 수호패",
      "description": "순례자의 수호패의 특성을 살린 모험 장비.",
      "price": 140,
      "icon": "shield"
    },
    {
      "id": "gear_spirit_leaf",
      "kind": "equipment",
      "item": "spirit_leaf",
      "rarity": "common",
      "level": 5,
      "minLevel": 5,
      "limit": 1,
      "name": "정령의 잎",
      "description": "정령의 잎의 특성을 살린 모험 장비.",
      "price": 155,
      "icon": "tree"
    },
    {
      "id": "wander_berserker_axe",
      "kind": "equipment",
      "item": "berserker_axe",
      "rarity": "rare",
      "level": 8,
      "minLevel": 8,
      "limit": 1,
      "exclusive": "wanderer",
      "name": "광전사의 전투도끼",
      "description": "느린 공격을 강한 일격으로 보상합니다.",
      "price": 360,
      "icon": "attack"
    },
    {
      "id": "wander_swift_bow",
      "kind": "equipment",
      "item": "swift_bow",
      "rarity": "rare",
      "level": 8,
      "minLevel": 8,
      "limit": 1,
      "exclusive": "wanderer",
      "name": "속사 사냥궁",
      "description": "끊임없이 평타 화살을 이어가는 활.",
      "price": 360,
      "icon": "bow"
    },
    {
      "id": "wander_ember_staff",
      "kind": "equipment",
      "item": "ember_staff",
      "rarity": "rare",
      "level": 8,
      "minLevel": 8,
      "limit": 1,
      "exclusive": "wanderer",
      "name": "불씨 지팡이",
      "description": "마력 회복을 희생하고 화상을 강화합니다.",
      "price": 380,
      "icon": "staff"
    },
    {
      "id": "wander_warden_scepter",
      "kind": "equipment",
      "item": "warden_scepter",
      "rarity": "rare",
      "level": 8,
      "minLevel": 8,
      "limit": 1,
      "exclusive": "wanderer",
      "name": "수호자의 홀",
      "description": "기술마다 보호막을 얻는 수호 무기.",
      "price": 380,
      "icon": "shield"
    },
    {
      "id": "wander_hunter_mark",
      "kind": "equipment",
      "item": "hunter_mark",
      "rarity": "rare",
      "level": 8,
      "minLevel": 8,
      "limit": 1,
      "exclusive": "wanderer",
      "name": "추적자의 표식",
      "description": "각 투사체의 피해를 낮추고 추가 사격을 얻습니다.",
      "price": 430,
      "icon": "bow"
    },
    {
      "id": "wander_frost_memory",
      "kind": "equipment",
      "item": "frost_memory",
      "rarity": "rare",
      "level": 8,
      "minLevel": 8,
      "limit": 1,
      "exclusive": "wanderer",
      "name": "얼음 기억 수정",
      "description": "얼음 기억 수정의 특성을 살린 모험 장비.",
      "price": 400,
      "icon": "staff"
    },
    {
      "id": "shop_변경_warrior",
      "kind": "equipment",
      "item": "변경_warrior",
      "name": "변경 철제 장검",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "price": 480,
      "rarity": "uncommon",
      "level": 16,
      "minLevel": 16,
      "limit": 1,
      "icon": "attack"
    },
    {
      "id": "shop_변경_archer",
      "kind": "equipment",
      "item": "변경_archer",
      "name": "변경 사냥꾼의 활",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "price": 480,
      "rarity": "uncommon",
      "level": 16,
      "minLevel": 16,
      "limit": 1,
      "icon": "bow"
    },
    {
      "id": "shop_변경_magician",
      "kind": "equipment",
      "item": "변경_magician",
      "name": "변경 견습 지팡이",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "price": 480,
      "rarity": "uncommon",
      "level": 16,
      "minLevel": 16,
      "limit": 1,
      "icon": "staff"
    },
    {
      "id": "shop_변경_guardian",
      "kind": "equipment",
      "item": "변경_guardian",
      "name": "변경 서약의 철퇴",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "price": 480,
      "rarity": "uncommon",
      "level": 16,
      "minLevel": 16,
      "limit": 1,
      "icon": "shield"
    },
    {
      "id": "shop_region_0_armor",
      "kind": "equipment",
      "item": "region_0_armor",
      "name": "변경 사슬갑옷",
      "description": "체력 / 이동 속도 감소.",
      "price": 420,
      "rarity": "uncommon",
      "level": 16,
      "minLevel": 16,
      "limit": 1,
      "icon": "shield"
    },
    {
      "id": "shop_region_0_accessory",
      "kind": "equipment",
      "item": "region_0_accessory",
      "name": "변경 사냥 반지",
      "description": "치명타 / 방어력 감소.",
      "price": 420,
      "rarity": "uncommon",
      "level": 16,
      "minLevel": 16,
      "limit": 1,
      "icon": "rank"
    },
    {
      "id": "shop_서리_warrior",
      "kind": "equipment",
      "item": "서리_warrior",
      "name": "서리 철제 장검",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "price": 920,
      "rarity": "uncommon",
      "level": 24,
      "minLevel": 24,
      "limit": 1,
      "icon": "attack"
    },
    {
      "id": "shop_서리_archer",
      "kind": "equipment",
      "item": "서리_archer",
      "name": "서리 사냥꾼의 활",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "price": 920,
      "rarity": "uncommon",
      "level": 24,
      "minLevel": 24,
      "limit": 1,
      "icon": "bow"
    },
    {
      "id": "shop_서리_magician",
      "kind": "equipment",
      "item": "서리_magician",
      "name": "서리 견습 지팡이",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "price": 920,
      "rarity": "uncommon",
      "level": 24,
      "minLevel": 24,
      "limit": 1,
      "icon": "staff"
    },
    {
      "id": "shop_서리_guardian",
      "kind": "equipment",
      "item": "서리_guardian",
      "name": "서리 서약의 철퇴",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "price": 920,
      "rarity": "uncommon",
      "level": 24,
      "minLevel": 24,
      "limit": 1,
      "icon": "shield"
    },
    {
      "id": "shop_region_1_armor",
      "kind": "equipment",
      "item": "region_1_armor",
      "name": "서리 사슬갑옷",
      "description": "체력 / 이동 속도 감소.",
      "price": 800,
      "rarity": "uncommon",
      "level": 24,
      "minLevel": 24,
      "limit": 1,
      "icon": "shield"
    },
    {
      "id": "shop_region_1_accessory",
      "kind": "equipment",
      "item": "region_1_accessory",
      "name": "서리 사냥 반지",
      "description": "치명타 / 방어력 감소.",
      "price": 800,
      "rarity": "uncommon",
      "level": 24,
      "minLevel": 24,
      "limit": 1,
      "icon": "rank"
    },
    {
      "id": "shop_사막_warrior",
      "kind": "equipment",
      "item": "사막_warrior",
      "name": "사막 철제 장검",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "price": 1360,
      "rarity": "uncommon",
      "level": 31,
      "minLevel": 31,
      "limit": 1,
      "icon": "attack"
    },
    {
      "id": "shop_사막_archer",
      "kind": "equipment",
      "item": "사막_archer",
      "name": "사막 사냥꾼의 활",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "price": 1360,
      "rarity": "uncommon",
      "level": 31,
      "minLevel": 31,
      "limit": 1,
      "icon": "bow"
    },
    {
      "id": "shop_사막_magician",
      "kind": "equipment",
      "item": "사막_magician",
      "name": "사막 견습 지팡이",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "price": 1360,
      "rarity": "uncommon",
      "level": 31,
      "minLevel": 31,
      "limit": 1,
      "icon": "staff"
    },
    {
      "id": "shop_사막_guardian",
      "kind": "equipment",
      "item": "사막_guardian",
      "name": "사막 서약의 철퇴",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "price": 1360,
      "rarity": "uncommon",
      "level": 31,
      "minLevel": 31,
      "limit": 1,
      "icon": "shield"
    },
    {
      "id": "shop_region_2_armor",
      "kind": "equipment",
      "item": "region_2_armor",
      "name": "사막 사슬갑옷",
      "description": "체력 / 이동 속도 감소.",
      "price": 1180,
      "rarity": "uncommon",
      "level": 31,
      "minLevel": 31,
      "limit": 1,
      "icon": "shield"
    },
    {
      "id": "shop_region_2_accessory",
      "kind": "equipment",
      "item": "region_2_accessory",
      "name": "사막 사냥 반지",
      "description": "치명타 / 방어력 감소.",
      "price": 1180,
      "rarity": "uncommon",
      "level": 31,
      "minLevel": 31,
      "limit": 1,
      "icon": "rank"
    },
    {
      "id": "shop_황혼_warrior",
      "kind": "equipment",
      "item": "황혼_warrior",
      "name": "황혼 철제 장검",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "price": 1800,
      "rarity": "uncommon",
      "level": 40,
      "minLevel": 40,
      "limit": 1,
      "icon": "attack"
    },
    {
      "id": "shop_황혼_archer",
      "kind": "equipment",
      "item": "황혼_archer",
      "name": "황혼 사냥꾼의 활",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "price": 1800,
      "rarity": "uncommon",
      "level": 40,
      "minLevel": 40,
      "limit": 1,
      "icon": "bow"
    },
    {
      "id": "shop_황혼_magician",
      "kind": "equipment",
      "item": "황혼_magician",
      "name": "황혼 견습 지팡이",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "price": 1800,
      "rarity": "uncommon",
      "level": 40,
      "minLevel": 40,
      "limit": 1,
      "icon": "staff"
    },
    {
      "id": "shop_황혼_guardian",
      "kind": "equipment",
      "item": "황혼_guardian",
      "name": "황혼 서약의 철퇴",
      "description": "높은 주력 공격력 / 최대 마력 -6%.",
      "price": 1800,
      "rarity": "uncommon",
      "level": 40,
      "minLevel": 40,
      "limit": 1,
      "icon": "shield"
    },
    {
      "id": "shop_region_3_armor",
      "kind": "equipment",
      "item": "region_3_armor",
      "name": "황혼 사슬갑옷",
      "description": "체력 / 이동 속도 감소.",
      "price": 1560,
      "rarity": "uncommon",
      "level": 40,
      "minLevel": 40,
      "limit": 1,
      "icon": "shield"
    },
    {
      "id": "shop_region_3_accessory",
      "kind": "equipment",
      "item": "region_3_accessory",
      "name": "황혼 사냥 반지",
      "description": "치명타 / 방어력 감소.",
      "price": 1560,
      "rarity": "uncommon",
      "level": 40,
      "minLevel": 40,
      "limit": 1,
      "icon": "rank"
    },
    {
      "id": "mat_moonstone",
      "kind": "material",
      "material": "moonstone",
      "name": "월광석",
      "price": 50,
      "amount": 1,
      "minLevel": 20,
      "icon": "signature",
      "description": "고급 제작 재료."
    },
    {
      "id": "mat_ember",
      "kind": "material",
      "material": "ember",
      "name": "불씨 핵",
      "price": 55,
      "amount": 1,
      "minLevel": 28,
      "icon": "signature",
      "description": "고급 제작 재료."
    }
  ],
  "blessings": [
    {
      "id": "valor",
      "name": "용기의 축복",
      "description": "평타 피해 +10%",
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.1
        }
      ],
      "duration": 600,
      "cost": 12
    },
    {
      "id": "wisdom",
      "name": "지혜의 축복",
      "description": "기술 피해 +10%",
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.1
        }
      ],
      "duration": 600,
      "cost": 12
    },
    {
      "id": "vigor",
      "name": "생명의 축복",
      "description": "최대 체력 +12%",
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.12
        }
      ],
      "duration": 600,
      "cost": 12
    }
  ],
  "inn": {
    "cost": 25,
    "name": "따뜻한 식사",
    "duration": 600,
    "stats": [
      {
        "stat": "hp",
        "op": "multiply",
        "value": 1.08
      },
      {
        "stat": "hpRegen",
        "op": "add",
        "value": 0.4
      }
    ],
    "description": "10분간 최대 체력 +8%, 초당 체력 회복 +0.4. 식사는 즉시 회복을 제공하지 않습니다.",
    "restCost": 20
  },
  "dungeonTiers": [
    {
      "id": 0,
      "name": "탐험",
      "levelBonus": 0,
      "reward": 1,
      "requiredClears": 0
    },
    {
      "id": 1,
      "name": "정예",
      "levelBonus": 3,
      "reward": 1.4,
      "requiredClears": 1
    },
    {
      "id": 2,
      "name": "영웅",
      "levelBonus": 6,
      "reward": 1.85,
      "requiredClears": 3
    },
    {
      "id": 3,
      "name": "악몽",
      "levelBonus": 10,
      "reward": 2.35,
      "requiredClears": 6
    },
    {
      "id": 4,
      "name": "전설",
      "levelBonus": 15,
      "reward": 2.9,
      "requiredClears": 10
    }
  ],
  "monsters": {
    "slime": {
      "name": "초원 슬라임",
      "sprite": "slime",
      "hp": 35,
      "attack": 12,
      "defense": 0,
      "speed": 1.3,
      "range": 0.75,
      "cooldown": 1.7,
      "windup": 0.5,
      "kind": "circle",
      "radius": 0.9,
      "xp": 8,
      "gold": [
        1,
        2
      ],
      "material": {
        "herb": 0.18
      },
      "size": 0.9,
      "element": "nature"
    },
    "goblin": {
      "name": "고블린",
      "sprite": "goblin",
      "hp": 54,
      "attack": 16,
      "defense": 1,
      "speed": 2,
      "range": 0.85,
      "cooldown": 1.55,
      "windup": 0.45,
      "kind": "circle",
      "radius": 1,
      "xp": 11,
      "gold": [
        1,
        3
      ],
      "material": {
        "ore": 0.32
      },
      "size": 1,
      "element": "physical"
    },
    "wolf": {
      "name": "회색 늑대",
      "sprite": "wolf",
      "hp": 62,
      "attack": 20,
      "defense": 1,
      "speed": 2.75,
      "range": 0.9,
      "cooldown": 1.65,
      "windup": 0.55,
      "kind": "line",
      "radius": 0.6,
      "length": 2.1,
      "xp": 13,
      "gold": [
        1,
        3
      ],
      "material": {
        "hide": 0.48
      },
      "size": 1.1,
      "dash": true,
      "element": "physical"
    },
    "boar": {
      "name": "숲 호그",
      "sprite": "boar",
      "hp": 88,
      "attack": 24,
      "defense": 2,
      "speed": 1.8,
      "range": 2.8,
      "cooldown": 2.6,
      "windup": 1,
      "kind": "line",
      "radius": 0.85,
      "length": 3.3,
      "xp": 17,
      "gold": [
        1,
        4
      ],
      "material": {
        "hide": 0.6
      },
      "size": 1.2,
      "dash": true,
      "element": "physical"
    },
    "lizard": {
      "name": "늪 리자드",
      "sprite": "lizard",
      "hp": 86,
      "attack": 26,
      "defense": 2,
      "speed": 2,
      "range": 3,
      "cooldown": 2.1,
      "windup": 0.8,
      "kind": "target",
      "radius": 1.05,
      "xp": 20,
      "gold": [
        2,
        4
      ],
      "material": {
        "crystal": 0.32
      },
      "size": 1.1,
      "element": "physical"
    },
    "goblin_guard": {
      "name": "봉인 고블린",
      "sprite": "goblin",
      "hp": 105,
      "attack": 28,
      "defense": 4,
      "speed": 1.8,
      "range": 1,
      "cooldown": 1.9,
      "windup": 0.65,
      "kind": "circle",
      "radius": 1.4,
      "xp": 28,
      "gold": [
        3,
        6
      ],
      "material": {
        "ore": 0.8
      },
      "size": 1.25,
      "elite": true,
      "element": "physical"
    },
    "golem": {
      "name": "광산 골렘",
      "sprite": "golem",
      "hp": 135,
      "attack": 31,
      "defense": 5,
      "speed": 1.2,
      "range": 1.4,
      "cooldown": 2.6,
      "windup": 1,
      "kind": "circle",
      "radius": 1.7,
      "xp": 32,
      "gold": [
        4,
        7
      ],
      "material": {
        "ore": 1
      },
      "size": 1.4,
      "element": "physical"
    },
    "lizard_shaman": {
      "name": "리자드 주술사",
      "sprite": "lizard",
      "hp": 128,
      "attack": 32,
      "defense": 3,
      "speed": 1.7,
      "range": 3.6,
      "cooldown": 2.8,
      "windup": 0.95,
      "kind": "target",
      "radius": 1.5,
      "xp": 37,
      "gold": [
        4,
        8
      ],
      "material": {
        "crystal": 1
      },
      "size": 1.3,
      "elite": true,
      "tint": "#9a8ca3",
      "element": "physical"
    },
    "wolf_king": {
      "name": "은빛 늑대왕",
      "sprite": "wolf",
      "hp": 780,
      "attack": 37,
      "defense": 4,
      "speed": 2.3,
      "range": 2.6,
      "xp": 100,
      "gold": [
        24,
        37
      ],
      "size": 2,
      "boss": true,
      "tint": "#ced2c3",
      "group": "wolf",
      "drop": "wolf_crown",
      "patterns": [
        {
          "name": "송곳니 휩쓸기",
          "kind": "circle",
          "radius": 1.9,
          "windup": 0.9,
          "cooldown": 2.3,
          "damage": 1
        },
        {
          "name": "늑대왕의 돌진",
          "kind": "line",
          "length": 5.8,
          "radius": 1,
          "windup": 1.2,
          "cooldown": 3,
          "damage": 1.25,
          "dash": true
        },
        {
          "name": "사냥의 울음",
          "kind": "target",
          "radius": 2,
          "windup": 1.2,
          "cooldown": 3,
          "damage": 0.9
        },
        {
          "name": "포위의 울음",
          "kind": "ring",
          "radius": 4.2,
          "windup": 1.3,
          "cooldown": 2.6,
          "damage": 1.05,
          "innerRadius": 1.3
        }
      ],
      "adds": [
        "wolf",
        "wolf"
      ],
      "element": "physical",
      "material": {
        "sigil": 0.8
      }
    },
    "mine_golem": {
      "name": "깨어난 광산군주",
      "sprite": "golem",
      "hp": 1200,
      "attack": 45,
      "defense": 7,
      "speed": 1.1,
      "range": 2.6,
      "xp": 160,
      "gold": [
        33,
        50
      ],
      "size": 2.25,
      "boss": true,
      "group": "mine",
      "drop": "golem_heart",
      "patterns": [
        {
          "name": "육중한 강타",
          "kind": "circle",
          "radius": 2.3,
          "windup": 1.1,
          "cooldown": 2.7,
          "damage": 1.15
        },
        {
          "name": "땅울림",
          "kind": "target",
          "radius": 2,
          "windup": 1.25,
          "cooldown": 2.7,
          "damage": 1
        },
        {
          "name": "균열의 길",
          "kind": "line",
          "radius": 1.1,
          "length": 6,
          "windup": 1.4,
          "cooldown": 3,
          "damage": 1.3
        },
        {
          "name": "채광 부채",
          "kind": "cone",
          "radius": 4.5,
          "windup": 1.4,
          "cooldown": 2.8,
          "damage": 1.15,
          "angle": 1.6
        }
      ],
      "adds": [
        "goblin",
        "goblin"
      ],
      "element": "physical",
      "material": {
        "sigil": 0.8
      }
    },
    "ancient_drake": {
      "name": "잿불의 원룡",
      "sprite": "drake",
      "hp": 1900,
      "attack": 55,
      "defense": 8,
      "speed": 1.6,
      "range": 4.1,
      "xp": 250,
      "gold": [
        49,
        75
      ],
      "size": 2,
      "boss": true,
      "group": "ruins",
      "drop": "drake_ember",
      "patterns": [
        {
          "name": "화염 숨결",
          "kind": "line",
          "length": 7,
          "radius": 1.4,
          "windup": 1.35,
          "cooldown": 3,
          "damage": 1.25
        },
        {
          "name": "불꽃 낙인",
          "kind": "target",
          "radius": 2.25,
          "windup": 1.2,
          "cooldown": 2.6,
          "damage": 1
        },
        {
          "name": "꼬리 휩쓸기",
          "kind": "circle",
          "radius": 2.9,
          "windup": 1.25,
          "cooldown": 3,
          "damage": 1.1
        },
        {
          "name": "연쇄 화염",
          "kind": "target",
          "radius": 1.8,
          "windup": 1.3,
          "cooldown": 2.7,
          "damage": 1.1,
          "bursts": 3,
          "interval": 0.6,
          "offsets": [
            [
              0,
              0
            ],
            [
              2,
              0
            ],
            [
              -2,
              0
            ]
          ]
        }
      ],
      "adds": [
        "lizard",
        "lizard"
      ],
      "element": "fire",
      "material": {
        "sigil": 0.8
      }
    },
    "goblin_captain": {
      "name": "황야의 고블린 대장",
      "sprite": "goblin",
      "hp": 175,
      "attack": 30,
      "defense": 1,
      "speed": 2,
      "range": 0.85,
      "cooldown": 1.55,
      "windup": 0.45,
      "kind": "circle",
      "radius": 1,
      "xp": 22,
      "gold": [
        7,
        12
      ],
      "material": {
        "ore": 0.32
      },
      "size": 1.4,
      "elite": true,
      "tint": "#b8a18a",
      "element": "physical"
    },
    "alpha_wolf": {
      "name": "흰갈기 우두머리",
      "sprite": "wolf",
      "hp": 210,
      "attack": 35,
      "defense": 1,
      "speed": 2.75,
      "range": 0.9,
      "cooldown": 1.65,
      "windup": 0.55,
      "kind": "line",
      "radius": 0.6,
      "length": 2.1,
      "xp": 26,
      "gold": [
        7,
        12
      ],
      "material": {
        "hide": 0.48
      },
      "size": 1.4,
      "dash": true,
      "elite": true,
      "tint": "#b8a18a",
      "element": "physical"
    },
    "lizard_chief": {
      "name": "비늘갑옷 추적자",
      "sprite": "lizard",
      "hp": 255,
      "attack": 42,
      "defense": 2,
      "speed": 2,
      "range": 3,
      "cooldown": 2.1,
      "windup": 0.8,
      "kind": "target",
      "radius": 1.05,
      "xp": 40,
      "gold": [
        7,
        12
      ],
      "material": {
        "crystal": 0.32
      },
      "size": 1.4,
      "elite": true,
      "tint": "#b8a18a",
      "element": "physical"
    },
    "moss_ent": {
      "name": "이끼나무 수호자",
      "sprite": "ent",
      "hp": 150,
      "attack": 24,
      "defense": 5,
      "speed": 1.2,
      "range": 1.4,
      "cooldown": 2.6,
      "windup": 1,
      "kind": "ring",
      "radius": 3,
      "xp": 38,
      "gold": [
        4,
        7
      ],
      "material": {
        "wood": 0.6
      },
      "size": 1.4,
      "innerRadius": 1.15,
      "tint": "#699d58",
      "element": "nature"
    },
    "cave_bat": {
      "name": "흡혈 박쥐",
      "sprite": "bat",
      "hp": 45,
      "attack": 18,
      "defense": 1,
      "speed": 3.1,
      "range": 0.9,
      "cooldown": 1.65,
      "windup": 0.55,
      "kind": "line",
      "radius": 0.6,
      "length": 2.8,
      "xp": 15,
      "gold": [
        1,
        3
      ],
      "material": {
        "hide": 0.32
      },
      "size": 0.85,
      "dash": true,
      "element": "physical"
    },
    "bone_soldier": {
      "name": "해골 보병",
      "sprite": "skeleton",
      "hp": 85,
      "attack": 24,
      "defense": 5,
      "speed": 2,
      "range": 0.85,
      "cooldown": 1.55,
      "windup": 0.45,
      "kind": "circle",
      "radius": 1,
      "xp": 24,
      "gold": [
        2,
        5
      ],
      "material": {
        "ore": 0.38
      },
      "size": 1,
      "element": "physical"
    },
    "venom_spider": {
      "name": "독니 거미",
      "sprite": "spider",
      "hp": 60,
      "attack": 22,
      "defense": 0,
      "speed": 2.1,
      "range": 3.4,
      "cooldown": 1.7,
      "windup": 0.9,
      "kind": "target",
      "radius": 1.25,
      "xp": 24,
      "gold": [
        2,
        4
      ],
      "material": {
        "herb": 0.4
      },
      "size": 0.9,
      "element": "nature"
    },
    "highland_orc": {
      "name": "고원 오크",
      "sprite": "orc",
      "hp": 95,
      "attack": 25,
      "defense": 3,
      "speed": 2,
      "range": 0.85,
      "cooldown": 2.1,
      "windup": 0.85,
      "kind": "cone",
      "radius": 2.2,
      "xp": 29,
      "gold": [
        3,
        6
      ],
      "material": {
        "hide": 0.45,
        "ore": 0.25
      },
      "size": 1,
      "angle": 1.3,
      "element": "physical"
    },
    "orc_shaman": {
      "name": "오크 불술사",
      "sprite": "orc",
      "hp": 90,
      "attack": 29,
      "defense": 3,
      "speed": 1.7,
      "range": 3.6,
      "cooldown": 2.8,
      "windup": 0.95,
      "kind": "target",
      "radius": 1.5,
      "xp": 33,
      "gold": [
        3,
        6
      ],
      "material": {
        "ember": 0.2,
        "crystal": 0.4
      },
      "size": 1.3,
      "elite": false,
      "tint": "#ca7c53",
      "element": "physical"
    },
    "stone_wyvern": {
      "name": "바위 와이번",
      "sprite": "drake",
      "hp": 115,
      "attack": 27,
      "defense": 1,
      "speed": 2.4,
      "range": 0.9,
      "cooldown": 1.65,
      "windup": 1.1,
      "kind": "line",
      "radius": 0.7,
      "length": 4,
      "xp": 36,
      "gold": [
        3,
        7
      ],
      "material": {
        "hide": 0.5
      },
      "size": 1.2,
      "dash": true,
      "element": "physical"
    },
    "frost_wolf": {
      "name": "서리 늑대",
      "sprite": "wolf",
      "hp": 95,
      "attack": 26,
      "defense": 1,
      "speed": 2.75,
      "range": 0.9,
      "cooldown": 1.65,
      "windup": 0.55,
      "kind": "line",
      "radius": 0.6,
      "length": 2.1,
      "xp": 31,
      "gold": [
        3,
        6
      ],
      "material": {
        "hide": 0.6
      },
      "size": 1.1,
      "dash": true,
      "tint": "#9fc7db",
      "element": "frost"
    },
    "ice_wraith": {
      "name": "빙결 망령",
      "sprite": "ghost",
      "hp": 90,
      "attack": 30,
      "defense": 3,
      "speed": 1.7,
      "range": 3.5,
      "cooldown": 2.8,
      "windup": 0.95,
      "kind": "ring",
      "radius": 3.8,
      "xp": 37,
      "gold": [
        4,
        7
      ],
      "material": {
        "moonstone": 0.32
      },
      "size": 1.3,
      "elite": false,
      "tint": "#87b7ce",
      "innerRadius": 1.4,
      "element": "frost"
    },
    "snow_golem": {
      "name": "설원 골렘",
      "sprite": "golem",
      "hp": 180,
      "attack": 28,
      "defense": 5,
      "speed": 1.2,
      "range": 1.4,
      "cooldown": 2.6,
      "windup": 1.3,
      "kind": "cone",
      "radius": 3.1,
      "xp": 44,
      "gold": [
        4,
        8
      ],
      "material": {
        "moonstone": 0.5,
        "ore": 0.3
      },
      "size": 1.4,
      "angle": 1.8,
      "tint": "#b8d4df",
      "element": "frost"
    },
    "sand_scorpion": {
      "name": "사막 전갈",
      "sprite": "scorpion",
      "hp": 100,
      "attack": 30,
      "defense": 1,
      "speed": 2.5,
      "range": 1.2,
      "cooldown": 1.65,
      "windup": 0.85,
      "kind": "line",
      "radius": 0.6,
      "length": 3.5,
      "xp": 37,
      "gold": [
        4,
        8
      ],
      "material": {
        "hide": 0.4,
        "ember": 0.22
      },
      "size": 1.1,
      "dash": true,
      "tint": "#b39a59",
      "element": "physical"
    },
    "dune_raider": {
      "name": "모래 약탈자",
      "sprite": "orc",
      "hp": 105,
      "attack": 32,
      "defense": 1,
      "speed": 2,
      "range": 0.85,
      "cooldown": 1.55,
      "windup": 0.75,
      "kind": "cone",
      "radius": 2.7,
      "xp": 40,
      "gold": [
        5,
        9
      ],
      "material": {
        "ore": 0.4
      },
      "size": 1,
      "angle": 1.4,
      "tint": "#bd8c60",
      "element": "physical"
    },
    "ember_drake": {
      "name": "불씨 비룡",
      "sprite": "drake",
      "hp": 135,
      "attack": 36,
      "defense": 3,
      "speed": 1.7,
      "range": 3.6,
      "cooldown": 2.8,
      "windup": 0.95,
      "kind": "target",
      "radius": 1.5,
      "xp": 48,
      "gold": [
        5,
        10
      ],
      "material": {
        "ember": 0.5
      },
      "size": 1.2,
      "elite": false,
      "tint": "#9a8ca3",
      "element": "fire"
    },
    "grave_knight": {
      "name": "묘지 기사",
      "sprite": "knight",
      "hp": 150,
      "attack": 31,
      "defense": 8,
      "speed": 2,
      "range": 0.85,
      "cooldown": 1.55,
      "windup": 1.1,
      "kind": "line",
      "radius": 0.7,
      "xp": 46,
      "gold": [
        4,
        9
      ],
      "material": {
        "ore": 0.4,
        "sigil": 0.09
      },
      "size": 1,
      "length": 4,
      "dash": true,
      "tint": "#938eae",
      "element": "arcane"
    },
    "curse_wraith": {
      "name": "저주 망령",
      "sprite": "ghost",
      "hp": 100,
      "attack": 35,
      "defense": 3,
      "speed": 1.7,
      "range": 4.1,
      "cooldown": 2.8,
      "windup": 0.95,
      "kind": "ring",
      "radius": 4.5,
      "xp": 47,
      "gold": [
        5,
        10
      ],
      "material": {
        "crystal": 0.6
      },
      "size": 1.3,
      "elite": false,
      "tint": "#9f7eaf",
      "innerRadius": 1.6,
      "element": "arcane"
    },
    "abyss_spider": {
      "name": "심연 거미",
      "sprite": "spider",
      "hp": 145,
      "attack": 36,
      "defense": 0,
      "speed": 2.1,
      "range": 3.4,
      "cooldown": 1.7,
      "windup": 1.15,
      "kind": "target",
      "radius": 1.7,
      "xp": 51,
      "gold": [
        6,
        11
      ],
      "material": {
        "herb": 0.45,
        "sigil": 0.08
      },
      "size": 0.9,
      "bursts": 3,
      "interval": 0.5,
      "offsets": [
        [
          0,
          0
        ],
        [
          2,
          0
        ],
        [
          -2,
          0
        ]
      ],
      "tint": "#7e689b",
      "element": "nature"
    },
    "dusk_sentinel": {
      "name": "황혼 근위병",
      "sprite": "knight",
      "hp": 180,
      "attack": 38,
      "defense": 10,
      "speed": 2,
      "range": 0.85,
      "cooldown": 1.55,
      "windup": 0.9,
      "kind": "cone",
      "radius": 3.2,
      "xp": 57,
      "gold": [
        6,
        12
      ],
      "material": {
        "ore": 0.5,
        "sigil": 0.12
      },
      "size": 1,
      "length": 4,
      "dash": false,
      "tint": "#b69664",
      "angle": 1.8,
      "element": "arcane"
    },
    "dusk_magus": {
      "name": "황혼 마도사",
      "sprite": "ghost",
      "hp": 145,
      "attack": 40,
      "defense": 3,
      "speed": 1.7,
      "range": 4.1,
      "cooldown": 2.8,
      "windup": 1.3,
      "kind": "target",
      "radius": 1.8,
      "xp": 59,
      "gold": [
        7,
        12
      ],
      "material": {
        "crystal": 0.55,
        "moonstone": 0.3
      },
      "size": 1.3,
      "elite": false,
      "tint": "#b686b1",
      "innerRadius": 1.6,
      "bursts": 3,
      "interval": 0.65,
      "offsets": [
        [
          0,
          0
        ],
        [
          2,
          2
        ],
        [
          -2,
          -2
        ]
      ],
      "element": "arcane"
    },
    "thorn_queen": {
      "name": "가시숲의 여왕",
      "sprite": "ent",
      "hp": 1450,
      "attack": 32,
      "defense": 8,
      "speed": 1.65,
      "range": 5.5,
      "xp": 448,
      "gold": [
        64,
        96
      ],
      "size": 2,
      "boss": true,
      "group": "highland",
      "drop": "highland_heart",
      "patterns": [
        {
          "name": "뿌리 감옥",
          "kind": "ring",
          "radius": 5,
          "windup": 1.4,
          "cooldown": 2.8,
          "damage": 1.15,
          "innerRadius": 1.8
        },
        {
          "name": "가시 부채",
          "kind": "cone",
          "radius": 5.2,
          "windup": 1.25,
          "cooldown": 2.5,
          "damage": 1.1,
          "angle": 1.3
        },
        {
          "name": "추적 씨앗",
          "kind": "target",
          "radius": 1.6,
          "windup": 1.2,
          "cooldown": 2.5,
          "damage": 1,
          "offsets": [
            [
              0,
              0
            ],
            [
              2,
              0
            ],
            [
              -2,
              0
            ]
          ],
          "interval": 0.55,
          "bursts": 3
        }
      ],
      "adds": [
        "venom_spider",
        "moss_ent"
      ],
      "phases": [
        {
          "threshold": 0.65,
          "adds": [
            "venom_spider",
            "moss_ent"
          ],
          "patterns": [
            {
              "name": "추적 씨앗",
              "kind": "target",
              "radius": 1.6,
              "windup": 1.2,
              "cooldown": 2.5,
              "damage": 1,
              "offsets": [
                [
                  0,
                  0
                ],
                [
                  2,
                  0
                ],
                [
                  -2,
                  0
                ]
              ],
              "interval": 0.55,
              "bursts": 3
            },
            {
              "name": "가시 부채",
              "kind": "cone",
              "radius": 5.2,
              "windup": 1.25,
              "cooldown": 2.5,
              "damage": 1.1,
              "angle": 1.3
            },
            {
              "name": "뿌리 감옥",
              "kind": "ring",
              "radius": 5,
              "windup": 1.4,
              "cooldown": 2.8,
              "damage": 1.15,
              "innerRadius": 1.8
            }
          ]
        },
        {
          "threshold": 0.3,
          "adds": [
            "venom_spider",
            "moss_ent"
          ],
          "patterns": [
            {
              "name": "뿌리 감옥",
              "kind": "ring",
              "radius": 5,
              "windup": 1.4,
              "cooldown": 2.8,
              "damage": 1.15,
              "innerRadius": 1.8
            },
            {
              "name": "가시 부채",
              "kind": "cone",
              "radius": 5.2,
              "windup": 1.25,
              "cooldown": 2.5,
              "damage": 1.1,
              "angle": 1.3
            },
            {
              "name": "추적 씨앗",
              "kind": "target",
              "radius": 1.6,
              "windup": 1.2,
              "cooldown": 2.5,
              "damage": 1,
              "offsets": [
                [
                  0,
                  0
                ],
                [
                  2,
                  0
                ],
                [
                  -2,
                  0
                ]
              ],
              "interval": 0.55,
              "bursts": 3
            },
            {
              "name": "뿌리 감옥",
              "kind": "ring",
              "radius": 5,
              "windup": 1.4,
              "cooldown": 2.8,
              "damage": 1.15,
              "innerRadius": 1.8
            }
          ]
        }
      ],
      "tint": "#79a56f",
      "element": "nature",
      "material": {
        "sigil": 0.8
      }
    },
    "frost_regent": {
      "name": "서리왕 이스렌",
      "sprite": "knight",
      "hp": 1850,
      "attack": 36,
      "defense": 8,
      "speed": 1.65,
      "range": 5.5,
      "xp": 464,
      "gold": [
        72,
        108
      ],
      "size": 2,
      "boss": true,
      "group": "frost",
      "drop": "frost_crest",
      "patterns": [
        {
          "name": "서리 파동",
          "kind": "ring",
          "radius": 6,
          "windup": 1.6,
          "cooldown": 3,
          "damage": 1.2,
          "innerRadius": 2
        },
        {
          "name": "얼음 십자",
          "kind": "line",
          "radius": 0.65,
          "windup": 1.45,
          "cooldown": 2.8,
          "damage": 1.1,
          "length": 9,
          "angles": [
            0,
            1.5708,
            3.1416,
            4.7124
          ]
        },
        {
          "name": "쇄빙 돌진",
          "kind": "line",
          "radius": 1,
          "windup": 1.2,
          "cooldown": 2.6,
          "damage": 1.2,
          "length": 7,
          "dash": true
        }
      ],
      "adds": [
        "ice_wraith",
        "frost_wolf"
      ],
      "phases": [
        {
          "threshold": 0.65,
          "adds": [
            "ice_wraith",
            "frost_wolf"
          ],
          "patterns": [
            {
              "name": "쇄빙 돌진",
              "kind": "line",
              "radius": 1,
              "windup": 1.2,
              "cooldown": 2.6,
              "damage": 1.2,
              "length": 7,
              "dash": true
            },
            {
              "name": "얼음 십자",
              "kind": "line",
              "radius": 0.65,
              "windup": 1.45,
              "cooldown": 2.8,
              "damage": 1.1,
              "length": 9,
              "angles": [
                0,
                1.5708,
                3.1416,
                4.7124
              ]
            },
            {
              "name": "서리 파동",
              "kind": "ring",
              "radius": 6,
              "windup": 1.6,
              "cooldown": 3,
              "damage": 1.2,
              "innerRadius": 2
            }
          ]
        },
        {
          "threshold": 0.3,
          "adds": [
            "ice_wraith",
            "frost_wolf"
          ],
          "patterns": [
            {
              "name": "서리 파동",
              "kind": "ring",
              "radius": 6,
              "windup": 1.6,
              "cooldown": 3,
              "damage": 1.2,
              "innerRadius": 2
            },
            {
              "name": "얼음 십자",
              "kind": "line",
              "radius": 0.65,
              "windup": 1.45,
              "cooldown": 2.8,
              "damage": 1.1,
              "length": 9,
              "angles": [
                0,
                1.5708,
                3.1416,
                4.7124
              ]
            },
            {
              "name": "쇄빙 돌진",
              "kind": "line",
              "radius": 1,
              "windup": 1.2,
              "cooldown": 2.6,
              "damage": 1.2,
              "length": 7,
              "dash": true
            },
            {
              "name": "서리 파동",
              "kind": "ring",
              "radius": 6,
              "windup": 1.6,
              "cooldown": 3,
              "damage": 1.2,
              "innerRadius": 2
            }
          ]
        }
      ],
      "tint": "#8aafce",
      "element": "frost",
      "material": {
        "sigil": 0.8
      }
    },
    "sun_scorpion": {
      "name": "태양을 삼킨 전갈",
      "sprite": "scorpion",
      "hp": 2100,
      "attack": 39,
      "defense": 8,
      "speed": 1.65,
      "range": 5.5,
      "xp": 476,
      "gold": [
        78,
        117
      ],
      "size": 2,
      "boss": true,
      "group": "sun",
      "drop": "sun_carapace",
      "patterns": [
        {
          "name": "모래 꼬리",
          "kind": "cone",
          "radius": 6,
          "windup": 1.25,
          "cooldown": 2.8,
          "damage": 1.25,
          "angle": 1.8
        },
        {
          "name": "불씨 폭격",
          "kind": "target",
          "radius": 1.9,
          "windup": 1.4,
          "cooldown": 2.8,
          "damage": 1,
          "bursts": 4,
          "interval": 0.45,
          "offsets": [
            [
              0,
              0
            ],
            [
              2,
              0
            ],
            [
              0,
              2
            ],
            [
              -2,
              -2
            ]
          ]
        },
        {
          "name": "열풍의 눈",
          "kind": "ring",
          "radius": 6.5,
          "windup": 1.6,
          "cooldown": 3,
          "damage": 1.1,
          "innerRadius": 1.8
        }
      ],
      "adds": [
        "sand_scorpion",
        "ember_drake"
      ],
      "phases": [
        {
          "threshold": 0.65,
          "adds": [
            "sand_scorpion",
            "ember_drake"
          ],
          "patterns": [
            {
              "name": "열풍의 눈",
              "kind": "ring",
              "radius": 6.5,
              "windup": 1.6,
              "cooldown": 3,
              "damage": 1.1,
              "innerRadius": 1.8
            },
            {
              "name": "불씨 폭격",
              "kind": "target",
              "radius": 1.9,
              "windup": 1.4,
              "cooldown": 2.8,
              "damage": 1,
              "bursts": 4,
              "interval": 0.45,
              "offsets": [
                [
                  0,
                  0
                ],
                [
                  2,
                  0
                ],
                [
                  0,
                  2
                ],
                [
                  -2,
                  -2
                ]
              ]
            },
            {
              "name": "모래 꼬리",
              "kind": "cone",
              "radius": 6,
              "windup": 1.25,
              "cooldown": 2.8,
              "damage": 1.25,
              "angle": 1.8
            }
          ]
        },
        {
          "threshold": 0.3,
          "adds": [
            "sand_scorpion",
            "ember_drake"
          ],
          "patterns": [
            {
              "name": "모래 꼬리",
              "kind": "cone",
              "radius": 6,
              "windup": 1.25,
              "cooldown": 2.8,
              "damage": 1.25,
              "angle": 1.8
            },
            {
              "name": "불씨 폭격",
              "kind": "target",
              "radius": 1.9,
              "windup": 1.4,
              "cooldown": 2.8,
              "damage": 1,
              "bursts": 4,
              "interval": 0.45,
              "offsets": [
                [
                  0,
                  0
                ],
                [
                  2,
                  0
                ],
                [
                  0,
                  2
                ],
                [
                  -2,
                  -2
                ]
              ]
            },
            {
              "name": "열풍의 눈",
              "kind": "ring",
              "radius": 6.5,
              "windup": 1.6,
              "cooldown": 3,
              "damage": 1.1,
              "innerRadius": 1.8
            },
            {
              "name": "모래 꼬리",
              "kind": "cone",
              "radius": 6,
              "windup": 1.25,
              "cooldown": 2.8,
              "damage": 1.25,
              "angle": 1.8
            }
          ]
        }
      ],
      "tint": "#c9a25c",
      "element": "fire",
      "material": {
        "sigil": 0.8
      }
    },
    "grave_marshal": {
      "name": "망자의 원수",
      "sprite": "skeleton",
      "hp": 2450,
      "attack": 42,
      "defense": 8,
      "speed": 1.65,
      "range": 5.5,
      "xp": 488,
      "gold": [
        84,
        126
      ],
      "size": 2,
      "boss": true,
      "group": "grave",
      "drop": "grave_seal",
      "patterns": [
        {
          "name": "사형 선고",
          "kind": "line",
          "radius": 1.1,
          "windup": 1.2,
          "cooldown": 2.6,
          "damage": 1.35,
          "length": 9
        },
        {
          "name": "망자의 행진",
          "kind": "cone",
          "radius": 6.5,
          "windup": 1.4,
          "cooldown": 2.8,
          "damage": 1.15,
          "angle": 1.4
        },
        {
          "name": "영혼 격류",
          "kind": "ring",
          "radius": 6.5,
          "windup": 1.6,
          "cooldown": 3,
          "damage": 1.2,
          "innerRadius": 2.2
        }
      ],
      "adds": [
        "grave_knight",
        "curse_wraith"
      ],
      "phases": [
        {
          "threshold": 0.65,
          "adds": [
            "grave_knight",
            "curse_wraith"
          ],
          "patterns": [
            {
              "name": "영혼 격류",
              "kind": "ring",
              "radius": 6.5,
              "windup": 1.6,
              "cooldown": 3,
              "damage": 1.2,
              "innerRadius": 2.2
            },
            {
              "name": "망자의 행진",
              "kind": "cone",
              "radius": 6.5,
              "windup": 1.4,
              "cooldown": 2.8,
              "damage": 1.15,
              "angle": 1.4
            },
            {
              "name": "사형 선고",
              "kind": "line",
              "radius": 1.1,
              "windup": 1.2,
              "cooldown": 2.6,
              "damage": 1.35,
              "length": 9
            }
          ]
        },
        {
          "threshold": 0.3,
          "adds": [
            "grave_knight",
            "curse_wraith"
          ],
          "patterns": [
            {
              "name": "사형 선고",
              "kind": "line",
              "radius": 1.1,
              "windup": 1.2,
              "cooldown": 2.6,
              "damage": 1.35,
              "length": 9
            },
            {
              "name": "망자의 행진",
              "kind": "cone",
              "radius": 6.5,
              "windup": 1.4,
              "cooldown": 2.8,
              "damage": 1.15,
              "angle": 1.4
            },
            {
              "name": "영혼 격류",
              "kind": "ring",
              "radius": 6.5,
              "windup": 1.6,
              "cooldown": 3,
              "damage": 1.2,
              "innerRadius": 2.2
            },
            {
              "name": "사형 선고",
              "kind": "line",
              "radius": 1.1,
              "windup": 1.2,
              "cooldown": 2.6,
              "damage": 1.35,
              "length": 9
            }
          ]
        }
      ],
      "tint": "#b5a4bd",
      "element": "arcane",
      "material": {
        "sigil": 0.8
      }
    },
    "eclipse_king": {
      "name": "황혼왕 발테르",
      "sprite": "knight",
      "hp": 3200,
      "attack": 46,
      "defense": 8,
      "speed": 1.65,
      "range": 5.5,
      "xp": 504,
      "gold": [
        92,
        138
      ],
      "size": 2,
      "boss": true,
      "group": "eclipse",
      "drop": "eclipse_crown",
      "patterns": [
        {
          "name": "왕의 심판",
          "kind": "cone",
          "radius": 7,
          "windup": 1.45,
          "cooldown": 2.8,
          "damage": 1.4,
          "angle": 1.6
        },
        {
          "name": "왕관의 궤도",
          "kind": "ring",
          "radius": 7.5,
          "windup": 1.7,
          "cooldown": 3,
          "damage": 1.25,
          "innerRadius": 2.3
        },
        {
          "name": "황혼 십자",
          "kind": "line",
          "radius": 1,
          "windup": 1.5,
          "cooldown": 2.8,
          "damage": 1.2,
          "length": 10,
          "angles": [
            0,
            1.5708,
            3.1416,
            4.7124
          ]
        },
        {
          "name": "별의 추락",
          "kind": "target",
          "radius": 2,
          "windup": 1.5,
          "cooldown": 3,
          "damage": 1.15,
          "bursts": 4,
          "interval": 0.5,
          "offsets": [
            [
              0,
              0
            ],
            [
              3,
              0
            ],
            [
              0,
              3
            ],
            [
              -3,
              -3
            ]
          ]
        }
      ],
      "adds": [
        "dusk_sentinel",
        "dusk_magus"
      ],
      "phases": [
        {
          "threshold": 0.65,
          "adds": [
            "dusk_sentinel",
            "dusk_magus"
          ],
          "patterns": [
            {
              "name": "별의 추락",
              "kind": "target",
              "radius": 2,
              "windup": 1.5,
              "cooldown": 3,
              "damage": 1.15,
              "bursts": 4,
              "interval": 0.5,
              "offsets": [
                [
                  0,
                  0
                ],
                [
                  3,
                  0
                ],
                [
                  0,
                  3
                ],
                [
                  -3,
                  -3
                ]
              ]
            },
            {
              "name": "황혼 십자",
              "kind": "line",
              "radius": 1,
              "windup": 1.5,
              "cooldown": 2.8,
              "damage": 1.2,
              "length": 10,
              "angles": [
                0,
                1.5708,
                3.1416,
                4.7124
              ]
            },
            {
              "name": "왕관의 궤도",
              "kind": "ring",
              "radius": 7.5,
              "windup": 1.7,
              "cooldown": 3,
              "damage": 1.25,
              "innerRadius": 2.3
            },
            {
              "name": "왕의 심판",
              "kind": "cone",
              "radius": 7,
              "windup": 1.45,
              "cooldown": 2.8,
              "damage": 1.4,
              "angle": 1.6
            }
          ]
        },
        {
          "threshold": 0.3,
          "adds": [
            "dusk_sentinel",
            "dusk_magus"
          ],
          "patterns": [
            {
              "name": "왕의 심판",
              "kind": "cone",
              "radius": 7,
              "windup": 1.45,
              "cooldown": 2.8,
              "damage": 1.4,
              "angle": 1.6
            },
            {
              "name": "왕관의 궤도",
              "kind": "ring",
              "radius": 7.5,
              "windup": 1.7,
              "cooldown": 3,
              "damage": 1.25,
              "innerRadius": 2.3
            },
            {
              "name": "황혼 십자",
              "kind": "line",
              "radius": 1,
              "windup": 1.5,
              "cooldown": 2.8,
              "damage": 1.2,
              "length": 10,
              "angles": [
                0,
                1.5708,
                3.1416,
                4.7124
              ]
            },
            {
              "name": "별의 추락",
              "kind": "target",
              "radius": 2,
              "windup": 1.5,
              "cooldown": 3,
              "damage": 1.15,
              "bursts": 4,
              "interval": 0.5,
              "offsets": [
                [
                  0,
                  0
                ],
                [
                  3,
                  0
                ],
                [
                  0,
                  3
                ],
                [
                  -3,
                  -3
                ]
              ]
            },
            {
              "name": "왕의 심판",
              "kind": "cone",
              "radius": 7,
              "windup": 1.45,
              "cooldown": 2.8,
              "damage": 1.4,
              "angle": 1.6
            }
          ]
        }
      ],
      "tint": "#d6b16c",
      "element": "arcane",
      "material": {
        "sigil": 0.8
      }
    },
    "highland_elite": {
      "name": "가시바람의 우두머리",
      "sprite": "orc",
      "hp": 190,
      "attack": 29,
      "defense": 3,
      "speed": 2,
      "range": 0.85,
      "cooldown": 2.1,
      "windup": 0.85,
      "kind": "cone",
      "radius": 2.2,
      "xp": 58,
      "gold": [
        3,
        6
      ],
      "material": {
        "hide": 0.45,
        "ore": 0.25
      },
      "size": 1.5,
      "angle": 1.3,
      "elite": true,
      "element": "physical"
    },
    "snowfield_elite": {
      "name": "백서리의 우두머리",
      "sprite": "wolf",
      "hp": 190,
      "attack": 30,
      "defense": 1,
      "speed": 2.75,
      "range": 0.9,
      "cooldown": 1.65,
      "windup": 0.55,
      "kind": "line",
      "radius": 0.6,
      "length": 2.1,
      "xp": 62,
      "gold": [
        3,
        6
      ],
      "material": {
        "hide": 0.6
      },
      "size": 1.5,
      "dash": true,
      "tint": "#9fc7db",
      "elite": true,
      "element": "frost"
    },
    "sunwaste_elite": {
      "name": "붉은의 우두머리",
      "sprite": "scorpion",
      "hp": 200,
      "attack": 34,
      "defense": 1,
      "speed": 2.5,
      "range": 1.2,
      "cooldown": 1.65,
      "windup": 0.85,
      "kind": "line",
      "radius": 0.6,
      "length": 3.5,
      "xp": 74,
      "gold": [
        4,
        8
      ],
      "material": {
        "hide": 0.4,
        "ember": 0.22
      },
      "size": 1.5,
      "dash": true,
      "tint": "#b39a59",
      "elite": true,
      "element": "fire"
    },
    "gravewood_elite": {
      "name": "잊힌의 우두머리",
      "sprite": "skeleton",
      "hp": 170,
      "attack": 28,
      "defense": 5,
      "speed": 2,
      "range": 0.85,
      "cooldown": 1.55,
      "windup": 0.45,
      "kind": "circle",
      "radius": 1,
      "xp": 48,
      "gold": [
        2,
        5
      ],
      "material": {
        "ore": 0.38
      },
      "size": 1.5,
      "elite": true,
      "element": "arcane"
    },
    "eclipse_plain_elite": {
      "name": "황혼의의 우두머리",
      "sprite": "knight",
      "hp": 360,
      "attack": 44,
      "defense": 10,
      "speed": 2,
      "range": 0.85,
      "cooldown": 1.55,
      "windup": 0.9,
      "kind": "cone",
      "radius": 3.2,
      "xp": 114,
      "gold": [
        6,
        12
      ],
      "material": {
        "ore": 0.5,
        "sigil": 0.12
      },
      "size": 1.5,
      "length": 4,
      "dash": false,
      "tint": "#b69664",
      "angle": 1.8,
      "elite": true,
      "element": "arcane"
    },
    "raid_verdant": {
      "name": "세계수의 심장",
      "sprite": "ent",
      "hp": 3480.0,
      "attack": 29,
      "defense": 8,
      "speed": 1.65,
      "range": 5.5,
      "xp": 448,
      "gold": [
        64,
        96
      ],
      "size": 2.4,
      "boss": true,
      "group": "raid_verdant",
      "drop": "highland_heart",
      "patterns": [
        {
          "name": "뿌리 감옥",
          "kind": "ring",
          "radius": 5,
          "windup": 1.4,
          "cooldown": 2.8,
          "damage": 1.15,
          "innerRadius": 1.8
        },
        {
          "name": "가시 부채",
          "kind": "cone",
          "radius": 5.2,
          "windup": 1.25,
          "cooldown": 2.5,
          "damage": 1.1,
          "angle": 1.3
        },
        {
          "name": "추적 씨앗",
          "kind": "target",
          "radius": 1.6,
          "windup": 1.2,
          "cooldown": 2.5,
          "damage": 1,
          "offsets": [
            [
              0,
              0
            ],
            [
              2,
              0
            ],
            [
              -2,
              0
            ]
          ],
          "interval": 0.55,
          "bursts": 3
        }
      ],
      "adds": [
        "venom_spider",
        "moss_ent"
      ],
      "phases": [
        {
          "threshold": 0.65,
          "adds": [
            "venom_spider",
            "moss_ent"
          ],
          "patterns": [
            {
              "name": "추적 씨앗",
              "kind": "target",
              "radius": 1.6,
              "windup": 1.2,
              "cooldown": 2.5,
              "damage": 1,
              "offsets": [
                [
                  0,
                  0
                ],
                [
                  2,
                  0
                ],
                [
                  -2,
                  0
                ]
              ],
              "interval": 0.55,
              "bursts": 3
            },
            {
              "name": "가시 부채",
              "kind": "cone",
              "radius": 5.2,
              "windup": 1.25,
              "cooldown": 2.5,
              "damage": 1.1,
              "angle": 1.3
            },
            {
              "name": "뿌리 감옥",
              "kind": "ring",
              "radius": 5,
              "windup": 1.4,
              "cooldown": 2.8,
              "damage": 1.15,
              "innerRadius": 1.8
            }
          ]
        },
        {
          "threshold": 0.3,
          "adds": [
            "venom_spider",
            "moss_ent"
          ],
          "patterns": [
            {
              "name": "뿌리 감옥",
              "kind": "ring",
              "radius": 5,
              "windup": 1.4,
              "cooldown": 2.8,
              "damage": 1.15,
              "innerRadius": 1.8
            },
            {
              "name": "가시 부채",
              "kind": "cone",
              "radius": 5.2,
              "windup": 1.25,
              "cooldown": 2.5,
              "damage": 1.1,
              "angle": 1.3
            },
            {
              "name": "추적 씨앗",
              "kind": "target",
              "radius": 1.6,
              "windup": 1.2,
              "cooldown": 2.5,
              "damage": 1,
              "offsets": [
                [
                  0,
                  0
                ],
                [
                  2,
                  0
                ],
                [
                  -2,
                  0
                ]
              ],
              "interval": 0.55,
              "bursts": 3
            },
            {
              "name": "뿌리 감옥",
              "kind": "ring",
              "radius": 5,
              "windup": 1.4,
              "cooldown": 2.8,
              "damage": 1.15,
              "innerRadius": 1.8
            }
          ]
        }
      ],
      "tint": "#79a56f",
      "element": "nature",
      "material": {
        "sigil": 0.8
      },
      "raid": true
    },
    "raid_glacial": {
      "name": "빙관의 파수꾼",
      "sprite": "knight",
      "hp": 4440.0,
      "attack": 32,
      "defense": 8,
      "speed": 1.65,
      "range": 5.5,
      "xp": 464,
      "gold": [
        72,
        108
      ],
      "size": 2.4,
      "boss": true,
      "group": "raid_glacial",
      "drop": "frost_crest",
      "patterns": [
        {
          "name": "서리 파동",
          "kind": "ring",
          "radius": 6,
          "windup": 1.6,
          "cooldown": 3,
          "damage": 1.2,
          "innerRadius": 2
        },
        {
          "name": "얼음 십자",
          "kind": "line",
          "radius": 0.65,
          "windup": 1.45,
          "cooldown": 2.8,
          "damage": 1.1,
          "length": 9,
          "angles": [
            0,
            1.5708,
            3.1416,
            4.7124
          ]
        },
        {
          "name": "쇄빙 돌진",
          "kind": "line",
          "radius": 1,
          "windup": 1.2,
          "cooldown": 2.6,
          "damage": 1.2,
          "length": 7,
          "dash": true
        }
      ],
      "adds": [
        "ice_wraith",
        "frost_wolf"
      ],
      "phases": [
        {
          "threshold": 0.65,
          "adds": [
            "ice_wraith",
            "frost_wolf"
          ],
          "patterns": [
            {
              "name": "쇄빙 돌진",
              "kind": "line",
              "radius": 1,
              "windup": 1.2,
              "cooldown": 2.6,
              "damage": 1.2,
              "length": 7,
              "dash": true
            },
            {
              "name": "얼음 십자",
              "kind": "line",
              "radius": 0.65,
              "windup": 1.45,
              "cooldown": 2.8,
              "damage": 1.1,
              "length": 9,
              "angles": [
                0,
                1.5708,
                3.1416,
                4.7124
              ]
            },
            {
              "name": "서리 파동",
              "kind": "ring",
              "radius": 6,
              "windup": 1.6,
              "cooldown": 3,
              "damage": 1.2,
              "innerRadius": 2
            }
          ]
        },
        {
          "threshold": 0.3,
          "adds": [
            "ice_wraith",
            "frost_wolf"
          ],
          "patterns": [
            {
              "name": "서리 파동",
              "kind": "ring",
              "radius": 6,
              "windup": 1.6,
              "cooldown": 3,
              "damage": 1.2,
              "innerRadius": 2
            },
            {
              "name": "얼음 십자",
              "kind": "line",
              "radius": 0.65,
              "windup": 1.45,
              "cooldown": 2.8,
              "damage": 1.1,
              "length": 9,
              "angles": [
                0,
                1.5708,
                3.1416,
                4.7124
              ]
            },
            {
              "name": "쇄빙 돌진",
              "kind": "line",
              "radius": 1,
              "windup": 1.2,
              "cooldown": 2.6,
              "damage": 1.2,
              "length": 7,
              "dash": true
            },
            {
              "name": "서리 파동",
              "kind": "ring",
              "radius": 6,
              "windup": 1.6,
              "cooldown": 3,
              "damage": 1.2,
              "innerRadius": 2
            }
          ]
        }
      ],
      "tint": "#8aafce",
      "element": "frost",
      "material": {
        "sigil": 0.8
      },
      "raid": true
    },
    "raid_astral": {
      "name": "왕관을 삼킨 별",
      "sprite": "knight",
      "hp": 7680.0,
      "attack": 41,
      "defense": 8,
      "speed": 1.65,
      "range": 5.5,
      "xp": 504,
      "gold": [
        92,
        138
      ],
      "size": 2.4,
      "boss": true,
      "group": "raid_astral",
      "drop": "eclipse_crown",
      "patterns": [
        {
          "name": "왕의 심판",
          "kind": "cone",
          "radius": 7,
          "windup": 1.45,
          "cooldown": 2.8,
          "damage": 1.4,
          "angle": 1.6
        },
        {
          "name": "왕관의 궤도",
          "kind": "ring",
          "radius": 7.5,
          "windup": 1.7,
          "cooldown": 3,
          "damage": 1.25,
          "innerRadius": 2.3
        },
        {
          "name": "황혼 십자",
          "kind": "line",
          "radius": 1,
          "windup": 1.5,
          "cooldown": 2.8,
          "damage": 1.2,
          "length": 10,
          "angles": [
            0,
            1.5708,
            3.1416,
            4.7124
          ]
        },
        {
          "name": "별의 추락",
          "kind": "target",
          "radius": 2,
          "windup": 1.5,
          "cooldown": 3,
          "damage": 1.15,
          "bursts": 4,
          "interval": 0.5,
          "offsets": [
            [
              0,
              0
            ],
            [
              3,
              0
            ],
            [
              0,
              3
            ],
            [
              -3,
              -3
            ]
          ]
        }
      ],
      "adds": [
        "dusk_sentinel",
        "dusk_magus"
      ],
      "phases": [
        {
          "threshold": 0.65,
          "adds": [
            "dusk_sentinel",
            "dusk_magus"
          ],
          "patterns": [
            {
              "name": "별의 추락",
              "kind": "target",
              "radius": 2,
              "windup": 1.5,
              "cooldown": 3,
              "damage": 1.15,
              "bursts": 4,
              "interval": 0.5,
              "offsets": [
                [
                  0,
                  0
                ],
                [
                  3,
                  0
                ],
                [
                  0,
                  3
                ],
                [
                  -3,
                  -3
                ]
              ]
            },
            {
              "name": "황혼 십자",
              "kind": "line",
              "radius": 1,
              "windup": 1.5,
              "cooldown": 2.8,
              "damage": 1.2,
              "length": 10,
              "angles": [
                0,
                1.5708,
                3.1416,
                4.7124
              ]
            },
            {
              "name": "왕관의 궤도",
              "kind": "ring",
              "radius": 7.5,
              "windup": 1.7,
              "cooldown": 3,
              "damage": 1.25,
              "innerRadius": 2.3
            },
            {
              "name": "왕의 심판",
              "kind": "cone",
              "radius": 7,
              "windup": 1.45,
              "cooldown": 2.8,
              "damage": 1.4,
              "angle": 1.6
            }
          ]
        },
        {
          "threshold": 0.3,
          "adds": [
            "dusk_sentinel",
            "dusk_magus"
          ],
          "patterns": [
            {
              "name": "왕의 심판",
              "kind": "cone",
              "radius": 7,
              "windup": 1.45,
              "cooldown": 2.8,
              "damage": 1.4,
              "angle": 1.6
            },
            {
              "name": "왕관의 궤도",
              "kind": "ring",
              "radius": 7.5,
              "windup": 1.7,
              "cooldown": 3,
              "damage": 1.25,
              "innerRadius": 2.3
            },
            {
              "name": "황혼 십자",
              "kind": "line",
              "radius": 1,
              "windup": 1.5,
              "cooldown": 2.8,
              "damage": 1.2,
              "length": 10,
              "angles": [
                0,
                1.5708,
                3.1416,
                4.7124
              ]
            },
            {
              "name": "별의 추락",
              "kind": "target",
              "radius": 2,
              "windup": 1.5,
              "cooldown": 3,
              "damage": 1.15,
              "bursts": 4,
              "interval": 0.5,
              "offsets": [
                [
                  0,
                  0
                ],
                [
                  3,
                  0
                ],
                [
                  0,
                  3
                ],
                [
                  -3,
                  -3
                ]
              ]
            },
            {
              "name": "왕의 심판",
              "kind": "cone",
              "radius": 7,
              "windup": 1.45,
              "cooldown": 2.8,
              "damage": 1.4,
              "angle": 1.6
            }
          ]
        }
      ],
      "tint": "#d6b16c",
      "element": "arcane",
      "material": {
        "sigil": 0.8
      },
      "raid": true
    },
    "world_highland": {
      "name": "대지의 방랑자",
      "sprite": "golem",
      "hp": 2400,
      "attack": 36,
      "defense": 7,
      "speed": 1.1,
      "range": 2.6,
      "xp": 160,
      "gold": [
        33,
        50
      ],
      "size": 2.2,
      "boss": true,
      "group": "world_highland",
      "drop": "golem_heart",
      "patterns": [
        {
          "name": "육중한 강타",
          "kind": "circle",
          "radius": 2.3,
          "windup": 1.1,
          "cooldown": 2.7,
          "damage": 1.15
        },
        {
          "name": "땅울림",
          "kind": "target",
          "radius": 2,
          "windup": 1.25,
          "cooldown": 2.7,
          "damage": 1
        },
        {
          "name": "균열의 길",
          "kind": "line",
          "radius": 1.1,
          "length": 6,
          "windup": 1.4,
          "cooldown": 3,
          "damage": 1.3
        },
        {
          "name": "채광 부채",
          "kind": "cone",
          "radius": 4.5,
          "windup": 1.4,
          "cooldown": 2.8,
          "damage": 1.15,
          "angle": 1.6
        }
      ],
      "adds": [
        "goblin",
        "goblin"
      ],
      "element": "physical",
      "material": {
        "sigil": 0.8
      },
      "worldBoss": true
    },
    "world_snowfield": {
      "name": "서리날개 고룡",
      "sprite": "drake",
      "hp": 3800,
      "attack": 44,
      "defense": 8,
      "speed": 1.6,
      "range": 4.1,
      "xp": 250,
      "gold": [
        49,
        75
      ],
      "size": 2.2,
      "boss": true,
      "group": "world_snowfield",
      "drop": "drake_ember",
      "patterns": [
        {
          "name": "화염 숨결",
          "kind": "line",
          "length": 7,
          "radius": 1.4,
          "windup": 1.35,
          "cooldown": 3,
          "damage": 1.25
        },
        {
          "name": "불꽃 낙인",
          "kind": "target",
          "radius": 2.25,
          "windup": 1.2,
          "cooldown": 2.6,
          "damage": 1
        },
        {
          "name": "꼬리 휩쓸기",
          "kind": "circle",
          "radius": 2.9,
          "windup": 1.25,
          "cooldown": 3,
          "damage": 1.1
        },
        {
          "name": "연쇄 화염",
          "kind": "target",
          "radius": 1.8,
          "windup": 1.3,
          "cooldown": 2.7,
          "damage": 1.1,
          "bursts": 3,
          "interval": 0.6,
          "offsets": [
            [
              0,
              0
            ],
            [
              2,
              0
            ],
            [
              -2,
              0
            ]
          ]
        }
      ],
      "adds": [
        "lizard",
        "lizard"
      ],
      "element": "fire",
      "material": {
        "sigil": 0.8
      },
      "worldBoss": true
    },
    "duelist": {
      "name": "결투 상대",
      "sprite": "warrior",
      "hp": 100,
      "attack": 1,
      "defense": 0,
      "speed": 3,
      "range": 1,
      "windup": 1,
      "cooldown": 1,
      "kind": "circle",
      "radius": 1,
      "xp": 0,
      "gold": [
        0,
        0
      ],
      "size": 1,
      "element": "physical",
      "ignoreCodex": true
    }
  },
  "quests": [
    {
      "id": "welcome",
      "name": "길드에 첫발을",
      "npc": "maren",
      "main": true,
      "description": "마렌과 대화하고 동쪽 초원길에서 슬라임을 처치해 첫 모험을 증명하세요.",
      "objectives": [
        {
          "kind": "interact",
          "target": "maren",
          "count": 1,
          "label": "마렌과 대화"
        },
        {
          "kind": "kill",
          "target": "slime",
          "count": 4,
          "label": "초원 슬라임 처치",
          "map": "meadow"
        },
        {
          "kind": "visit",
          "target": "meadow",
          "count": 1,
          "label": "초원길 방문",
          "map": "meadow"
        }
      ],
      "rewards": {
        "xp": 35,
        "gold": 35,
        "potions": 2
      }
    },
    {
      "id": "meadow",
      "name": "초원의 작은 위협",
      "npc": "maren",
      "main": true,
      "requires": "welcome",
      "description": "동쪽 초원길의 몬스터를 정리하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "slime",
          "count": 15,
          "label": "슬라임 처치",
          "map": "meadow"
        },
        {
          "kind": "kill",
          "target": "goblin",
          "count": 9,
          "label": "고블린 처치",
          "map": "meadow"
        },
        {
          "kind": "event",
          "target": "meadow_event",
          "count": 1,
          "label": "지역 야영지 토벌",
          "map": "meadow"
        }
      ],
      "rewards": {
        "xp": 102,
        "gold": 90,
        "materials": {
          "ore": 2
        },
        "potions": 2,
        "reputation": {
          "rangers": 12
        }
      }
    },
    {
      "id": "forest",
      "name": "숲길을 열어라",
      "npc": "maren",
      "main": true,
      "requires": "meadow",
      "description": "속삭임 숲의 늑대와 호그를 정리하면 숲 동굴의 봉인을 조사할 수 있습니다.",
      "objectives": [
        {
          "kind": "kill",
          "target": "wolf",
          "count": 12,
          "label": "늑대 처치",
          "map": "forest"
        },
        {
          "kind": "kill",
          "target": "boar",
          "count": 9,
          "label": "호그 처치",
          "map": "forest"
        },
        {
          "kind": "event",
          "target": "forest_event",
          "count": 1,
          "label": "지역 야영지 토벌",
          "map": "forest"
        }
      ],
      "rewards": {
        "xp": 165,
        "gold": 130,
        "materials": {
          "hide": 2,
          "ore": 2
        },
        "points": 1,
        "reputation": {
          "rangers": 12
        }
      }
    },
    {
      "id": "wolf",
      "name": "은빛 울음의 주인",
      "npc": "rhett",
      "main": true,
      "requires": "forest",
      "description": "숲 동굴의 봉인 수호자들을 쓰러뜨리고 늑대왕을 처치하세요. 은빛나루의 레트에게 보고하세요.",
      "objectives": [
        {
          "kind": "boss",
          "target": "wolf_king",
          "count": 2,
          "label": "은빛 늑대왕 처치",
          "map": "wolf_lair"
        },
        {
          "kind": "kill",
          "target": "goblin_guard",
          "count": 8,
          "label": "봉인 고블린 처치",
          "map": "forest_den",
          "group": "wolf"
        },
        {
          "kind": "tier",
          "target": "wolf:1",
          "count": 1,
          "label": "같은 던전 정예 난이도 격파",
          "map": "wolf_lair"
        }
      ],
      "rewards": {
        "xp": 255,
        "gold": 180,
        "points": 1,
        "materials": {
          "sigil": 2,
          "crystal": 5
        },
        "reputation": {
          "wardens": 15
        }
      }
    },
    {
      "id": "mine",
      "name": "폐광의 심장",
      "npc": "rhett",
      "main": true,
      "requires": "wolf",
      "description": "초원길 북쪽의 잊힌 폐광에서 깨어난 광산군주를 처치하세요.",
      "objectives": [
        {
          "kind": "boss",
          "target": "mine_golem",
          "count": 2,
          "label": "광산군주 처치",
          "map": "forge_chamber"
        },
        {
          "kind": "kill",
          "target": "golem",
          "count": 8,
          "label": "광산 골렘 처치",
          "map": "mine",
          "group": "mine"
        },
        {
          "kind": "tier",
          "target": "mine:1",
          "count": 1,
          "label": "같은 던전 정예 난이도 격파",
          "map": "forge_chamber"
        }
      ],
      "rewards": {
        "xp": 405,
        "gold": 240,
        "points": 1,
        "materials": {
          "sigil": 2,
          "crystal": 5
        },
        "reputation": {
          "wardens": 15
        }
      }
    },
    {
      "id": "drake",
      "name": "별의 봉인을 되찾아라",
      "npc": "rhett",
      "main": true,
      "requires": "mine",
      "description": "안개늪 너머 유적의 두 층을 돌파하고 정예 원룡을 격파하세요. 왕관의 흔적은 고원으로 이어집니다.",
      "objectives": [
        {
          "kind": "boss",
          "target": "ancient_drake",
          "count": 2,
          "label": "잿불의 원룡 처치",
          "map": "dragon_sanctum"
        },
        {
          "kind": "kill",
          "target": "lizard_shaman",
          "count": 8,
          "label": "리자드 주술사 처치",
          "map": "ruins",
          "group": "ruins"
        },
        {
          "kind": "tier",
          "target": "ruins:1",
          "count": 1,
          "label": "같은 던전 정예 난이도 격파",
          "map": "dragon_sanctum"
        }
      ],
      "rewards": {
        "xp": 660,
        "gold": 340,
        "points": 2,
        "materials": {
          "sigil": 2,
          "crystal": 5
        },
        "reputation": {
          "wardens": 15
        }
      }
    },
    {
      "id": "herbs",
      "name": "사제의 약초",
      "npc": "eliane",
      "requires": "welcome",
      "description": "초원에서 약초를 모아 오크우드 사제에게 가져가세요.",
      "objectives": [
        {
          "kind": "material",
          "target": "herb",
          "count": 12,
          "label": "약초 모으기",
          "map": "meadow",
          "consume": true
        },
        {
          "kind": "kill",
          "target": "slime",
          "count": 12,
          "label": "약초밭의 슬라임 처치",
          "map": "meadow"
        }
      ],
      "rewards": {
        "xp": 120,
        "gold": 70,
        "potions": 4,
        "reputation": {
          "arcanum": 8
        }
      }
    },
    {
      "id": "contract_slime",
      "name": "길드 의뢰 · 슬라임",
      "npc": "board",
      "requires": "meadow",
      "repeatable": true,
      "description": "초원 슬라임을 처치하고 게시판에서 보상을 받으세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "slime",
          "count": 24,
          "label": "슬라임 처치",
          "map": "meadow"
        }
      ],
      "rewards": {
        "xp": 105,
        "gold": 96,
        "materials": {
          "ore": 1
        },
        "reputation": {
          "rangers": 5
        }
      },
      "cooldown": 180
    },
    {
      "id": "contract_wolf",
      "name": "길드 의뢰 · 늑대",
      "npc": "board",
      "requires": "forest",
      "repeatable": true,
      "description": "숲의 늑대를 처치하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "wolf",
          "count": 21,
          "label": "늑대 처치",
          "map": "forest"
        }
      ],
      "rewards": {
        "xp": 150,
        "gold": 84,
        "materials": {
          "hide": 2
        },
        "reputation": {
          "rangers": 5
        }
      },
      "cooldown": 180
    },
    {
      "id": "contract_lizard",
      "name": "길드 의뢰 · 리자드",
      "npc": "board",
      "requires": "wolf",
      "repeatable": true,
      "description": "안개늪의 리자드를 정리하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "lizard",
          "count": 18,
          "label": "리자드 처치",
          "map": "marsh"
        }
      ],
      "rewards": {
        "xp": 195,
        "gold": 72,
        "materials": {
          "crystal": 1
        },
        "reputation": {
          "rangers": 5
        }
      },
      "cooldown": 180
    },
    {
      "id": "explore_meadow",
      "name": "초원의 숨은 흔적",
      "npc": "maren",
      "requires": "welcome",
      "description": "초원길의 오래된 풍차와 여명의 제단을 조사하세요.",
      "objectives": [
        {
          "kind": "discover",
          "target": "windmill",
          "count": 1,
          "label": "오래된 풍차 발견",
          "map": "meadow"
        },
        {
          "kind": "discover",
          "target": "dawn_shrine",
          "count": 1,
          "label": "여명의 제단 발견",
          "map": "meadow"
        },
        {
          "kind": "kill",
          "target": "goblin",
          "count": 15,
          "label": "고블린 처치",
          "map": "meadow"
        }
      ],
      "rewards": {
        "xp": 160,
        "gold": 90,
        "reputation": {
          "arcanum": 12
        }
      }
    },
    {
      "id": "explore_forest",
      "name": "숲의 잊힌 발자취",
      "npc": "rhett",
      "requires": "forest",
      "description": "숲의 망루와 바람의 성소를 찾아보세요.",
      "objectives": [
        {
          "kind": "discover",
          "target": "watchtower",
          "count": 1,
          "label": "사냥꾼의 망루 발견",
          "map": "forest"
        },
        {
          "kind": "discover",
          "target": "wind_shrine",
          "count": 1,
          "label": "바람의 성소 발견",
          "map": "forest"
        },
        {
          "kind": "kill",
          "target": "boar",
          "count": 12,
          "label": "숲 호그 처치",
          "map": "forest"
        }
      ],
      "rewards": {
        "xp": 160,
        "gold": 90,
        "reputation": {
          "arcanum": 12
        }
      }
    },
    {
      "id": "highland_survey",
      "name": "가시바람 고원 · 길을 잇다",
      "npc": "rhett",
      "requires": "drake",
      "description": "가시바람 고원 · 길을 잇다의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "visit",
          "target": "highland",
          "count": 1,
          "label": "새 지역 방문",
          "map": "highland"
        },
        {
          "kind": "discover",
          "target": "highland_poi_0",
          "count": 1,
          "label": "잊힌 망루 조사",
          "map": "highland"
        },
        {
          "kind": "kill",
          "target": "highland_orc",
          "count": 18,
          "label": "고원 오크 처치",
          "map": "highland"
        }
      ],
      "rewards": {
        "xp": 540,
        "gold": 210,
        "reputation": {
          "arcanum": 10
        }
      },
      "main": true,
      "chapter": 2,
      "minLevel": 14
    },
    {
      "id": "highland_hunt",
      "name": "가시바람 고원 · 전초기지",
      "npc": "rhett",
      "requires": "highland_survey",
      "description": "가시바람 고원 · 전초기지의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "moss_ent",
          "count": 18,
          "label": "이끼나무 수호자 처치",
          "map": "highland"
        },
        {
          "kind": "kill",
          "target": "stone_wyvern",
          "count": 12,
          "label": "바위 와이번 처치",
          "map": "highland"
        },
        {
          "kind": "event",
          "target": "highland_event_0",
          "count": 1,
          "label": "전초기지 토벌 완료",
          "map": "highland"
        },
        {
          "kind": "event",
          "target": "highland_event_1",
          "count": 1,
          "label": "봉인 방어전 완료",
          "map": "highland"
        }
      ],
      "rewards": {
        "xp": 688,
        "gold": 266,
        "reputation": {
          "rangers": 12
        }
      },
      "main": true,
      "chapter": 2
    },
    {
      "id": "highland_crown",
      "name": "가시숲의 여왕의 왕관",
      "npc": "rhett",
      "requires": "highland_hunt",
      "description": "가시숲의 여왕의 왕관의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "boss",
          "target": "thorn_queen",
          "count": 2,
          "label": "가시숲의 여왕 격파",
          "map": "highland_throne"
        },
        {
          "kind": "tier",
          "target": "highland:1",
          "count": 1,
          "label": "정예 난이도 왕관 탈환",
          "map": "highland_throne"
        },
        {
          "kind": "discover",
          "target": "highland_depth_1_record",
          "count": 1,
          "label": "1층 군주 기록 조사",
          "map": "highland_depth_1"
        },
        {
          "kind": "discover",
          "target": "highland_depth_2_record",
          "count": 1,
          "label": "2층 군주 기록 조사",
          "map": "highland_depth_2"
        }
      ],
      "rewards": {
        "xp": 1000,
        "gold": 358,
        "points": 1,
        "materials": {
          "sigil": 3,
          "moonstone": 3
        },
        "reputation": {
          "wardens": 18
        }
      },
      "main": true,
      "chapter": 2,
      "final": false,
      "choices": [
        {
          "id": "supply",
          "name": "변경 보급 지원",
          "description": "회복 물약 3개 / 사냥단 평판 +12",
          "rewards": {
            "potions": 3,
            "reputation": {
              "rangers": 12
            }
          }
        },
        {
          "id": "study",
          "name": "봉인 연구 지원",
          "description": "마력 물약 3개 / 학회 평판 +12",
          "rewards": {
            "supplies": {
              "mana": 3
            },
            "reputation": {
              "arcanum": 12
            }
          }
        },
        {
          "id": "forge",
          "name": "수호회 재건 지원",
          "description": "철광석 8개 / 수호회 평판 +12",
          "rewards": {
            "materials": {
              "ore": 8
            },
            "reputation": {
              "wardens": 12
            }
          }
        }
      ]
    },
    {
      "id": "highland_bounty_0",
      "name": "가시바람 고원 현상 · 고원 오크",
      "npc": "board",
      "requires": "highland_survey",
      "description": "가시바람 고원 현상 · 고원 오크의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "highland_orc",
          "count": 24,
          "label": "고원 오크 처치",
          "map": "highland"
        }
      ],
      "rewards": {
        "xp": 380,
        "gold": 180,
        "materials": {
          "sigil": 1
        },
        "reputation": {
          "rangers": 6
        }
      },
      "repeatable": true,
      "cooldown": 240,
      "minLevel": 14
    },
    {
      "id": "highland_bounty_1",
      "name": "가시바람 고원 현상 · 이끼나무 수호자",
      "npc": "board",
      "requires": "highland_survey",
      "description": "가시바람 고원 현상 · 이끼나무 수호자의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "moss_ent",
          "count": 24,
          "label": "이끼나무 수호자 처치",
          "map": "highland"
        }
      ],
      "rewards": {
        "xp": 380,
        "gold": 180,
        "materials": {
          "sigil": 1
        },
        "reputation": {
          "rangers": 6
        }
      },
      "repeatable": true,
      "cooldown": 240,
      "minLevel": 14
    },
    {
      "id": "highland_bounty_2",
      "name": "가시바람 고원 현상 · 독니 거미",
      "npc": "board",
      "requires": "highland_survey",
      "description": "가시바람 고원 현상 · 독니 거미의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "venom_spider",
          "count": 24,
          "label": "독니 거미 처치",
          "map": "highland"
        }
      ],
      "rewards": {
        "xp": 380,
        "gold": 180,
        "materials": {
          "sigil": 1
        },
        "reputation": {
          "rangers": 6
        }
      },
      "repeatable": true,
      "cooldown": 240,
      "minLevel": 14
    },
    {
      "id": "highland_bounty_3",
      "name": "가시바람 고원 현상 · 바위 와이번",
      "npc": "board",
      "requires": "highland_survey",
      "description": "가시바람 고원 현상 · 바위 와이번의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "stone_wyvern",
          "count": 24,
          "label": "바위 와이번 처치",
          "map": "highland"
        }
      ],
      "rewards": {
        "xp": 380,
        "gold": 180,
        "materials": {
          "sigil": 1
        },
        "reputation": {
          "rangers": 6
        }
      },
      "repeatable": true,
      "cooldown": 240,
      "minLevel": 14
    },
    {
      "id": "highland_relics",
      "name": "가시바람 고원 · 잊힌 유산",
      "npc": "rhett",
      "requires": "highland_survey",
      "description": "가시바람 고원 · 잊힌 유산의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "discover",
          "target": "highland_poi_1",
          "count": 1,
          "label": "지역 성소 조사",
          "map": "highland"
        },
        {
          "kind": "event",
          "target": "highland_event_1",
          "count": 2,
          "label": "봉인 방어전 완료",
          "map": "highland"
        },
        {
          "kind": "material",
          "target": "crystal",
          "count": 12,
          "label": "마력 결정 납품",
          "map": "highland",
          "consume": true
        }
      ],
      "rewards": {
        "xp": 560,
        "gold": 230,
        "reputation": {
          "arcanum": 18
        },
        "materials": {
          "sigil": 2
        }
      },
      "minLevel": 16
    },
    {
      "id": "frost_survey",
      "name": "백서리 설원 · 길을 잇다",
      "npc": "selene",
      "requires": "highland_crown",
      "description": "백서리 설원 · 길을 잇다의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "visit",
          "target": "snowfield",
          "count": 1,
          "label": "새 지역 방문",
          "map": "snowfield"
        },
        {
          "kind": "discover",
          "target": "snowfield_poi_0",
          "count": 1,
          "label": "잊힌 망루 조사",
          "map": "snowfield"
        },
        {
          "kind": "kill",
          "target": "frost_wolf",
          "count": 20,
          "label": "서리 늑대 처치",
          "map": "snowfield"
        }
      ],
      "rewards": {
        "xp": 630,
        "gold": 240,
        "reputation": {
          "arcanum": 10
        }
      },
      "main": true,
      "chapter": 3,
      "minLevel": 20
    },
    {
      "id": "frost_hunt",
      "name": "백서리 설원 · 전초기지",
      "npc": "selene",
      "requires": "frost_survey",
      "description": "백서리 설원 · 전초기지의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "ice_wraith",
          "count": 20,
          "label": "빙결 망령 처치",
          "map": "snowfield"
        },
        {
          "kind": "kill",
          "target": "snow_golem",
          "count": 14,
          "label": "설원 골렘 처치",
          "map": "snowfield"
        },
        {
          "kind": "event",
          "target": "snowfield_event_0",
          "count": 1,
          "label": "전초기지 토벌 완료",
          "map": "snowfield"
        },
        {
          "kind": "event",
          "target": "snowfield_event_1",
          "count": 1,
          "label": "봉인 방어전 완료",
          "map": "snowfield"
        }
      ],
      "rewards": {
        "xp": 796,
        "gold": 302,
        "reputation": {
          "rangers": 12
        }
      },
      "main": true,
      "chapter": 3
    },
    {
      "id": "frost_crown",
      "name": "서리왕 이스렌의 왕관",
      "npc": "selene",
      "requires": "frost_hunt",
      "description": "서리왕 이스렌의 왕관의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "boss",
          "target": "frost_regent",
          "count": 2,
          "label": "서리왕 이스렌 격파",
          "map": "frost_throne"
        },
        {
          "kind": "tier",
          "target": "frost:1",
          "count": 1,
          "label": "정예 난이도 왕관 탈환",
          "map": "frost_throne"
        },
        {
          "kind": "discover",
          "target": "frost_depth_1_record",
          "count": 1,
          "label": "1층 군주 기록 조사",
          "map": "frost_depth_1"
        },
        {
          "kind": "discover",
          "target": "frost_depth_2_record",
          "count": 1,
          "label": "2층 군주 기록 조사",
          "map": "frost_depth_2"
        }
      ],
      "rewards": {
        "xp": 1150,
        "gold": 406,
        "points": 1,
        "materials": {
          "sigil": 4,
          "moonstone": 3
        },
        "reputation": {
          "wardens": 18
        }
      },
      "main": true,
      "chapter": 3,
      "final": false,
      "choices": [
        {
          "id": "supply",
          "name": "변경 보급 지원",
          "description": "회복 물약 3개 / 사냥단 평판 +12",
          "rewards": {
            "potions": 3,
            "reputation": {
              "rangers": 12
            }
          }
        },
        {
          "id": "study",
          "name": "봉인 연구 지원",
          "description": "마력 물약 3개 / 학회 평판 +12",
          "rewards": {
            "supplies": {
              "mana": 3
            },
            "reputation": {
              "arcanum": 12
            }
          }
        },
        {
          "id": "forge",
          "name": "수호회 재건 지원",
          "description": "철광석 8개 / 수호회 평판 +12",
          "rewards": {
            "materials": {
              "ore": 8
            },
            "reputation": {
              "wardens": 12
            }
          }
        }
      ]
    },
    {
      "id": "snowfield_bounty_0",
      "name": "백서리 설원 현상 · 서리 늑대",
      "npc": "board",
      "requires": "frost_survey",
      "description": "백서리 설원 현상 · 서리 늑대의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "frost_wolf",
          "count": 27,
          "label": "서리 늑대 처치",
          "map": "snowfield"
        }
      ],
      "rewards": {
        "xp": 440,
        "gold": 210,
        "materials": {
          "sigil": 1
        },
        "reputation": {
          "rangers": 6
        }
      },
      "repeatable": true,
      "cooldown": 240,
      "minLevel": 20
    },
    {
      "id": "snowfield_bounty_1",
      "name": "백서리 설원 현상 · 빙결 망령",
      "npc": "board",
      "requires": "frost_survey",
      "description": "백서리 설원 현상 · 빙결 망령의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "ice_wraith",
          "count": 27,
          "label": "빙결 망령 처치",
          "map": "snowfield"
        }
      ],
      "rewards": {
        "xp": 440,
        "gold": 210,
        "materials": {
          "sigil": 1
        },
        "reputation": {
          "rangers": 6
        }
      },
      "repeatable": true,
      "cooldown": 240,
      "minLevel": 20
    },
    {
      "id": "snowfield_bounty_2",
      "name": "백서리 설원 현상 · 설원 골렘",
      "npc": "board",
      "requires": "frost_survey",
      "description": "백서리 설원 현상 · 설원 골렘의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "snow_golem",
          "count": 27,
          "label": "설원 골렘 처치",
          "map": "snowfield"
        }
      ],
      "rewards": {
        "xp": 440,
        "gold": 210,
        "materials": {
          "sigil": 1
        },
        "reputation": {
          "rangers": 6
        }
      },
      "repeatable": true,
      "cooldown": 240,
      "minLevel": 20
    },
    {
      "id": "snowfield_relics",
      "name": "백서리 설원 · 잊힌 유산",
      "npc": "selene",
      "requires": "frost_survey",
      "description": "백서리 설원 · 잊힌 유산의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "discover",
          "target": "snowfield_poi_1",
          "count": 1,
          "label": "지역 성소 조사",
          "map": "snowfield"
        },
        {
          "kind": "event",
          "target": "snowfield_event_1",
          "count": 2,
          "label": "봉인 방어전 완료",
          "map": "snowfield"
        },
        {
          "kind": "material",
          "target": "crystal",
          "count": 14,
          "label": "마력 결정 납품",
          "map": "snowfield",
          "consume": true
        }
      ],
      "rewards": {
        "xp": 620,
        "gold": 260,
        "reputation": {
          "arcanum": 18
        },
        "materials": {
          "sigil": 2
        }
      },
      "minLevel": 22
    },
    {
      "id": "sun_survey",
      "name": "붉은 해 사막 · 길을 잇다",
      "npc": "selene",
      "requires": "frost_crown",
      "description": "붉은 해 사막 · 길을 잇다의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "visit",
          "target": "sunwaste",
          "count": 1,
          "label": "새 지역 방문",
          "map": "sunwaste"
        },
        {
          "kind": "discover",
          "target": "sunwaste_poi_0",
          "count": 1,
          "label": "잊힌 망루 조사",
          "map": "sunwaste"
        },
        {
          "kind": "kill",
          "target": "sand_scorpion",
          "count": 22,
          "label": "사막 전갈 처치",
          "map": "sunwaste"
        }
      ],
      "rewards": {
        "xp": 720,
        "gold": 270,
        "reputation": {
          "arcanum": 10
        }
      },
      "main": true,
      "chapter": 4,
      "minLevel": 26
    },
    {
      "id": "sun_hunt",
      "name": "붉은 해 사막 · 전초기지",
      "npc": "selene",
      "requires": "sun_survey",
      "description": "붉은 해 사막 · 전초기지의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "dune_raider",
          "count": 22,
          "label": "모래 약탈자 처치",
          "map": "sunwaste"
        },
        {
          "kind": "kill",
          "target": "ember_drake",
          "count": 16,
          "label": "불씨 비룡 처치",
          "map": "sunwaste"
        },
        {
          "kind": "event",
          "target": "sunwaste_event_0",
          "count": 1,
          "label": "전초기지 토벌 완료",
          "map": "sunwaste"
        },
        {
          "kind": "event",
          "target": "sunwaste_event_1",
          "count": 1,
          "label": "봉인 방어전 완료",
          "map": "sunwaste"
        }
      ],
      "rewards": {
        "xp": 904,
        "gold": 338,
        "reputation": {
          "rangers": 12
        }
      },
      "main": true,
      "chapter": 4
    },
    {
      "id": "sun_crown",
      "name": "태양을 삼킨 전갈의 왕관",
      "npc": "selene",
      "requires": "sun_hunt",
      "description": "태양을 삼킨 전갈의 왕관의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "boss",
          "target": "sun_scorpion",
          "count": 2,
          "label": "태양을 삼킨 전갈 격파",
          "map": "sun_throne"
        },
        {
          "kind": "tier",
          "target": "sun:1",
          "count": 1,
          "label": "정예 난이도 왕관 탈환",
          "map": "sun_throne"
        },
        {
          "kind": "discover",
          "target": "sun_depth_1_record",
          "count": 1,
          "label": "1층 군주 기록 조사",
          "map": "sun_depth_1"
        },
        {
          "kind": "discover",
          "target": "sun_depth_2_record",
          "count": 1,
          "label": "2층 군주 기록 조사",
          "map": "sun_depth_2"
        }
      ],
      "rewards": {
        "xp": 1300,
        "gold": 454,
        "points": 1,
        "materials": {
          "sigil": 5,
          "moonstone": 3
        },
        "reputation": {
          "wardens": 18
        }
      },
      "main": true,
      "chapter": 4,
      "final": false,
      "choices": [
        {
          "id": "supply",
          "name": "변경 보급 지원",
          "description": "회복 물약 3개 / 사냥단 평판 +12",
          "rewards": {
            "potions": 3,
            "reputation": {
              "rangers": 12
            }
          }
        },
        {
          "id": "study",
          "name": "봉인 연구 지원",
          "description": "마력 물약 3개 / 학회 평판 +12",
          "rewards": {
            "supplies": {
              "mana": 3
            },
            "reputation": {
              "arcanum": 12
            }
          }
        },
        {
          "id": "forge",
          "name": "수호회 재건 지원",
          "description": "철광석 8개 / 수호회 평판 +12",
          "rewards": {
            "materials": {
              "ore": 8
            },
            "reputation": {
              "wardens": 12
            }
          }
        }
      ]
    },
    {
      "id": "sunwaste_bounty_0",
      "name": "붉은 해 사막 현상 · 사막 전갈",
      "npc": "board",
      "requires": "sun_survey",
      "description": "붉은 해 사막 현상 · 사막 전갈의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "sand_scorpion",
          "count": 30,
          "label": "사막 전갈 처치",
          "map": "sunwaste"
        }
      ],
      "rewards": {
        "xp": 500,
        "gold": 240,
        "materials": {
          "sigil": 1
        },
        "reputation": {
          "rangers": 6
        }
      },
      "repeatable": true,
      "cooldown": 240,
      "minLevel": 26
    },
    {
      "id": "sunwaste_bounty_1",
      "name": "붉은 해 사막 현상 · 모래 약탈자",
      "npc": "board",
      "requires": "sun_survey",
      "description": "붉은 해 사막 현상 · 모래 약탈자의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "dune_raider",
          "count": 30,
          "label": "모래 약탈자 처치",
          "map": "sunwaste"
        }
      ],
      "rewards": {
        "xp": 500,
        "gold": 240,
        "materials": {
          "sigil": 1
        },
        "reputation": {
          "rangers": 6
        }
      },
      "repeatable": true,
      "cooldown": 240,
      "minLevel": 26
    },
    {
      "id": "sunwaste_bounty_2",
      "name": "붉은 해 사막 현상 · 불씨 비룡",
      "npc": "board",
      "requires": "sun_survey",
      "description": "붉은 해 사막 현상 · 불씨 비룡의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "ember_drake",
          "count": 30,
          "label": "불씨 비룡 처치",
          "map": "sunwaste"
        }
      ],
      "rewards": {
        "xp": 500,
        "gold": 240,
        "materials": {
          "sigil": 1
        },
        "reputation": {
          "rangers": 6
        }
      },
      "repeatable": true,
      "cooldown": 240,
      "minLevel": 26
    },
    {
      "id": "sunwaste_relics",
      "name": "붉은 해 사막 · 잊힌 유산",
      "npc": "selene",
      "requires": "sun_survey",
      "description": "붉은 해 사막 · 잊힌 유산의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "discover",
          "target": "sunwaste_poi_1",
          "count": 1,
          "label": "지역 성소 조사",
          "map": "sunwaste"
        },
        {
          "kind": "event",
          "target": "sunwaste_event_1",
          "count": 2,
          "label": "봉인 방어전 완료",
          "map": "sunwaste"
        },
        {
          "kind": "material",
          "target": "crystal",
          "count": 16,
          "label": "마력 결정 납품",
          "map": "sunwaste",
          "consume": true
        }
      ],
      "rewards": {
        "xp": 680,
        "gold": 290,
        "reputation": {
          "arcanum": 18
        },
        "materials": {
          "sigil": 2
        }
      },
      "minLevel": 28
    },
    {
      "id": "grave_survey",
      "name": "잊힌 왕의 묘역 · 길을 잇다",
      "npc": "darius",
      "requires": "sun_crown",
      "description": "잊힌 왕의 묘역 · 길을 잇다의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "visit",
          "target": "gravewood",
          "count": 1,
          "label": "새 지역 방문",
          "map": "gravewood"
        },
        {
          "kind": "discover",
          "target": "gravewood_poi_0",
          "count": 1,
          "label": "잊힌 망루 조사",
          "map": "gravewood"
        },
        {
          "kind": "kill",
          "target": "bone_soldier",
          "count": 24,
          "label": "해골 보병 처치",
          "map": "gravewood"
        }
      ],
      "rewards": {
        "xp": 810,
        "gold": 300,
        "reputation": {
          "arcanum": 10
        }
      },
      "main": true,
      "chapter": 5,
      "minLevel": 32
    },
    {
      "id": "grave_hunt",
      "name": "잊힌 왕의 묘역 · 전초기지",
      "npc": "darius",
      "requires": "grave_survey",
      "description": "잊힌 왕의 묘역 · 전초기지의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "grave_knight",
          "count": 24,
          "label": "묘지 기사 처치",
          "map": "gravewood"
        },
        {
          "kind": "kill",
          "target": "curse_wraith",
          "count": 18,
          "label": "저주 망령 처치",
          "map": "gravewood"
        },
        {
          "kind": "event",
          "target": "gravewood_event_0",
          "count": 1,
          "label": "전초기지 토벌 완료",
          "map": "gravewood"
        },
        {
          "kind": "event",
          "target": "gravewood_event_1",
          "count": 1,
          "label": "봉인 방어전 완료",
          "map": "gravewood"
        }
      ],
      "rewards": {
        "xp": 1012,
        "gold": 374,
        "reputation": {
          "rangers": 12
        }
      },
      "main": true,
      "chapter": 5
    },
    {
      "id": "grave_crown",
      "name": "망자의 원수의 왕관",
      "npc": "darius",
      "requires": "grave_hunt",
      "description": "망자의 원수의 왕관의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "boss",
          "target": "grave_marshal",
          "count": 2,
          "label": "망자의 원수 격파",
          "map": "grave_throne"
        },
        {
          "kind": "tier",
          "target": "grave:1",
          "count": 1,
          "label": "정예 난이도 왕관 탈환",
          "map": "grave_throne"
        },
        {
          "kind": "discover",
          "target": "grave_depth_1_record",
          "count": 1,
          "label": "1층 군주 기록 조사",
          "map": "grave_depth_1"
        },
        {
          "kind": "discover",
          "target": "grave_depth_2_record",
          "count": 1,
          "label": "2층 군주 기록 조사",
          "map": "grave_depth_2"
        }
      ],
      "rewards": {
        "xp": 1450,
        "gold": 502,
        "points": 1,
        "materials": {
          "sigil": 6,
          "moonstone": 3
        },
        "reputation": {
          "wardens": 18
        }
      },
      "main": true,
      "chapter": 5,
      "final": false,
      "choices": [
        {
          "id": "supply",
          "name": "변경 보급 지원",
          "description": "회복 물약 3개 / 사냥단 평판 +12",
          "rewards": {
            "potions": 3,
            "reputation": {
              "rangers": 12
            }
          }
        },
        {
          "id": "study",
          "name": "봉인 연구 지원",
          "description": "마력 물약 3개 / 학회 평판 +12",
          "rewards": {
            "supplies": {
              "mana": 3
            },
            "reputation": {
              "arcanum": 12
            }
          }
        },
        {
          "id": "forge",
          "name": "수호회 재건 지원",
          "description": "철광석 8개 / 수호회 평판 +12",
          "rewards": {
            "materials": {
              "ore": 8
            },
            "reputation": {
              "wardens": 12
            }
          }
        }
      ]
    },
    {
      "id": "gravewood_bounty_0",
      "name": "잊힌 왕의 묘역 현상 · 해골 보병",
      "npc": "board",
      "requires": "grave_survey",
      "description": "잊힌 왕의 묘역 현상 · 해골 보병의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "bone_soldier",
          "count": 33,
          "label": "해골 보병 처치",
          "map": "gravewood"
        }
      ],
      "rewards": {
        "xp": 560,
        "gold": 270,
        "materials": {
          "sigil": 1
        },
        "reputation": {
          "rangers": 6
        }
      },
      "repeatable": true,
      "cooldown": 240,
      "minLevel": 32
    },
    {
      "id": "gravewood_bounty_1",
      "name": "잊힌 왕의 묘역 현상 · 묘지 기사",
      "npc": "board",
      "requires": "grave_survey",
      "description": "잊힌 왕의 묘역 현상 · 묘지 기사의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "grave_knight",
          "count": 33,
          "label": "묘지 기사 처치",
          "map": "gravewood"
        }
      ],
      "rewards": {
        "xp": 560,
        "gold": 270,
        "materials": {
          "sigil": 1
        },
        "reputation": {
          "rangers": 6
        }
      },
      "repeatable": true,
      "cooldown": 240,
      "minLevel": 32
    },
    {
      "id": "gravewood_bounty_2",
      "name": "잊힌 왕의 묘역 현상 · 저주 망령",
      "npc": "board",
      "requires": "grave_survey",
      "description": "잊힌 왕의 묘역 현상 · 저주 망령의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "curse_wraith",
          "count": 33,
          "label": "저주 망령 처치",
          "map": "gravewood"
        }
      ],
      "rewards": {
        "xp": 560,
        "gold": 270,
        "materials": {
          "sigil": 1
        },
        "reputation": {
          "rangers": 6
        }
      },
      "repeatable": true,
      "cooldown": 240,
      "minLevel": 32
    },
    {
      "id": "gravewood_relics",
      "name": "잊힌 왕의 묘역 · 잊힌 유산",
      "npc": "darius",
      "requires": "grave_survey",
      "description": "잊힌 왕의 묘역 · 잊힌 유산의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "discover",
          "target": "gravewood_poi_1",
          "count": 1,
          "label": "지역 성소 조사",
          "map": "gravewood"
        },
        {
          "kind": "event",
          "target": "gravewood_event_1",
          "count": 2,
          "label": "봉인 방어전 완료",
          "map": "gravewood"
        },
        {
          "kind": "material",
          "target": "crystal",
          "count": 18,
          "label": "마력 결정 납품",
          "map": "gravewood",
          "consume": true
        }
      ],
      "rewards": {
        "xp": 740,
        "gold": 320,
        "reputation": {
          "arcanum": 18
        },
        "materials": {
          "sigil": 2
        }
      },
      "minLevel": 34
    },
    {
      "id": "eclipse_survey",
      "name": "황혼의 국경 · 길을 잇다",
      "npc": "darius",
      "requires": "grave_crown",
      "description": "황혼의 국경 · 길을 잇다의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "visit",
          "target": "eclipse_plain",
          "count": 1,
          "label": "새 지역 방문",
          "map": "eclipse_plain"
        },
        {
          "kind": "discover",
          "target": "eclipse_plain_poi_0",
          "count": 1,
          "label": "잊힌 망루 조사",
          "map": "eclipse_plain"
        },
        {
          "kind": "kill",
          "target": "dusk_sentinel",
          "count": 26,
          "label": "황혼 근위병 처치",
          "map": "eclipse_plain"
        }
      ],
      "rewards": {
        "xp": 900,
        "gold": 330,
        "reputation": {
          "arcanum": 10
        }
      },
      "main": true,
      "chapter": 6,
      "minLevel": 38
    },
    {
      "id": "eclipse_hunt",
      "name": "황혼의 국경 · 전초기지",
      "npc": "darius",
      "requires": "eclipse_survey",
      "description": "황혼의 국경 · 전초기지의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "dusk_magus",
          "count": 26,
          "label": "황혼 마도사 처치",
          "map": "eclipse_plain"
        },
        {
          "kind": "kill",
          "target": "abyss_spider",
          "count": 20,
          "label": "심연 거미 처치",
          "map": "eclipse_plain"
        },
        {
          "kind": "event",
          "target": "eclipse_plain_event_0",
          "count": 1,
          "label": "전초기지 토벌 완료",
          "map": "eclipse_plain"
        },
        {
          "kind": "event",
          "target": "eclipse_plain_event_1",
          "count": 1,
          "label": "봉인 방어전 완료",
          "map": "eclipse_plain"
        }
      ],
      "rewards": {
        "xp": 1120,
        "gold": 410,
        "reputation": {
          "rangers": 12
        }
      },
      "main": true,
      "chapter": 6
    },
    {
      "id": "eclipse_crown",
      "name": "황혼왕 발테르의 왕관",
      "npc": "darius",
      "requires": "eclipse_hunt",
      "description": "황혼왕 발테르의 왕관의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "boss",
          "target": "eclipse_king",
          "count": 2,
          "label": "황혼왕 발테르 격파",
          "map": "eclipse_throne"
        },
        {
          "kind": "tier",
          "target": "eclipse:1",
          "count": 1,
          "label": "정예 난이도 왕관 탈환",
          "map": "eclipse_throne"
        },
        {
          "kind": "discover",
          "target": "eclipse_depth_1_record",
          "count": 1,
          "label": "1층 군주 기록 조사",
          "map": "eclipse_depth_1"
        },
        {
          "kind": "discover",
          "target": "eclipse_depth_2_record",
          "count": 1,
          "label": "2층 군주 기록 조사",
          "map": "eclipse_depth_2"
        }
      ],
      "rewards": {
        "xp": 1600,
        "gold": 550,
        "points": 1,
        "materials": {
          "sigil": 7,
          "moonstone": 3
        },
        "reputation": {
          "wardens": 18
        }
      },
      "main": true,
      "chapter": 6,
      "final": true,
      "choices": [
        {
          "id": "supply",
          "name": "변경 보급 지원",
          "description": "회복 물약 3개 / 사냥단 평판 +12",
          "rewards": {
            "potions": 3,
            "reputation": {
              "rangers": 12
            }
          }
        },
        {
          "id": "study",
          "name": "봉인 연구 지원",
          "description": "마력 물약 3개 / 학회 평판 +12",
          "rewards": {
            "supplies": {
              "mana": 3
            },
            "reputation": {
              "arcanum": 12
            }
          }
        },
        {
          "id": "forge",
          "name": "수호회 재건 지원",
          "description": "철광석 8개 / 수호회 평판 +12",
          "rewards": {
            "materials": {
              "ore": 8
            },
            "reputation": {
              "wardens": 12
            }
          }
        }
      ]
    },
    {
      "id": "eclipse_plain_bounty_0",
      "name": "황혼의 국경 현상 · 황혼 근위병",
      "npc": "board",
      "requires": "eclipse_survey",
      "description": "황혼의 국경 현상 · 황혼 근위병의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "dusk_sentinel",
          "count": 36,
          "label": "황혼 근위병 처치",
          "map": "eclipse_plain"
        }
      ],
      "rewards": {
        "xp": 620,
        "gold": 300,
        "materials": {
          "sigil": 1
        },
        "reputation": {
          "rangers": 6
        }
      },
      "repeatable": true,
      "cooldown": 240,
      "minLevel": 38
    },
    {
      "id": "eclipse_plain_bounty_1",
      "name": "황혼의 국경 현상 · 황혼 마도사",
      "npc": "board",
      "requires": "eclipse_survey",
      "description": "황혼의 국경 현상 · 황혼 마도사의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "dusk_magus",
          "count": 36,
          "label": "황혼 마도사 처치",
          "map": "eclipse_plain"
        }
      ],
      "rewards": {
        "xp": 620,
        "gold": 300,
        "materials": {
          "sigil": 1
        },
        "reputation": {
          "rangers": 6
        }
      },
      "repeatable": true,
      "cooldown": 240,
      "minLevel": 38
    },
    {
      "id": "eclipse_plain_bounty_2",
      "name": "황혼의 국경 현상 · 심연 거미",
      "npc": "board",
      "requires": "eclipse_survey",
      "description": "황혼의 국경 현상 · 심연 거미의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "abyss_spider",
          "count": 36,
          "label": "심연 거미 처치",
          "map": "eclipse_plain"
        }
      ],
      "rewards": {
        "xp": 620,
        "gold": 300,
        "materials": {
          "sigil": 1
        },
        "reputation": {
          "rangers": 6
        }
      },
      "repeatable": true,
      "cooldown": 240,
      "minLevel": 38
    },
    {
      "id": "eclipse_plain_relics",
      "name": "황혼의 국경 · 잊힌 유산",
      "npc": "darius",
      "requires": "eclipse_survey",
      "description": "황혼의 국경 · 잊힌 유산의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "discover",
          "target": "eclipse_plain_poi_1",
          "count": 1,
          "label": "지역 성소 조사",
          "map": "eclipse_plain"
        },
        {
          "kind": "event",
          "target": "eclipse_plain_event_1",
          "count": 2,
          "label": "봉인 방어전 완료",
          "map": "eclipse_plain"
        },
        {
          "kind": "material",
          "target": "crystal",
          "count": 20,
          "label": "마력 결정 납품",
          "map": "eclipse_plain",
          "consume": true
        }
      ],
      "rewards": {
        "xp": 800,
        "gold": 350,
        "reputation": {
          "arcanum": 18
        },
        "materials": {
          "sigil": 2
        }
      },
      "minLevel": 40
    },
    {
      "id": "companion_lyra",
      "name": "동료의 맹약 · 리라",
      "npc": "lyra_npc",
      "requires": "forest",
      "description": "동료의 부탁을 해결하면 함께 모험할 수 있습니다.",
      "objectives": [
        {
          "kind": "kill",
          "target": "wolf",
          "count": 24,
          "label": "회색 늑대 처치",
          "map": "forest"
        },
        {
          "kind": "event",
          "target": "forest_event",
          "count": 2,
          "label": "지역 사건 해결",
          "map": "forest"
        }
      ],
      "rewards": {
        "xp": 500,
        "gold": 150,
        "companion": "lyra"
      }
    },
    {
      "id": "companion_brann",
      "name": "동료의 맹약 · 브란",
      "npc": "brann_npc",
      "requires": "highland_hunt",
      "description": "동료의 부탁을 해결하면 함께 모험할 수 있습니다.",
      "objectives": [
        {
          "kind": "kill",
          "target": "highland_orc",
          "count": 32,
          "label": "고원 오크 처치",
          "map": "highland"
        },
        {
          "kind": "event",
          "target": "highland_event_1",
          "count": 2,
          "label": "지역 사건 해결",
          "map": "highland"
        }
      ],
      "rewards": {
        "xp": 500,
        "gold": 150,
        "companion": "brann"
      }
    },
    {
      "id": "companion_eris",
      "name": "동료의 맹약 · 에리스",
      "npc": "eris_npc",
      "requires": "sun_hunt",
      "description": "동료의 부탁을 해결하면 함께 모험할 수 있습니다.",
      "objectives": [
        {
          "kind": "kill",
          "target": "ember_drake",
          "count": 32,
          "label": "불씨 비룡 처치",
          "map": "sunwaste"
        },
        {
          "kind": "event",
          "target": "sunwaste_event_1",
          "count": 2,
          "label": "지역 사건 해결",
          "map": "sunwaste"
        }
      ],
      "rewards": {
        "xp": 500,
        "gold": 150,
        "companion": "eris"
      }
    },
    {
      "id": "trial_bronze",
      "name": "청동 연전 정복",
      "npc": "board",
      "requires": "wolf",
      "description": "청동 연전 정복의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "trial",
          "target": "bronze",
          "count": 3,
          "label": "연전 완주",
          "map": "guild_arena"
        }
      ],
      "rewards": {
        "xp": 800,
        "gold": 250,
        "materials": {
          "sigil": 4
        },
        "reputation": {
          "wardens": 15
        }
      },
      "minLevel": 10
    },
    {
      "id": "trial_silver",
      "name": "은빛 연전 정복",
      "npc": "board",
      "requires": "frost_hunt",
      "description": "은빛 연전 정복의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "trial",
          "target": "silver",
          "count": 3,
          "label": "연전 완주",
          "map": "guild_arena"
        }
      ],
      "rewards": {
        "xp": 1600,
        "gold": 450,
        "materials": {
          "sigil": 7
        },
        "reputation": {
          "wardens": 15
        }
      },
      "minLevel": 24
    },
    {
      "id": "trial_gold",
      "name": "왕관 연전 정복",
      "npc": "board",
      "requires": "eclipse_hunt",
      "description": "왕관 연전 정복의 목표를 달성하고 의뢰인에게 보고하세요.",
      "objectives": [
        {
          "kind": "trial",
          "target": "gold",
          "count": 3,
          "label": "연전 완주",
          "map": "guild_arena"
        }
      ],
      "rewards": {
        "xp": 2400,
        "gold": 650,
        "materials": {
          "sigil": 10
        },
        "reputation": {
          "wardens": 15
        }
      },
      "minLevel": 40
    },
    {
      "id": "highland_contract",
      "name": "현상 의뢰 · 고원 오크",
      "npc": "board",
      "requires": "highland_survey",
      "repeatable": true,
      "minLevel": 14,
      "cooldown": 180,
      "description": "수주 이후 처치만 집계합니다. 게시판에서 반복 보급과 평판을 확보하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "highland_orc",
          "count": 30,
          "label": "고원 오크 처치",
          "map": "highland"
        },
        {
          "kind": "event",
          "target": "highland_event_0",
          "count": 1,
          "label": "전초기지 토벌 완료",
          "map": "highland"
        }
      ],
      "rewards": {
        "xp": 542,
        "gold": 180,
        "potions": 2,
        "materials": {
          "sigil": 1
        },
        "reputation": {
          "rangers": 8
        }
      }
    },
    {
      "id": "snowfield_contract",
      "name": "현상 의뢰 · 서리 늑대",
      "npc": "board",
      "requires": "frost_survey",
      "repeatable": true,
      "minLevel": 20,
      "cooldown": 180,
      "description": "수주 이후 처치만 집계합니다. 게시판에서 반복 보급과 평판을 확보하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "frost_wolf",
          "count": 30,
          "label": "서리 늑대 처치",
          "map": "snowfield"
        },
        {
          "kind": "event",
          "target": "snowfield_event_0",
          "count": 1,
          "label": "전초기지 토벌 완료",
          "map": "snowfield"
        }
      ],
      "rewards": {
        "xp": 614,
        "gold": 210,
        "potions": 2,
        "materials": {
          "sigil": 1
        },
        "reputation": {
          "rangers": 8
        }
      }
    },
    {
      "id": "sunwaste_contract",
      "name": "현상 의뢰 · 사막 전갈",
      "npc": "board",
      "requires": "sun_survey",
      "repeatable": true,
      "minLevel": 26,
      "cooldown": 180,
      "description": "수주 이후 처치만 집계합니다. 게시판에서 반복 보급과 평판을 확보하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "sand_scorpion",
          "count": 30,
          "label": "사막 전갈 처치",
          "map": "sunwaste"
        },
        {
          "kind": "event",
          "target": "sunwaste_event_0",
          "count": 1,
          "label": "전초기지 토벌 완료",
          "map": "sunwaste"
        }
      ],
      "rewards": {
        "xp": 686,
        "gold": 240,
        "potions": 2,
        "materials": {
          "sigil": 1
        },
        "reputation": {
          "rangers": 8
        }
      }
    },
    {
      "id": "gravewood_contract",
      "name": "현상 의뢰 · 묘지 기사",
      "npc": "board",
      "requires": "grave_survey",
      "repeatable": true,
      "minLevel": 32,
      "cooldown": 180,
      "description": "수주 이후 처치만 집계합니다. 게시판에서 반복 보급과 평판을 확보하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "grave_knight",
          "count": 30,
          "label": "묘지 기사 처치",
          "map": "gravewood"
        },
        {
          "kind": "event",
          "target": "gravewood_event_0",
          "count": 1,
          "label": "전초기지 토벌 완료",
          "map": "gravewood"
        }
      ],
      "rewards": {
        "xp": 758,
        "gold": 270,
        "potions": 2,
        "materials": {
          "sigil": 1
        },
        "reputation": {
          "rangers": 8
        }
      }
    },
    {
      "id": "eclipse_plain_contract",
      "name": "현상 의뢰 · 황혼 근위병",
      "npc": "board",
      "requires": "eclipse_survey",
      "repeatable": true,
      "minLevel": 38,
      "cooldown": 180,
      "description": "수주 이후 처치만 집계합니다. 게시판에서 반복 보급과 평판을 확보하세요.",
      "objectives": [
        {
          "kind": "kill",
          "target": "dusk_sentinel",
          "count": 30,
          "label": "황혼 근위병 처치",
          "map": "eclipse_plain"
        },
        {
          "kind": "event",
          "target": "eclipse_plain_event_0",
          "count": 1,
          "label": "전초기지 토벌 완료",
          "map": "eclipse_plain"
        }
      ],
      "rewards": {
        "xp": 830,
        "gold": 300,
        "potions": 2,
        "materials": {
          "sigil": 1
        },
        "reputation": {
          "rangers": 8
        }
      }
    }
  ],
  "npcTypes": {
    "guild": {
      "name": "모험가 길드",
      "icon": "quest",
      "sprite": "villager"
    },
    "smith": {
      "name": "대장간",
      "icon": "anvil",
      "sprite": "smith"
    },
    "merchant": {
      "name": "잡화점",
      "icon": "bag",
      "sprite": "villager"
    },
    "inn": {
      "name": "여관",
      "icon": "home",
      "sprite": "villager"
    },
    "temple": {
      "name": "성당",
      "icon": "heart",
      "sprite": "healer"
    },
    "board": {
      "name": "의뢰 게시판",
      "icon": "scroll",
      "sprite": "board",
      "scale": 3
    },
    "waystone": {
      "name": "여행의 돌",
      "icon": "portal",
      "sprite": "waystone",
      "scale": 3
    },
    "arena": {
      "name": "길드 연전",
      "icon": "fight",
      "sprite": "warrior"
    },
    "companion": {
      "name": "동료",
      "icon": "heart",
      "sprite": "villager"
    }
  },
  "terrain": {
    ".": {
      "name": "grass",
      "walk": true,
      "color": "grass"
    },
    ",": {
      "name": "grass",
      "walk": true,
      "color": "grassAlt"
    },
    ":": {
      "name": "path",
      "walk": true,
      "color": "path"
    },
    "~": {
      "name": "water",
      "walk": false,
      "color": "water"
    },
    "#": {
      "name": "rock",
      "walk": false,
      "color": "stoneDark"
    },
    "t": {
      "name": "tree",
      "walk": false,
      "color": "grassAlt"
    },
    "_": {
      "name": "stone",
      "walk": true,
      "color": "stone"
    },
    "m": {
      "name": "mud",
      "walk": true,
      "color": "mud"
    },
    "s": {
      "name": "sand",
      "walk": true,
      "color": "sand"
    },
    "f": {
      "name": "floor",
      "walk": true,
      "color": "floor"
    },
    "l": {
      "name": "lava",
      "walk": false,
      "color": "lava"
    },
    "n": {
      "name": "snow",
      "walk": true,
      "color": "snow"
    },
    "i": {
      "name": "ice",
      "walk": false,
      "color": "ice"
    },
    "a": {
      "name": "ash",
      "walk": true,
      "color": "ash"
    },
    "v": {
      "name": "dusk",
      "walk": true,
      "color": "dusk"
    },
    "r": {
      "name": "sand",
      "walk": true,
      "color": "redSand"
    }
  },
  "maps": {
    "oakwood": {
      "id": "oakwood",
      "name": "오크우드",
      "kind": "town",
      "width": 36,
      "height": 26,
      "tiles": [
        "tttttttttttttttttttttttttttttttttttt",
        "t..................................t",
        "t................::................t",
        "t...______....______.....______....t",
        "t...______....______.....______....t",
        "t...______....______.....______....t",
        "t...______....______.....______....t",
        "t................::................t",
        "t................::................t",
        "t..................................t",
        "t..................................t",
        "t..................................t",
        "t.::::::::::...:...::::::::::::::..:",
        "t.::::::::::...:...::::::::::::::..t",
        "t................::................t",
        "t................::................t",
        "t................::................t",
        "t....__..._......::......__..._....t",
        "t....______......::......______....t",
        "t....______......::......______....t",
        "t....______......::......______....t",
        "t................::................t",
        "t................::................t",
        "t................::................t",
        "t..................................t",
        "tttttttttttttttttttttttttttttttttttt"
      ],
      "level": 1,
      "music": "town",
      "spawn": [
        17.5,
        12.5
      ],
      "npcs": [
        {
          "id": "maren",
          "name": "마렌",
          "service": "guild",
          "x": 17.5,
          "y": 10.5
        },
        {
          "id": "owen",
          "name": "오언",
          "service": "smith",
          "x": 7.5,
          "y": 9.5
        },
        {
          "id": "lina",
          "name": "리나",
          "service": "merchant",
          "x": 28.5,
          "y": 9.5
        },
        {
          "id": "rowan",
          "name": "로웬",
          "service": "inn",
          "x": 8.5,
          "y": 16
        },
        {
          "id": "eliane",
          "name": "엘리안",
          "service": "temple",
          "x": 28,
          "y": 16
        },
        {
          "id": "board",
          "name": "의뢰 게시판",
          "service": "board",
          "x": 21,
          "y": 10
        },
        {
          "id": "stone_oak",
          "name": "여행의 돌",
          "service": "waystone",
          "x": 13,
          "y": 13
        },
        {
          "id": "arena_oak",
          "name": "연전 관리인",
          "service": "arena",
          "x": 24,
          "y": 14
        }
      ],
      "portals": [
        {
          "id": "east",
          "name": "초원길",
          "x": 34,
          "y": 12,
          "to": "meadow",
          "spawn": [
            2.5,
            14.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        }
      ],
      "spawns": [],
      "props": [
        {
          "type": "house",
          "x": 4,
          "y": 3,
          "width": 6,
          "height": 4,
          "roof": "roof",
          "solid": true,
          "name": "대장간"
        },
        {
          "type": "house",
          "x": 14,
          "y": 3,
          "width": 6,
          "height": 4,
          "roof": "roofDark",
          "solid": true,
          "name": "길드"
        },
        {
          "type": "house",
          "x": 25,
          "y": 3,
          "width": 6,
          "height": 4,
          "roof": "roof",
          "solid": true,
          "name": "잡화점"
        },
        {
          "type": "house",
          "x": 5,
          "y": 17,
          "width": 6,
          "height": 4,
          "roof": "roofDark",
          "solid": true,
          "name": "여관"
        },
        {
          "type": "house",
          "x": 25,
          "y": 17,
          "width": 6,
          "height": 4,
          "roof": "roof",
          "solid": true,
          "name": "성당"
        },
        {
          "type": "fountain",
          "x": 17,
          "y": 17,
          "width": 2,
          "height": 2,
          "solid": true
        }
      ],
      "resources": [],
      "chests": [],
      "waypoint": [
        13,
        13
      ],
      "discoveries": [],
      "events": [],
      "mechanisms": [],
      "zones": []
    },
    "meadow": {
      "id": "meadow",
      "name": "새벽 초원길",
      "kind": "field",
      "width": 44,
      "height": 30,
      "tiles": [
        "tttttttttttttttttttttttttttttttttttttttttttt",
        "t..........................................t",
        "t.t,.....t...,t..,t..t..,,t,.......t.tt..t.t",
        "t..........................................t",
        "t.tt......,,..t....,..,.ttt..,::.,.t.,,..t.t",
        "t.............................::...........t",
        "t.............................::...........t",
        "t.............................::...........t",
        "t.............................::...........t",
        "t.............................::...........t",
        "t.t,..,......t,..,,,.,t......t::...::::::..:",
        "t.............................::...::::::..t",
        "t.............................::...........t",
        "t.............................::...........t",
        "t......:::::::::::::::::::::::::::::::::::::",
        "t......::::::::::::::::::::::::::::::::::::t",
        "t..........................................t",
        "t..........................................t",
        "t.,t.,...t,...t....t.,........t..........,.t",
        "t..........................................t",
        "t..........................................t",
        "t..........................................t",
        "t..........................................t",
        "t..........................................t",
        "t....t,..,.,.,,..,......,t.t..,..,...,,....t",
        "t..........................................t",
        "t..t..,..t.t.,t..t.,.,t.t.....t...t,.,,....t",
        "t..........................................t",
        "t..........................................t",
        "tttttttttttttttttttttttttttttttttttttttttttt"
      ],
      "level": 1,
      "music": "field",
      "spawn": [
        2.5,
        15.5
      ],
      "npcs": [
        {
          "id": "stone_meadow",
          "name": "초원의 돌",
          "service": "waystone",
          "x": 5,
          "y": 14
        }
      ],
      "portals": [
        {
          "id": "west",
          "name": "오크우드",
          "x": 2,
          "y": 14,
          "to": "oakwood",
          "spawn": [
            33,
            12.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "east",
          "name": "속삭임 숲",
          "x": 42,
          "y": 10,
          "to": "forest",
          "spawn": [
            2.5,
            14.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "mine",
          "name": "잊힌 폐광",
          "x": 30,
          "y": 2,
          "to": "mine",
          "spawn": [
            2.5,
            12.5
          ],
          "requiresQuest": "wolf",
          "requiresGuardians": false
        }
      ],
      "spawns": [
        {
          "monster": "slime",
          "x": 10,
          "y": 11,
          "level": 1,
          "guardian": false,
          "id": "meadow_spawn_0"
        },
        {
          "monster": "slime",
          "x": 12,
          "y": 18,
          "level": 1,
          "guardian": false,
          "id": "meadow_spawn_1"
        },
        {
          "monster": "slime",
          "x": 16,
          "y": 8,
          "level": 1,
          "guardian": false,
          "id": "meadow_spawn_2"
        },
        {
          "monster": "slime",
          "x": 18,
          "y": 21,
          "level": 1,
          "guardian": false,
          "id": "meadow_spawn_3"
        },
        {
          "monster": "slime",
          "x": 21,
          "y": 12,
          "level": 1,
          "guardian": false,
          "id": "meadow_spawn_4"
        },
        {
          "monster": "slime",
          "x": 25,
          "y": 18,
          "level": 1,
          "guardian": false,
          "id": "meadow_spawn_5"
        },
        {
          "monster": "slime",
          "x": 8,
          "y": 20,
          "level": 1,
          "guardian": false,
          "id": "meadow_spawn_6"
        },
        {
          "monster": "goblin",
          "x": 27,
          "y": 10,
          "level": 2,
          "guardian": false,
          "id": "meadow_spawn_7"
        },
        {
          "monster": "goblin",
          "x": 32,
          "y": 19,
          "level": 2,
          "guardian": false,
          "id": "meadow_spawn_8"
        },
        {
          "monster": "goblin",
          "x": 36,
          "y": 8,
          "level": 2,
          "guardian": false,
          "id": "meadow_spawn_9"
        },
        {
          "monster": "goblin",
          "x": 37,
          "y": 20,
          "level": 2,
          "guardian": false,
          "id": "meadow_spawn_10"
        },
        {
          "monster": "goblin",
          "x": 21,
          "y": 23,
          "level": 2,
          "guardian": false,
          "id": "meadow_spawn_11"
        },
        {
          "monster": "slime",
          "x": 13,
          "y": 7,
          "level": 1,
          "guardian": false,
          "id": "meadow_spawn_12"
        },
        {
          "monster": "slime",
          "x": 17,
          "y": 16,
          "level": 1,
          "guardian": false,
          "id": "meadow_spawn_13"
        },
        {
          "monster": "slime",
          "x": 23,
          "y": 22,
          "level": 1,
          "guardian": false,
          "id": "meadow_spawn_14"
        },
        {
          "monster": "slime",
          "x": 28,
          "y": 7,
          "level": 1,
          "guardian": false,
          "id": "meadow_spawn_15"
        },
        {
          "monster": "goblin",
          "x": 32,
          "y": 9,
          "level": 1,
          "guardian": false,
          "id": "meadow_spawn_16"
        },
        {
          "monster": "goblin",
          "x": 38,
          "y": 17,
          "level": 1,
          "guardian": false,
          "id": "meadow_spawn_17"
        },
        {
          "monster": "goblin_captain",
          "x": 35,
          "y": 23,
          "level": 2,
          "guardian": false,
          "id": "meadow_spawn_18",
          "patrol": [
            [
              35,
              23
            ],
            [
              39,
              19
            ],
            [
              34,
              17
            ]
          ]
        }
      ],
      "props": [],
      "resources": [
        {
          "id": "herb_0",
          "type": "herb",
          "x": 8,
          "y": 10,
          "amount": 1,
          "respawn": 90
        },
        {
          "id": "herb_1",
          "type": "herb",
          "x": 17,
          "y": 19,
          "amount": 1,
          "respawn": 90
        },
        {
          "id": "herb_2",
          "type": "herb",
          "x": 25,
          "y": 9,
          "amount": 1,
          "respawn": 90
        },
        {
          "id": "herb_3",
          "type": "herb",
          "x": 35,
          "y": 17,
          "amount": 1,
          "respawn": 90
        },
        {
          "id": "meadow_wood_0",
          "type": "wood",
          "x": 9,
          "y": 6,
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "meadow_wood_1",
          "type": "wood",
          "x": 29,
          "y": 23,
          "amount": 1,
          "respawn": 120
        }
      ],
      "chests": [
        {
          "id": "meadow_cache_0",
          "x": 7,
          "y": 23,
          "equipmentChance": 0.12,
          "gold": 6,
          "xp": 10,
          "materials": {
            "herb": 1
          }
        },
        {
          "id": "meadow_cache_1",
          "x": 38,
          "y": 5,
          "equipmentChance": 0.12,
          "gold": 6,
          "xp": 10,
          "materials": {
            "ore": 1
          }
        }
      ],
      "waypoint": [
        5,
        14
      ],
      "discoveries": [
        {
          "id": "windmill",
          "name": "오래된 풍차",
          "kind": "landmark",
          "x": 6,
          "y": 5,
          "sprite": "ruin",
          "description": "초원길이 생기기 전부터 이곳을 지켜온 풍차의 흔적입니다.",
          "rewards": {
            "xp": 18,
            "gold": 5
          }
        },
        {
          "id": "dawn_shrine",
          "name": "여명의 제단",
          "kind": "shrine",
          "x": 40,
          "y": 24,
          "sprite": "waystone",
          "description": "제단의 서약이 몸에 남습니다. 최대 체력이 영구적으로 5 증가합니다.",
          "stats": [
            {
              "stat": "hp",
              "op": "add",
              "value": 5
            }
          ],
          "rewards": {
            "xp": 15
          }
        }
      ],
      "events": [
        {
          "id": "meadow_event",
          "name": "습격당한 행상 야영지",
          "x": 19,
          "y": 5,
          "sprite": "camp",
          "description": "주변 몬스터 무리를 처치하면 야영지의 보급품을 회수할 수 있습니다.",
          "cooldown": 300,
          "spawns": [
            {
              "monster": "goblin",
              "x": 20,
              "y": 6,
              "level": 2
            },
            {
              "monster": "goblin",
              "x": 21,
              "y": 7,
              "level": 2
            },
            {
              "monster": "goblin",
              "x": 18,
              "y": 7,
              "level": 2
            }
          ],
          "rewards": {
            "xp": 30,
            "gold": 10,
            "materials": {
              "ore": 2
            }
          }
        }
      ],
      "mechanisms": [],
      "zones": []
    },
    "forest": {
      "id": "forest",
      "name": "속삭임 숲",
      "kind": "field",
      "width": 44,
      "height": 30,
      "tiles": [
        "tttttttttttttttttttttttttttttttttttttttttttt",
        "t,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,t",
        "t,tt,,,,,t,,,tt,,tt,,t,,...,,t,,,,,t,tt,,t,t",
        "t,,,,,,,,,,,,,,,,,,,,,,,...,,,,,,,,,,,,,,,,t",
        "t,tt,t,,,,,t,,t,,,,t,,t,...,,,,,,,,t,..,,t,t",
        "t,,,,,,,,,,,,,,,,,,,,,,,,::,,,,,,,,,,,,,,,,t",
        "t,,,,,,,,,,...,,,,,,,,,,,::...,,,,,,,,,,,,,t",
        "t,,,,,,,,,,...:::...:::::::...:::,,...,,,,,t",
        "t,,,,,,,,,,...:::...:::::::...::,,,...,,,,,t",
        "t,,,,,,...,,::,,,...,,,,,::,,...,,,...,,,,,t",
        "t,t,,,t...,t::.,,ttt,,t,,::t,...,t,,,,,,,t,t",
        "t,,,,,,...,,::,,,,,,,,,,,::,,...,,,,...,,,,t",
        "t,,,,,,,,,,,::,,,,,...,,,::,,,,,,,,,...,,,,t",
        "t...,,,,,,,,::,,,,,...,,,::,,,,,,,,,...,,..t",
        "t...:::::::::::::::...:::::::::::::::::::..:",
        "t...:::::::::::::::::::::::::::::::::::::..t",
        "t...,,,,,,,,::,,,,,,,,,,,,,,,,,,...,,,,,,,,t",
        "t,,,,,,,,,,,::,,,,,,,,,,,,,,,,,,...,,,,,,,,t",
        "t,tt,t,,,t,t...,,,tt,t,,ttt,,,t,...t,t,,,,,t",
        "t,,,,,,...,,...,,,,,,,...,,,,,,,,,,,,,,,,,,t",
        "t,,,,,,...,,...,,,,,,,...,,,,,,,,...,,,,,,,t",
        "t,,,,,,...,,::,,,,,,,,...,,,,,,,,...,,,,,,,t",
        "t,,,,,,,,,,,::,,,...,,,,,,,,,,,,,...,,,,,,,t",
        "t,,,,,,,,,,,::,,,...,,,,,,,,,,,,,,,,,,,,,,,t",
        "t,,,,..,,,,,,tt,,...,,t,..,t,tt,,t,t,,,,,t,t",
        "t,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,t",
        "t,,t,,,,,t,t,tt,,t,t,tt,.,,,,,t,,,t,,t,,,,,t",
        "t,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,t",
        "t,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,t",
        "tttttttttttttttttttttttttttttttttttttttttttt"
      ],
      "level": 4,
      "music": "field",
      "spawn": [
        2.5,
        15.5
      ],
      "npcs": [
        {
          "id": "wander_forest",
          "name": "떠돌이 상인 마윈",
          "service": "merchant",
          "x": 7,
          "y": 24,
          "vendorType": "wanderer",
          "schedule": {
            "period": 240,
            "activeFor": 120,
            "offset": 0
          }
        }
      ],
      "portals": [
        {
          "id": "west",
          "name": "초원길",
          "x": 2,
          "y": 14,
          "to": "meadow",
          "spawn": [
            41,
            10.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "east",
          "name": "은빛나루",
          "x": 42,
          "y": 14,
          "to": "silverhaven",
          "spawn": [
            2.5,
            12.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "den",
          "name": "늑대숲 동굴",
          "x": 25,
          "y": 3,
          "to": "forest_den",
          "spawn": [
            2.5,
            12.5
          ],
          "requiresQuest": "forest",
          "requiresGuardians": false
        }
      ],
      "spawns": [
        {
          "monster": "wolf",
          "x": 8,
          "y": 10,
          "level": 4,
          "guardian": false,
          "id": "forest_spawn_0"
        },
        {
          "monster": "wolf",
          "x": 13,
          "y": 19,
          "level": 4,
          "guardian": false,
          "id": "forest_spawn_1"
        },
        {
          "monster": "wolf",
          "x": 18,
          "y": 8,
          "level": 4,
          "guardian": false,
          "id": "forest_spawn_2"
        },
        {
          "monster": "wolf",
          "x": 23,
          "y": 20,
          "level": 4,
          "guardian": false,
          "id": "forest_spawn_3"
        },
        {
          "monster": "wolf",
          "x": 30,
          "y": 10,
          "level": 4,
          "guardian": false,
          "id": "forest_spawn_4"
        },
        {
          "monster": "wolf",
          "x": 34,
          "y": 21,
          "level": 4,
          "guardian": false,
          "id": "forest_spawn_5"
        },
        {
          "monster": "wolf",
          "x": 37,
          "y": 12,
          "level": 4,
          "guardian": false,
          "id": "forest_spawn_6"
        },
        {
          "monster": "boar",
          "x": 12,
          "y": 7,
          "level": 4,
          "guardian": false,
          "id": "forest_spawn_7"
        },
        {
          "monster": "boar",
          "x": 18,
          "y": 23,
          "level": 4,
          "guardian": false,
          "id": "forest_spawn_8"
        },
        {
          "monster": "boar",
          "x": 28,
          "y": 7,
          "level": 4,
          "guardian": false,
          "id": "forest_spawn_9"
        },
        {
          "monster": "boar",
          "x": 33,
          "y": 17,
          "level": 4,
          "guardian": false,
          "id": "forest_spawn_10"
        },
        {
          "monster": "goblin",
          "x": 20,
          "y": 13,
          "level": 4,
          "guardian": false,
          "id": "forest_spawn_11"
        },
        {
          "monster": "goblin",
          "x": 36,
          "y": 8,
          "level": 4,
          "guardian": false,
          "id": "forest_spawn_12"
        },
        {
          "monster": "wolf",
          "x": 6,
          "y": 20,
          "level": 4,
          "guardian": false,
          "id": "forest_spawn_13"
        },
        {
          "monster": "wolf",
          "x": 15,
          "y": 11,
          "level": 4,
          "guardian": false,
          "id": "forest_spawn_14"
        },
        {
          "monster": "wolf",
          "x": 26,
          "y": 16,
          "level": 4,
          "guardian": false,
          "id": "forest_spawn_15"
        },
        {
          "monster": "boar",
          "x": 20,
          "y": 24,
          "level": 4,
          "guardian": false,
          "id": "forest_spawn_16"
        },
        {
          "monster": "boar",
          "x": 31,
          "y": 6,
          "level": 4,
          "guardian": false,
          "id": "forest_spawn_17"
        },
        {
          "monster": "goblin",
          "x": 39,
          "y": 18,
          "level": 4,
          "guardian": false,
          "id": "forest_spawn_18"
        },
        {
          "monster": "alpha_wolf",
          "x": 29,
          "y": 22,
          "level": 5,
          "guardian": false,
          "id": "forest_spawn_19",
          "patrol": [
            [
              29,
              22
            ],
            [
              34,
              24
            ],
            [
              34,
              18
            ]
          ]
        }
      ],
      "props": [],
      "resources": [
        {
          "id": "h1",
          "type": "herb",
          "x": 8,
          "y": 20,
          "amount": 1,
          "respawn": 90
        },
        {
          "id": "forest_wood_0",
          "type": "wood",
          "x": 9,
          "y": 24,
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "forest_wood_1",
          "type": "wood",
          "x": 32,
          "y": 7,
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "forest_wood_2",
          "type": "wood",
          "x": 40,
          "y": 18,
          "amount": 1,
          "respawn": 120
        }
      ],
      "chests": [
        {
          "id": "forest_cache_0",
          "x": 5,
          "y": 6,
          "equipmentChance": 0.12,
          "gold": 6,
          "xp": 10,
          "materials": {
            "herb": 1
          }
        },
        {
          "id": "forest_cache_1",
          "x": 39,
          "y": 24,
          "equipmentChance": 0.12,
          "gold": 6,
          "xp": 10,
          "materials": {
            "ore": 1
          }
        }
      ],
      "waypoint": null,
      "discoveries": [
        {
          "id": "watchtower",
          "name": "사냥꾼의 망루",
          "kind": "landmark",
          "x": 6,
          "y": 25,
          "sprite": "ruin",
          "description": "발자국과 이정표가 남아 있는 숲속 망루입니다.",
          "rewards": {
            "xp": 25,
            "gold": 8
          }
        },
        {
          "id": "wind_shrine",
          "name": "바람의 성소",
          "kind": "shrine",
          "x": 38,
          "y": 5,
          "sprite": "waystone",
          "description": "바람의 축복이 걸음을 가볍게 합니다. 이동 속도가 영구적으로 2% 증가합니다.",
          "stats": [
            {
              "stat": "speed",
              "op": "multiply",
              "value": 1.02
            }
          ],
          "rewards": {
            "xp": 20
          }
        }
      ],
      "events": [
        {
          "id": "forest_event",
          "name": "고블린 사냥 초소",
          "x": 25,
          "y": 25,
          "sprite": "camp",
          "description": "주변 몬스터 무리를 처치하면 야영지의 보급품을 회수할 수 있습니다.",
          "cooldown": 300,
          "spawns": [
            {
              "monster": "goblin",
              "x": 26,
              "y": 26,
              "level": 5
            },
            {
              "monster": "goblin",
              "x": 27,
              "y": 27,
              "level": 5
            },
            {
              "monster": "goblin",
              "x": 24,
              "y": 27,
              "level": 5
            }
          ],
          "rewards": {
            "xp": 45,
            "gold": 14,
            "materials": {
              "hide": 2
            }
          }
        }
      ],
      "mechanisms": [],
      "zones": []
    },
    "silverhaven": {
      "id": "silverhaven",
      "name": "은빛나루",
      "kind": "town",
      "width": 32,
      "height": 24,
      "tiles": [
        "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
        "~ssssssssssssssssssssssssssssss~",
        "~ssssssssssssss__ssssssssssssss~",
        "~sssss______sss__sssss______sss~",
        "~sssss______sss__sssss______sss~",
        "~sssss______sss__sssss______sss~",
        "~sssss______sss__sssss______sss~",
        "~ssssssssssssss__ssssssssssssss~",
        "~ssssssssssssss__ssssssssssssss~",
        "~sssssssss......_sssssss...ssss~",
        "~sssssssss......_sssssss...ssss~",
        "~...ssssss......_ss...ss...ss..~",
        "~..._______________..._______.._",
        "~...___________..._..._______..~",
        "~ssssssssssssss...sssssssssssss~",
        "~ssssssss...sss...ssssss...ssss~",
        "~ssssssss...sss__sssssss...ssss~",
        "~sssss___...sss__sssss__..._sss~",
        "~sssss______sss__sssss______sss~",
        "~sssss______sss__sssss______sss~",
        "~sssss______sss__sssss______sss~",
        "~ssssssssssssss__ssssssssssssss~",
        "~ssssssssssssssssssssssssssssss~",
        "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
      ],
      "level": 6,
      "music": "town",
      "spawn": [
        2.5,
        12.5
      ],
      "npcs": [
        {
          "id": "rhett",
          "name": "레트",
          "service": "guild",
          "x": 11,
          "y": 10
        },
        {
          "id": "smith_haven",
          "name": "브람",
          "service": "smith",
          "x": 25,
          "y": 10
        },
        {
          "id": "merchant_haven",
          "name": "세라",
          "service": "merchant",
          "x": 20,
          "y": 12
        },
        {
          "id": "inn_haven",
          "name": "노엘",
          "service": "inn",
          "x": 10,
          "y": 16
        },
        {
          "id": "priest_haven",
          "name": "루시안",
          "service": "temple",
          "x": 25,
          "y": 16
        },
        {
          "id": "board",
          "name": "의뢰 게시판",
          "service": "board",
          "x": 14,
          "y": 10
        },
        {
          "id": "stone_haven",
          "name": "나루의 돌",
          "service": "waystone",
          "x": 16,
          "y": 14
        },
        {
          "id": "lyra_npc",
          "name": "리라",
          "service": "companion",
          "x": 18,
          "y": 19
        }
      ],
      "portals": [
        {
          "id": "west",
          "name": "속삭임 숲",
          "x": 2,
          "y": 12,
          "to": "forest",
          "spawn": [
            41,
            14.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "east",
          "name": "안개늪",
          "x": 30,
          "y": 12,
          "to": "marsh",
          "spawn": [
            2.5,
            14.5
          ],
          "requiresQuest": "wolf",
          "requiresGuardians": false
        }
      ],
      "spawns": [],
      "props": [
        {
          "type": "house",
          "x": 6,
          "y": 3,
          "width": 6,
          "height": 4,
          "roof": "roofDark",
          "solid": true,
          "name": "나루 길드"
        },
        {
          "type": "house",
          "x": 22,
          "y": 3,
          "width": 6,
          "height": 4,
          "roof": "roof",
          "solid": true,
          "name": "대장간"
        },
        {
          "type": "house",
          "x": 6,
          "y": 17,
          "width": 6,
          "height": 4,
          "roof": "roof",
          "solid": true,
          "name": "여관"
        },
        {
          "type": "house",
          "x": 22,
          "y": 17,
          "width": 6,
          "height": 4,
          "roof": "roofDark",
          "solid": true,
          "name": "성당"
        }
      ],
      "resources": [],
      "chests": [],
      "waypoint": [
        16,
        14
      ],
      "discoveries": [],
      "events": [],
      "mechanisms": [],
      "zones": []
    },
    "marsh": {
      "id": "marsh",
      "name": "안개늪",
      "kind": "field",
      "width": 44,
      "height": 30,
      "tiles": [
        "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
        "~mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm~",
        "~mtmmmmmmtm~~~~mmmtmmtmmmmtmm~~~~mmtmttmmtm~",
        "~mmmmmmmmmm~~~~mmmmmmmmmmmmmm~~~~mmmmmmmmmm~",
        "~mttm.mmmmm~~~~mmmmmmmmmtttmm~~~~mm.mmm...m~",
        "~mmmmmmmmmm~~~~mmmmmmmmmmmmmm~~~~mmmmmm...m~",
        "~mmmmmmmmmm~~~~mmmmmmmmmmmmmm~~~~mmmmmm...m~",
        "~mmmmmmmmmm~~~~mmmmmmmmmmmmmm~~~~mmmmmmm__m~",
        "~mmmmmm...m~~~~mmmmmmm...mmmm~~~~mm...mm__m~",
        "~mmmmmm...m~~~~mmmmmmm...mmmm~~~~mm...mm__m~",
        "~mtmmmm...m~~~~mmmmmmm...mmtm~~~~tm...mm__m~",
        "~mmmmmmmmmm~~~~mmmmmmmmmmmmmm~~~~mmmmmmm__m~",
        "~mmmmmmmmmm~~~~mmmmmmmmmmmmmm~~~~mmmmmmm__m~",
        "~......mmmm~~~~mmmm...mmmmmmm~~~~mmmmmmm__m~",
        "~......____________..._____________________~",
        "~......____________...____________________m~",
        "~...mmmmmmm~~~~mmmmmmmmmmmmmm~~~~mmmmmmmmmm~",
        "~mmmmmmmmmm~~~~mm...mmmmmmmmm~~~~mmmmmmmmmm~",
        "~mmtmmmmmtm~~~~mm...mmmm.m.mm~~~~mmmm.mmmmm~",
        "~mmmm...mmm~~~~mm...mm...mmmm~~~~mmmmm...mm~",
        "~mmmm...mmm~~~~mmmmmmm......m~~~~mmmmm...mm~",
        "~mmmm...mmm~~~~mmmmmmm......m~~~~mmmmm...mm~",
        "~mmmmmmmmmm~~~~mmmmmmmmmm...m~~~~m...mmmmmm~",
        "~mmmmmmmmmm~~~~mmmmmmmmmmmmmm~~~~m...mmmmmm~",
        "~mmmmtmmmmm~~~~mmmmmmm.mmtmtm~~~~m...mmmmtm~",
        "~mmmmmmmmmm~~~~mmmmmmmmmmmmmm~~~~mmmmmmmmmm~",
        "~mmtmmmmmtm~~~~mm.mmmm.mtmmmm~~~~mtmmmmmmmm~",
        "~mmmmmmmmmm~~~~mmmmmmmmmmmmmm~~~~mmmmmmmmmm~",
        "~mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm~",
        "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
      ],
      "level": 8,
      "music": "field",
      "spawn": [
        2.5,
        15.5
      ],
      "npcs": [
        {
          "id": "stone_marsh",
          "name": "늪의 돌",
          "service": "waystone",
          "x": 5,
          "y": 14
        },
        {
          "id": "wander_marsh",
          "name": "유랑 상인 에다",
          "service": "merchant",
          "x": 23,
          "y": 24,
          "vendorType": "wanderer",
          "schedule": {
            "period": 240,
            "activeFor": 120,
            "offset": 120
          }
        }
      ],
      "portals": [
        {
          "id": "west",
          "name": "은빛나루",
          "x": 2,
          "y": 14,
          "to": "silverhaven",
          "spawn": [
            29,
            12.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "ruins",
          "name": "별의 유적",
          "x": 40,
          "y": 5,
          "to": "ruins",
          "spawn": [
            2.5,
            12.5
          ],
          "requiresQuest": "mine",
          "requiresGuardians": false
        },
        {
          "id": "to_highland",
          "name": "가시바람 고원",
          "x": 41,
          "y": 15,
          "to": "highland",
          "spawn": [
            3.5,
            17.5
          ],
          "requiresQuest": "drake",
          "requiresGuardians": false
        }
      ],
      "spawns": [
        {
          "monster": "lizard",
          "x": 8,
          "y": 9,
          "level": 8,
          "guardian": false,
          "id": "marsh_spawn_0"
        },
        {
          "monster": "lizard",
          "x": 18,
          "y": 18,
          "level": 8,
          "guardian": false,
          "id": "marsh_spawn_1"
        },
        {
          "monster": "lizard",
          "x": 23,
          "y": 9,
          "level": 8,
          "guardian": false,
          "id": "marsh_spawn_2"
        },
        {
          "monster": "lizard",
          "x": 26,
          "y": 21,
          "level": 8,
          "guardian": false,
          "id": "marsh_spawn_3"
        },
        {
          "monster": "lizard",
          "x": 36,
          "y": 9,
          "level": 8,
          "guardian": false,
          "id": "marsh_spawn_4"
        },
        {
          "monster": "lizard",
          "x": 39,
          "y": 20,
          "level": 8,
          "guardian": false,
          "id": "marsh_spawn_5"
        },
        {
          "monster": "slime",
          "x": 6,
          "y": 20,
          "level": 8,
          "guardian": false,
          "id": "marsh_spawn_6"
        },
        {
          "monster": "slime",
          "x": 20,
          "y": 14,
          "level": 8,
          "guardian": false,
          "id": "marsh_spawn_7"
        },
        {
          "monster": "slime",
          "x": 35,
          "y": 23,
          "level": 8,
          "guardian": false,
          "id": "marsh_spawn_8"
        },
        {
          "monster": "lizard",
          "x": 8,
          "y": 23,
          "level": 8,
          "guardian": false,
          "id": "marsh_spawn_9"
        },
        {
          "monster": "lizard",
          "x": 19,
          "y": 7,
          "level": 8,
          "guardian": false,
          "id": "marsh_spawn_10"
        },
        {
          "monster": "lizard",
          "x": 25,
          "y": 17,
          "level": 8,
          "guardian": false,
          "id": "marsh_spawn_11"
        },
        {
          "monster": "lizard",
          "x": 37,
          "y": 24,
          "level": 8,
          "guardian": false,
          "id": "marsh_spawn_12"
        },
        {
          "monster": "slime",
          "x": 20,
          "y": 23,
          "level": 8,
          "guardian": false,
          "id": "marsh_spawn_13"
        },
        {
          "monster": "lizard_chief",
          "x": 36,
          "y": 18,
          "level": 9,
          "guardian": false,
          "id": "marsh_spawn_14",
          "patrol": [
            [
              36,
              18
            ],
            [
              39,
              22
            ],
            [
              36,
              25
            ]
          ]
        }
      ],
      "props": [],
      "resources": [
        {
          "id": "cr1",
          "type": "crystal",
          "x": 23,
          "y": 20,
          "amount": 1,
          "respawn": 90
        },
        {
          "id": "marsh_wood_0",
          "type": "wood",
          "x": 21,
          "y": 7,
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "marsh_wood_1",
          "type": "wood",
          "x": 35,
          "y": 24,
          "amount": 1,
          "respawn": 120
        }
      ],
      "chests": [
        {
          "id": "marsh_cache_0",
          "x": 7,
          "y": 25,
          "equipmentChance": 0.12,
          "gold": 6,
          "xp": 10,
          "materials": {
            "herb": 1
          }
        },
        {
          "id": "marsh_cache_1",
          "x": 35,
          "y": 5,
          "equipmentChance": 0.12,
          "gold": 6,
          "xp": 10,
          "materials": {
            "ore": 1
          }
        }
      ],
      "waypoint": [
        5,
        14
      ],
      "discoveries": [
        {
          "id": "sunken_lab",
          "name": "잠긴 연구소",
          "kind": "landmark",
          "x": 6,
          "y": 5,
          "sprite": "ruin",
          "description": "늪에 잠긴 마도 연구소에서 작은 결정을 발견했습니다.",
          "rewards": {
            "xp": 35,
            "materials": {
              "crystal": 1
            }
          }
        },
        {
          "id": "flow_shrine",
          "name": "흐름의 성소",
          "kind": "shrine",
          "x": 38,
          "y": 26,
          "sprite": "waystone",
          "description": "마력의 흐름을 깨닫습니다. 최대 마력 +5, 초당 마력 회복 +0.1을 영구적으로 얻습니다.",
          "stats": [
            {
              "stat": "mp",
              "op": "add",
              "value": 5
            },
            {
              "stat": "manaRegen",
              "op": "add",
              "value": 0.1
            }
          ],
          "rewards": {
            "xp": 25
          }
        }
      ],
      "events": [
        {
          "id": "marsh_event",
          "name": "불안정한 룬의 흔적",
          "x": 19,
          "y": 24,
          "sprite": "camp",
          "description": "주변 몬스터 무리를 처치하면 야영지의 보급품을 회수할 수 있습니다.",
          "cooldown": 300,
          "spawns": [
            {
              "monster": "lizard",
              "x": 20,
              "y": 25,
              "level": 9
            },
            {
              "monster": "lizard",
              "x": 21,
              "y": 26,
              "level": 9
            },
            {
              "monster": "lizard",
              "x": 18,
              "y": 26,
              "level": 9
            }
          ],
          "rewards": {
            "xp": 65,
            "gold": 18,
            "materials": {
              "crystal": 2
            }
          }
        }
      ],
      "mechanisms": [],
      "zones": []
    },
    "forest_den": {
      "id": "forest_den",
      "name": "늑대숲 동굴",
      "kind": "dungeon",
      "width": 30,
      "height": 24,
      "tiles": [
        "##############################",
        "#ffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffff#",
        "#fffffff##fffffff##fffffff##f#",
        "#fffffff##fffffff##ffffffff#f#",
        "#fffffff##fffffff##ffffffff#f#",
        "#fffffff##fffffff##ffffffff#f#",
        "#fffffff##fffffff##fffffff##f#",
        "#fffffff##fffffff##fffffff##f#",
        "#fffffff##fffffff##fffffff##f#",
        "#ffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffff#",
        "#fffffffffffffffffffffffffffff",
        "#ffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffff#",
        "#fffffff##fffffff##fffffff##f#",
        "#fffffff##fffffff##fffffff##f#",
        "#fffffff##fffffff##fffffff##f#",
        "#fffffff##fffffff##fffffff##f#",
        "#fffffff##fffffff##fffffff##f#",
        "#ffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffff#",
        "##############################"
      ],
      "level": 5,
      "music": "dungeon",
      "spawn": [
        2.5,
        12.5
      ],
      "npcs": [],
      "portals": [
        {
          "id": "exit",
          "name": "바깥으로",
          "x": 2,
          "y": 12,
          "to": "forest",
          "spawn": [
            25,
            4.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "boss",
          "name": "심층으로",
          "x": 28,
          "y": 12,
          "to": "forest_den_deep",
          "spawn": [
            3.5,
            14.5
          ],
          "requiresQuest": null,
          "requiresGuardians": true
        }
      ],
      "spawns": [
        {
          "monster": "goblin_guard",
          "x": 11,
          "y": 7,
          "level": 5,
          "guardian": true
        },
        {
          "monster": "goblin_guard",
          "x": 21,
          "y": 17,
          "level": 5,
          "guardian": true
        },
        {
          "monster": "wolf",
          "x": 6,
          "y": 8,
          "level": 5,
          "guardian": false
        },
        {
          "monster": "wolf",
          "x": 13,
          "y": 15,
          "level": 5,
          "guardian": false
        },
        {
          "monster": "wolf",
          "x": 20,
          "y": 10,
          "level": 5,
          "guardian": false
        },
        {
          "monster": "wolf",
          "x": 24,
          "y": 18,
          "level": 5,
          "guardian": false
        }
      ],
      "props": [],
      "resources": [
        {
          "id": "ore_1",
          "type": "ore",
          "x": 13,
          "y": 5,
          "amount": 1,
          "respawn": 0
        }
      ],
      "chests": [
        {
          "id": "chest_1",
          "x": 25,
          "y": 5,
          "gold": 7,
          "materials": {
            "ore": 1
          },
          "equipmentChance": 0.3
        },
        {
          "id": "chest_2",
          "x": 6,
          "y": 19,
          "gold": 10,
          "materials": {
            "crystal": 1
          },
          "equipmentChance": 0.3
        }
      ],
      "waypoint": null,
      "group": "wolf",
      "guardianTotal": 2,
      "discoveries": [],
      "events": [],
      "mechanisms": [],
      "zones": []
    },
    "mine": {
      "id": "mine",
      "name": "잊힌 폐광",
      "kind": "dungeon",
      "width": 32,
      "height": 26,
      "tiles": [
        "################################",
        "#ffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffff#",
        "#fffffff##fffffff##fffffff##fff#",
        "#fffffff##fffffff##ffffffffffff#",
        "#fffffff##fffffff##ffffffffffff#",
        "#fffffff##fffffff##ffffffffffff#",
        "#fffffff##fffffff##fffffff##fff#",
        "#fffffff##fffffff##fffffff##fff#",
        "#fffffff##fffffff##fffffff##fff#",
        "#ffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffff#",
        "#fffffffffffffffffffffffffffffff",
        "#ffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffff#",
        "#fffffff##fffffff##fffffff##fff#",
        "#fffffff##fffffff##ffffffffffff#",
        "#fffffff##fffffff##ffffffffffff#",
        "#fffffff##fffffff##ffffffffffff#",
        "#fffffff##fffffff##fffffff##fff#",
        "#fffffff##fffffff##fffffff##fff#",
        "#fffffff##fffffff##fffffff##fff#",
        "#ffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffff#",
        "################################"
      ],
      "level": 8,
      "music": "dungeon",
      "spawn": [
        2.5,
        13.5
      ],
      "npcs": [],
      "portals": [
        {
          "id": "exit",
          "name": "바깥으로",
          "x": 2,
          "y": 12,
          "to": "meadow",
          "spawn": [
            30,
            3.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "boss",
          "name": "심층으로",
          "x": 30,
          "y": 12,
          "to": "mine_deep",
          "spawn": [
            3.5,
            14.5
          ],
          "requiresQuest": null,
          "requiresGuardians": true
        }
      ],
      "spawns": [
        {
          "monster": "golem",
          "x": 12,
          "y": 7,
          "level": 8,
          "guardian": true
        },
        {
          "monster": "golem",
          "x": 23,
          "y": 19,
          "level": 8,
          "guardian": true
        },
        {
          "monster": "goblin",
          "x": 6,
          "y": 8,
          "level": 8,
          "guardian": false
        },
        {
          "monster": "goblin",
          "x": 13,
          "y": 15,
          "level": 8,
          "guardian": false
        },
        {
          "monster": "goblin",
          "x": 20,
          "y": 10,
          "level": 8,
          "guardian": false
        },
        {
          "monster": "goblin",
          "x": 26,
          "y": 18,
          "level": 8,
          "guardian": false
        }
      ],
      "props": [],
      "resources": [
        {
          "id": "ore_1",
          "type": "ore",
          "x": 13,
          "y": 5,
          "amount": 1,
          "respawn": 0
        }
      ],
      "chests": [
        {
          "id": "chest_1",
          "x": 27,
          "y": 5,
          "gold": 7,
          "materials": {
            "ore": 1
          },
          "equipmentChance": 0.3
        },
        {
          "id": "chest_2",
          "x": 6,
          "y": 21,
          "gold": 10,
          "materials": {
            "crystal": 1
          },
          "equipmentChance": 0.3
        }
      ],
      "waypoint": null,
      "group": "mine",
      "guardianTotal": 2,
      "discoveries": [],
      "events": [],
      "mechanisms": [],
      "zones": []
    },
    "ruins": {
      "id": "ruins",
      "name": "별의 유적",
      "kind": "dungeon",
      "width": 34,
      "height": 26,
      "tiles": [
        "##################################",
        "#ffffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffffff#",
        "#fffffff##fffffff##fffffff##fffff#",
        "#ffffllf##fffffff##fffffff##fffff#",
        "#ffffllf##fffffff##fffffff##fffff#",
        "#ffffllf##fffffff##fffffff##fffff#",
        "#fffffff##fffffff##ffffffffffffff#",
        "#fffffff##fffffff##ffffffffffffff#",
        "#fffffff##fffffff##ffffffffffffff#",
        "#ffffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffffff#",
        "#fffffffffffffffffffffffffffffffff",
        "#ffffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffffff#",
        "#fffffff##fffffff##fffffff##fffff#",
        "#fffffff##fffffff##fffffff#ffflff#",
        "#fffffff##fffffff##fffffff#ffflff#",
        "#fffffff##fffffff##fffffff#ffflff#",
        "#fffffff##fffffff##fffffff##fllff#",
        "#fffffff##fffffff##fffffff##fllff#",
        "#fffffff##fffffff##fffffff##fffff#",
        "#ffffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffffff#",
        "##################################"
      ],
      "level": 12,
      "music": "dungeon",
      "spawn": [
        2.5,
        13.5
      ],
      "npcs": [],
      "portals": [
        {
          "id": "exit",
          "name": "바깥으로",
          "x": 2,
          "y": 12,
          "to": "marsh",
          "spawn": [
            40,
            6.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "boss",
          "name": "심층으로",
          "x": 32,
          "y": 12,
          "to": "ruins_deep",
          "spawn": [
            3.5,
            14.5
          ],
          "requiresQuest": null,
          "requiresGuardians": true
        }
      ],
      "spawns": [
        {
          "monster": "lizard_shaman",
          "x": 12,
          "y": 7,
          "level": 12,
          "guardian": true
        },
        {
          "monster": "lizard_shaman",
          "x": 22,
          "y": 19,
          "level": 12,
          "guardian": true
        },
        {
          "monster": "lizard_shaman",
          "x": 27,
          "y": 8,
          "level": 12,
          "guardian": true
        },
        {
          "monster": "lizard",
          "x": 6,
          "y": 8,
          "level": 12,
          "guardian": false
        },
        {
          "monster": "lizard",
          "x": 13,
          "y": 15,
          "level": 12,
          "guardian": false
        },
        {
          "monster": "lizard",
          "x": 20,
          "y": 10,
          "level": 12,
          "guardian": false
        },
        {
          "monster": "lizard",
          "x": 28,
          "y": 18,
          "level": 12,
          "guardian": false
        }
      ],
      "props": [],
      "resources": [
        {
          "id": "ore_1",
          "type": "ore",
          "x": 13,
          "y": 5,
          "amount": 1,
          "respawn": 0
        }
      ],
      "chests": [
        {
          "id": "chest_1",
          "x": 29,
          "y": 5,
          "gold": 7,
          "materials": {
            "ore": 1
          },
          "equipmentChance": 0.3
        },
        {
          "id": "chest_2",
          "x": 6,
          "y": 21,
          "gold": 10,
          "materials": {
            "crystal": 1
          },
          "equipmentChance": 0.3
        }
      ],
      "waypoint": null,
      "group": "ruins",
      "guardianTotal": 3,
      "discoveries": [],
      "events": [],
      "mechanisms": [],
      "zones": []
    },
    "wolf_lair": {
      "id": "wolf_lair",
      "name": "늑대왕의 둥지",
      "kind": "boss",
      "width": 28,
      "height": 24,
      "tiles": [
        "############################",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "############################"
      ],
      "level": 5,
      "music": "boss",
      "spawn": [
        3.5,
        11.5
      ],
      "npcs": [],
      "portals": [
        {
          "id": "exit",
          "name": "입구로",
          "x": 2,
          "y": 11,
          "to": "forest_den_deep",
          "spawn": [
            32,
            14.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        }
      ],
      "spawns": [
        {
          "monster": "wolf_king",
          "x": 19,
          "y": 12,
          "level": 5,
          "guardian": false
        }
      ],
      "props": [
        {
          "type": "crystal",
          "x": 23,
          "y": 5,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "crystal",
          "x": 23,
          "y": 19,
          "width": 1,
          "height": 1,
          "solid": false
        }
      ],
      "resources": [],
      "chests": [],
      "waypoint": null,
      "group": "wolf",
      "boss": "wolf_king",
      "discoveries": [],
      "events": [],
      "mechanisms": [],
      "zones": []
    },
    "forge_chamber": {
      "id": "forge_chamber",
      "name": "광산군주의 전당",
      "kind": "boss",
      "width": 28,
      "height": 24,
      "tiles": [
        "############################",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "############################"
      ],
      "level": 9,
      "music": "boss",
      "spawn": [
        3.5,
        11.5
      ],
      "npcs": [],
      "portals": [
        {
          "id": "exit",
          "name": "입구로",
          "x": 2,
          "y": 11,
          "to": "mine_deep",
          "spawn": [
            32,
            14.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        }
      ],
      "spawns": [
        {
          "monster": "mine_golem",
          "x": 19,
          "y": 12,
          "level": 9,
          "guardian": false
        }
      ],
      "props": [
        {
          "type": "crystal",
          "x": 23,
          "y": 5,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "crystal",
          "x": 23,
          "y": 19,
          "width": 1,
          "height": 1,
          "solid": false
        }
      ],
      "resources": [],
      "chests": [],
      "waypoint": null,
      "group": "mine",
      "boss": "mine_golem",
      "discoveries": [],
      "events": [],
      "mechanisms": [],
      "zones": []
    },
    "dragon_sanctum": {
      "id": "dragon_sanctum",
      "name": "원룡의 성역",
      "kind": "boss",
      "width": 28,
      "height": 24,
      "tiles": [
        "############################",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffff#",
        "############################"
      ],
      "level": 14,
      "music": "boss",
      "spawn": [
        3.5,
        11.5
      ],
      "npcs": [],
      "portals": [
        {
          "id": "exit",
          "name": "입구로",
          "x": 2,
          "y": 11,
          "to": "ruins_deep",
          "spawn": [
            32,
            14.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        }
      ],
      "spawns": [
        {
          "monster": "ancient_drake",
          "x": 19,
          "y": 12,
          "level": 14,
          "guardian": false
        }
      ],
      "props": [
        {
          "type": "crystal",
          "x": 23,
          "y": 5,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "crystal",
          "x": 23,
          "y": 19,
          "width": 1,
          "height": 1,
          "solid": false
        }
      ],
      "resources": [],
      "chests": [],
      "waypoint": null,
      "group": "ruins",
      "boss": "ancient_drake",
      "discoveries": [],
      "events": [],
      "mechanisms": [],
      "zones": []
    },
    "highland": {
      "id": "highland",
      "name": "가시바람 고원",
      "kind": "field",
      "width": 48,
      "height": 34,
      "level": 16,
      "music": "field",
      "spawn": [
        3.5,
        17.5
      ],
      "tiles": [
        "tttttttttttttttttttttttttttttttttttttttttttttttt",
        "t..............................................t",
        "t..............................................t",
        "t......#.......#.......#.......#.......#.......t",
        "t......#.......:.......#.......#.......#.......t",
        "t......#.......:.......#.......#.......#.......t",
        "t......#.......:.......#.......#.......#.......t",
        "t......#.......:.......#.......#.......#.......t",
        "t......#.......:.......#.......#.......#.......t",
        "t......#.......:.......#.......#...............t",
        "t......#.......:.......#.......#...............t",
        "t......#.......:...............#...............t",
        "t......#.......:...............#...............t",
        "t..............:...............#...............t",
        "t..............:...............#.......#.......t",
        "t..............:...............#.......#.......t",
        "t..............:.......#.......#.......#.......t",
        "t.::::::::::::::::::::::::::::::::::::::::::::.t",
        "t.::::::::::::::::::::::::::::::::::::::::::::.t",
        "t......:.......:.......:...............:.......t",
        "t......:.......:.......:...............:.......t",
        "t......:...............:...............:.......t",
        "t......:...............:...............:.......t",
        "t......:...............:...............:.......t",
        "t......:...............:.......#.......:.......t",
        "t......:...............:.......#.......:.......t",
        "t......:.......#.......:.......#.......:.......t",
        "t......:.......#.......:.......#.......:.......t",
        "t......:.......#.......:.......#.......:.......t",
        "t......:.......#.......:.......#.......:.......t",
        "t......#.......#.......:.......#.......#.......t",
        "t..............................................t",
        "t..............................................t",
        "tttttttttttttttttttttttttttttttttttttttttttttttt"
      ],
      "props": [],
      "npcs": [
        {
          "id": "highland_stone",
          "name": "여행의 돌",
          "service": "waystone",
          "x": 5,
          "y": 17
        },
        {
          "id": "highland_vendor",
          "name": "원정 상인",
          "service": "merchant",
          "x": 7,
          "y": 29,
          "vendorType": "wanderer",
          "schedule": {
            "period": 300,
            "activeFor": 150,
            "offset": 0
          }
        }
      ],
      "portals": [
        {
          "id": "to_marsh",
          "name": "안개늪",
          "x": 2,
          "y": 17,
          "to": "marsh",
          "spawn": [
            40,
            15.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "to_frostgate",
          "name": "서리문 요새",
          "x": 45,
          "y": 17,
          "to": "frostgate",
          "spawn": [
            3.5,
            14.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "highland_entry",
          "name": "가시뿌리 미궁",
          "x": 42,
          "y": 4,
          "to": "highland_depth_1",
          "spawn": [
            3.5,
            15.5
          ],
          "requiresQuest": "highland_hunt",
          "requiresGuardians": false
        }
      ],
      "spawns": [
        {
          "id": "highland_mob_0",
          "monster": "highland_orc",
          "x": 8,
          "y": 8,
          "level": 17,
          "guardian": false
        },
        {
          "id": "highland_mob_1",
          "monster": "moss_ent",
          "x": 13,
          "y": 7,
          "level": 16,
          "guardian": false
        },
        {
          "id": "highland_mob_2",
          "monster": "venom_spider",
          "x": 19,
          "y": 9,
          "level": 16,
          "guardian": false
        },
        {
          "id": "highland_mob_3",
          "monster": "stone_wyvern",
          "x": 26,
          "y": 7,
          "level": 17,
          "guardian": false
        },
        {
          "id": "highland_mob_4",
          "monster": "highland_orc",
          "x": 33,
          "y": 8,
          "level": 16,
          "guardian": false
        },
        {
          "id": "highland_mob_5",
          "monster": "moss_ent",
          "x": 40,
          "y": 7,
          "level": 16,
          "guardian": false
        },
        {
          "id": "highland_mob_6",
          "monster": "venom_spider",
          "x": 43,
          "y": 12,
          "level": 17,
          "guardian": false
        },
        {
          "id": "highland_mob_7",
          "monster": "stone_wyvern",
          "x": 10,
          "y": 14,
          "level": 16,
          "guardian": false
        },
        {
          "id": "highland_mob_8",
          "monster": "highland_orc",
          "x": 18,
          "y": 14,
          "level": 16,
          "guardian": false
        },
        {
          "id": "highland_mob_9",
          "monster": "moss_ent",
          "x": 26,
          "y": 14,
          "level": 17,
          "guardian": false
        },
        {
          "id": "highland_mob_10",
          "monster": "venom_spider",
          "x": 34,
          "y": 14,
          "level": 16,
          "guardian": false
        },
        {
          "id": "highland_mob_11",
          "monster": "stone_wyvern",
          "x": 40,
          "y": 18,
          "level": 16,
          "guardian": false
        },
        {
          "id": "highland_mob_12",
          "monster": "highland_orc",
          "x": 9,
          "y": 23,
          "level": 17,
          "guardian": false
        },
        {
          "id": "highland_mob_13",
          "monster": "moss_ent",
          "x": 15,
          "y": 25,
          "level": 16,
          "guardian": false
        },
        {
          "id": "highland_mob_14",
          "monster": "venom_spider",
          "x": 22,
          "y": 24,
          "level": 16,
          "guardian": false
        },
        {
          "id": "highland_mob_15",
          "monster": "stone_wyvern",
          "x": 29,
          "y": 25,
          "level": 17,
          "guardian": false
        },
        {
          "id": "highland_mob_16",
          "monster": "highland_orc",
          "x": 36,
          "y": 26,
          "level": 16,
          "guardian": false
        },
        {
          "id": "highland_mob_17",
          "monster": "moss_ent",
          "x": 43,
          "y": 25,
          "level": 16,
          "guardian": false
        },
        {
          "id": "highland_mob_18",
          "monster": "venom_spider",
          "x": 12,
          "y": 29,
          "level": 17,
          "guardian": false
        },
        {
          "id": "highland_mob_19",
          "monster": "stone_wyvern",
          "x": 24,
          "y": 29,
          "level": 16,
          "guardian": false
        },
        {
          "id": "highland_mob_20",
          "monster": "highland_orc",
          "x": 37,
          "y": 30,
          "level": 16,
          "guardian": false
        },
        {
          "id": "highland_mob_21",
          "monster": "moss_ent",
          "x": 43,
          "y": 30,
          "level": 17,
          "guardian": false
        },
        {
          "id": "highland_mob_22",
          "monster": "venom_spider",
          "x": 20,
          "y": 20,
          "level": 16,
          "guardian": false
        },
        {
          "id": "highland_mob_23",
          "monster": "stone_wyvern",
          "x": 32,
          "y": 20,
          "level": 16,
          "guardian": false
        },
        {
          "id": "highland_elite",
          "monster": "highland_elite",
          "x": 40,
          "y": 28,
          "level": 18,
          "guardian": false,
          "patrol": [
            [
              40,
              28
            ],
            [
              43,
              24
            ],
            [
              35,
              23
            ]
          ]
        },
        {
          "id": "world_highland",
          "monster": "world_highland",
          "x": 39,
          "y": 23,
          "level": 19,
          "guardian": false,
          "respawn": 600
        }
      ],
      "resources": [
        {
          "id": "highland_resource_0",
          "x": 11,
          "y": 5,
          "type": "ore",
          "sprite": "ore",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "highland_resource_1",
          "x": 23,
          "y": 30,
          "type": "herb",
          "sprite": "herb",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "highland_resource_2",
          "x": 34,
          "y": 4,
          "type": "wood",
          "sprite": "wood",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "highland_resource_3",
          "x": 8,
          "y": 27,
          "type": "crystal",
          "sprite": "crystal",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "highland_resource_4",
          "x": 28,
          "y": 24,
          "type": "moonstone",
          "sprite": "crystal",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "highland_resource_5",
          "x": 39,
          "y": 29,
          "type": "ember",
          "sprite": "crystal",
          "amount": 1,
          "respawn": 120
        }
      ],
      "chests": [
        {
          "id": "highland_cache_0",
          "x": 15,
          "y": 4,
          "gold": 26,
          "materials": {
            "ore": 2,
            "crystal": 1
          },
          "equipmentChance": 0.12
        },
        {
          "id": "highland_cache_1",
          "x": 29,
          "y": 30,
          "gold": 26,
          "materials": {
            "ore": 2,
            "crystal": 1
          },
          "equipmentChance": 0.12
        },
        {
          "id": "highland_cache_2",
          "x": 43,
          "y": 4,
          "gold": 26,
          "materials": {
            "ore": 2,
            "crystal": 1
          },
          "equipmentChance": 0.12
        }
      ],
      "discoveries": [
        {
          "id": "highland_poi_0",
          "name": "가시바람 잊힌 망루",
          "kind": "landmark",
          "sprite": "ruin",
          "x": 20,
          "y": 4,
          "description": "지역의 역사와 봉인의 흔적을 조사했습니다.",
          "stats": [],
          "rewards": {
            "xp": 144,
            "gold": 26,
            "reputation": {
              "arcanum": 4
            }
          }
        },
        {
          "id": "highland_poi_1",
          "name": "가시바람 지역의 성소",
          "kind": "shrine",
          "sprite": "waystone",
          "x": 42,
          "y": 30,
          "description": "지역의 역사와 봉인의 흔적을 조사했습니다.",
          "stats": [
            {
              "stat": "hp",
              "op": "add",
              "value": 5
            }
          ],
          "rewards": {
            "xp": 144,
            "gold": 26,
            "reputation": {
              "arcanum": 4
            }
          }
        }
      ],
      "events": [
        {
          "id": "highland_event_0",
          "name": "전초기지 토벌",
          "x": 24,
          "y": 5,
          "sprite": "camp",
          "description": "두 차례 몰려오는 몬스터를 모두 격파하세요.",
          "spawns": [
            {
              "monster": "highland_orc",
              "x": 23,
              "y": 5,
              "level": 16,
              "guardian": false
            },
            {
              "monster": "moss_ent",
              "x": 25,
              "y": 5,
              "level": 16,
              "guardian": false
            },
            {
              "monster": "venom_spider",
              "x": 23,
              "y": 7,
              "level": 16,
              "guardian": false
            }
          ],
          "waves": [
            [
              {
                "monster": "highland_orc",
                "x": 23,
                "y": 5,
                "level": 16,
                "guardian": false
              },
              {
                "monster": "moss_ent",
                "x": 25,
                "y": 5,
                "level": 16,
                "guardian": false
              },
              {
                "monster": "venom_spider",
                "x": 23,
                "y": 7,
                "level": 16,
                "guardian": false
              }
            ],
            [
              {
                "monster": "highland_orc",
                "x": 23,
                "y": 5,
                "level": 16,
                "guardian": false
              },
              {
                "monster": "moss_ent",
                "x": 25,
                "y": 5,
                "level": 16,
                "guardian": false
              },
              {
                "monster": "venom_spider",
                "x": 23,
                "y": 7,
                "level": 16,
                "guardian": false
              },
              {
                "monster": "stone_wyvern",
                "x": 25,
                "y": 7,
                "level": 16,
                "guardian": false
              }
            ]
          ],
          "cooldown": 420,
          "rewards": {
            "xp": 150,
            "gold": 52,
            "materials": {
              "sigil": 1
            },
            "reputation": {
              "rangers": 6
            }
          }
        },
        {
          "id": "highland_event_1",
          "name": "봉인 방어전",
          "x": 34,
          "y": 29,
          "sprite": "camp",
          "description": "두 차례 몰려오는 몬스터를 모두 격파하세요.",
          "spawns": [
            {
              "monster": "moss_ent",
              "x": 33,
              "y": 29,
              "level": 16,
              "guardian": false
            },
            {
              "monster": "venom_spider",
              "x": 35,
              "y": 29,
              "level": 16,
              "guardian": false
            },
            {
              "monster": "stone_wyvern",
              "x": 33,
              "y": 31,
              "level": 16,
              "guardian": false
            }
          ],
          "waves": [
            [
              {
                "monster": "moss_ent",
                "x": 33,
                "y": 29,
                "level": 16,
                "guardian": false
              },
              {
                "monster": "venom_spider",
                "x": 35,
                "y": 29,
                "level": 16,
                "guardian": false
              },
              {
                "monster": "stone_wyvern",
                "x": 33,
                "y": 31,
                "level": 16,
                "guardian": false
              }
            ],
            [
              {
                "monster": "moss_ent",
                "x": 33,
                "y": 29,
                "level": 16,
                "guardian": false
              },
              {
                "monster": "venom_spider",
                "x": 35,
                "y": 29,
                "level": 16,
                "guardian": false
              },
              {
                "monster": "stone_wyvern",
                "x": 33,
                "y": 31,
                "level": 16,
                "guardian": false
              },
              {
                "monster": "highland_orc",
                "x": 35,
                "y": 31,
                "level": 16,
                "guardian": false
              }
            ]
          ],
          "cooldown": 420,
          "rewards": {
            "xp": 150,
            "gold": 52,
            "materials": {
              "sigil": 1
            },
            "reputation": {
              "wardens": 6
            }
          }
        }
      ],
      "mechanisms": [],
      "zones": [],
      "waypoint": [
        5,
        17
      ]
    },
    "snowfield": {
      "id": "snowfield",
      "name": "백서리 설원",
      "kind": "field",
      "width": 48,
      "height": 34,
      "level": 22,
      "music": "field",
      "spawn": [
        3.5,
        17.5
      ],
      "tiles": [
        "tttttttttttttttttttttttttttttttttttttttttttttttt",
        "tnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnt",
        "tnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnt",
        "tnnnnnn~nnnnnnn~nnnnnnn~nnnnnnn~nnnnnnn~nnnnnnnt",
        "tnnnnnn~nnnnnnn:nnnnnnn~nnnnnnn~nnnnnnn~nnnnnnnt",
        "tnnnnnn~nnnnnnn:nnnnnnn~nnnnnnn~nnnnnnn~nnnnnnnt",
        "tnnnnnn~nnnnnnn:nnnnnnn~nnnnnnn~nnnnnnn~nnnnnnnt",
        "tnnnnnn~nnnnnnn:nnnnnnn~nnnnnnn~nnnnnnn~nnnnnnnt",
        "tnnnnnn~nnnnnnn:nnnnnnn~nnnnnnn~nnnnnnn~nnnnnnnt",
        "tnnnnnn~nnnnnnn:nnnnnnn~nnnnnnn~nnnnnnn~nnnnnnnt",
        "tnnnnnn~nnnnnnn:nnnnnnn~nnnnnnn~nnnnnnnnnnnnnnnt",
        "tnnnnnn~nnnnnnn:nnnnnnn~nnnnnnn~nnnnnnnnnnnnnnnt",
        "tnnnnnn~nnnnnnn:nnnnnnnnnnnnnnn~nnnnnnnnnnnnnnnt",
        "tnnnnnn~nnnnnnn:nnnnnnnnnnnnnnn~nnnnnnnnnnnnnnnt",
        "tnnnnnnnnnnnnnn:nnnnnnnnnnnnnnn~nnnnnnnnnnnnnnnt",
        "tnnnnnnnnnnnnnn:nnnnnnnnnnnnnnn~nnnnnnn~nnnnnnnt",
        "tnnnnnnnnnnnnnn:nnnnnnnnnnnnnnn~nnnnnnn~nnnnnnnt",
        "tn::::::::::::::::::::::::::::::::::::::::::::nt",
        "tn::::::::::::::::::::::::::::::::::::::::::::nt",
        "tnnnnnn:nnnnnnn:nnnnnnn:nnnnnnn~nnnnnnn:nnnnnnnt",
        "tnnnnnn:nnnnnnn:nnnnnnn:nnnnnnnnnnnnnnn:nnnnnnnt",
        "tnnnnnn:nnnnnnn:nnnnnnn:nnnnnnnnnnnnnnn:nnnnnnnt",
        "tnnnnnn:nnnnnnnnnnnnnnn:nnnnnnnnnnnnnnn:nnnnnnnt",
        "tnnnnnn:nnnnnnnnnnnnnnn:nnnnnnnnnnnnnnn:nnnnnnnt",
        "tnnnnnn:nnnnnnnnnnnnnnn:nnnnnnnnnnnnnnn:nnnnnnnt",
        "tnnnnnn:nnnnnnnnnnnnnnn:nnnnnnn~nnnnnnn:nnnnnnnt",
        "tnnnnnn:nnnnnnnnnnnnnnn:nnnnnnn~nnnnnnn:nnnnnnnt",
        "tnnnnnn:nnnnnnn~nnnnnnn:nnnnnnn~nnnnnnn:nnnnnnnt",
        "tnnnnnn:nnnnnnn~nnnnnnn:nnnnnnn~nnnnnnn:nnnnnnnt",
        "tnnnnnn:nnnnnnn~nnnnnnn:nnnnnnn~nnnnnnn:nnnnnnnt",
        "tnnnnnn~nnnnnnn~nnnnnnn:nnnnnnn~nnnnnnn~nnnnnnnt",
        "tnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnt",
        "tnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnt",
        "tttttttttttttttttttttttttttttttttttttttttttttttt"
      ],
      "props": [],
      "npcs": [
        {
          "id": "snowfield_stone",
          "name": "여행의 돌",
          "service": "waystone",
          "x": 5,
          "y": 17
        },
        {
          "id": "snowfield_vendor",
          "name": "원정 상인",
          "service": "merchant",
          "x": 7,
          "y": 29,
          "vendorType": "wanderer",
          "schedule": {
            "period": 300,
            "activeFor": 150,
            "offset": 40
          }
        }
      ],
      "portals": [
        {
          "id": "to_frostgate",
          "name": "서리문 요새",
          "x": 2,
          "y": 17,
          "to": "frostgate",
          "spawn": [
            34,
            14.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "to_sunwaste",
          "name": "붉은 해 사막",
          "x": 45,
          "y": 17,
          "to": "sunwaste",
          "spawn": [
            3.5,
            17.5
          ],
          "requiresQuest": "frost_crown",
          "requiresGuardians": false
        },
        {
          "id": "frost_entry",
          "name": "빙관의 지하성",
          "x": 42,
          "y": 4,
          "to": "frost_depth_1",
          "spawn": [
            3.5,
            15.5
          ],
          "requiresQuest": "frost_hunt",
          "requiresGuardians": false
        }
      ],
      "spawns": [
        {
          "id": "snowfield_mob_0",
          "monster": "frost_wolf",
          "x": 8,
          "y": 8,
          "level": 23,
          "guardian": false
        },
        {
          "id": "snowfield_mob_1",
          "monster": "ice_wraith",
          "x": 13,
          "y": 7,
          "level": 22,
          "guardian": false
        },
        {
          "id": "snowfield_mob_2",
          "monster": "snow_golem",
          "x": 19,
          "y": 9,
          "level": 22,
          "guardian": false
        },
        {
          "id": "snowfield_mob_3",
          "monster": "frost_wolf",
          "x": 26,
          "y": 7,
          "level": 23,
          "guardian": false
        },
        {
          "id": "snowfield_mob_4",
          "monster": "ice_wraith",
          "x": 33,
          "y": 8,
          "level": 22,
          "guardian": false
        },
        {
          "id": "snowfield_mob_5",
          "monster": "snow_golem",
          "x": 40,
          "y": 7,
          "level": 22,
          "guardian": false
        },
        {
          "id": "snowfield_mob_6",
          "monster": "frost_wolf",
          "x": 43,
          "y": 12,
          "level": 23,
          "guardian": false
        },
        {
          "id": "snowfield_mob_7",
          "monster": "ice_wraith",
          "x": 10,
          "y": 14,
          "level": 22,
          "guardian": false
        },
        {
          "id": "snowfield_mob_8",
          "monster": "snow_golem",
          "x": 18,
          "y": 14,
          "level": 22,
          "guardian": false
        },
        {
          "id": "snowfield_mob_9",
          "monster": "frost_wolf",
          "x": 26,
          "y": 14,
          "level": 23,
          "guardian": false
        },
        {
          "id": "snowfield_mob_10",
          "monster": "ice_wraith",
          "x": 34,
          "y": 14,
          "level": 22,
          "guardian": false
        },
        {
          "id": "snowfield_mob_11",
          "monster": "snow_golem",
          "x": 40,
          "y": 18,
          "level": 22,
          "guardian": false
        },
        {
          "id": "snowfield_mob_12",
          "monster": "frost_wolf",
          "x": 9,
          "y": 23,
          "level": 23,
          "guardian": false
        },
        {
          "id": "snowfield_mob_13",
          "monster": "ice_wraith",
          "x": 15,
          "y": 25,
          "level": 22,
          "guardian": false
        },
        {
          "id": "snowfield_mob_14",
          "monster": "snow_golem",
          "x": 22,
          "y": 24,
          "level": 22,
          "guardian": false
        },
        {
          "id": "snowfield_mob_15",
          "monster": "frost_wolf",
          "x": 29,
          "y": 25,
          "level": 23,
          "guardian": false
        },
        {
          "id": "snowfield_mob_16",
          "monster": "ice_wraith",
          "x": 36,
          "y": 26,
          "level": 22,
          "guardian": false
        },
        {
          "id": "snowfield_mob_17",
          "monster": "snow_golem",
          "x": 43,
          "y": 25,
          "level": 22,
          "guardian": false
        },
        {
          "id": "snowfield_mob_18",
          "monster": "frost_wolf",
          "x": 12,
          "y": 29,
          "level": 23,
          "guardian": false
        },
        {
          "id": "snowfield_mob_19",
          "monster": "ice_wraith",
          "x": 24,
          "y": 29,
          "level": 22,
          "guardian": false
        },
        {
          "id": "snowfield_mob_20",
          "monster": "snow_golem",
          "x": 37,
          "y": 30,
          "level": 22,
          "guardian": false
        },
        {
          "id": "snowfield_mob_21",
          "monster": "frost_wolf",
          "x": 43,
          "y": 30,
          "level": 23,
          "guardian": false
        },
        {
          "id": "snowfield_mob_22",
          "monster": "ice_wraith",
          "x": 20,
          "y": 20,
          "level": 22,
          "guardian": false
        },
        {
          "id": "snowfield_mob_23",
          "monster": "snow_golem",
          "x": 32,
          "y": 20,
          "level": 22,
          "guardian": false
        },
        {
          "id": "snowfield_elite",
          "monster": "snowfield_elite",
          "x": 40,
          "y": 28,
          "level": 24,
          "guardian": false,
          "patrol": [
            [
              40,
              28
            ],
            [
              43,
              24
            ],
            [
              35,
              23
            ]
          ]
        },
        {
          "id": "world_snowfield",
          "monster": "world_snowfield",
          "x": 39,
          "y": 23,
          "level": 25,
          "guardian": false,
          "respawn": 600
        }
      ],
      "resources": [
        {
          "id": "snowfield_resource_0",
          "x": 11,
          "y": 5,
          "type": "ore",
          "sprite": "ore",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "snowfield_resource_1",
          "x": 23,
          "y": 30,
          "type": "herb",
          "sprite": "herb",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "snowfield_resource_2",
          "x": 34,
          "y": 4,
          "type": "wood",
          "sprite": "wood",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "snowfield_resource_3",
          "x": 8,
          "y": 27,
          "type": "crystal",
          "sprite": "crystal",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "snowfield_resource_4",
          "x": 28,
          "y": 24,
          "type": "moonstone",
          "sprite": "crystal",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "snowfield_resource_5",
          "x": 39,
          "y": 29,
          "type": "ember",
          "sprite": "crystal",
          "amount": 1,
          "respawn": 120
        }
      ],
      "chests": [
        {
          "id": "snowfield_cache_0",
          "x": 15,
          "y": 4,
          "gold": 32,
          "materials": {
            "ore": 2,
            "crystal": 1
          },
          "equipmentChance": 0.12
        },
        {
          "id": "snowfield_cache_1",
          "x": 29,
          "y": 30,
          "gold": 32,
          "materials": {
            "ore": 2,
            "crystal": 1
          },
          "equipmentChance": 0.12
        },
        {
          "id": "snowfield_cache_2",
          "x": 43,
          "y": 4,
          "gold": 32,
          "materials": {
            "ore": 2,
            "crystal": 1
          },
          "equipmentChance": 0.12
        }
      ],
      "discoveries": [
        {
          "id": "snowfield_poi_0",
          "name": "백서리 잊힌 망루",
          "kind": "landmark",
          "sprite": "ruin",
          "x": 20,
          "y": 4,
          "description": "지역의 역사와 봉인의 흔적을 조사했습니다.",
          "stats": [],
          "rewards": {
            "xp": 168,
            "gold": 32,
            "reputation": {
              "arcanum": 4
            }
          }
        },
        {
          "id": "snowfield_poi_1",
          "name": "백서리 지역의 성소",
          "kind": "shrine",
          "sprite": "waystone",
          "x": 42,
          "y": 30,
          "description": "지역의 역사와 봉인의 흔적을 조사했습니다.",
          "stats": [
            {
              "stat": "hp",
              "op": "add",
              "value": 5
            }
          ],
          "rewards": {
            "xp": 168,
            "gold": 32,
            "reputation": {
              "arcanum": 4
            }
          }
        }
      ],
      "events": [
        {
          "id": "snowfield_event_0",
          "name": "전초기지 토벌",
          "x": 24,
          "y": 5,
          "sprite": "camp",
          "description": "두 차례 몰려오는 몬스터를 모두 격파하세요.",
          "spawns": [
            {
              "monster": "frost_wolf",
              "x": 23,
              "y": 5,
              "level": 22,
              "guardian": false
            },
            {
              "monster": "ice_wraith",
              "x": 25,
              "y": 5,
              "level": 22,
              "guardian": false
            },
            {
              "monster": "snow_golem",
              "x": 23,
              "y": 7,
              "level": 22,
              "guardian": false
            }
          ],
          "waves": [
            [
              {
                "monster": "frost_wolf",
                "x": 23,
                "y": 5,
                "level": 22,
                "guardian": false
              },
              {
                "monster": "ice_wraith",
                "x": 25,
                "y": 5,
                "level": 22,
                "guardian": false
              },
              {
                "monster": "snow_golem",
                "x": 23,
                "y": 7,
                "level": 22,
                "guardian": false
              }
            ],
            [
              {
                "monster": "frost_wolf",
                "x": 23,
                "y": 5,
                "level": 22,
                "guardian": false
              },
              {
                "monster": "ice_wraith",
                "x": 25,
                "y": 5,
                "level": 22,
                "guardian": false
              },
              {
                "monster": "snow_golem",
                "x": 23,
                "y": 7,
                "level": 22,
                "guardian": false
              },
              {
                "monster": "frost_wolf",
                "x": 25,
                "y": 7,
                "level": 22,
                "guardian": false
              }
            ]
          ],
          "cooldown": 420,
          "rewards": {
            "xp": 180,
            "gold": 64,
            "materials": {
              "sigil": 1
            },
            "reputation": {
              "rangers": 6
            }
          }
        },
        {
          "id": "snowfield_event_1",
          "name": "봉인 방어전",
          "x": 34,
          "y": 29,
          "sprite": "camp",
          "description": "두 차례 몰려오는 몬스터를 모두 격파하세요.",
          "spawns": [
            {
              "monster": "ice_wraith",
              "x": 33,
              "y": 29,
              "level": 22,
              "guardian": false
            },
            {
              "monster": "snow_golem",
              "x": 35,
              "y": 29,
              "level": 22,
              "guardian": false
            },
            {
              "monster": "frost_wolf",
              "x": 33,
              "y": 31,
              "level": 22,
              "guardian": false
            }
          ],
          "waves": [
            [
              {
                "monster": "ice_wraith",
                "x": 33,
                "y": 29,
                "level": 22,
                "guardian": false
              },
              {
                "monster": "snow_golem",
                "x": 35,
                "y": 29,
                "level": 22,
                "guardian": false
              },
              {
                "monster": "frost_wolf",
                "x": 33,
                "y": 31,
                "level": 22,
                "guardian": false
              }
            ],
            [
              {
                "monster": "ice_wraith",
                "x": 33,
                "y": 29,
                "level": 22,
                "guardian": false
              },
              {
                "monster": "snow_golem",
                "x": 35,
                "y": 29,
                "level": 22,
                "guardian": false
              },
              {
                "monster": "frost_wolf",
                "x": 33,
                "y": 31,
                "level": 22,
                "guardian": false
              },
              {
                "monster": "ice_wraith",
                "x": 35,
                "y": 31,
                "level": 22,
                "guardian": false
              }
            ]
          ],
          "cooldown": 420,
          "rewards": {
            "xp": 180,
            "gold": 64,
            "materials": {
              "sigil": 1
            },
            "reputation": {
              "wardens": 6
            }
          }
        }
      ],
      "mechanisms": [],
      "zones": [],
      "waypoint": [
        5,
        17
      ]
    },
    "sunwaste": {
      "id": "sunwaste",
      "name": "붉은 해 사막",
      "kind": "field",
      "width": 48,
      "height": 34,
      "level": 28,
      "music": "field",
      "spawn": [
        3.5,
        17.5
      ],
      "tiles": [
        "tttttttttttttttttttttttttttttttttttttttttttttttt",
        "trrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrt",
        "trrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrt",
        "trrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#rrrrrrrt",
        "trrrrrr#rrrrrrr:rrrrrrr#rrrrrrr#rrrrrrr#rrrrrrrt",
        "trrrrrr#rrrrrrr:rrrrrrr#rrrrrrr#rrrrrrr#rrrrrrrt",
        "trrrrrr#rrrrrrr:rrrrrrr#rrrrrrr#rrrrrrr#rrrrrrrt",
        "trrrrrr#rrrrrrr:rrrrrrr#rrrrrrr#rrrrrrr#rrrrrrrt",
        "trrrrrr#rrrrrrr:rrrrrrr#rrrrrrr#rrrrrrr#rrrrrrrt",
        "trrrrrr#rrrrrrr:rrrrrrr#rrrrrrr#rrrrrrr#rrrrrrrt",
        "trrrrrr#rrrrrrr:rrrrrrr#rrrrrrr#rrrrrrr#rrrrrrrt",
        "trrrrrr#rrrrrrr:rrrrrrr#rrrrrrr#rrrrrrrrrrrrrrrt",
        "trrrrrr#rrrrrrr:rrrrrrr#rrrrrrr#rrrrrrrrrrrrrrrt",
        "trrrrrr#rrrrrrr:rrrrrrrrrrrrrrr#rrrrrrrrrrrrrrrt",
        "trrrrrr#rrrrrrr:rrrrrrrrrrrrrrr#rrrrrrrrrrrrrrrt",
        "trrrrrrrrrrrrrr:rrrrrrrrrrrrrrr#rrrrrrrrrrrrrrrt",
        "trrrrrrrrrrrrrr:rrrrrrrrrrrrrrr#rrrrrrr#rrrrrrrt",
        "tr::::::::::::::::::::::::::::::::::::::::::::rt",
        "tr::::::::::::::::::::::::::::::::::::::::::::rt",
        "trrrrrrrrrrrrrr:rrrrrrr:rrrrrrr#rrrrrrr:rrrrrrrt",
        "trrrrrr:rrrrrrr:rrrrrrr:rrrrrrr#rrrrrrr:rrrrrrrt",
        "trrrrrr:rrrrrrr:rrrrrrr:rrrrrrrrrrrrrrr:rrrrrrrt",
        "trrrrrr:rrrrrrr:rrrrrrr:rrrrrrrrrrrrrrr:rrrrrrrt",
        "trrrrrr:rrrrrrrrrrrrrrr:rrrrrrrrrrrrrrr:rrrrrrrt",
        "trrrrrr:rrrrrrrrrrrrrrr:rrrrrrrrrrrrrrr:rrrrrrrt",
        "trrrrrr:rrrrrrrrrrrrrrr:rrrrrrrrrrrrrrr:rrrrrrrt",
        "trrrrrr:rrrrrrrrrrrrrrr:rrrrrrr#rrrrrrr:rrrrrrrt",
        "trrrrrr:rrrrrrrrrrrrrrr:rrrrrrr#rrrrrrr:rrrrrrrt",
        "trrrrrr:rrrrrrr#rrrrrrr:rrrrrrr#rrrrrrr:rrrrrrrt",
        "trrrrrr:rrrrrrr#rrrrrrr:rrrrrrr#rrrrrrr:rrrrrrrt",
        "trrrrrr#rrrrrrr#rrrrrrr:rrrrrrr#rrrrrrr#rrrrrrrt",
        "trrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrt",
        "trrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrt",
        "tttttttttttttttttttttttttttttttttttttttttttttttt"
      ],
      "props": [],
      "npcs": [
        {
          "id": "sunwaste_stone",
          "name": "여행의 돌",
          "service": "waystone",
          "x": 5,
          "y": 17
        },
        {
          "id": "sunwaste_vendor",
          "name": "원정 상인",
          "service": "merchant",
          "x": 7,
          "y": 29,
          "vendorType": "wanderer",
          "schedule": {
            "period": 300,
            "activeFor": 150,
            "offset": 80
          }
        }
      ],
      "portals": [
        {
          "id": "to_snowfield",
          "name": "백서리 설원",
          "x": 2,
          "y": 17,
          "to": "snowfield",
          "spawn": [
            44,
            17.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "to_sunharbor",
          "name": "태양나루",
          "x": 45,
          "y": 17,
          "to": "sunharbor",
          "spawn": [
            3.5,
            14.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "sun_entry",
          "name": "태양의 신전",
          "x": 42,
          "y": 4,
          "to": "sun_depth_1",
          "spawn": [
            3.5,
            15.5
          ],
          "requiresQuest": "sun_hunt",
          "requiresGuardians": false
        }
      ],
      "spawns": [
        {
          "id": "sunwaste_mob_0",
          "monster": "sand_scorpion",
          "x": 8,
          "y": 8,
          "level": 29,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_1",
          "monster": "dune_raider",
          "x": 13,
          "y": 7,
          "level": 28,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_2",
          "monster": "ember_drake",
          "x": 19,
          "y": 9,
          "level": 28,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_3",
          "monster": "sand_scorpion",
          "x": 26,
          "y": 7,
          "level": 29,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_4",
          "monster": "dune_raider",
          "x": 33,
          "y": 8,
          "level": 28,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_5",
          "monster": "ember_drake",
          "x": 40,
          "y": 7,
          "level": 28,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_6",
          "monster": "sand_scorpion",
          "x": 43,
          "y": 12,
          "level": 29,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_7",
          "monster": "dune_raider",
          "x": 10,
          "y": 14,
          "level": 28,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_8",
          "monster": "ember_drake",
          "x": 18,
          "y": 14,
          "level": 28,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_9",
          "monster": "sand_scorpion",
          "x": 26,
          "y": 14,
          "level": 29,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_10",
          "monster": "dune_raider",
          "x": 34,
          "y": 14,
          "level": 28,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_11",
          "monster": "ember_drake",
          "x": 40,
          "y": 18,
          "level": 28,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_12",
          "monster": "sand_scorpion",
          "x": 9,
          "y": 23,
          "level": 29,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_13",
          "monster": "dune_raider",
          "x": 15,
          "y": 25,
          "level": 28,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_14",
          "monster": "ember_drake",
          "x": 22,
          "y": 24,
          "level": 28,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_15",
          "monster": "sand_scorpion",
          "x": 29,
          "y": 25,
          "level": 29,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_16",
          "monster": "dune_raider",
          "x": 36,
          "y": 26,
          "level": 28,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_17",
          "monster": "ember_drake",
          "x": 43,
          "y": 25,
          "level": 28,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_18",
          "monster": "sand_scorpion",
          "x": 12,
          "y": 29,
          "level": 29,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_19",
          "monster": "dune_raider",
          "x": 24,
          "y": 29,
          "level": 28,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_20",
          "monster": "ember_drake",
          "x": 37,
          "y": 30,
          "level": 28,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_21",
          "monster": "sand_scorpion",
          "x": 43,
          "y": 30,
          "level": 29,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_22",
          "monster": "dune_raider",
          "x": 20,
          "y": 20,
          "level": 28,
          "guardian": false
        },
        {
          "id": "sunwaste_mob_23",
          "monster": "ember_drake",
          "x": 32,
          "y": 20,
          "level": 28,
          "guardian": false
        },
        {
          "id": "sunwaste_elite",
          "monster": "sunwaste_elite",
          "x": 40,
          "y": 28,
          "level": 30,
          "guardian": false,
          "patrol": [
            [
              40,
              28
            ],
            [
              43,
              24
            ],
            [
              35,
              23
            ]
          ]
        }
      ],
      "resources": [
        {
          "id": "sunwaste_resource_0",
          "x": 11,
          "y": 5,
          "type": "ore",
          "sprite": "ore",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "sunwaste_resource_1",
          "x": 23,
          "y": 30,
          "type": "herb",
          "sprite": "herb",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "sunwaste_resource_2",
          "x": 34,
          "y": 4,
          "type": "wood",
          "sprite": "wood",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "sunwaste_resource_3",
          "x": 8,
          "y": 27,
          "type": "crystal",
          "sprite": "crystal",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "sunwaste_resource_4",
          "x": 28,
          "y": 24,
          "type": "moonstone",
          "sprite": "crystal",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "sunwaste_resource_5",
          "x": 39,
          "y": 29,
          "type": "ember",
          "sprite": "crystal",
          "amount": 1,
          "respawn": 120
        }
      ],
      "chests": [
        {
          "id": "sunwaste_cache_0",
          "x": 15,
          "y": 4,
          "gold": 38,
          "materials": {
            "ore": 2,
            "crystal": 1
          },
          "equipmentChance": 0.12
        },
        {
          "id": "sunwaste_cache_1",
          "x": 29,
          "y": 30,
          "gold": 38,
          "materials": {
            "ore": 2,
            "crystal": 1
          },
          "equipmentChance": 0.12
        },
        {
          "id": "sunwaste_cache_2",
          "x": 43,
          "y": 4,
          "gold": 38,
          "materials": {
            "ore": 2,
            "crystal": 1
          },
          "equipmentChance": 0.12
        }
      ],
      "discoveries": [
        {
          "id": "sunwaste_poi_0",
          "name": "붉은 잊힌 망루",
          "kind": "landmark",
          "sprite": "ruin",
          "x": 20,
          "y": 4,
          "description": "지역의 역사와 봉인의 흔적을 조사했습니다.",
          "stats": [],
          "rewards": {
            "xp": 192,
            "gold": 38,
            "reputation": {
              "arcanum": 4
            }
          }
        },
        {
          "id": "sunwaste_poi_1",
          "name": "붉은 지역의 성소",
          "kind": "shrine",
          "sprite": "waystone",
          "x": 42,
          "y": 30,
          "description": "지역의 역사와 봉인의 흔적을 조사했습니다.",
          "stats": [
            {
              "stat": "hp",
              "op": "add",
              "value": 5
            }
          ],
          "rewards": {
            "xp": 192,
            "gold": 38,
            "reputation": {
              "arcanum": 4
            }
          }
        }
      ],
      "events": [
        {
          "id": "sunwaste_event_0",
          "name": "전초기지 토벌",
          "x": 24,
          "y": 5,
          "sprite": "camp",
          "description": "두 차례 몰려오는 몬스터를 모두 격파하세요.",
          "spawns": [
            {
              "monster": "sand_scorpion",
              "x": 23,
              "y": 5,
              "level": 28,
              "guardian": false
            },
            {
              "monster": "dune_raider",
              "x": 25,
              "y": 5,
              "level": 28,
              "guardian": false
            },
            {
              "monster": "ember_drake",
              "x": 23,
              "y": 7,
              "level": 28,
              "guardian": false
            }
          ],
          "waves": [
            [
              {
                "monster": "sand_scorpion",
                "x": 23,
                "y": 5,
                "level": 28,
                "guardian": false
              },
              {
                "monster": "dune_raider",
                "x": 25,
                "y": 5,
                "level": 28,
                "guardian": false
              },
              {
                "monster": "ember_drake",
                "x": 23,
                "y": 7,
                "level": 28,
                "guardian": false
              }
            ],
            [
              {
                "monster": "sand_scorpion",
                "x": 23,
                "y": 5,
                "level": 28,
                "guardian": false
              },
              {
                "monster": "dune_raider",
                "x": 25,
                "y": 5,
                "level": 28,
                "guardian": false
              },
              {
                "monster": "ember_drake",
                "x": 23,
                "y": 7,
                "level": 28,
                "guardian": false
              },
              {
                "monster": "sand_scorpion",
                "x": 25,
                "y": 7,
                "level": 28,
                "guardian": false
              }
            ]
          ],
          "cooldown": 420,
          "rewards": {
            "xp": 210,
            "gold": 76,
            "materials": {
              "sigil": 1
            },
            "reputation": {
              "rangers": 6
            }
          }
        },
        {
          "id": "sunwaste_event_1",
          "name": "봉인 방어전",
          "x": 34,
          "y": 29,
          "sprite": "camp",
          "description": "두 차례 몰려오는 몬스터를 모두 격파하세요.",
          "spawns": [
            {
              "monster": "dune_raider",
              "x": 33,
              "y": 29,
              "level": 28,
              "guardian": false
            },
            {
              "monster": "ember_drake",
              "x": 35,
              "y": 29,
              "level": 28,
              "guardian": false
            },
            {
              "monster": "sand_scorpion",
              "x": 33,
              "y": 31,
              "level": 28,
              "guardian": false
            }
          ],
          "waves": [
            [
              {
                "monster": "dune_raider",
                "x": 33,
                "y": 29,
                "level": 28,
                "guardian": false
              },
              {
                "monster": "ember_drake",
                "x": 35,
                "y": 29,
                "level": 28,
                "guardian": false
              },
              {
                "monster": "sand_scorpion",
                "x": 33,
                "y": 31,
                "level": 28,
                "guardian": false
              }
            ],
            [
              {
                "monster": "dune_raider",
                "x": 33,
                "y": 29,
                "level": 28,
                "guardian": false
              },
              {
                "monster": "ember_drake",
                "x": 35,
                "y": 29,
                "level": 28,
                "guardian": false
              },
              {
                "monster": "sand_scorpion",
                "x": 33,
                "y": 31,
                "level": 28,
                "guardian": false
              },
              {
                "monster": "dune_raider",
                "x": 35,
                "y": 31,
                "level": 28,
                "guardian": false
              }
            ]
          ],
          "cooldown": 420,
          "rewards": {
            "xp": 210,
            "gold": 76,
            "materials": {
              "sigil": 1
            },
            "reputation": {
              "wardens": 6
            }
          }
        }
      ],
      "mechanisms": [],
      "zones": [],
      "waypoint": [
        5,
        17
      ]
    },
    "gravewood": {
      "id": "gravewood",
      "name": "잊힌 왕의 묘역",
      "kind": "field",
      "width": 48,
      "height": 34,
      "level": 34,
      "music": "field",
      "spawn": [
        3.5,
        17.5
      ],
      "tiles": [
        "tttttttttttttttttttttttttttttttttttttttttttttttt",
        "tvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvt",
        "tvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvt",
        "tvvvvvv~vvvvvvv~vvvvvvv~vvvvvvv~vvvvvvv~vvvvvvvt",
        "tvvvvvv~vvvvvvv:vvvvvvv~vvvvvvv~vvvvvvv~vvvvvvvt",
        "tvvvvvv~vvvvvvv:vvvvvvv~vvvvvvv~vvvvvvv~vvvvvvvt",
        "tvvvvvv~vvvvvvvvvvvvvvv~vvvvvvv~vvvvvvv~vvvvvvvt",
        "tvvvvvv~vvvvvvvvvvvvvvv~vvvvvvv~vvvvvvv~vvvvvvvt",
        "tvvvvvv~vvvvvvvvvvvvvvv~vvvvvvv~vvvvvvv~vvvvvvvt",
        "tvvvvvv~vvvvvvvvvvvvvvv~vvvvvvv~vvvvvvv~vvvvvvvt",
        "tvvvvvv~vvvvvvvvvvvvvvv~vvvvvvv~vvvvvvv~vvvvvvvt",
        "tvvvvvv~vvvvvvv:vvvvvvv~vvvvvvv~vvvvvvv~vvvvvvvt",
        "tvvvvvv~vvvvvvv:vvvvvvv~vvvvvvv~vvvvvvvvvvvvvvvt",
        "tvvvvvv~vvvvvvv:vvvvvvv~vvvvvvv~vvvvvvvvvvvvvvvt",
        "tvvvvvv~vvvvvvv:vvvvvvvvvvvvvvv~vvvvvvvvvvvvvvvt",
        "tvvvvvv~vvvvvvv:vvvvvvvvvvvvvvv~vvvvvvvvvvvvvvvt",
        "tvvvvvvvvvvvvvv:vvvvvvvvvvvvvvv~vvvvvvvvvvvvvvvt",
        "tv::::::::::::::::::::::::::::::::::::::::::::vt",
        "tv::::::::::::::::::::::::::::::::::::::::::::vt",
        "tvvvvvvvvvvvvvv:vvvvvvv:vvvvvvv~vvvvvvv:vvvvvvvt",
        "tvvvvvvvvvvvvvv:vvvvvvv:vvvvvvv~vvvvvvv:vvvvvvvt",
        "tvvvvvv:vvvvvvv:vvvvvvv:vvvvvvv~vvvvvvv:vvvvvvvt",
        "tvvvvvv:vvvvvvv:vvvvvvv:vvvvvvvvvvvvvvv:vvvvvvvt",
        "tvvvvvv:vvvvvvv:vvvvvvv:vvvvvvvvvvvvvvv:vvvvvvvt",
        "tvvvvvv:vvvvvvv:vvvvvvv:vvvvvvvvvvvvvvv:vvvvvvvt",
        "tvvvvvv:vvvvvvv:vvvvvvv:vvvvvvvvvvvvvvv:vvvvvvvt",
        "tvvvvvv:vvvvvvv~vvvvvvv:vvvvvvvvvvvvvvv:vvvvvvvt",
        "tvvvvvv:vvvvvvv~vvvvvvv:vvvvvvv~vvvvvvv:vvvvvvvt",
        "tvvvvvv:vvvvvvv~vvvvvvv:vvvvvvv~vvvvvvv:vvvvvvvt",
        "tvvvvvv:vvvvvvv~vvvvvvv:vvvvvvv~vvvvvvv:vvvvvvvt",
        "tvvvvvv~vvvvvvv~vvvvvvv:vvvvvvv~vvvvvvv~vvvvvvvt",
        "tvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvt",
        "tvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvt",
        "tttttttttttttttttttttttttttttttttttttttttttttttt"
      ],
      "props": [],
      "npcs": [
        {
          "id": "gravewood_stone",
          "name": "여행의 돌",
          "service": "waystone",
          "x": 5,
          "y": 17
        },
        {
          "id": "gravewood_vendor",
          "name": "원정 상인",
          "service": "merchant",
          "x": 7,
          "y": 29,
          "vendorType": "wanderer",
          "schedule": {
            "period": 300,
            "activeFor": 150,
            "offset": 120
          }
        }
      ],
      "portals": [
        {
          "id": "to_sunharbor",
          "name": "태양나루",
          "x": 2,
          "y": 17,
          "to": "sunharbor",
          "spawn": [
            34,
            14.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "to_eclipse_plain",
          "name": "황혼의 국경",
          "x": 45,
          "y": 17,
          "to": "eclipse_plain",
          "spawn": [
            3.5,
            17.5
          ],
          "requiresQuest": "grave_crown",
          "requiresGuardians": false
        },
        {
          "id": "grave_entry",
          "name": "왕가의 납골당",
          "x": 42,
          "y": 4,
          "to": "grave_depth_1",
          "spawn": [
            3.5,
            15.5
          ],
          "requiresQuest": "grave_hunt",
          "requiresGuardians": false
        }
      ],
      "spawns": [
        {
          "id": "gravewood_mob_0",
          "monster": "bone_soldier",
          "x": 8,
          "y": 8,
          "level": 35,
          "guardian": false
        },
        {
          "id": "gravewood_mob_1",
          "monster": "grave_knight",
          "x": 13,
          "y": 7,
          "level": 34,
          "guardian": false
        },
        {
          "id": "gravewood_mob_2",
          "monster": "curse_wraith",
          "x": 19,
          "y": 9,
          "level": 34,
          "guardian": false
        },
        {
          "id": "gravewood_mob_3",
          "monster": "bone_soldier",
          "x": 26,
          "y": 7,
          "level": 35,
          "guardian": false
        },
        {
          "id": "gravewood_mob_4",
          "monster": "grave_knight",
          "x": 33,
          "y": 8,
          "level": 34,
          "guardian": false
        },
        {
          "id": "gravewood_mob_5",
          "monster": "curse_wraith",
          "x": 40,
          "y": 7,
          "level": 34,
          "guardian": false
        },
        {
          "id": "gravewood_mob_6",
          "monster": "bone_soldier",
          "x": 43,
          "y": 12,
          "level": 35,
          "guardian": false
        },
        {
          "id": "gravewood_mob_7",
          "monster": "grave_knight",
          "x": 10,
          "y": 14,
          "level": 34,
          "guardian": false
        },
        {
          "id": "gravewood_mob_8",
          "monster": "curse_wraith",
          "x": 18,
          "y": 14,
          "level": 34,
          "guardian": false
        },
        {
          "id": "gravewood_mob_9",
          "monster": "bone_soldier",
          "x": 26,
          "y": 14,
          "level": 35,
          "guardian": false
        },
        {
          "id": "gravewood_mob_10",
          "monster": "grave_knight",
          "x": 34,
          "y": 14,
          "level": 34,
          "guardian": false
        },
        {
          "id": "gravewood_mob_11",
          "monster": "curse_wraith",
          "x": 40,
          "y": 18,
          "level": 34,
          "guardian": false
        },
        {
          "id": "gravewood_mob_12",
          "monster": "bone_soldier",
          "x": 9,
          "y": 23,
          "level": 35,
          "guardian": false
        },
        {
          "id": "gravewood_mob_13",
          "monster": "grave_knight",
          "x": 15,
          "y": 25,
          "level": 34,
          "guardian": false
        },
        {
          "id": "gravewood_mob_14",
          "monster": "curse_wraith",
          "x": 22,
          "y": 24,
          "level": 34,
          "guardian": false
        },
        {
          "id": "gravewood_mob_15",
          "monster": "bone_soldier",
          "x": 29,
          "y": 25,
          "level": 35,
          "guardian": false
        },
        {
          "id": "gravewood_mob_16",
          "monster": "grave_knight",
          "x": 36,
          "y": 26,
          "level": 34,
          "guardian": false
        },
        {
          "id": "gravewood_mob_17",
          "monster": "curse_wraith",
          "x": 43,
          "y": 25,
          "level": 34,
          "guardian": false
        },
        {
          "id": "gravewood_mob_18",
          "monster": "bone_soldier",
          "x": 12,
          "y": 29,
          "level": 35,
          "guardian": false
        },
        {
          "id": "gravewood_mob_19",
          "monster": "grave_knight",
          "x": 24,
          "y": 29,
          "level": 34,
          "guardian": false
        },
        {
          "id": "gravewood_mob_20",
          "monster": "curse_wraith",
          "x": 37,
          "y": 30,
          "level": 34,
          "guardian": false
        },
        {
          "id": "gravewood_mob_21",
          "monster": "bone_soldier",
          "x": 43,
          "y": 30,
          "level": 35,
          "guardian": false
        },
        {
          "id": "gravewood_mob_22",
          "monster": "grave_knight",
          "x": 20,
          "y": 20,
          "level": 34,
          "guardian": false
        },
        {
          "id": "gravewood_mob_23",
          "monster": "curse_wraith",
          "x": 32,
          "y": 20,
          "level": 34,
          "guardian": false
        },
        {
          "id": "gravewood_elite",
          "monster": "gravewood_elite",
          "x": 40,
          "y": 28,
          "level": 36,
          "guardian": false,
          "patrol": [
            [
              40,
              28
            ],
            [
              43,
              24
            ],
            [
              35,
              23
            ]
          ]
        }
      ],
      "resources": [
        {
          "id": "gravewood_resource_0",
          "x": 11,
          "y": 5,
          "type": "ore",
          "sprite": "ore",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "gravewood_resource_1",
          "x": 23,
          "y": 30,
          "type": "herb",
          "sprite": "herb",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "gravewood_resource_2",
          "x": 34,
          "y": 4,
          "type": "wood",
          "sprite": "wood",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "gravewood_resource_3",
          "x": 8,
          "y": 27,
          "type": "crystal",
          "sprite": "crystal",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "gravewood_resource_4",
          "x": 28,
          "y": 24,
          "type": "moonstone",
          "sprite": "crystal",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "gravewood_resource_5",
          "x": 39,
          "y": 29,
          "type": "ember",
          "sprite": "crystal",
          "amount": 1,
          "respawn": 120
        }
      ],
      "chests": [
        {
          "id": "gravewood_cache_0",
          "x": 15,
          "y": 4,
          "gold": 44,
          "materials": {
            "ore": 2,
            "crystal": 1
          },
          "equipmentChance": 0.12
        },
        {
          "id": "gravewood_cache_1",
          "x": 29,
          "y": 30,
          "gold": 44,
          "materials": {
            "ore": 2,
            "crystal": 1
          },
          "equipmentChance": 0.12
        },
        {
          "id": "gravewood_cache_2",
          "x": 43,
          "y": 4,
          "gold": 44,
          "materials": {
            "ore": 2,
            "crystal": 1
          },
          "equipmentChance": 0.12
        }
      ],
      "discoveries": [
        {
          "id": "gravewood_poi_0",
          "name": "잊힌 잊힌 망루",
          "kind": "landmark",
          "sprite": "ruin",
          "x": 20,
          "y": 4,
          "description": "지역의 역사와 봉인의 흔적을 조사했습니다.",
          "stats": [],
          "rewards": {
            "xp": 216,
            "gold": 44,
            "reputation": {
              "arcanum": 4
            }
          }
        },
        {
          "id": "gravewood_poi_1",
          "name": "잊힌 지역의 성소",
          "kind": "shrine",
          "sprite": "waystone",
          "x": 42,
          "y": 30,
          "description": "지역의 역사와 봉인의 흔적을 조사했습니다.",
          "stats": [
            {
              "stat": "hp",
              "op": "add",
              "value": 5
            }
          ],
          "rewards": {
            "xp": 216,
            "gold": 44,
            "reputation": {
              "arcanum": 4
            }
          }
        }
      ],
      "events": [
        {
          "id": "gravewood_event_0",
          "name": "전초기지 토벌",
          "x": 24,
          "y": 5,
          "sprite": "camp",
          "description": "두 차례 몰려오는 몬스터를 모두 격파하세요.",
          "spawns": [
            {
              "monster": "bone_soldier",
              "x": 23,
              "y": 5,
              "level": 34,
              "guardian": false
            },
            {
              "monster": "grave_knight",
              "x": 25,
              "y": 5,
              "level": 34,
              "guardian": false
            },
            {
              "monster": "curse_wraith",
              "x": 23,
              "y": 7,
              "level": 34,
              "guardian": false
            }
          ],
          "waves": [
            [
              {
                "monster": "bone_soldier",
                "x": 23,
                "y": 5,
                "level": 34,
                "guardian": false
              },
              {
                "monster": "grave_knight",
                "x": 25,
                "y": 5,
                "level": 34,
                "guardian": false
              },
              {
                "monster": "curse_wraith",
                "x": 23,
                "y": 7,
                "level": 34,
                "guardian": false
              }
            ],
            [
              {
                "monster": "bone_soldier",
                "x": 23,
                "y": 5,
                "level": 34,
                "guardian": false
              },
              {
                "monster": "grave_knight",
                "x": 25,
                "y": 5,
                "level": 34,
                "guardian": false
              },
              {
                "monster": "curse_wraith",
                "x": 23,
                "y": 7,
                "level": 34,
                "guardian": false
              },
              {
                "monster": "bone_soldier",
                "x": 25,
                "y": 7,
                "level": 34,
                "guardian": false
              }
            ]
          ],
          "cooldown": 420,
          "rewards": {
            "xp": 240,
            "gold": 88,
            "materials": {
              "sigil": 1
            },
            "reputation": {
              "rangers": 6
            }
          }
        },
        {
          "id": "gravewood_event_1",
          "name": "봉인 방어전",
          "x": 34,
          "y": 29,
          "sprite": "camp",
          "description": "두 차례 몰려오는 몬스터를 모두 격파하세요.",
          "spawns": [
            {
              "monster": "grave_knight",
              "x": 33,
              "y": 29,
              "level": 34,
              "guardian": false
            },
            {
              "monster": "curse_wraith",
              "x": 35,
              "y": 29,
              "level": 34,
              "guardian": false
            },
            {
              "monster": "bone_soldier",
              "x": 33,
              "y": 31,
              "level": 34,
              "guardian": false
            }
          ],
          "waves": [
            [
              {
                "monster": "grave_knight",
                "x": 33,
                "y": 29,
                "level": 34,
                "guardian": false
              },
              {
                "monster": "curse_wraith",
                "x": 35,
                "y": 29,
                "level": 34,
                "guardian": false
              },
              {
                "monster": "bone_soldier",
                "x": 33,
                "y": 31,
                "level": 34,
                "guardian": false
              }
            ],
            [
              {
                "monster": "grave_knight",
                "x": 33,
                "y": 29,
                "level": 34,
                "guardian": false
              },
              {
                "monster": "curse_wraith",
                "x": 35,
                "y": 29,
                "level": 34,
                "guardian": false
              },
              {
                "monster": "bone_soldier",
                "x": 33,
                "y": 31,
                "level": 34,
                "guardian": false
              },
              {
                "monster": "grave_knight",
                "x": 35,
                "y": 31,
                "level": 34,
                "guardian": false
              }
            ]
          ],
          "cooldown": 420,
          "rewards": {
            "xp": 240,
            "gold": 88,
            "materials": {
              "sigil": 1
            },
            "reputation": {
              "wardens": 6
            }
          }
        }
      ],
      "mechanisms": [],
      "zones": [],
      "waypoint": [
        5,
        17
      ]
    },
    "eclipse_plain": {
      "id": "eclipse_plain",
      "name": "황혼의 국경",
      "kind": "field",
      "width": 48,
      "height": 34,
      "level": 40,
      "music": "field",
      "spawn": [
        3.5,
        17.5
      ],
      "tiles": [
        "tttttttttttttttttttttttttttttttttttttttttttttttt",
        "taaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaat",
        "taaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaat",
        "taaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#aaaaaaat",
        "taaaaaa#aaaaaaa:aaaaaaa#aaaaaaa#aaaaaaa#aaaaaaat",
        "taaaaaa#aaaaaaa:aaaaaaa#aaaaaaa#aaaaaaa#aaaaaaat",
        "taaaaaa#aaaaaaa:aaaaaaa#aaaaaaa#aaaaaaa#aaaaaaat",
        "taaaaaa#aaaaaaaaaaaaaaa#aaaaaaa#aaaaaaa#aaaaaaat",
        "taaaaaa#aaaaaaaaaaaaaaa#aaaaaaa#aaaaaaa#aaaaaaat",
        "taaaaaa#aaaaaaaaaaaaaaa#aaaaaaa#aaaaaaa#aaaaaaat",
        "taaaaaa#aaaaaaaaaaaaaaa#aaaaaaa#aaaaaaa#aaaaaaat",
        "taaaaaa#aaaaaaaaaaaaaaa#aaaaaaa#aaaaaaa#aaaaaaat",
        "taaaaaa#aaaaaaa:aaaaaaa#aaaaaaa#aaaaaaa#aaaaaaat",
        "taaaaaa#aaaaaaa:aaaaaaa#aaaaaaa#aaaaaaaaaaaaaaat",
        "taaaaaa#aaaaaaa:aaaaaaa#aaaaaaa#aaaaaaaaaaaaaaat",
        "taaaaaa#aaaaaaa:aaaaaaaaaaaaaaa#aaaaaaaaaaaaaaat",
        "taaaaaa#aaaaaaa:aaaaaaaaaaaaaaa#aaaaaaaaaaaaaaat",
        "ta::::::::::::::::::::::::::::::::::::::::::::at",
        "ta::::::::::::::::::::::::::::::::::::::::::::at",
        "taaaaaaaaaaaaaa:aaaaaaaaaaaaaaa#aaaaaaa:aaaaaaat",
        "taaaaaaaaaaaaaa:aaaaaaa:aaaaaaa#aaaaaaa:aaaaaaat",
        "taaaaaaaaaaaaaa:aaaaaaa:aaaaaaa#aaaaaaa:aaaaaaat",
        "taaaaaa:aaaaaaa:aaaaaaa:aaaaaaa#aaaaaaa:aaaaaaat",
        "taaaaaa:aaaaaaa:aaaaaaa:aaaaaaaaaaaaaaa:aaaaaaat",
        "taaaaaa:aaaaaaa:aaaaaaa:aaaaaaaaaaaaaaa:aaaaaaat",
        "taaaaaa:aaaaaaa:aaaaaaa:aaaaaaaaaaaaaaa:aaaaaaat",
        "taaaaaa:aaaaaaa#aaaaaaa:aaaaaaaaaaaaaaa:aaaaaaat",
        "taaaaaa:aaaaaaa#aaaaaaa:aaaaaaaaaaaaaaa:aaaaaaat",
        "taaaaaa:aaaaaaa#aaaaaaa:aaaaaaa#aaaaaaa:aaaaaaat",
        "taaaaaa:aaaaaaa#aaaaaaa:aaaaaaa#aaaaaaa:aaaaaaat",
        "taaaaaa#aaaaaaa#aaaaaaa:aaaaaaa#aaaaaaa#aaaaaaat",
        "taaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaat",
        "taaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaat",
        "tttttttttttttttttttttttttttttttttttttttttttttttt"
      ],
      "props": [],
      "npcs": [
        {
          "id": "eclipse_plain_stone",
          "name": "여행의 돌",
          "service": "waystone",
          "x": 5,
          "y": 17
        },
        {
          "id": "eclipse_plain_vendor",
          "name": "원정 상인",
          "service": "merchant",
          "x": 7,
          "y": 29,
          "vendorType": "wanderer",
          "schedule": {
            "period": 300,
            "activeFor": 150,
            "offset": 160
          }
        }
      ],
      "portals": [
        {
          "id": "to_gravewood",
          "name": "잊힌 왕의 묘역",
          "x": 2,
          "y": 17,
          "to": "gravewood",
          "spawn": [
            44,
            17.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "eclipse_entry",
          "name": "황혼 성채",
          "x": 42,
          "y": 4,
          "to": "eclipse_depth_1",
          "spawn": [
            3.5,
            15.5
          ],
          "requiresQuest": "eclipse_hunt",
          "requiresGuardians": false
        }
      ],
      "spawns": [
        {
          "id": "eclipse_plain_mob_0",
          "monster": "dusk_sentinel",
          "x": 8,
          "y": 8,
          "level": 41,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_1",
          "monster": "dusk_magus",
          "x": 13,
          "y": 7,
          "level": 40,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_2",
          "monster": "abyss_spider",
          "x": 19,
          "y": 9,
          "level": 40,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_3",
          "monster": "dusk_sentinel",
          "x": 26,
          "y": 7,
          "level": 41,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_4",
          "monster": "dusk_magus",
          "x": 33,
          "y": 8,
          "level": 40,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_5",
          "monster": "abyss_spider",
          "x": 40,
          "y": 7,
          "level": 40,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_6",
          "monster": "dusk_sentinel",
          "x": 43,
          "y": 12,
          "level": 41,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_7",
          "monster": "dusk_magus",
          "x": 10,
          "y": 14,
          "level": 40,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_8",
          "monster": "abyss_spider",
          "x": 18,
          "y": 14,
          "level": 40,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_9",
          "monster": "dusk_sentinel",
          "x": 26,
          "y": 14,
          "level": 41,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_10",
          "monster": "dusk_magus",
          "x": 34,
          "y": 14,
          "level": 40,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_11",
          "monster": "abyss_spider",
          "x": 40,
          "y": 18,
          "level": 40,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_12",
          "monster": "dusk_sentinel",
          "x": 9,
          "y": 23,
          "level": 41,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_13",
          "monster": "dusk_magus",
          "x": 15,
          "y": 25,
          "level": 40,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_14",
          "monster": "abyss_spider",
          "x": 22,
          "y": 24,
          "level": 40,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_15",
          "monster": "dusk_sentinel",
          "x": 29,
          "y": 25,
          "level": 41,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_16",
          "monster": "dusk_magus",
          "x": 36,
          "y": 26,
          "level": 40,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_17",
          "monster": "abyss_spider",
          "x": 43,
          "y": 25,
          "level": 40,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_18",
          "monster": "dusk_sentinel",
          "x": 12,
          "y": 29,
          "level": 41,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_19",
          "monster": "dusk_magus",
          "x": 24,
          "y": 29,
          "level": 40,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_20",
          "monster": "abyss_spider",
          "x": 37,
          "y": 30,
          "level": 40,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_21",
          "monster": "dusk_sentinel",
          "x": 43,
          "y": 30,
          "level": 41,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_22",
          "monster": "dusk_magus",
          "x": 20,
          "y": 20,
          "level": 40,
          "guardian": false
        },
        {
          "id": "eclipse_plain_mob_23",
          "monster": "abyss_spider",
          "x": 32,
          "y": 20,
          "level": 40,
          "guardian": false
        },
        {
          "id": "eclipse_plain_elite",
          "monster": "eclipse_plain_elite",
          "x": 40,
          "y": 28,
          "level": 42,
          "guardian": false,
          "patrol": [
            [
              40,
              28
            ],
            [
              43,
              24
            ],
            [
              35,
              23
            ]
          ]
        }
      ],
      "resources": [
        {
          "id": "eclipse_plain_resource_0",
          "x": 11,
          "y": 5,
          "type": "ore",
          "sprite": "ore",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "eclipse_plain_resource_1",
          "x": 23,
          "y": 30,
          "type": "herb",
          "sprite": "herb",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "eclipse_plain_resource_2",
          "x": 34,
          "y": 4,
          "type": "wood",
          "sprite": "wood",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "eclipse_plain_resource_3",
          "x": 8,
          "y": 27,
          "type": "crystal",
          "sprite": "crystal",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "eclipse_plain_resource_4",
          "x": 28,
          "y": 24,
          "type": "moonstone",
          "sprite": "crystal",
          "amount": 1,
          "respawn": 120
        },
        {
          "id": "eclipse_plain_resource_5",
          "x": 39,
          "y": 29,
          "type": "ember",
          "sprite": "crystal",
          "amount": 1,
          "respawn": 120
        }
      ],
      "chests": [
        {
          "id": "eclipse_plain_cache_0",
          "x": 15,
          "y": 4,
          "gold": 50,
          "materials": {
            "ore": 2,
            "crystal": 1
          },
          "equipmentChance": 0.12
        },
        {
          "id": "eclipse_plain_cache_1",
          "x": 29,
          "y": 30,
          "gold": 50,
          "materials": {
            "ore": 2,
            "crystal": 1
          },
          "equipmentChance": 0.12
        },
        {
          "id": "eclipse_plain_cache_2",
          "x": 43,
          "y": 4,
          "gold": 50,
          "materials": {
            "ore": 2,
            "crystal": 1
          },
          "equipmentChance": 0.12
        }
      ],
      "discoveries": [
        {
          "id": "eclipse_plain_poi_0",
          "name": "황혼의 잊힌 망루",
          "kind": "landmark",
          "sprite": "ruin",
          "x": 20,
          "y": 4,
          "description": "지역의 역사와 봉인의 흔적을 조사했습니다.",
          "stats": [],
          "rewards": {
            "xp": 240,
            "gold": 50,
            "reputation": {
              "arcanum": 4
            }
          }
        },
        {
          "id": "eclipse_plain_poi_1",
          "name": "황혼의 지역의 성소",
          "kind": "shrine",
          "sprite": "waystone",
          "x": 42,
          "y": 30,
          "description": "지역의 역사와 봉인의 흔적을 조사했습니다.",
          "stats": [
            {
              "stat": "hp",
              "op": "add",
              "value": 5
            }
          ],
          "rewards": {
            "xp": 240,
            "gold": 50,
            "reputation": {
              "arcanum": 4
            }
          }
        }
      ],
      "events": [
        {
          "id": "eclipse_plain_event_0",
          "name": "전초기지 토벌",
          "x": 24,
          "y": 5,
          "sprite": "camp",
          "description": "두 차례 몰려오는 몬스터를 모두 격파하세요.",
          "spawns": [
            {
              "monster": "dusk_sentinel",
              "x": 23,
              "y": 5,
              "level": 40,
              "guardian": false
            },
            {
              "monster": "dusk_magus",
              "x": 25,
              "y": 5,
              "level": 40,
              "guardian": false
            },
            {
              "monster": "abyss_spider",
              "x": 23,
              "y": 7,
              "level": 40,
              "guardian": false
            }
          ],
          "waves": [
            [
              {
                "monster": "dusk_sentinel",
                "x": 23,
                "y": 5,
                "level": 40,
                "guardian": false
              },
              {
                "monster": "dusk_magus",
                "x": 25,
                "y": 5,
                "level": 40,
                "guardian": false
              },
              {
                "monster": "abyss_spider",
                "x": 23,
                "y": 7,
                "level": 40,
                "guardian": false
              }
            ],
            [
              {
                "monster": "dusk_sentinel",
                "x": 23,
                "y": 5,
                "level": 40,
                "guardian": false
              },
              {
                "monster": "dusk_magus",
                "x": 25,
                "y": 5,
                "level": 40,
                "guardian": false
              },
              {
                "monster": "abyss_spider",
                "x": 23,
                "y": 7,
                "level": 40,
                "guardian": false
              },
              {
                "monster": "dusk_sentinel",
                "x": 25,
                "y": 7,
                "level": 40,
                "guardian": false
              }
            ]
          ],
          "cooldown": 420,
          "rewards": {
            "xp": 270,
            "gold": 100,
            "materials": {
              "sigil": 1
            },
            "reputation": {
              "rangers": 6
            }
          }
        },
        {
          "id": "eclipse_plain_event_1",
          "name": "봉인 방어전",
          "x": 34,
          "y": 29,
          "sprite": "camp",
          "description": "두 차례 몰려오는 몬스터를 모두 격파하세요.",
          "spawns": [
            {
              "monster": "dusk_magus",
              "x": 33,
              "y": 29,
              "level": 40,
              "guardian": false
            },
            {
              "monster": "abyss_spider",
              "x": 35,
              "y": 29,
              "level": 40,
              "guardian": false
            },
            {
              "monster": "dusk_sentinel",
              "x": 33,
              "y": 31,
              "level": 40,
              "guardian": false
            }
          ],
          "waves": [
            [
              {
                "monster": "dusk_magus",
                "x": 33,
                "y": 29,
                "level": 40,
                "guardian": false
              },
              {
                "monster": "abyss_spider",
                "x": 35,
                "y": 29,
                "level": 40,
                "guardian": false
              },
              {
                "monster": "dusk_sentinel",
                "x": 33,
                "y": 31,
                "level": 40,
                "guardian": false
              }
            ],
            [
              {
                "monster": "dusk_magus",
                "x": 33,
                "y": 29,
                "level": 40,
                "guardian": false
              },
              {
                "monster": "abyss_spider",
                "x": 35,
                "y": 29,
                "level": 40,
                "guardian": false
              },
              {
                "monster": "dusk_sentinel",
                "x": 33,
                "y": 31,
                "level": 40,
                "guardian": false
              },
              {
                "monster": "dusk_magus",
                "x": 35,
                "y": 31,
                "level": 40,
                "guardian": false
              }
            ]
          ],
          "cooldown": 420,
          "rewards": {
            "xp": 270,
            "gold": 100,
            "materials": {
              "sigil": 1
            },
            "reputation": {
              "wardens": 6
            }
          }
        }
      ],
      "mechanisms": [],
      "zones": [],
      "waypoint": [
        5,
        17
      ]
    },
    "frostgate": {
      "id": "frostgate",
      "name": "서리문 요새",
      "kind": "town",
      "width": 38,
      "height": 28,
      "level": 21,
      "music": "town",
      "spawn": [
        3.5,
        14.5
      ],
      "tiles": [
        "######################################",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#......:..........:..........:.......#",
        "#....................................#",
        "#.....................:..............#",
        "#....................................#",
        "#.:...............:................:.#",
        "#.........................:..........#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#.................:..................#",
        "#......:.....................:.......#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "######################################"
      ],
      "props": [
        {
          "type": "house",
          "x": 4,
          "y": 3,
          "width": 6,
          "height": 4,
          "solid": true,
          "name": "대장간"
        },
        {
          "type": "house",
          "x": 14,
          "y": 3,
          "width": 6,
          "height": 4,
          "solid": true,
          "name": "원정 길드"
        },
        {
          "type": "house",
          "x": 26,
          "y": 3,
          "width": 6,
          "height": 4,
          "solid": true,
          "name": "교역소"
        },
        {
          "type": "house",
          "x": 4,
          "y": 21,
          "width": 6,
          "height": 4,
          "solid": true,
          "name": "여관"
        },
        {
          "type": "house",
          "x": 26,
          "y": 21,
          "width": 6,
          "height": 4,
          "solid": true,
          "name": "성당"
        }
      ],
      "npcs": [
        {
          "id": "selene",
          "name": "원정 길드장",
          "service": "guild",
          "x": 18,
          "y": 10
        },
        {
          "id": "frostgate_smith",
          "name": "왕립 대장장이",
          "service": "smith",
          "x": 7,
          "y": 10
        },
        {
          "id": "frostgate_shop",
          "name": "보급 상인",
          "service": "merchant",
          "x": 29,
          "y": 10
        },
        {
          "id": "frostgate_inn",
          "name": "여관 주인",
          "service": "inn",
          "x": 7,
          "y": 20
        },
        {
          "id": "frostgate_priest",
          "name": "순례 사제",
          "service": "temple",
          "x": 29,
          "y": 20
        },
        {
          "id": "board",
          "name": "의뢰 게시판",
          "service": "board",
          "x": 22,
          "y": 12
        },
        {
          "id": "frostgate_stone",
          "name": "여행의 돌",
          "service": "waystone",
          "x": 18,
          "y": 14
        },
        {
          "id": "frostgate_arena",
          "name": "연전 관리인",
          "service": "arena",
          "x": 26,
          "y": 15
        },
        {
          "id": "brann_npc",
          "name": "브란",
          "service": "companion",
          "x": 18,
          "y": 19
        }
      ],
      "portals": [
        {
          "id": "to_highland",
          "name": "가시바람 고원",
          "x": 2,
          "y": 14,
          "to": "highland",
          "spawn": [
            44,
            17.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "to_snowfield",
          "name": "백서리 설원",
          "x": 35,
          "y": 14,
          "to": "snowfield",
          "spawn": [
            3.5,
            17.5
          ],
          "requiresQuest": "highland_crown",
          "requiresGuardians": false
        }
      ],
      "spawns": [],
      "resources": [],
      "chests": [],
      "discoveries": [],
      "events": [],
      "mechanisms": [],
      "zones": [],
      "waypoint": [
        18,
        14
      ]
    },
    "sunharbor": {
      "id": "sunharbor",
      "name": "태양나루",
      "kind": "town",
      "width": 38,
      "height": 28,
      "level": 30,
      "music": "town",
      "spawn": [
        3.5,
        14.5
      ],
      "tiles": [
        "######################################",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#......:..........:..........:.......#",
        "#....................................#",
        "#.....................:..............#",
        "#....................................#",
        "#.:...............:................:.#",
        "#.........................:..........#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#.................:..................#",
        "#......:.....................:.......#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "#....................................#",
        "######################################"
      ],
      "props": [
        {
          "type": "house",
          "x": 4,
          "y": 3,
          "width": 6,
          "height": 4,
          "solid": true,
          "name": "대장간"
        },
        {
          "type": "house",
          "x": 14,
          "y": 3,
          "width": 6,
          "height": 4,
          "solid": true,
          "name": "원정 길드"
        },
        {
          "type": "house",
          "x": 26,
          "y": 3,
          "width": 6,
          "height": 4,
          "solid": true,
          "name": "교역소"
        },
        {
          "type": "house",
          "x": 4,
          "y": 21,
          "width": 6,
          "height": 4,
          "solid": true,
          "name": "여관"
        },
        {
          "type": "house",
          "x": 26,
          "y": 21,
          "width": 6,
          "height": 4,
          "solid": true,
          "name": "성당"
        }
      ],
      "npcs": [
        {
          "id": "darius",
          "name": "원정 길드장",
          "service": "guild",
          "x": 18,
          "y": 10
        },
        {
          "id": "sunharbor_smith",
          "name": "왕립 대장장이",
          "service": "smith",
          "x": 7,
          "y": 10
        },
        {
          "id": "sunharbor_shop",
          "name": "보급 상인",
          "service": "merchant",
          "x": 29,
          "y": 10
        },
        {
          "id": "sunharbor_inn",
          "name": "여관 주인",
          "service": "inn",
          "x": 7,
          "y": 20
        },
        {
          "id": "sunharbor_priest",
          "name": "순례 사제",
          "service": "temple",
          "x": 29,
          "y": 20
        },
        {
          "id": "board",
          "name": "의뢰 게시판",
          "service": "board",
          "x": 22,
          "y": 12
        },
        {
          "id": "sunharbor_stone",
          "name": "여행의 돌",
          "service": "waystone",
          "x": 18,
          "y": 14
        },
        {
          "id": "sunharbor_arena",
          "name": "연전 관리인",
          "service": "arena",
          "x": 26,
          "y": 15
        },
        {
          "id": "eris_npc",
          "name": "에리스",
          "service": "companion",
          "x": 18,
          "y": 19
        }
      ],
      "portals": [
        {
          "id": "to_sunwaste",
          "name": "붉은 해 사막",
          "x": 2,
          "y": 14,
          "to": "sunwaste",
          "spawn": [
            44,
            17.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "to_gravewood",
          "name": "잊힌 왕의 묘역",
          "x": 35,
          "y": 14,
          "to": "gravewood",
          "spawn": [
            3.5,
            17.5
          ],
          "requiresQuest": "sun_crown",
          "requiresGuardians": false
        }
      ],
      "spawns": [],
      "resources": [],
      "chests": [],
      "discoveries": [],
      "events": [],
      "mechanisms": [],
      "zones": [],
      "waypoint": [
        18,
        14
      ]
    },
    "highland_depth_1": {
      "id": "highland_depth_1",
      "name": "가시뿌리 미궁 · 1층",
      "kind": "dungeon",
      "width": 40,
      "height": 30,
      "level": 17,
      "music": "dungeon",
      "spawn": [
        3.5,
        15.5
      ],
      "tiles": [
        "########################################",
        "#......................................#",
        "#......................................#",
        "#......#.......#.......#.......#.......#",
        "#......#.......#.......#.......#.......#",
        "#......#.......#.......#.......#.......#",
        "#..............#.......#.......#.......#",
        "#..............#.......#...............#",
        "#......................#...............#",
        "#......................#...............#",
        "#......................#...............#",
        "#......................#...............#",
        "#......................#...............#",
        "#......................#...............#",
        "#......................#...............#",
        "#......................................#",
        "#......................................#",
        "#..............#...............#.......#",
        "#..............#...............#.......#",
        "#..............#...............#.......#",
        "#..............#...............#.......#",
        "#..............#.......#.......#.......#",
        "#..............#.......#.......#.......#",
        "#..............#.......#.......#.......#",
        "#..............#.......#.......#.......#",
        "#......#.......#.......#.......#.......#",
        "#......#.......#.......#.......#.......#",
        "#......................................#",
        "#......................................#",
        "########################################"
      ],
      "props": [
        {
          "type": "tree",
          "x": 10,
          "y": 3,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "tree",
          "x": 35,
          "y": 4,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "tree",
          "x": 35,
          "y": 26,
          "width": 1,
          "height": 1,
          "solid": false
        }
      ],
      "npcs": [],
      "portals": [
        {
          "id": "exit",
          "name": "지상으로",
          "x": 2,
          "y": 15,
          "to": "highland",
          "spawn": [
            41,
            5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "down",
          "name": "아래층",
          "x": 37,
          "y": 15,
          "to": "highland_depth_2",
          "spawn": [
            3.5,
            15.5
          ],
          "requiresQuest": null,
          "requiresGuardians": true
        }
      ],
      "spawns": [
        {
          "id": "highland_depth_1_mob_0",
          "monster": "highland_orc",
          "x": 10,
          "y": 7,
          "level": 17,
          "guardian": false
        },
        {
          "id": "highland_depth_1_mob_1",
          "monster": "moss_ent",
          "x": 20,
          "y": 7,
          "level": 17,
          "guardian": false
        },
        {
          "id": "highland_depth_1_mob_2",
          "monster": "venom_spider",
          "x": 30,
          "y": 7,
          "level": 17,
          "guardian": true
        },
        {
          "id": "highland_depth_1_mob_3",
          "monster": "stone_wyvern",
          "x": 8,
          "y": 15,
          "level": 17,
          "guardian": false
        },
        {
          "id": "highland_depth_1_mob_4",
          "monster": "highland_orc",
          "x": 16,
          "y": 15,
          "level": 17,
          "guardian": false
        },
        {
          "id": "highland_depth_1_mob_5",
          "monster": "moss_ent",
          "x": 25,
          "y": 16,
          "level": 17,
          "guardian": false
        },
        {
          "id": "highland_depth_1_mob_6",
          "monster": "venom_spider",
          "x": 33,
          "y": 16,
          "level": 17,
          "guardian": true
        },
        {
          "id": "highland_depth_1_mob_7",
          "monster": "stone_wyvern",
          "x": 10,
          "y": 24,
          "level": 17,
          "guardian": false
        },
        {
          "id": "highland_depth_1_mob_8",
          "monster": "highland_orc",
          "x": 19,
          "y": 24,
          "level": 17,
          "guardian": false
        },
        {
          "id": "highland_depth_1_mob_9",
          "monster": "moss_ent",
          "x": 28,
          "y": 24,
          "level": 17,
          "guardian": false
        },
        {
          "id": "highland_depth_1_mob_10",
          "monster": "venom_spider",
          "x": 34,
          "y": 25,
          "level": 17,
          "guardian": true
        },
        {
          "id": "highland_depth_1_mob_11",
          "monster": "stone_wyvern",
          "x": 15,
          "y": 11,
          "level": 17,
          "guardian": false
        }
      ],
      "resources": [],
      "chests": [
        {
          "id": "highland_depth_1_chest",
          "x": 34,
          "y": 5,
          "gold": 47,
          "materials": {
            "crystal": 2,
            "ore": 3
          },
          "equipmentChance": 0.3
        }
      ],
      "discoveries": [
        {
          "id": "highland_depth_1_record",
          "name": "가시뿌리 미궁의 기록 1",
          "kind": "landmark",
          "sprite": "ruin",
          "x": 6,
          "y": 24,
          "description": "군주의 약점과 봉인 장치의 기록입니다.",
          "rewards": {
            "xp": 151,
            "reputation": {
              "arcanum": 4
            }
          }
        }
      ],
      "events": [],
      "mechanisms": [
        {
          "id": "highland_depth_1_lever",
          "name": "위험 장치 차단",
          "x": 6,
          "y": 6,
          "circuit": "vents",
          "description": "이 층의 환경 위험을 멈춥니다."
        }
      ],
      "zones": [
        {
          "id": "highland_depth_1_vent_0",
          "circuit": "vents",
          "x": 16,
          "y": 15,
          "kind": "circle",
          "radius": 1.8,
          "windup": 1.2,
          "period": 5.5,
          "damage": 32,
          "offset": 0.0,
          "name": "가시 뿌리"
        },
        {
          "id": "highland_depth_1_vent_1",
          "circuit": "vents",
          "x": 25,
          "y": 16,
          "kind": "circle",
          "radius": 1.8,
          "windup": 1.2,
          "period": 5.5,
          "damage": 32,
          "offset": 1.3,
          "name": "가시 뿌리"
        },
        {
          "id": "highland_depth_1_vent_2",
          "circuit": "vents",
          "x": 30,
          "y": 24,
          "kind": "circle",
          "radius": 1.8,
          "windup": 1.2,
          "period": 5.5,
          "damage": 32,
          "offset": 2.6,
          "name": "가시 뿌리"
        }
      ],
      "waypoint": null,
      "group": "highland",
      "guardianTotal": 3
    },
    "highland_depth_2": {
      "id": "highland_depth_2",
      "name": "가시뿌리 미궁 · 2층",
      "kind": "dungeon",
      "width": 40,
      "height": 30,
      "level": 18,
      "music": "dungeon",
      "spawn": [
        3.5,
        15.5
      ],
      "tiles": [
        "########################################",
        "#......................................#",
        "#......................................#",
        "#......#.......#.......#.......#.......#",
        "#......#.......#.......#.......#.......#",
        "#......#.......#.......#.......#.......#",
        "#..............#.......#.......#.......#",
        "#..............#.......#...............#",
        "#..............#.......#...............#",
        "#......................#...............#",
        "#......................#...............#",
        "#......................#...............#",
        "#......................#...............#",
        "#......................#...............#",
        "#......................#...............#",
        "#......................................#",
        "#......................................#",
        "#..............#...............#.......#",
        "#..............#...............#.......#",
        "#..............#...............#.......#",
        "#..............#...............#.......#",
        "#..............#...............#.......#",
        "#..............#.......#.......#.......#",
        "#..............#.......#.......#.......#",
        "#..............#.......#.......#.......#",
        "#......#.......#.......#.......#.......#",
        "#......#.......#.......#.......#.......#",
        "#......................................#",
        "#......................................#",
        "########################################"
      ],
      "props": [
        {
          "type": "tree",
          "x": 10,
          "y": 3,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "tree",
          "x": 35,
          "y": 4,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "tree",
          "x": 35,
          "y": 26,
          "width": 1,
          "height": 1,
          "solid": false
        }
      ],
      "npcs": [],
      "portals": [
        {
          "id": "up",
          "name": "위층",
          "x": 2,
          "y": 15,
          "to": "highland_depth_1",
          "spawn": [
            36,
            15.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "throne",
          "name": "군주의 방",
          "x": 37,
          "y": 15,
          "to": "highland_throne",
          "spawn": [
            3.5,
            14
          ],
          "requiresQuest": null,
          "requiresGuardians": true
        }
      ],
      "spawns": [
        {
          "id": "highland_depth_2_mob_0",
          "monster": "highland_orc",
          "x": 10,
          "y": 7,
          "level": 18,
          "guardian": false
        },
        {
          "id": "highland_depth_2_mob_1",
          "monster": "moss_ent",
          "x": 20,
          "y": 7,
          "level": 18,
          "guardian": false
        },
        {
          "id": "highland_depth_2_mob_2",
          "monster": "venom_spider",
          "x": 30,
          "y": 7,
          "level": 18,
          "guardian": true
        },
        {
          "id": "highland_depth_2_mob_3",
          "monster": "stone_wyvern",
          "x": 8,
          "y": 15,
          "level": 18,
          "guardian": false
        },
        {
          "id": "highland_depth_2_mob_4",
          "monster": "highland_orc",
          "x": 16,
          "y": 15,
          "level": 18,
          "guardian": false
        },
        {
          "id": "highland_depth_2_mob_5",
          "monster": "moss_ent",
          "x": 25,
          "y": 16,
          "level": 18,
          "guardian": false
        },
        {
          "id": "highland_depth_2_mob_6",
          "monster": "venom_spider",
          "x": 33,
          "y": 16,
          "level": 18,
          "guardian": true
        },
        {
          "id": "highland_depth_2_mob_7",
          "monster": "stone_wyvern",
          "x": 10,
          "y": 24,
          "level": 18,
          "guardian": false
        },
        {
          "id": "highland_depth_2_mob_8",
          "monster": "highland_orc",
          "x": 19,
          "y": 24,
          "level": 18,
          "guardian": false
        },
        {
          "id": "highland_depth_2_mob_9",
          "monster": "moss_ent",
          "x": 28,
          "y": 24,
          "level": 18,
          "guardian": false
        },
        {
          "id": "highland_depth_2_mob_10",
          "monster": "venom_spider",
          "x": 34,
          "y": 25,
          "level": 18,
          "guardian": true
        },
        {
          "id": "highland_depth_2_mob_11",
          "monster": "stone_wyvern",
          "x": 15,
          "y": 11,
          "level": 18,
          "guardian": false
        }
      ],
      "resources": [],
      "chests": [
        {
          "id": "highland_depth_2_chest",
          "x": 34,
          "y": 5,
          "gold": 47,
          "materials": {
            "crystal": 2,
            "ore": 3
          },
          "equipmentChance": 0.3
        }
      ],
      "discoveries": [
        {
          "id": "highland_depth_2_record",
          "name": "가시뿌리 미궁의 기록 2",
          "kind": "landmark",
          "sprite": "ruin",
          "x": 6,
          "y": 24,
          "description": "군주의 약점과 봉인 장치의 기록입니다.",
          "rewards": {
            "xp": 151,
            "reputation": {
              "arcanum": 4
            }
          }
        }
      ],
      "events": [],
      "mechanisms": [
        {
          "id": "highland_depth_2_lever",
          "name": "위험 장치 차단",
          "x": 6,
          "y": 6,
          "circuit": "vents",
          "description": "이 층의 환경 위험을 멈춥니다."
        }
      ],
      "zones": [
        {
          "id": "highland_depth_2_vent_0",
          "circuit": "vents",
          "x": 16,
          "y": 15,
          "kind": "circle",
          "radius": 1.8,
          "windup": 1.2,
          "period": 5.5,
          "damage": 32,
          "offset": 0.0,
          "name": "가시 뿌리"
        },
        {
          "id": "highland_depth_2_vent_1",
          "circuit": "vents",
          "x": 25,
          "y": 16,
          "kind": "circle",
          "radius": 1.8,
          "windup": 1.2,
          "period": 5.5,
          "damage": 32,
          "offset": 1.3,
          "name": "가시 뿌리"
        },
        {
          "id": "highland_depth_2_vent_2",
          "circuit": "vents",
          "x": 30,
          "y": 24,
          "kind": "circle",
          "radius": 1.8,
          "windup": 1.2,
          "period": 5.5,
          "damage": 32,
          "offset": 2.6,
          "name": "가시 뿌리"
        }
      ],
      "waypoint": null,
      "group": "highland",
      "guardianTotal": 3
    },
    "highland_throne": {
      "id": "highland_throne",
      "name": "가시숲의 여왕의 전당",
      "kind": "boss",
      "width": 34,
      "height": 28,
      "level": 19,
      "music": "boss",
      "spawn": [
        3.5,
        14.5
      ],
      "tiles": [
        "##################################",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "#................................#",
        "##################################"
      ],
      "props": [
        {
          "type": "tree",
          "x": 10,
          "y": 3,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "tree",
          "x": 29,
          "y": 4,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "tree",
          "x": 29,
          "y": 24,
          "width": 1,
          "height": 1,
          "solid": false
        }
      ],
      "npcs": [],
      "portals": [
        {
          "id": "exit",
          "name": "입구로",
          "x": 2,
          "y": 14,
          "to": "highland_depth_2",
          "spawn": [
            36,
            15.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        }
      ],
      "spawns": [
        {
          "id": "highland_boss",
          "monster": "thorn_queen",
          "x": 23,
          "y": 14,
          "level": 19,
          "guardian": false
        }
      ],
      "resources": [],
      "chests": [],
      "discoveries": [],
      "events": [],
      "mechanisms": [
        {
          "id": "highland_ward_0",
          "name": "수호석 1",
          "x": 9,
          "y": 5,
          "ward": true,
          "description": "해제하면 군주의 피해 감소 12%가 사라집니다."
        },
        {
          "id": "highland_ward_1",
          "name": "수호석 2",
          "x": 28,
          "y": 23,
          "ward": true,
          "description": "해제하면 군주의 피해 감소 12%가 사라집니다."
        }
      ],
      "zones": [
        {
          "id": "highland_zone_0",
          "x": 15,
          "y": 8,
          "kind": "circle",
          "radius": 2,
          "windup": 1.4,
          "period": 7,
          "damage": 37,
          "offset": 0,
          "name": "가시 뿌리"
        },
        {
          "id": "highland_zone_1",
          "x": 18,
          "y": 21,
          "kind": "circle",
          "radius": 2,
          "windup": 1.4,
          "period": 7,
          "damage": 37,
          "offset": 2,
          "name": "가시 뿌리"
        }
      ],
      "waypoint": null,
      "group": "highland",
      "boss": "thorn_queen"
    },
    "frost_depth_1": {
      "id": "frost_depth_1",
      "name": "빙관의 지하성 · 1층",
      "kind": "dungeon",
      "width": 40,
      "height": 30,
      "level": 23,
      "music": "dungeon",
      "spawn": [
        3.5,
        15.5
      ],
      "tiles": [
        "########################################",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#",
        "#nnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#",
        "#nnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnn#nnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnn#nnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnn#nnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnn#nnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnn#nnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnn#nnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnn#nnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnn#nnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnnnnnnnnnn#nnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnnnnnnnnnn#nnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnnnnnnnnnn#nnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnnnnnnnnnn#nnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnnnnnnnnnn#nnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#",
        "#nnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#",
        "#nnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "########################################"
      ],
      "props": [
        {
          "type": "crystal",
          "x": 10,
          "y": 3,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "crystal",
          "x": 35,
          "y": 4,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "crystal",
          "x": 35,
          "y": 26,
          "width": 1,
          "height": 1,
          "solid": false
        }
      ],
      "npcs": [],
      "portals": [
        {
          "id": "exit",
          "name": "지상으로",
          "x": 2,
          "y": 15,
          "to": "snowfield",
          "spawn": [
            41,
            5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "down",
          "name": "아래층",
          "x": 37,
          "y": 15,
          "to": "frost_depth_2",
          "spawn": [
            3.5,
            15.5
          ],
          "requiresQuest": null,
          "requiresGuardians": true
        }
      ],
      "spawns": [
        {
          "id": "frost_depth_1_mob_0",
          "monster": "frost_wolf",
          "x": 10,
          "y": 7,
          "level": 23,
          "guardian": false
        },
        {
          "id": "frost_depth_1_mob_1",
          "monster": "ice_wraith",
          "x": 20,
          "y": 7,
          "level": 23,
          "guardian": false
        },
        {
          "id": "frost_depth_1_mob_2",
          "monster": "snow_golem",
          "x": 30,
          "y": 7,
          "level": 23,
          "guardian": true
        },
        {
          "id": "frost_depth_1_mob_3",
          "monster": "frost_wolf",
          "x": 8,
          "y": 15,
          "level": 23,
          "guardian": false
        },
        {
          "id": "frost_depth_1_mob_4",
          "monster": "ice_wraith",
          "x": 16,
          "y": 15,
          "level": 23,
          "guardian": false
        },
        {
          "id": "frost_depth_1_mob_5",
          "monster": "snow_golem",
          "x": 25,
          "y": 16,
          "level": 23,
          "guardian": false
        },
        {
          "id": "frost_depth_1_mob_6",
          "monster": "frost_wolf",
          "x": 33,
          "y": 16,
          "level": 23,
          "guardian": true
        },
        {
          "id": "frost_depth_1_mob_7",
          "monster": "ice_wraith",
          "x": 10,
          "y": 24,
          "level": 23,
          "guardian": false
        },
        {
          "id": "frost_depth_1_mob_8",
          "monster": "snow_golem",
          "x": 19,
          "y": 24,
          "level": 23,
          "guardian": false
        },
        {
          "id": "frost_depth_1_mob_9",
          "monster": "frost_wolf",
          "x": 28,
          "y": 24,
          "level": 23,
          "guardian": false
        },
        {
          "id": "frost_depth_1_mob_10",
          "monster": "ice_wraith",
          "x": 34,
          "y": 25,
          "level": 23,
          "guardian": true
        },
        {
          "id": "frost_depth_1_mob_11",
          "monster": "snow_golem",
          "x": 15,
          "y": 11,
          "level": 23,
          "guardian": false
        }
      ],
      "resources": [],
      "chests": [
        {
          "id": "frost_depth_1_chest",
          "x": 34,
          "y": 5,
          "gold": 53,
          "materials": {
            "crystal": 2,
            "ore": 3
          },
          "equipmentChance": 0.3
        }
      ],
      "discoveries": [
        {
          "id": "frost_depth_1_record",
          "name": "빙관의 지하성의 기록 1",
          "kind": "landmark",
          "sprite": "ruin",
          "x": 6,
          "y": 24,
          "description": "군주의 약점과 봉인 장치의 기록입니다.",
          "rewards": {
            "xp": 169,
            "reputation": {
              "arcanum": 4
            }
          }
        }
      ],
      "events": [],
      "mechanisms": [
        {
          "id": "frost_depth_1_lever",
          "name": "위험 장치 차단",
          "x": 6,
          "y": 6,
          "circuit": "vents",
          "description": "이 층의 환경 위험을 멈춥니다."
        }
      ],
      "zones": [
        {
          "id": "frost_depth_1_vent_0",
          "circuit": "vents",
          "x": 16,
          "y": 15,
          "kind": "ring",
          "radius": 3.2,
          "windup": 1.2,
          "period": 5.5,
          "damage": 38,
          "offset": 0.0,
          "name": "서리 파동",
          "innerRadius": 1
        },
        {
          "id": "frost_depth_1_vent_1",
          "circuit": "vents",
          "x": 25,
          "y": 16,
          "kind": "ring",
          "radius": 3.2,
          "windup": 1.2,
          "period": 5.5,
          "damage": 38,
          "offset": 1.3,
          "name": "서리 파동",
          "innerRadius": 1
        },
        {
          "id": "frost_depth_1_vent_2",
          "circuit": "vents",
          "x": 30,
          "y": 24,
          "kind": "ring",
          "radius": 3.2,
          "windup": 1.2,
          "period": 5.5,
          "damage": 38,
          "offset": 2.6,
          "name": "서리 파동",
          "innerRadius": 1
        }
      ],
      "waypoint": null,
      "group": "frost",
      "guardianTotal": 3
    },
    "frost_depth_2": {
      "id": "frost_depth_2",
      "name": "빙관의 지하성 · 2층",
      "kind": "dungeon",
      "width": 40,
      "height": 30,
      "level": 24,
      "music": "dungeon",
      "spawn": [
        3.5,
        15.5
      ],
      "tiles": [
        "########################################",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#",
        "#nnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#",
        "#nnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnn#nnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnn#nnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnn#nnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnn#nnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnn#nnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnn#nnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnn#nnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnn#nnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnnnnnnnnnn#nnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnnnnnnnnnn#nnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnnnnnnnnnn#nnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnnnnnnnnnn#nnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnnnnnnnnnn#nnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#",
        "#nnnnnnnnnnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#",
        "#nnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#",
        "#nnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#nnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "########################################"
      ],
      "props": [
        {
          "type": "crystal",
          "x": 10,
          "y": 3,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "crystal",
          "x": 35,
          "y": 4,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "crystal",
          "x": 35,
          "y": 26,
          "width": 1,
          "height": 1,
          "solid": false
        }
      ],
      "npcs": [],
      "portals": [
        {
          "id": "up",
          "name": "위층",
          "x": 2,
          "y": 15,
          "to": "frost_depth_1",
          "spawn": [
            36,
            15.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "throne",
          "name": "군주의 방",
          "x": 37,
          "y": 15,
          "to": "frost_throne",
          "spawn": [
            3.5,
            14
          ],
          "requiresQuest": null,
          "requiresGuardians": true
        }
      ],
      "spawns": [
        {
          "id": "frost_depth_2_mob_0",
          "monster": "frost_wolf",
          "x": 10,
          "y": 7,
          "level": 24,
          "guardian": false
        },
        {
          "id": "frost_depth_2_mob_1",
          "monster": "ice_wraith",
          "x": 20,
          "y": 7,
          "level": 24,
          "guardian": false
        },
        {
          "id": "frost_depth_2_mob_2",
          "monster": "snow_golem",
          "x": 30,
          "y": 7,
          "level": 24,
          "guardian": true
        },
        {
          "id": "frost_depth_2_mob_3",
          "monster": "frost_wolf",
          "x": 8,
          "y": 15,
          "level": 24,
          "guardian": false
        },
        {
          "id": "frost_depth_2_mob_4",
          "monster": "ice_wraith",
          "x": 16,
          "y": 15,
          "level": 24,
          "guardian": false
        },
        {
          "id": "frost_depth_2_mob_5",
          "monster": "snow_golem",
          "x": 25,
          "y": 16,
          "level": 24,
          "guardian": false
        },
        {
          "id": "frost_depth_2_mob_6",
          "monster": "frost_wolf",
          "x": 33,
          "y": 16,
          "level": 24,
          "guardian": true
        },
        {
          "id": "frost_depth_2_mob_7",
          "monster": "ice_wraith",
          "x": 10,
          "y": 24,
          "level": 24,
          "guardian": false
        },
        {
          "id": "frost_depth_2_mob_8",
          "monster": "snow_golem",
          "x": 19,
          "y": 24,
          "level": 24,
          "guardian": false
        },
        {
          "id": "frost_depth_2_mob_9",
          "monster": "frost_wolf",
          "x": 28,
          "y": 24,
          "level": 24,
          "guardian": false
        },
        {
          "id": "frost_depth_2_mob_10",
          "monster": "ice_wraith",
          "x": 34,
          "y": 25,
          "level": 24,
          "guardian": true
        },
        {
          "id": "frost_depth_2_mob_11",
          "monster": "snow_golem",
          "x": 15,
          "y": 11,
          "level": 24,
          "guardian": false
        }
      ],
      "resources": [],
      "chests": [
        {
          "id": "frost_depth_2_chest",
          "x": 34,
          "y": 5,
          "gold": 53,
          "materials": {
            "crystal": 2,
            "ore": 3
          },
          "equipmentChance": 0.3
        }
      ],
      "discoveries": [
        {
          "id": "frost_depth_2_record",
          "name": "빙관의 지하성의 기록 2",
          "kind": "landmark",
          "sprite": "ruin",
          "x": 6,
          "y": 24,
          "description": "군주의 약점과 봉인 장치의 기록입니다.",
          "rewards": {
            "xp": 169,
            "reputation": {
              "arcanum": 4
            }
          }
        }
      ],
      "events": [],
      "mechanisms": [
        {
          "id": "frost_depth_2_lever",
          "name": "위험 장치 차단",
          "x": 6,
          "y": 6,
          "circuit": "vents",
          "description": "이 층의 환경 위험을 멈춥니다."
        }
      ],
      "zones": [
        {
          "id": "frost_depth_2_vent_0",
          "circuit": "vents",
          "x": 16,
          "y": 15,
          "kind": "ring",
          "radius": 3.2,
          "windup": 1.2,
          "period": 5.5,
          "damage": 38,
          "offset": 0.0,
          "name": "서리 파동",
          "innerRadius": 1
        },
        {
          "id": "frost_depth_2_vent_1",
          "circuit": "vents",
          "x": 25,
          "y": 16,
          "kind": "ring",
          "radius": 3.2,
          "windup": 1.2,
          "period": 5.5,
          "damage": 38,
          "offset": 1.3,
          "name": "서리 파동",
          "innerRadius": 1
        },
        {
          "id": "frost_depth_2_vent_2",
          "circuit": "vents",
          "x": 30,
          "y": 24,
          "kind": "ring",
          "radius": 3.2,
          "windup": 1.2,
          "period": 5.5,
          "damage": 38,
          "offset": 2.6,
          "name": "서리 파동",
          "innerRadius": 1
        }
      ],
      "waypoint": null,
      "group": "frost",
      "guardianTotal": 3
    },
    "frost_throne": {
      "id": "frost_throne",
      "name": "서리왕 이스렌의 전당",
      "kind": "boss",
      "width": 34,
      "height": 28,
      "level": 25,
      "music": "boss",
      "spawn": [
        3.5,
        14.5
      ],
      "tiles": [
        "##################################",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "#nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn#",
        "##################################"
      ],
      "props": [
        {
          "type": "crystal",
          "x": 10,
          "y": 3,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "crystal",
          "x": 29,
          "y": 4,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "crystal",
          "x": 29,
          "y": 24,
          "width": 1,
          "height": 1,
          "solid": false
        }
      ],
      "npcs": [],
      "portals": [
        {
          "id": "exit",
          "name": "입구로",
          "x": 2,
          "y": 14,
          "to": "frost_depth_2",
          "spawn": [
            36,
            15.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        }
      ],
      "spawns": [
        {
          "id": "frost_boss",
          "monster": "frost_regent",
          "x": 23,
          "y": 14,
          "level": 25,
          "guardian": false
        }
      ],
      "resources": [],
      "chests": [],
      "discoveries": [],
      "events": [],
      "mechanisms": [
        {
          "id": "frost_ward_0",
          "name": "수호석 1",
          "x": 9,
          "y": 5,
          "ward": true,
          "description": "해제하면 군주의 피해 감소 12%가 사라집니다."
        },
        {
          "id": "frost_ward_1",
          "name": "수호석 2",
          "x": 28,
          "y": 23,
          "ward": true,
          "description": "해제하면 군주의 피해 감소 12%가 사라집니다."
        }
      ],
      "zones": [
        {
          "id": "frost_zone_0",
          "x": 15,
          "y": 8,
          "kind": "ring",
          "radius": 3.2,
          "windup": 1.4,
          "period": 7,
          "damage": 43,
          "offset": 0,
          "name": "서리 파동",
          "innerRadius": 1
        },
        {
          "id": "frost_zone_1",
          "x": 18,
          "y": 21,
          "kind": "ring",
          "radius": 3.2,
          "windup": 1.4,
          "period": 7,
          "damage": 43,
          "offset": 2,
          "name": "서리 파동",
          "innerRadius": 1
        }
      ],
      "waypoint": null,
      "group": "frost",
      "boss": "frost_regent"
    },
    "sun_depth_1": {
      "id": "sun_depth_1",
      "name": "태양의 신전 · 1층",
      "kind": "dungeon",
      "width": 40,
      "height": 30,
      "level": 29,
      "music": "dungeon",
      "spawn": [
        3.5,
        15.5
      ],
      "tiles": [
        "########################################",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#",
        "#rrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#",
        "#rrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrr#rrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrr#rrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrr#rrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrr#rrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrr#rrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrr#rrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrr#rrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrr#rrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrrrrrrrrrr#rrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrrrrrrrrrr#rrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrrrrrrrrrr#rrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrrrrrrrrrr#rrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrrrrrrrrrr#rrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#",
        "#rrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#",
        "#rrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "########################################"
      ],
      "props": [
        {
          "type": "ruin",
          "x": 10,
          "y": 3,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 35,
          "y": 4,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 35,
          "y": 26,
          "width": 1,
          "height": 1,
          "solid": false
        }
      ],
      "npcs": [],
      "portals": [
        {
          "id": "exit",
          "name": "지상으로",
          "x": 2,
          "y": 15,
          "to": "sunwaste",
          "spawn": [
            41,
            5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "down",
          "name": "아래층",
          "x": 37,
          "y": 15,
          "to": "sun_depth_2",
          "spawn": [
            3.5,
            15.5
          ],
          "requiresQuest": null,
          "requiresGuardians": true
        }
      ],
      "spawns": [
        {
          "id": "sun_depth_1_mob_0",
          "monster": "sand_scorpion",
          "x": 10,
          "y": 7,
          "level": 29,
          "guardian": false
        },
        {
          "id": "sun_depth_1_mob_1",
          "monster": "dune_raider",
          "x": 20,
          "y": 7,
          "level": 29,
          "guardian": false
        },
        {
          "id": "sun_depth_1_mob_2",
          "monster": "ember_drake",
          "x": 30,
          "y": 7,
          "level": 29,
          "guardian": true
        },
        {
          "id": "sun_depth_1_mob_3",
          "monster": "sand_scorpion",
          "x": 8,
          "y": 15,
          "level": 29,
          "guardian": false
        },
        {
          "id": "sun_depth_1_mob_4",
          "monster": "dune_raider",
          "x": 16,
          "y": 15,
          "level": 29,
          "guardian": false
        },
        {
          "id": "sun_depth_1_mob_5",
          "monster": "ember_drake",
          "x": 25,
          "y": 16,
          "level": 29,
          "guardian": false
        },
        {
          "id": "sun_depth_1_mob_6",
          "monster": "sand_scorpion",
          "x": 33,
          "y": 16,
          "level": 29,
          "guardian": true
        },
        {
          "id": "sun_depth_1_mob_7",
          "monster": "dune_raider",
          "x": 10,
          "y": 24,
          "level": 29,
          "guardian": false
        },
        {
          "id": "sun_depth_1_mob_8",
          "monster": "ember_drake",
          "x": 19,
          "y": 24,
          "level": 29,
          "guardian": false
        },
        {
          "id": "sun_depth_1_mob_9",
          "monster": "sand_scorpion",
          "x": 28,
          "y": 24,
          "level": 29,
          "guardian": false
        },
        {
          "id": "sun_depth_1_mob_10",
          "monster": "dune_raider",
          "x": 34,
          "y": 25,
          "level": 29,
          "guardian": true
        },
        {
          "id": "sun_depth_1_mob_11",
          "monster": "ember_drake",
          "x": 15,
          "y": 11,
          "level": 29,
          "guardian": false
        }
      ],
      "resources": [],
      "chests": [
        {
          "id": "sun_depth_1_chest",
          "x": 34,
          "y": 5,
          "gold": 59,
          "materials": {
            "crystal": 2,
            "ore": 3
          },
          "equipmentChance": 0.3
        }
      ],
      "discoveries": [
        {
          "id": "sun_depth_1_record",
          "name": "태양의 신전의 기록 1",
          "kind": "landmark",
          "sprite": "ruin",
          "x": 6,
          "y": 24,
          "description": "군주의 약점과 봉인 장치의 기록입니다.",
          "rewards": {
            "xp": 187,
            "reputation": {
              "arcanum": 4
            }
          }
        }
      ],
      "events": [],
      "mechanisms": [
        {
          "id": "sun_depth_1_lever",
          "name": "위험 장치 차단",
          "x": 6,
          "y": 6,
          "circuit": "vents",
          "description": "이 층의 환경 위험을 멈춥니다."
        }
      ],
      "zones": [
        {
          "id": "sun_depth_1_vent_0",
          "circuit": "vents",
          "x": 16,
          "y": 15,
          "kind": "line",
          "radius": 0.75,
          "windup": 1.2,
          "period": 5.5,
          "damage": 44,
          "offset": 0.0,
          "name": "신전의 불꽃",
          "length": 7,
          "angles": [
            0,
            1.5707963267948966
          ]
        },
        {
          "id": "sun_depth_1_vent_1",
          "circuit": "vents",
          "x": 25,
          "y": 16,
          "kind": "line",
          "radius": 0.75,
          "windup": 1.2,
          "period": 5.5,
          "damage": 44,
          "offset": 1.3,
          "name": "신전의 불꽃",
          "length": 7,
          "angles": [
            0,
            1.5707963267948966
          ]
        },
        {
          "id": "sun_depth_1_vent_2",
          "circuit": "vents",
          "x": 30,
          "y": 24,
          "kind": "line",
          "radius": 0.75,
          "windup": 1.2,
          "period": 5.5,
          "damage": 44,
          "offset": 2.6,
          "name": "신전의 불꽃",
          "length": 7,
          "angles": [
            0,
            1.5707963267948966
          ]
        }
      ],
      "waypoint": null,
      "group": "sun",
      "guardianTotal": 3
    },
    "sun_depth_2": {
      "id": "sun_depth_2",
      "name": "태양의 신전 · 2층",
      "kind": "dungeon",
      "width": 40,
      "height": 30,
      "level": 30,
      "music": "dungeon",
      "spawn": [
        3.5,
        15.5
      ],
      "tiles": [
        "########################################",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#",
        "#rrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#",
        "#rrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrr#rrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrr#rrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrr#rrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrr#rrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrr#rrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrr#rrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrr#rrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrr#rrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrr#rrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrrrrrrrrrr#rrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrrrrrrrrrr#rrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrrrrrrrrrr#rrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrrrrrrrrrr#rrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrrrrrrrrrr#rrrrrrr#",
        "#rrrrrrrrrrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#",
        "#rrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#",
        "#rrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#rrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "########################################"
      ],
      "props": [
        {
          "type": "ruin",
          "x": 10,
          "y": 3,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 35,
          "y": 4,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 35,
          "y": 26,
          "width": 1,
          "height": 1,
          "solid": false
        }
      ],
      "npcs": [],
      "portals": [
        {
          "id": "up",
          "name": "위층",
          "x": 2,
          "y": 15,
          "to": "sun_depth_1",
          "spawn": [
            36,
            15.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "throne",
          "name": "군주의 방",
          "x": 37,
          "y": 15,
          "to": "sun_throne",
          "spawn": [
            3.5,
            14
          ],
          "requiresQuest": null,
          "requiresGuardians": true
        }
      ],
      "spawns": [
        {
          "id": "sun_depth_2_mob_0",
          "monster": "sand_scorpion",
          "x": 10,
          "y": 7,
          "level": 30,
          "guardian": false
        },
        {
          "id": "sun_depth_2_mob_1",
          "monster": "dune_raider",
          "x": 20,
          "y": 7,
          "level": 30,
          "guardian": false
        },
        {
          "id": "sun_depth_2_mob_2",
          "monster": "ember_drake",
          "x": 30,
          "y": 7,
          "level": 30,
          "guardian": true
        },
        {
          "id": "sun_depth_2_mob_3",
          "monster": "sand_scorpion",
          "x": 8,
          "y": 15,
          "level": 30,
          "guardian": false
        },
        {
          "id": "sun_depth_2_mob_4",
          "monster": "dune_raider",
          "x": 16,
          "y": 15,
          "level": 30,
          "guardian": false
        },
        {
          "id": "sun_depth_2_mob_5",
          "monster": "ember_drake",
          "x": 25,
          "y": 16,
          "level": 30,
          "guardian": false
        },
        {
          "id": "sun_depth_2_mob_6",
          "monster": "sand_scorpion",
          "x": 33,
          "y": 16,
          "level": 30,
          "guardian": true
        },
        {
          "id": "sun_depth_2_mob_7",
          "monster": "dune_raider",
          "x": 10,
          "y": 24,
          "level": 30,
          "guardian": false
        },
        {
          "id": "sun_depth_2_mob_8",
          "monster": "ember_drake",
          "x": 19,
          "y": 24,
          "level": 30,
          "guardian": false
        },
        {
          "id": "sun_depth_2_mob_9",
          "monster": "sand_scorpion",
          "x": 28,
          "y": 24,
          "level": 30,
          "guardian": false
        },
        {
          "id": "sun_depth_2_mob_10",
          "monster": "dune_raider",
          "x": 34,
          "y": 25,
          "level": 30,
          "guardian": true
        },
        {
          "id": "sun_depth_2_mob_11",
          "monster": "ember_drake",
          "x": 15,
          "y": 11,
          "level": 30,
          "guardian": false
        }
      ],
      "resources": [],
      "chests": [
        {
          "id": "sun_depth_2_chest",
          "x": 34,
          "y": 5,
          "gold": 59,
          "materials": {
            "crystal": 2,
            "ore": 3
          },
          "equipmentChance": 0.3
        }
      ],
      "discoveries": [
        {
          "id": "sun_depth_2_record",
          "name": "태양의 신전의 기록 2",
          "kind": "landmark",
          "sprite": "ruin",
          "x": 6,
          "y": 24,
          "description": "군주의 약점과 봉인 장치의 기록입니다.",
          "rewards": {
            "xp": 187,
            "reputation": {
              "arcanum": 4
            }
          }
        }
      ],
      "events": [],
      "mechanisms": [
        {
          "id": "sun_depth_2_lever",
          "name": "위험 장치 차단",
          "x": 6,
          "y": 6,
          "circuit": "vents",
          "description": "이 층의 환경 위험을 멈춥니다."
        }
      ],
      "zones": [
        {
          "id": "sun_depth_2_vent_0",
          "circuit": "vents",
          "x": 16,
          "y": 15,
          "kind": "line",
          "radius": 0.75,
          "windup": 1.2,
          "period": 5.5,
          "damage": 44,
          "offset": 0.0,
          "name": "신전의 불꽃",
          "length": 7,
          "angles": [
            0,
            1.5707963267948966
          ]
        },
        {
          "id": "sun_depth_2_vent_1",
          "circuit": "vents",
          "x": 25,
          "y": 16,
          "kind": "line",
          "radius": 0.75,
          "windup": 1.2,
          "period": 5.5,
          "damage": 44,
          "offset": 1.3,
          "name": "신전의 불꽃",
          "length": 7,
          "angles": [
            0,
            1.5707963267948966
          ]
        },
        {
          "id": "sun_depth_2_vent_2",
          "circuit": "vents",
          "x": 30,
          "y": 24,
          "kind": "line",
          "radius": 0.75,
          "windup": 1.2,
          "period": 5.5,
          "damage": 44,
          "offset": 2.6,
          "name": "신전의 불꽃",
          "length": 7,
          "angles": [
            0,
            1.5707963267948966
          ]
        }
      ],
      "waypoint": null,
      "group": "sun",
      "guardianTotal": 3
    },
    "sun_throne": {
      "id": "sun_throne",
      "name": "태양을 삼킨 전갈의 전당",
      "kind": "boss",
      "width": 34,
      "height": 28,
      "level": 31,
      "music": "boss",
      "spawn": [
        3.5,
        14.5
      ],
      "tiles": [
        "##################################",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "#rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr#",
        "##################################"
      ],
      "props": [
        {
          "type": "ruin",
          "x": 10,
          "y": 3,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 29,
          "y": 4,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 29,
          "y": 24,
          "width": 1,
          "height": 1,
          "solid": false
        }
      ],
      "npcs": [],
      "portals": [
        {
          "id": "exit",
          "name": "입구로",
          "x": 2,
          "y": 14,
          "to": "sun_depth_2",
          "spawn": [
            36,
            15.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        }
      ],
      "spawns": [
        {
          "id": "sun_boss",
          "monster": "sun_scorpion",
          "x": 23,
          "y": 14,
          "level": 31,
          "guardian": false
        }
      ],
      "resources": [],
      "chests": [],
      "discoveries": [],
      "events": [],
      "mechanisms": [
        {
          "id": "sun_ward_0",
          "name": "수호석 1",
          "x": 9,
          "y": 5,
          "ward": true,
          "description": "해제하면 군주의 피해 감소 12%가 사라집니다."
        },
        {
          "id": "sun_ward_1",
          "name": "수호석 2",
          "x": 28,
          "y": 23,
          "ward": true,
          "description": "해제하면 군주의 피해 감소 12%가 사라집니다."
        }
      ],
      "zones": [
        {
          "id": "sun_zone_0",
          "x": 15,
          "y": 8,
          "kind": "line",
          "radius": 0.75,
          "windup": 1.4,
          "period": 7,
          "damage": 49,
          "offset": 0,
          "name": "신전의 불꽃",
          "length": 7,
          "angles": [
            0,
            1.5707963267948966
          ]
        },
        {
          "id": "sun_zone_1",
          "x": 18,
          "y": 21,
          "kind": "line",
          "radius": 0.75,
          "windup": 1.4,
          "period": 7,
          "damage": 49,
          "offset": 2,
          "name": "신전의 불꽃",
          "length": 7,
          "angles": [
            0,
            1.5707963267948966
          ]
        }
      ],
      "waypoint": null,
      "group": "sun",
      "boss": "sun_scorpion"
    },
    "grave_depth_1": {
      "id": "grave_depth_1",
      "name": "왕가의 납골당 · 1층",
      "kind": "dungeon",
      "width": 40,
      "height": 30,
      "level": 35,
      "music": "dungeon",
      "spawn": [
        3.5,
        15.5
      ],
      "tiles": [
        "########################################",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#",
        "#vvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#",
        "#vvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvv#vvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvv#vvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvv#vvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvv#vvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvv#vvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvv#vvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvv#vvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvv#vvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvv#vvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvvvvvvvvvv#vvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvvvvvvvvvv#vvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvvvvvvvvvv#vvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvvvvvvvvvv#vvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvvvvvvvvvv#vvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#",
        "#vvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#",
        "#vvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "########################################"
      ],
      "props": [
        {
          "type": "ruin",
          "x": 10,
          "y": 3,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 35,
          "y": 4,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 35,
          "y": 26,
          "width": 1,
          "height": 1,
          "solid": false
        }
      ],
      "npcs": [],
      "portals": [
        {
          "id": "exit",
          "name": "지상으로",
          "x": 2,
          "y": 15,
          "to": "gravewood",
          "spawn": [
            41,
            5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "down",
          "name": "아래층",
          "x": 37,
          "y": 15,
          "to": "grave_depth_2",
          "spawn": [
            3.5,
            15.5
          ],
          "requiresQuest": null,
          "requiresGuardians": true
        }
      ],
      "spawns": [
        {
          "id": "grave_depth_1_mob_0",
          "monster": "bone_soldier",
          "x": 10,
          "y": 7,
          "level": 35,
          "guardian": false
        },
        {
          "id": "grave_depth_1_mob_1",
          "monster": "grave_knight",
          "x": 20,
          "y": 7,
          "level": 35,
          "guardian": false
        },
        {
          "id": "grave_depth_1_mob_2",
          "monster": "curse_wraith",
          "x": 30,
          "y": 7,
          "level": 35,
          "guardian": true
        },
        {
          "id": "grave_depth_1_mob_3",
          "monster": "bone_soldier",
          "x": 8,
          "y": 15,
          "level": 35,
          "guardian": false
        },
        {
          "id": "grave_depth_1_mob_4",
          "monster": "grave_knight",
          "x": 16,
          "y": 15,
          "level": 35,
          "guardian": false
        },
        {
          "id": "grave_depth_1_mob_5",
          "monster": "curse_wraith",
          "x": 25,
          "y": 16,
          "level": 35,
          "guardian": false
        },
        {
          "id": "grave_depth_1_mob_6",
          "monster": "bone_soldier",
          "x": 33,
          "y": 16,
          "level": 35,
          "guardian": true
        },
        {
          "id": "grave_depth_1_mob_7",
          "monster": "grave_knight",
          "x": 10,
          "y": 24,
          "level": 35,
          "guardian": false
        },
        {
          "id": "grave_depth_1_mob_8",
          "monster": "curse_wraith",
          "x": 19,
          "y": 24,
          "level": 35,
          "guardian": false
        },
        {
          "id": "grave_depth_1_mob_9",
          "monster": "bone_soldier",
          "x": 28,
          "y": 24,
          "level": 35,
          "guardian": false
        },
        {
          "id": "grave_depth_1_mob_10",
          "monster": "grave_knight",
          "x": 34,
          "y": 25,
          "level": 35,
          "guardian": true
        },
        {
          "id": "grave_depth_1_mob_11",
          "monster": "curse_wraith",
          "x": 15,
          "y": 11,
          "level": 35,
          "guardian": false
        }
      ],
      "resources": [],
      "chests": [
        {
          "id": "grave_depth_1_chest",
          "x": 34,
          "y": 5,
          "gold": 65,
          "materials": {
            "crystal": 2,
            "ore": 3
          },
          "equipmentChance": 0.3
        }
      ],
      "discoveries": [
        {
          "id": "grave_depth_1_record",
          "name": "왕가의 납골당의 기록 1",
          "kind": "landmark",
          "sprite": "ruin",
          "x": 6,
          "y": 24,
          "description": "군주의 약점과 봉인 장치의 기록입니다.",
          "rewards": {
            "xp": 205,
            "reputation": {
              "arcanum": 4
            }
          }
        }
      ],
      "events": [],
      "mechanisms": [
        {
          "id": "grave_depth_1_lever",
          "name": "위험 장치 차단",
          "x": 6,
          "y": 6,
          "circuit": "vents",
          "description": "이 층의 환경 위험을 멈춥니다."
        }
      ],
      "zones": [
        {
          "id": "grave_depth_1_vent_0",
          "circuit": "vents",
          "x": 16,
          "y": 15,
          "kind": "ring",
          "radius": 3.2,
          "windup": 1.2,
          "period": 5.5,
          "damage": 50,
          "offset": 0.0,
          "name": "영혼 고리",
          "innerRadius": 1
        },
        {
          "id": "grave_depth_1_vent_1",
          "circuit": "vents",
          "x": 25,
          "y": 16,
          "kind": "ring",
          "radius": 3.2,
          "windup": 1.2,
          "period": 5.5,
          "damage": 50,
          "offset": 1.3,
          "name": "영혼 고리",
          "innerRadius": 1
        },
        {
          "id": "grave_depth_1_vent_2",
          "circuit": "vents",
          "x": 30,
          "y": 24,
          "kind": "ring",
          "radius": 3.2,
          "windup": 1.2,
          "period": 5.5,
          "damage": 50,
          "offset": 2.6,
          "name": "영혼 고리",
          "innerRadius": 1
        }
      ],
      "waypoint": null,
      "group": "grave",
      "guardianTotal": 3
    },
    "grave_depth_2": {
      "id": "grave_depth_2",
      "name": "왕가의 납골당 · 2층",
      "kind": "dungeon",
      "width": 40,
      "height": 30,
      "level": 36,
      "music": "dungeon",
      "spawn": [
        3.5,
        15.5
      ],
      "tiles": [
        "########################################",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#",
        "#vvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#",
        "#vvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvvvvvvvvvv#vvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvv#vvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvv#vvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvv#vvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvv#vvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvv#vvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvv#vvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#",
        "#vvvvvvvvvvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#",
        "#vvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#",
        "#vvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#vvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "########################################"
      ],
      "props": [
        {
          "type": "ruin",
          "x": 10,
          "y": 3,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 35,
          "y": 4,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 35,
          "y": 26,
          "width": 1,
          "height": 1,
          "solid": false
        }
      ],
      "npcs": [],
      "portals": [
        {
          "id": "up",
          "name": "위층",
          "x": 2,
          "y": 15,
          "to": "grave_depth_1",
          "spawn": [
            36,
            15.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "throne",
          "name": "군주의 방",
          "x": 37,
          "y": 15,
          "to": "grave_throne",
          "spawn": [
            3.5,
            14
          ],
          "requiresQuest": null,
          "requiresGuardians": true
        }
      ],
      "spawns": [
        {
          "id": "grave_depth_2_mob_0",
          "monster": "bone_soldier",
          "x": 10,
          "y": 7,
          "level": 36,
          "guardian": false
        },
        {
          "id": "grave_depth_2_mob_1",
          "monster": "grave_knight",
          "x": 20,
          "y": 7,
          "level": 36,
          "guardian": false
        },
        {
          "id": "grave_depth_2_mob_2",
          "monster": "curse_wraith",
          "x": 30,
          "y": 7,
          "level": 36,
          "guardian": true
        },
        {
          "id": "grave_depth_2_mob_3",
          "monster": "bone_soldier",
          "x": 8,
          "y": 15,
          "level": 36,
          "guardian": false
        },
        {
          "id": "grave_depth_2_mob_4",
          "monster": "grave_knight",
          "x": 16,
          "y": 15,
          "level": 36,
          "guardian": false
        },
        {
          "id": "grave_depth_2_mob_5",
          "monster": "curse_wraith",
          "x": 25,
          "y": 16,
          "level": 36,
          "guardian": false
        },
        {
          "id": "grave_depth_2_mob_6",
          "monster": "bone_soldier",
          "x": 33,
          "y": 16,
          "level": 36,
          "guardian": true
        },
        {
          "id": "grave_depth_2_mob_7",
          "monster": "grave_knight",
          "x": 10,
          "y": 24,
          "level": 36,
          "guardian": false
        },
        {
          "id": "grave_depth_2_mob_8",
          "monster": "curse_wraith",
          "x": 19,
          "y": 24,
          "level": 36,
          "guardian": false
        },
        {
          "id": "grave_depth_2_mob_9",
          "monster": "bone_soldier",
          "x": 28,
          "y": 24,
          "level": 36,
          "guardian": false
        },
        {
          "id": "grave_depth_2_mob_10",
          "monster": "grave_knight",
          "x": 34,
          "y": 25,
          "level": 36,
          "guardian": true
        },
        {
          "id": "grave_depth_2_mob_11",
          "monster": "curse_wraith",
          "x": 15,
          "y": 11,
          "level": 36,
          "guardian": false
        }
      ],
      "resources": [],
      "chests": [
        {
          "id": "grave_depth_2_chest",
          "x": 34,
          "y": 5,
          "gold": 65,
          "materials": {
            "crystal": 2,
            "ore": 3
          },
          "equipmentChance": 0.3
        }
      ],
      "discoveries": [
        {
          "id": "grave_depth_2_record",
          "name": "왕가의 납골당의 기록 2",
          "kind": "landmark",
          "sprite": "ruin",
          "x": 6,
          "y": 24,
          "description": "군주의 약점과 봉인 장치의 기록입니다.",
          "rewards": {
            "xp": 205,
            "reputation": {
              "arcanum": 4
            }
          }
        }
      ],
      "events": [],
      "mechanisms": [
        {
          "id": "grave_depth_2_lever",
          "name": "위험 장치 차단",
          "x": 6,
          "y": 6,
          "circuit": "vents",
          "description": "이 층의 환경 위험을 멈춥니다."
        }
      ],
      "zones": [
        {
          "id": "grave_depth_2_vent_0",
          "circuit": "vents",
          "x": 16,
          "y": 15,
          "kind": "ring",
          "radius": 3.2,
          "windup": 1.2,
          "period": 5.5,
          "damage": 50,
          "offset": 0.0,
          "name": "영혼 고리",
          "innerRadius": 1
        },
        {
          "id": "grave_depth_2_vent_1",
          "circuit": "vents",
          "x": 25,
          "y": 16,
          "kind": "ring",
          "radius": 3.2,
          "windup": 1.2,
          "period": 5.5,
          "damage": 50,
          "offset": 1.3,
          "name": "영혼 고리",
          "innerRadius": 1
        },
        {
          "id": "grave_depth_2_vent_2",
          "circuit": "vents",
          "x": 30,
          "y": 24,
          "kind": "ring",
          "radius": 3.2,
          "windup": 1.2,
          "period": 5.5,
          "damage": 50,
          "offset": 2.6,
          "name": "영혼 고리",
          "innerRadius": 1
        }
      ],
      "waypoint": null,
      "group": "grave",
      "guardianTotal": 3
    },
    "grave_throne": {
      "id": "grave_throne",
      "name": "망자의 원수의 전당",
      "kind": "boss",
      "width": 34,
      "height": 28,
      "level": 37,
      "music": "boss",
      "spawn": [
        3.5,
        14.5
      ],
      "tiles": [
        "##################################",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "#vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv#",
        "##################################"
      ],
      "props": [
        {
          "type": "ruin",
          "x": 10,
          "y": 3,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 29,
          "y": 4,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 29,
          "y": 24,
          "width": 1,
          "height": 1,
          "solid": false
        }
      ],
      "npcs": [],
      "portals": [
        {
          "id": "exit",
          "name": "입구로",
          "x": 2,
          "y": 14,
          "to": "grave_depth_2",
          "spawn": [
            36,
            15.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        }
      ],
      "spawns": [
        {
          "id": "grave_boss",
          "monster": "grave_marshal",
          "x": 23,
          "y": 14,
          "level": 37,
          "guardian": false
        }
      ],
      "resources": [],
      "chests": [],
      "discoveries": [],
      "events": [],
      "mechanisms": [
        {
          "id": "grave_ward_0",
          "name": "수호석 1",
          "x": 9,
          "y": 5,
          "ward": true,
          "description": "해제하면 군주의 피해 감소 12%가 사라집니다."
        },
        {
          "id": "grave_ward_1",
          "name": "수호석 2",
          "x": 28,
          "y": 23,
          "ward": true,
          "description": "해제하면 군주의 피해 감소 12%가 사라집니다."
        }
      ],
      "zones": [
        {
          "id": "grave_zone_0",
          "x": 15,
          "y": 8,
          "kind": "ring",
          "radius": 3.2,
          "windup": 1.4,
          "period": 7,
          "damage": 55,
          "offset": 0,
          "name": "영혼 고리",
          "innerRadius": 1
        },
        {
          "id": "grave_zone_1",
          "x": 18,
          "y": 21,
          "kind": "ring",
          "radius": 3.2,
          "windup": 1.4,
          "period": 7,
          "damage": 55,
          "offset": 2,
          "name": "영혼 고리",
          "innerRadius": 1
        }
      ],
      "waypoint": null,
      "group": "grave",
      "boss": "grave_marshal"
    },
    "eclipse_depth_1": {
      "id": "eclipse_depth_1",
      "name": "황혼 성채 · 1층",
      "kind": "dungeon",
      "width": 40,
      "height": 30,
      "level": 41,
      "music": "dungeon",
      "spawn": [
        3.5,
        15.5
      ],
      "tiles": [
        "########################################",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaaaaaaaaaa#aaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaa#aaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaa#aaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaa#aaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaa#aaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaa#aaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaa#aaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "########################################"
      ],
      "props": [
        {
          "type": "ruin",
          "x": 10,
          "y": 3,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 35,
          "y": 4,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 35,
          "y": 26,
          "width": 1,
          "height": 1,
          "solid": false
        }
      ],
      "npcs": [],
      "portals": [
        {
          "id": "exit",
          "name": "지상으로",
          "x": 2,
          "y": 15,
          "to": "eclipse_plain",
          "spawn": [
            41,
            5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "down",
          "name": "아래층",
          "x": 37,
          "y": 15,
          "to": "eclipse_depth_2",
          "spawn": [
            3.5,
            15.5
          ],
          "requiresQuest": null,
          "requiresGuardians": true
        }
      ],
      "spawns": [
        {
          "id": "eclipse_depth_1_mob_0",
          "monster": "dusk_sentinel",
          "x": 10,
          "y": 7,
          "level": 41,
          "guardian": false
        },
        {
          "id": "eclipse_depth_1_mob_1",
          "monster": "dusk_magus",
          "x": 20,
          "y": 7,
          "level": 41,
          "guardian": false
        },
        {
          "id": "eclipse_depth_1_mob_2",
          "monster": "abyss_spider",
          "x": 30,
          "y": 7,
          "level": 41,
          "guardian": true
        },
        {
          "id": "eclipse_depth_1_mob_3",
          "monster": "dusk_sentinel",
          "x": 8,
          "y": 15,
          "level": 41,
          "guardian": false
        },
        {
          "id": "eclipse_depth_1_mob_4",
          "monster": "dusk_magus",
          "x": 16,
          "y": 15,
          "level": 41,
          "guardian": false
        },
        {
          "id": "eclipse_depth_1_mob_5",
          "monster": "abyss_spider",
          "x": 25,
          "y": 16,
          "level": 41,
          "guardian": false
        },
        {
          "id": "eclipse_depth_1_mob_6",
          "monster": "dusk_sentinel",
          "x": 33,
          "y": 16,
          "level": 41,
          "guardian": true
        },
        {
          "id": "eclipse_depth_1_mob_7",
          "monster": "dusk_magus",
          "x": 10,
          "y": 24,
          "level": 41,
          "guardian": false
        },
        {
          "id": "eclipse_depth_1_mob_8",
          "monster": "abyss_spider",
          "x": 19,
          "y": 24,
          "level": 41,
          "guardian": false
        },
        {
          "id": "eclipse_depth_1_mob_9",
          "monster": "dusk_sentinel",
          "x": 28,
          "y": 24,
          "level": 41,
          "guardian": false
        },
        {
          "id": "eclipse_depth_1_mob_10",
          "monster": "dusk_magus",
          "x": 34,
          "y": 25,
          "level": 41,
          "guardian": true
        },
        {
          "id": "eclipse_depth_1_mob_11",
          "monster": "abyss_spider",
          "x": 15,
          "y": 11,
          "level": 41,
          "guardian": false
        }
      ],
      "resources": [],
      "chests": [
        {
          "id": "eclipse_depth_1_chest",
          "x": 34,
          "y": 5,
          "gold": 71,
          "materials": {
            "crystal": 2,
            "ore": 3
          },
          "equipmentChance": 0.3
        }
      ],
      "discoveries": [
        {
          "id": "eclipse_depth_1_record",
          "name": "황혼 성채의 기록 1",
          "kind": "landmark",
          "sprite": "ruin",
          "x": 6,
          "y": 24,
          "description": "군주의 약점과 봉인 장치의 기록입니다.",
          "rewards": {
            "xp": 223,
            "reputation": {
              "arcanum": 4
            }
          }
        }
      ],
      "events": [],
      "mechanisms": [
        {
          "id": "eclipse_depth_1_lever",
          "name": "위험 장치 차단",
          "x": 6,
          "y": 6,
          "circuit": "vents",
          "description": "이 층의 환경 위험을 멈춥니다."
        }
      ],
      "zones": [
        {
          "id": "eclipse_depth_1_vent_0",
          "circuit": "vents",
          "x": 16,
          "y": 15,
          "kind": "circle",
          "radius": 1.8,
          "windup": 1.2,
          "period": 5.5,
          "damage": 56,
          "offset": 0.0,
          "name": "황혼 분출"
        },
        {
          "id": "eclipse_depth_1_vent_1",
          "circuit": "vents",
          "x": 25,
          "y": 16,
          "kind": "circle",
          "radius": 1.8,
          "windup": 1.2,
          "period": 5.5,
          "damage": 56,
          "offset": 1.3,
          "name": "황혼 분출"
        },
        {
          "id": "eclipse_depth_1_vent_2",
          "circuit": "vents",
          "x": 30,
          "y": 24,
          "kind": "circle",
          "radius": 1.8,
          "windup": 1.2,
          "period": 5.5,
          "damage": 56,
          "offset": 2.6,
          "name": "황혼 분출"
        }
      ],
      "waypoint": null,
      "group": "eclipse",
      "guardianTotal": 3
    },
    "eclipse_depth_2": {
      "id": "eclipse_depth_2",
      "name": "황혼 성채 · 2층",
      "kind": "dungeon",
      "width": 40,
      "height": 30,
      "level": 42,
      "music": "dungeon",
      "spawn": [
        3.5,
        15.5
      ],
      "tiles": [
        "########################################",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaa#aaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaa#aaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaa#aaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaa#aaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaa#aaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaa#aaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaaaaaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#aaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "########################################"
      ],
      "props": [
        {
          "type": "ruin",
          "x": 10,
          "y": 3,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 35,
          "y": 4,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 35,
          "y": 26,
          "width": 1,
          "height": 1,
          "solid": false
        }
      ],
      "npcs": [],
      "portals": [
        {
          "id": "up",
          "name": "위층",
          "x": 2,
          "y": 15,
          "to": "eclipse_depth_1",
          "spawn": [
            36,
            15.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "throne",
          "name": "군주의 방",
          "x": 37,
          "y": 15,
          "to": "eclipse_throne",
          "spawn": [
            3.5,
            14
          ],
          "requiresQuest": null,
          "requiresGuardians": true
        }
      ],
      "spawns": [
        {
          "id": "eclipse_depth_2_mob_0",
          "monster": "dusk_sentinel",
          "x": 10,
          "y": 7,
          "level": 42,
          "guardian": false
        },
        {
          "id": "eclipse_depth_2_mob_1",
          "monster": "dusk_magus",
          "x": 20,
          "y": 7,
          "level": 42,
          "guardian": false
        },
        {
          "id": "eclipse_depth_2_mob_2",
          "monster": "abyss_spider",
          "x": 30,
          "y": 7,
          "level": 42,
          "guardian": true
        },
        {
          "id": "eclipse_depth_2_mob_3",
          "monster": "dusk_sentinel",
          "x": 8,
          "y": 15,
          "level": 42,
          "guardian": false
        },
        {
          "id": "eclipse_depth_2_mob_4",
          "monster": "dusk_magus",
          "x": 16,
          "y": 15,
          "level": 42,
          "guardian": false
        },
        {
          "id": "eclipse_depth_2_mob_5",
          "monster": "abyss_spider",
          "x": 25,
          "y": 16,
          "level": 42,
          "guardian": false
        },
        {
          "id": "eclipse_depth_2_mob_6",
          "monster": "dusk_sentinel",
          "x": 33,
          "y": 16,
          "level": 42,
          "guardian": true
        },
        {
          "id": "eclipse_depth_2_mob_7",
          "monster": "dusk_magus",
          "x": 10,
          "y": 24,
          "level": 42,
          "guardian": false
        },
        {
          "id": "eclipse_depth_2_mob_8",
          "monster": "abyss_spider",
          "x": 19,
          "y": 24,
          "level": 42,
          "guardian": false
        },
        {
          "id": "eclipse_depth_2_mob_9",
          "monster": "dusk_sentinel",
          "x": 28,
          "y": 24,
          "level": 42,
          "guardian": false
        },
        {
          "id": "eclipse_depth_2_mob_10",
          "monster": "dusk_magus",
          "x": 34,
          "y": 25,
          "level": 42,
          "guardian": true
        },
        {
          "id": "eclipse_depth_2_mob_11",
          "monster": "abyss_spider",
          "x": 15,
          "y": 11,
          "level": 42,
          "guardian": false
        }
      ],
      "resources": [],
      "chests": [
        {
          "id": "eclipse_depth_2_chest",
          "x": 34,
          "y": 5,
          "gold": 71,
          "materials": {
            "crystal": 2,
            "ore": 3
          },
          "equipmentChance": 0.3
        }
      ],
      "discoveries": [
        {
          "id": "eclipse_depth_2_record",
          "name": "황혼 성채의 기록 2",
          "kind": "landmark",
          "sprite": "ruin",
          "x": 6,
          "y": 24,
          "description": "군주의 약점과 봉인 장치의 기록입니다.",
          "rewards": {
            "xp": 223,
            "reputation": {
              "arcanum": 4
            }
          }
        }
      ],
      "events": [],
      "mechanisms": [
        {
          "id": "eclipse_depth_2_lever",
          "name": "위험 장치 차단",
          "x": 6,
          "y": 6,
          "circuit": "vents",
          "description": "이 층의 환경 위험을 멈춥니다."
        }
      ],
      "zones": [
        {
          "id": "eclipse_depth_2_vent_0",
          "circuit": "vents",
          "x": 16,
          "y": 15,
          "kind": "circle",
          "radius": 1.8,
          "windup": 1.2,
          "period": 5.5,
          "damage": 56,
          "offset": 0.0,
          "name": "황혼 분출"
        },
        {
          "id": "eclipse_depth_2_vent_1",
          "circuit": "vents",
          "x": 25,
          "y": 16,
          "kind": "circle",
          "radius": 1.8,
          "windup": 1.2,
          "period": 5.5,
          "damage": 56,
          "offset": 1.3,
          "name": "황혼 분출"
        },
        {
          "id": "eclipse_depth_2_vent_2",
          "circuit": "vents",
          "x": 30,
          "y": 24,
          "kind": "circle",
          "radius": 1.8,
          "windup": 1.2,
          "period": 5.5,
          "damage": 56,
          "offset": 2.6,
          "name": "황혼 분출"
        }
      ],
      "waypoint": null,
      "group": "eclipse",
      "guardianTotal": 3
    },
    "eclipse_throne": {
      "id": "eclipse_throne",
      "name": "황혼왕 발테르의 전당",
      "kind": "boss",
      "width": 34,
      "height": 28,
      "level": 43,
      "music": "boss",
      "spawn": [
        3.5,
        14.5
      ],
      "tiles": [
        "##################################",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "##################################"
      ],
      "props": [
        {
          "type": "ruin",
          "x": 10,
          "y": 3,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 29,
          "y": 4,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 29,
          "y": 24,
          "width": 1,
          "height": 1,
          "solid": false
        }
      ],
      "npcs": [],
      "portals": [
        {
          "id": "exit",
          "name": "입구로",
          "x": 2,
          "y": 14,
          "to": "eclipse_depth_2",
          "spawn": [
            36,
            15.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        }
      ],
      "spawns": [
        {
          "id": "eclipse_boss",
          "monster": "eclipse_king",
          "x": 23,
          "y": 14,
          "level": 43,
          "guardian": false
        }
      ],
      "resources": [],
      "chests": [],
      "discoveries": [],
      "events": [],
      "mechanisms": [
        {
          "id": "eclipse_ward_0",
          "name": "수호석 1",
          "x": 9,
          "y": 5,
          "ward": true,
          "description": "해제하면 군주의 피해 감소 12%가 사라집니다."
        },
        {
          "id": "eclipse_ward_1",
          "name": "수호석 2",
          "x": 28,
          "y": 23,
          "ward": true,
          "description": "해제하면 군주의 피해 감소 12%가 사라집니다."
        }
      ],
      "zones": [
        {
          "id": "eclipse_zone_0",
          "x": 15,
          "y": 8,
          "kind": "circle",
          "radius": 2,
          "windup": 1.4,
          "period": 7,
          "damage": 61,
          "offset": 0,
          "name": "황혼 분출"
        },
        {
          "id": "eclipse_zone_1",
          "x": 18,
          "y": 21,
          "kind": "circle",
          "radius": 2,
          "windup": 1.4,
          "period": 7,
          "damage": 61,
          "offset": 2,
          "name": "황혼 분출"
        }
      ],
      "waypoint": null,
      "group": "eclipse",
      "boss": "eclipse_king"
    },
    "forest_den_deep": {
      "id": "forest_den_deep",
      "name": "늑대숲 동굴 · 심층",
      "kind": "dungeon",
      "width": 36,
      "height": 28,
      "level": 6,
      "music": "dungeon",
      "spawn": [
        3.5,
        14.5
      ],
      "tiles": [
        "####################################",
        "#ffffffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffffffff#",
        "#ffffff#fffffff#fffffff#fffffff#fff#",
        "#ffffff#fffffff#fffffff#fffffff#fff#",
        "#ffffff#fffffff#fffffff#fffffffffff#",
        "#ffffff#fffffff#fffffff#fffffffffff#",
        "#ffffff#fffffff#fffffff#fffffffffff#",
        "#ffffff#fffffff#fffffff#fffffffffff#",
        "#ffffff#fffffffffffffff#fffffffffff#",
        "#ffffff#fffffffffffffff#fffffffffff#",
        "#ffffff#fffffffffffffff#fffffffffff#",
        "#ffffff#fffffffffffffff#fffffffffff#",
        "#ffffffffffffffffffffff#fffffffffff#",
        "#ffffffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffffffff#",
        "#ffffffffffffff#fffffff#fffffffffff#",
        "#ffffffffffffff#fffffffffffffffffff#",
        "#ffffffffffffff#fffffffffffffffffff#",
        "#ffffffffffffff#fffffffffffffffffff#",
        "#ffffffffffffff#fffffffffffffffffff#",
        "#ffffffffffffff#fffffffffffffffffff#",
        "#ffffffffffffff#fffffff#fffffffffff#",
        "#ffffff#fffffff#fffffff#fffffff#fff#",
        "#ffffff#fffffff#fffffff#fffffff#fff#",
        "#ffffffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffffffff#",
        "####################################"
      ],
      "props": [],
      "npcs": [],
      "portals": [
        {
          "id": "up",
          "name": "위층",
          "x": 2,
          "y": 14,
          "to": "forest_den",
          "spawn": [
            27,
            12.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "boss",
          "name": "군주의 방",
          "x": 33,
          "y": 14,
          "to": "wolf_lair",
          "spawn": [
            3.5,
            11.5
          ],
          "requiresQuest": null,
          "requiresGuardians": true
        }
      ],
      "spawns": [
        {
          "id": "forest_den_deep_0",
          "monster": "cave_bat",
          "x": 9,
          "y": 6,
          "level": 6,
          "guardian": false
        },
        {
          "id": "forest_den_deep_1",
          "monster": "venom_spider",
          "x": 18,
          "y": 6,
          "level": 6,
          "guardian": false
        },
        {
          "id": "forest_den_deep_2",
          "monster": "goblin_guard",
          "x": 27,
          "y": 6,
          "level": 6,
          "guardian": true
        },
        {
          "id": "forest_den_deep_3",
          "monster": "cave_bat",
          "x": 9,
          "y": 14,
          "level": 6,
          "guardian": false
        },
        {
          "id": "forest_den_deep_4",
          "monster": "venom_spider",
          "x": 18,
          "y": 14,
          "level": 6,
          "guardian": false
        },
        {
          "id": "forest_den_deep_5",
          "monster": "goblin_guard",
          "x": 28,
          "y": 14,
          "level": 6,
          "guardian": true
        },
        {
          "id": "forest_den_deep_6",
          "monster": "cave_bat",
          "x": 10,
          "y": 22,
          "level": 6,
          "guardian": false
        },
        {
          "id": "forest_den_deep_7",
          "monster": "venom_spider",
          "x": 21,
          "y": 22,
          "level": 6,
          "guardian": false
        },
        {
          "id": "forest_den_deep_8",
          "monster": "goblin_guard",
          "x": 30,
          "y": 22,
          "level": 6,
          "guardian": true
        }
      ],
      "resources": [],
      "chests": [
        {
          "id": "forest_den_deep_chest",
          "x": 30,
          "y": 5,
          "gold": 35,
          "materials": {
            "ore": 3,
            "crystal": 2
          },
          "equipmentChance": 0.3
        }
      ],
      "discoveries": [],
      "events": [],
      "mechanisms": [
        {
          "id": "forest_den_deep_lever",
          "name": "분출 장치 차단",
          "x": 6,
          "y": 22,
          "circuit": "steam",
          "description": "증기 분출을 멈춥니다."
        }
      ],
      "zones": [
        {
          "id": "forest_den_deep_zone",
          "circuit": "steam",
          "x": 18,
          "y": 14,
          "kind": "ring",
          "radius": 3.5,
          "innerRadius": 1.1,
          "windup": 1.4,
          "period": 6,
          "damage": 20,
          "offset": 0,
          "name": "봉인 파동"
        }
      ],
      "waypoint": null,
      "group": "wolf",
      "guardianTotal": 3
    },
    "mine_deep": {
      "id": "mine_deep",
      "name": "잊힌 폐광 · 심층",
      "kind": "dungeon",
      "width": 36,
      "height": 28,
      "level": 9,
      "music": "dungeon",
      "spawn": [
        3.5,
        14.5
      ],
      "tiles": [
        "####################################",
        "#ffffffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffffffff#",
        "#ffffff#fffffff#fffffff#fffffff#fff#",
        "#ffffff#fffffff#fffffff#fffffff#fff#",
        "#ffffff#fffffff#fffffff#fffffffffff#",
        "#ffffff#fffffff#fffffffffffffffffff#",
        "#ffffff#fffffff#fffffffffffffffffff#",
        "#ffffff#fffffff#fffffffffffffffffff#",
        "#ffffff#fffffff#fffffffffffffffffff#",
        "#ffffff#fffffffffffffffffffffffffff#",
        "#ffffff#fffffffffffffff#fffffffffff#",
        "#ffffff#fffffffffffffff#fffffffffff#",
        "#ffffff#fffffffffffffff#fffffffffff#",
        "#ffffffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffffffff#",
        "#ffffffffffffff#fffffff#fffffffffff#",
        "#ffffffffffffff#fffffff#fffffffffff#",
        "#ffffffffffffff#fffffff#fffffffffff#",
        "#ffffffffffffff#fffffff#fffffffffff#",
        "#ffffffffffffff#fffffff#fffffffffff#",
        "#ffffffffffffff#fffffff#fffffffffff#",
        "#ffffffffffffff#fffffff#fffffffffff#",
        "#ffffff#fffffff#fffffff#fffffff#fff#",
        "#ffffff#fffffff#fffffff#fffffff#fff#",
        "#ffffffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffffffff#",
        "####################################"
      ],
      "props": [],
      "npcs": [],
      "portals": [
        {
          "id": "up",
          "name": "위층",
          "x": 2,
          "y": 14,
          "to": "mine",
          "spawn": [
            29,
            12.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "boss",
          "name": "군주의 방",
          "x": 33,
          "y": 14,
          "to": "forge_chamber",
          "spawn": [
            3.5,
            11.5
          ],
          "requiresQuest": null,
          "requiresGuardians": true
        }
      ],
      "spawns": [
        {
          "id": "mine_deep_0",
          "monster": "bone_soldier",
          "x": 9,
          "y": 6,
          "level": 9,
          "guardian": false
        },
        {
          "id": "mine_deep_1",
          "monster": "cave_bat",
          "x": 18,
          "y": 6,
          "level": 9,
          "guardian": false
        },
        {
          "id": "mine_deep_2",
          "monster": "golem",
          "x": 27,
          "y": 6,
          "level": 9,
          "guardian": true
        },
        {
          "id": "mine_deep_3",
          "monster": "bone_soldier",
          "x": 9,
          "y": 14,
          "level": 9,
          "guardian": false
        },
        {
          "id": "mine_deep_4",
          "monster": "cave_bat",
          "x": 18,
          "y": 14,
          "level": 9,
          "guardian": false
        },
        {
          "id": "mine_deep_5",
          "monster": "golem",
          "x": 28,
          "y": 14,
          "level": 9,
          "guardian": true
        },
        {
          "id": "mine_deep_6",
          "monster": "bone_soldier",
          "x": 10,
          "y": 22,
          "level": 9,
          "guardian": false
        },
        {
          "id": "mine_deep_7",
          "monster": "cave_bat",
          "x": 21,
          "y": 22,
          "level": 9,
          "guardian": false
        },
        {
          "id": "mine_deep_8",
          "monster": "golem",
          "x": 30,
          "y": 22,
          "level": 9,
          "guardian": true
        }
      ],
      "resources": [],
      "chests": [
        {
          "id": "mine_deep_chest",
          "x": 30,
          "y": 5,
          "gold": 41,
          "materials": {
            "ore": 3,
            "crystal": 2
          },
          "equipmentChance": 0.3
        }
      ],
      "discoveries": [],
      "events": [],
      "mechanisms": [
        {
          "id": "mine_deep_lever",
          "name": "분출 장치 차단",
          "x": 6,
          "y": 22,
          "circuit": "steam",
          "description": "증기 분출을 멈춥니다."
        }
      ],
      "zones": [
        {
          "id": "mine_deep_zone",
          "circuit": "steam",
          "x": 18,
          "y": 14,
          "kind": "ring",
          "radius": 3.5,
          "innerRadius": 1.1,
          "windup": 1.4,
          "period": 6,
          "damage": 23,
          "offset": 0,
          "name": "봉인 파동"
        }
      ],
      "waypoint": null,
      "group": "mine",
      "guardianTotal": 3
    },
    "ruins_deep": {
      "id": "ruins_deep",
      "name": "별의 유적 · 심층",
      "kind": "dungeon",
      "width": 36,
      "height": 28,
      "level": 13,
      "music": "dungeon",
      "spawn": [
        3.5,
        14.5
      ],
      "tiles": [
        "####################################",
        "#ffffffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffffffff#",
        "#ffffff#fffffff#fffffff#fffffff#fff#",
        "#ffffff#fffffff#fffffff#fffffff#fff#",
        "#ffffff#fffffff#fffffff#fffffffffff#",
        "#ffffff#fffffff#fffffff#fffffffffff#",
        "#ffffff#fffffff#fffffffffffffffffff#",
        "#ffffff#fffffff#fffffffffffffffffff#",
        "#ffffff#fffffff#fffffffffffffffffff#",
        "#ffffff#fffffff#fffffffffffffffffff#",
        "#ffffff#fffffffffffffffffffffffffff#",
        "#ffffff#fffffffffffffff#fffffffffff#",
        "#ffffff#fffffffffffffff#fffffffffff#",
        "#ffffffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffffffff#",
        "#ffffffffffffff#fffffff#fffffffffff#",
        "#ffffffffffffff#fffffff#fffffffffff#",
        "#ffffffffffffff#fffffff#fffffffffff#",
        "#ffffffffffffff#fffffff#fffffffffff#",
        "#ffffffffffffff#fffffff#fffffffffff#",
        "#ffffffffffffff#fffffff#fffffffffff#",
        "#ffffffffffffff#fffffff#fffffffffff#",
        "#ffffff#fffffff#fffffff#fffffff#fff#",
        "#ffffff#fffffff#fffffff#fffffff#fff#",
        "#ffffffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffffffff#",
        "####################################"
      ],
      "props": [],
      "npcs": [],
      "portals": [
        {
          "id": "up",
          "name": "위층",
          "x": 2,
          "y": 14,
          "to": "ruins",
          "spawn": [
            31,
            12.5
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        },
        {
          "id": "boss",
          "name": "군주의 방",
          "x": 33,
          "y": 14,
          "to": "dragon_sanctum",
          "spawn": [
            3.5,
            11.5
          ],
          "requiresQuest": null,
          "requiresGuardians": true
        }
      ],
      "spawns": [
        {
          "id": "ruins_deep_0",
          "monster": "curse_wraith",
          "x": 9,
          "y": 6,
          "level": 13,
          "guardian": false
        },
        {
          "id": "ruins_deep_1",
          "monster": "lizard",
          "x": 18,
          "y": 6,
          "level": 13,
          "guardian": false
        },
        {
          "id": "ruins_deep_2",
          "monster": "lizard_shaman",
          "x": 27,
          "y": 6,
          "level": 13,
          "guardian": true
        },
        {
          "id": "ruins_deep_3",
          "monster": "curse_wraith",
          "x": 9,
          "y": 14,
          "level": 13,
          "guardian": false
        },
        {
          "id": "ruins_deep_4",
          "monster": "lizard",
          "x": 18,
          "y": 14,
          "level": 13,
          "guardian": false
        },
        {
          "id": "ruins_deep_5",
          "monster": "lizard_shaman",
          "x": 28,
          "y": 14,
          "level": 13,
          "guardian": true
        },
        {
          "id": "ruins_deep_6",
          "monster": "curse_wraith",
          "x": 10,
          "y": 22,
          "level": 13,
          "guardian": false
        },
        {
          "id": "ruins_deep_7",
          "monster": "lizard",
          "x": 21,
          "y": 22,
          "level": 13,
          "guardian": false
        },
        {
          "id": "ruins_deep_8",
          "monster": "lizard_shaman",
          "x": 30,
          "y": 22,
          "level": 13,
          "guardian": true
        }
      ],
      "resources": [],
      "chests": [
        {
          "id": "ruins_deep_chest",
          "x": 30,
          "y": 5,
          "gold": 49,
          "materials": {
            "ore": 3,
            "crystal": 2
          },
          "equipmentChance": 0.3
        }
      ],
      "discoveries": [],
      "events": [],
      "mechanisms": [
        {
          "id": "ruins_deep_lever",
          "name": "분출 장치 차단",
          "x": 6,
          "y": 22,
          "circuit": "steam",
          "description": "증기 분출을 멈춥니다."
        }
      ],
      "zones": [
        {
          "id": "ruins_deep_zone",
          "circuit": "steam",
          "x": 18,
          "y": 14,
          "kind": "ring",
          "radius": 3.5,
          "innerRadius": 1.1,
          "windup": 1.4,
          "period": 6,
          "damage": 27,
          "offset": 0,
          "name": "봉인 파동"
        }
      ],
      "waypoint": null,
      "group": "ruins",
      "guardianTotal": 3
    },
    "guild_arena": {
      "id": "guild_arena",
      "name": "길드의 시련장",
      "kind": "dungeon",
      "width": 34,
      "height": 28,
      "level": 10,
      "music": "dungeon",
      "spawn": [
        3.5,
        14.5
      ],
      "tiles": [
        "##################################",
        "#ffffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffffff#",
        "#ffffff#fffffff#fffffff#fffffffff#",
        "#ffffff#fffffff#fffffff#fffffffff#",
        "#ffffff#fffffff#fffffff#fffffffff#",
        "#ffffff#fffffff#fffffff#fffffffff#",
        "#ffffff#fffffff#fffffff#fffffffff#",
        "#ffffff#fffffff#fffffff#fffffffff#",
        "#ffffff#fffffffffffffff#fffffffff#",
        "#ffffff#fffffffffffffff#fffffffff#",
        "#ffffff#fffffffffffffff#fffffffff#",
        "#ffffff#fffffffffffffff#fffffffff#",
        "#ffffffffffffffffffffff#fffffffff#",
        "#ffffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffffff#",
        "#ffffffffffffff#fffffff#fffffffff#",
        "#ffffffffffffff#fffffffffffffffff#",
        "#ffffff#fffffff#fffffffffffffffff#",
        "#ffffff#fffffff#fffffffffffffffff#",
        "#ffffff#fffffff#fffffffffffffffff#",
        "#ffffff#fffffff#fffffffffffffffff#",
        "#ffffff#fffffff#fffffff#fffffffff#",
        "#ffffff#fffffff#fffffff#fffffffff#",
        "#ffffff#fffffff#fffffff#fffffffff#",
        "#ffffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffffff#",
        "##################################"
      ],
      "props": [],
      "npcs": [
        {
          "id": "arena_steward",
          "name": "연전 관리인",
          "service": "arena",
          "x": 5,
          "y": 14
        }
      ],
      "portals": [
        {
          "id": "exit",
          "name": "오크우드로",
          "x": 2,
          "y": 14,
          "to": "oakwood",
          "spawn": [
            22,
            14
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        }
      ],
      "spawns": [],
      "resources": [],
      "chests": [],
      "discoveries": [],
      "events": [],
      "mechanisms": [],
      "zones": [],
      "waypoint": null,
      "group": "trial",
      "guardianTotal": 0,
      "onlineScope": "solo"
    },
    "raid_verdant": {
      "id": "raid_verdant",
      "name": "세계수의 심장",
      "kind": "boss",
      "width": 34,
      "height": 28,
      "level": 18,
      "music": "boss",
      "spawn": [
        4.5,
        14
      ],
      "tiles": [
        "##################################",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "##################################"
      ],
      "props": [
        {
          "type": "ruin",
          "x": 10,
          "y": 3,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 29,
          "y": 4,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 29,
          "y": 24,
          "width": 1,
          "height": 1,
          "solid": false
        }
      ],
      "npcs": [],
      "portals": [
        {
          "id": "exit",
          "name": "오크우드로",
          "x": 2,
          "y": 14,
          "to": "oakwood",
          "spawn": [
            24,
            14
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        }
      ],
      "spawns": [
        {
          "id": "raid_verdant_boss",
          "monster": "raid_verdant",
          "x": 23,
          "y": 14,
          "level": 18,
          "guardian": false
        }
      ],
      "resources": [],
      "chests": [],
      "discoveries": [],
      "events": [],
      "mechanisms": [
        {
          "id": "raid_verdant_ward_0",
          "name": "공명 수호석 1",
          "x": 9,
          "y": 5,
          "ward": true,
          "description": "해제하면 군주의 피해 감소 12%가 사라집니다."
        },
        {
          "id": "raid_verdant_ward_1",
          "name": "공명 수호석 2",
          "x": 28,
          "y": 23,
          "ward": true,
          "description": "해제하면 군주의 피해 감소 12%가 사라집니다."
        }
      ],
      "zones": [
        {
          "id": "raid_verdant_zone_0",
          "x": 15,
          "y": 8,
          "kind": "circle",
          "radius": 2,
          "windup": 1.4,
          "period": 7,
          "damage": 43,
          "offset": 0,
          "name": "황혼 분출"
        },
        {
          "id": "raid_verdant_zone_1",
          "x": 18,
          "y": 21,
          "kind": "circle",
          "radius": 2,
          "windup": 1.4,
          "period": 7,
          "damage": 43,
          "offset": 2,
          "name": "황혼 분출"
        }
      ],
      "waypoint": null,
      "group": "raid_verdant",
      "boss": "raid_verdant"
    },
    "raid_glacial": {
      "id": "raid_glacial",
      "name": "빙관의 파수꾼",
      "kind": "boss",
      "width": 34,
      "height": 28,
      "level": 32,
      "music": "boss",
      "spawn": [
        4.5,
        14
      ],
      "tiles": [
        "##################################",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "##################################"
      ],
      "props": [
        {
          "type": "ruin",
          "x": 10,
          "y": 3,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 29,
          "y": 4,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 29,
          "y": 24,
          "width": 1,
          "height": 1,
          "solid": false
        }
      ],
      "npcs": [],
      "portals": [
        {
          "id": "exit",
          "name": "오크우드로",
          "x": 2,
          "y": 14,
          "to": "oakwood",
          "spawn": [
            24,
            14
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        }
      ],
      "spawns": [
        {
          "id": "raid_glacial_boss",
          "monster": "raid_glacial",
          "x": 23,
          "y": 14,
          "level": 32,
          "guardian": false
        }
      ],
      "resources": [],
      "chests": [],
      "discoveries": [],
      "events": [],
      "mechanisms": [
        {
          "id": "raid_glacial_ward_0",
          "name": "공명 수호석 1",
          "x": 9,
          "y": 5,
          "ward": true,
          "description": "해제하면 군주의 피해 감소 12%가 사라집니다."
        },
        {
          "id": "raid_glacial_ward_1",
          "name": "공명 수호석 2",
          "x": 28,
          "y": 23,
          "ward": true,
          "description": "해제하면 군주의 피해 감소 12%가 사라집니다."
        }
      ],
      "zones": [
        {
          "id": "raid_glacial_zone_0",
          "x": 15,
          "y": 8,
          "kind": "circle",
          "radius": 2,
          "windup": 1.4,
          "period": 7,
          "damage": 57,
          "offset": 0,
          "name": "황혼 분출"
        },
        {
          "id": "raid_glacial_zone_1",
          "x": 18,
          "y": 21,
          "kind": "circle",
          "radius": 2,
          "windup": 1.4,
          "period": 7,
          "damage": 57,
          "offset": 2,
          "name": "황혼 분출"
        }
      ],
      "waypoint": null,
      "group": "raid_glacial",
      "boss": "raid_glacial"
    },
    "raid_astral": {
      "id": "raid_astral",
      "name": "왕관을 삼킨 별",
      "kind": "boss",
      "width": 34,
      "height": 28,
      "level": 48,
      "music": "boss",
      "spawn": [
        4.5,
        14
      ],
      "tiles": [
        "##################################",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#",
        "##################################"
      ],
      "props": [
        {
          "type": "ruin",
          "x": 10,
          "y": 3,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 29,
          "y": 4,
          "width": 1,
          "height": 1,
          "solid": false
        },
        {
          "type": "ruin",
          "x": 29,
          "y": 24,
          "width": 1,
          "height": 1,
          "solid": false
        }
      ],
      "npcs": [],
      "portals": [
        {
          "id": "exit",
          "name": "오크우드로",
          "x": 2,
          "y": 14,
          "to": "oakwood",
          "spawn": [
            24,
            14
          ],
          "requiresQuest": null,
          "requiresGuardians": false
        }
      ],
      "spawns": [
        {
          "id": "raid_astral_boss",
          "monster": "raid_astral",
          "x": 23,
          "y": 14,
          "level": 48,
          "guardian": false
        }
      ],
      "resources": [],
      "chests": [],
      "discoveries": [],
      "events": [],
      "mechanisms": [
        {
          "id": "raid_astral_ward_0",
          "name": "공명 수호석 1",
          "x": 9,
          "y": 5,
          "ward": true,
          "description": "해제하면 군주의 피해 감소 12%가 사라집니다."
        },
        {
          "id": "raid_astral_ward_1",
          "name": "공명 수호석 2",
          "x": 28,
          "y": 23,
          "ward": true,
          "description": "해제하면 군주의 피해 감소 12%가 사라집니다."
        }
      ],
      "zones": [
        {
          "id": "raid_astral_zone_0",
          "x": 15,
          "y": 8,
          "kind": "circle",
          "radius": 2,
          "windup": 1.4,
          "period": 7,
          "damage": 73,
          "offset": 0,
          "name": "황혼 분출"
        },
        {
          "id": "raid_astral_zone_1",
          "x": 18,
          "y": 21,
          "kind": "circle",
          "radius": 2,
          "windup": 1.4,
          "period": 7,
          "damage": 73,
          "offset": 2,
          "name": "황혼 분출"
        }
      ],
      "waypoint": null,
      "group": "raid_astral",
      "boss": "raid_astral"
    },
    "duel_arena": {
      "id": "duel_arena",
      "name": "왕국 훈련 결투장",
      "kind": "dungeon",
      "width": 34,
      "height": 28,
      "level": 10,
      "music": "dungeon",
      "spawn": [
        3.5,
        14.5
      ],
      "tiles": [
        "##################################",
        "#ffffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffffff#",
        "#ffffff#fffffff#fffffff#fffffffff#",
        "#ffffff#fffffff#fffffff#fffffffff#",
        "#ffffff#fffffff#fffffff#fffffffff#",
        "#ffffff#fffffff#fffffff#fffffffff#",
        "#ffffff#fffffff#fffffff#fffffffff#",
        "#ffffff#fffffff#fffffff#fffffffff#",
        "#ffffff#fffffffffffffff#fffffffff#",
        "#ffffff#fffffffffffffff#fffffffff#",
        "#ffffff#fffffffffffffff#fffffffff#",
        "#ffffff#fffffffffffffff#fffffffff#",
        "#ffffffffffffffffffffff#fffffffff#",
        "#ffffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffffff#",
        "#ffffffffffffff#fffffff#fffffffff#",
        "#ffffffffffffff#fffffffffffffffff#",
        "#ffffff#fffffff#fffffffffffffffff#",
        "#ffffff#fffffff#fffffffffffffffff#",
        "#ffffff#fffffff#fffffffffffffffff#",
        "#ffffff#fffffff#fffffffffffffffff#",
        "#ffffff#fffffff#fffffff#fffffffff#",
        "#ffffff#fffffff#fffffff#fffffffff#",
        "#ffffff#fffffff#fffffff#fffffffff#",
        "#ffffffffffffffffffffffffffffffff#",
        "#ffffffffffffffffffffffffffffffff#",
        "##################################"
      ],
      "props": [],
      "npcs": [],
      "portals": [],
      "spawns": [],
      "resources": [],
      "chests": [],
      "discoveries": [],
      "events": [],
      "mechanisms": [],
      "zones": [],
      "waypoint": null,
      "group": "duel",
      "guardianTotal": 0
    }
  },
  "mapKinds": {
    "town": "마을",
    "field": "필드",
    "dungeon": "던전",
    "boss": "보스방"
  },
  "spritePalette": {
    "k": "#28312a",
    "s": "@skin",
    "h": "@hair",
    "c": "@cloth",
    "a": "@accent",
    "m": "#bcc5b2",
    "d": "#5e6e60",
    "w": "#f4e8c5",
    "r": "#b85b43",
    "g": "#73985c",
    "b": "#7c613c",
    "y": "#d6bb73",
    "o": "#d39758",
    "v": "#967f9e",
    "e": "#302f26",
    "f": "#afd2bc",
    "n": "#8095a3"
  },
  "sprites": {
    "warrior": {
      "width": 16,
      "height": 20,
      "rows": [
        "......hhhh......",
        ".....hhhhhh.....",
        ".....hssssh.....",
        ".....sskssk.....",
        "......ssss......",
        "......hssh......",
        "....aacccca.....",
        "...aacccccca....",
        "...accmcmcca....",
        "..ssccmmmccss...",
        "..sscccccccss...",
        "..aacccmcccaa...",
        "...acccccca.m...",
        "...acccccca.m...",
        "....cbbbbc..m...",
        "....dd..dd..m...",
        "....dd..dd..m...",
        "....dd..dd..y...",
        "...bbb..bbb.....",
        "...bbb..bbb....."
      ],
      "palette": {}
    },
    "archer": {
      "width": 16,
      "height": 20,
      "rows": [
        "......cccc......",
        ".....cccccc.....",
        "....ccssshcc....",
        "....csksskcc....",
        ".....cssssc.....",
        "......sssh......",
        "....aacccca.....",
        "...acccbccca....",
        "...cccbcccaa.y..",
        "..ssccbcccss..y.",
        "..sscccbccss..y.",
        "...accccbca...y.",
        "...accccbca..y..",
        "....ccbbcc..y...",
        "....dd..dd......",
        "....dd..dd......",
        "....dd..dd......",
        "...bbb..bbb.....",
        "...bbb..bbb.....",
        "................"
      ],
      "palette": {}
    },
    "magician": {
      "width": 16,
      "height": 20,
      "rows": [
        ".......a........",
        "......ccc.......",
        ".....ccccc......",
        "....ccccccc.....",
        "...aaaacaaaa....",
        ".....hssssh.....",
        ".....sskssk.....",
        "......ssss......",
        "....aacccca..f..",
        "...accccccca.f..",
        "..sscccccccs.b..",
        "..ssccaaaccs.b..",
        "...acccccca..b..",
        "...acccccca..b..",
        "...acccccca..b..",
        "...cccaaccc..b..",
        "..cccccccccc.b..",
        "..cccccccccc.b..",
        "...bbb..bbb.....",
        "................"
      ],
      "palette": {}
    },
    "guardian": {
      "width": 16,
      "height": 20,
      "rows": [
        "......mmmm......",
        ".....mmmmmm.....",
        ".....mssmss.....",
        ".....mskskm.....",
        "......ssss......",
        "....aammmmaa....",
        "...ammmmmmma....",
        "..mmmmccmmmm....",
        "..mmmcccmmaa....",
        "..ssmmmmmmss....",
        "..mmmaaaammss...",
        "..maaaaaamm.....",
        "..maamaaaam..m..",
        "..maaaaaaam..m..",
        "...aaaaaam..b...",
        "....dd..dd..b...",
        "....dd..dd......",
        "....dd..dd......",
        "...mmm..mmm.....",
        "...bbb..bbb....."
      ],
      "palette": {}
    },
    "elf_ears": {
      "width": 16,
      "height": 20,
      "rows": [
        "................",
        "................",
        "................",
        "...s........s...",
        "..ss........ss..",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................"
      ],
      "palette": {}
    },
    "dragon_horns": {
      "width": 16,
      "height": 20,
      "rows": [
        "....a......a....",
        "....aa....aa....",
        ".....a....a.....",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        ".............a..",
        ".............aa.",
        "..............a.",
        ".............aa.",
        "............aa..",
        "................"
      ],
      "palette": {}
    },
    "dwarf_beard": {
      "width": 16,
      "height": 20,
      "rows": [
        "................",
        "................",
        "................",
        "................",
        "................",
        ".....hhhhhh.....",
        ".....hwhhwh.....",
        "......hhhh......",
        "......hhhh......",
        ".......hh.......",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................"
      ],
      "palette": {}
    },
    "beast_ears": {
      "width": 16,
      "height": 20,
      "rows": [
        "....h......h....",
        "....ha....ah....",
        "....hh....hh....",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "................",
        "..............h.",
        ".............hh.",
        "............hhh.",
        "............hh..",
        "................"
      ],
      "palette": {}
    },
    "slime": {
      "width": 16,
      "height": 12,
      "rows": [
        "................",
        "......gggg......",
        "....gggggggg....",
        "...ggfffffggg...",
        "..gggffffffggg..",
        "..gggggggggggg..",
        ".ggggkggggkgggg.",
        ".ggggkggggkgggg.",
        ".gggggggggggggg.",
        "..gggggwwggggg..",
        "...gggggggggg...",
        "....dddddddd...."
      ],
      "palette": {
        "g": "#89b68a",
        "f": "#bdd5a4",
        "d": "#668568"
      }
    },
    "goblin": {
      "width": 16,
      "height": 14,
      "rows": [
        ".....ggggg......",
        "..g.ggggggg.g...",
        "..gggkggkgggg...",
        "...ggggggggg....",
        "....ggwwwgg.....",
        ".....ggggg......",
        "....bbccbb......",
        "...bbccccbb.....",
        "..ggbccccbgg.m..",
        "..ggbccccbgg.m..",
        "....bbbbbb...m..",
        "....bb..bb...y..",
        "....gg..gg......",
        "...bbb..bbb....."
      ],
      "palette": {
        "c": "#8a7350"
      }
    },
    "wolf": {
      "width": 18,
      "height": 14,
      "rows": [
        "..................",
        "...dd........dd...",
        "...dndddddddndd...",
        "....nnnnnnnnnn....",
        "...nnkwnnnwknnn...",
        "...nnnnnwnnnnnn...",
        "....nnnnknnnnn....",
        ".....nwwwwnn......",
        "....nnnnnnnnn.....",
        "...nnnnnnnnnnnn...",
        "..nnnnnnnnnnnnnd..",
        ".dnnnnnnnnnnnnn.d.",
        "..nn..nn..nn..nn..",
        "..dd..dd..dd..dd.."
      ],
      "palette": {
        "n": "#9daba6",
        "d": "#66766b"
      }
    },
    "boar": {
      "width": 18,
      "height": 12,
      "rows": [
        "..................",
        "....bbbbbbbb......",
        "..bbbbbbbbbbbb....",
        ".bbbbbbbbbbbbbb...",
        "bbbbbbbbbbbbbbbb..",
        "bbbkbbbbbbbbkbbb..",
        "bbwwbbboobbwwbbb..",
        ".bbbbooooobbbbb...",
        "..bbbooeeoobbbb...",
        "...bbbbbbbbbbb....",
        "...bb..bb..bb.....",
        "...kk..kk..kk....."
      ],
      "palette": {
        "b": "#96714c",
        "o": "#b28b68"
      }
    },
    "lizard": {
      "width": 16,
      "height": 14,
      "rows": [
        ".....gggg.......",
        "....gggggg......",
        "...ggkgkgsg.....",
        "....ggwwwg......",
        ".....gggg.......",
        "....aaccca......",
        "...ggcccccgg....",
        "..gg.ccccc.gg...",
        ".....ccccc...g..",
        ".....ccccc...gg.",
        ".....gg.gg..gg..",
        "....ggg.ggggg...",
        "....ddd.ddd.....",
        "................"
      ],
      "palette": {
        "g": "#6b9b75",
        "c": "#847951"
      }
    },
    "golem": {
      "width": 16,
      "height": 14,
      "rows": [
        "....mmmmmmmm....",
        "...mmddddddmm...",
        "..mmmfmmmmfmmm..",
        "..mmmmmmmmmmmm..",
        "...mmmwwwwmmm...",
        "..mmmmmmmmmmmm..",
        ".mmmmdmmmmdmmm..",
        "mmmmdmmmmmmdmmm.",
        "mmm.mmmffmmm.mmm",
        "mmm.mmmmmmmm.mmm",
        "....mmmmmmmm....",
        "....mm..mm......",
        "...mmm..mmm.....",
        "...ddd..ddd....."
      ],
      "palette": {
        "m": "#a5afa0",
        "f": "#b3d7be"
      }
    },
    "drake": {
      "width": 24,
      "height": 18,
      "rows": [
        "..rr................rr..",
        "..rrr..............rrr..",
        ".rrrrr....aa......rrrrr.",
        "rrrrrrr..arra....rrrrrrr",
        "rrrrr.rrarrrrarrr.rrrrrr",
        "rrrr..rrrrrrrrrrr..rrrrr",
        "rrr...rrrkwkwrrrr...rrrr",
        "rr.....rrrrwwrrrr....rrr",
        "r.......rrrrrrrrr.....rr",
        ".......rrrrrrrrrrr.....r",
        "......rrrroooorrrrr.....",
        ".....rrrrrooooorrrrr....",
        "......rrrrrooorrrrrr....",
        ".......rrrrrrrrrrr......",
        ".......rrr...rrr..rr....",
        "......rrrr...rrrr..rr...",
        "......kkkk...kkkk...rr..",
        ".....................rr."
      ],
      "palette": {
        "r": "#a9674d",
        "o": "#d3a376",
        "a": "#e3c590"
      }
    },
    "villager": {
      "width": 16,
      "height": 20,
      "rows": [
        "......hhhh......",
        ".....hhhhhh.....",
        ".....hssssh.....",
        ".....sskssk.....",
        "......ssss......",
        "......hssh......",
        "....aacccca.....",
        "...aacccccca....",
        "...accmcmcca....",
        "..ssccmmmccss...",
        "..sscccccccss...",
        "..aacccmcccaa...",
        "...acccccca.....",
        "...acccccca.....",
        "....cbbbbc......",
        "....dd..dd......",
        "....dd..dd......",
        "....dd..dd......",
        "...bbb..bbb.....",
        "...bbb..bbb....."
      ],
      "palette": {
        "c": "#a18b67",
        "a": "#d6b987",
        "m": "#c3b59a"
      }
    },
    "smith": {
      "width": 16,
      "height": 20,
      "rows": [
        "......hhhh......",
        ".....hhhhhh.....",
        ".....hssssh.....",
        ".....sskssk.....",
        "......ssss......",
        "......hssh......",
        "....aacccca.....",
        "...aacccccca....",
        "...accmcmcca....",
        "..ssccmmmccsmmmm",
        "..sscccccccsmmmm",
        "..aacccmcccaab..",
        "...acccccca..b..",
        "...acccccca..b..",
        "....cbbbbc......",
        "....dd..dd......",
        "....dd..dd......",
        "....dd..dd......",
        "...bbb..bbb.....",
        "...bbb..bbb....."
      ],
      "palette": {
        "c": "#7b6a58",
        "a": "#a9916b",
        "b": "#72583c"
      }
    },
    "healer": {
      "width": 16,
      "height": 20,
      "rows": [
        ".......a........",
        "......ccc.......",
        ".....ccccc......",
        "....ccccccc.....",
        "...aaaacaaaa....",
        ".....hssssh.....",
        ".....sskssk.....",
        "......ssss......",
        "....aacccca..f..",
        "...accccccca.f..",
        "..sscccccccs.b..",
        "..ssccaaaccs.b..",
        "...acccccca..b..",
        "...acccccca..b..",
        "...acccccca..b..",
        "...cccaaccc..b..",
        "..cccccccccc.b..",
        "..cccccccccc.b..",
        "...bbb..bbb.....",
        "................"
      ],
      "palette": {
        "c": "#ded7bd",
        "a": "#8fa9ad",
        "f": "#e8d89b"
      }
    },
    "tree": {
      "width": 20,
      "height": 15,
      "rows": [
        ".......gggggg.......",
        ".....gggggggggg.....",
        "...ggggffffffgggg...",
        "..ggggffffffgggggg..",
        ".ggggffffffgggggggg.",
        "gggggggggggggggggggg",
        "gggggggggggggggggggg",
        ".gggggggggggggggggg.",
        "..gggggggggggggggg..",
        "...gggggggggggggg...",
        "......bbbbbbbb......",
        ".......bbbbbb.......",
        ".......bbbbbb.......",
        ".......bbbbbb.......",
        "......bbbbbbbb......"
      ],
      "palette": {
        "g": "#587b50",
        "f": "#79965c"
      }
    },
    "rock": {
      "width": 14,
      "height": 6,
      "rows": [
        "....mmmmmm....",
        "..mmmmmmmmmm..",
        ".mmmffffmmmmm.",
        "mmmmmmmmmmmmmm",
        ".mmmmmmmmmmmm.",
        "..dddddddddd.."
      ],
      "palette": {
        "m": "#8a9585",
        "f": "#a7af9b",
        "d": "#707d70"
      }
    },
    "herb": {
      "width": 10,
      "height": 6,
      "rows": [
        "...g..g...",
        "..gg..gg..",
        ".ggg.gggg.",
        "..gggggg..",
        "...gggg...",
        "....bb...."
      ],
      "palette": {
        "g": "#729657"
      }
    },
    "ore": {
      "width": 11,
      "height": 6,
      "rows": [
        "...mmmmm...",
        "..mmmmmmm..",
        ".mmmffmmmm.",
        "mmmmfffmmmm",
        ".mmmmmmmmm.",
        "..ddddddd.."
      ],
      "palette": {}
    },
    "crystal": {
      "width": 9,
      "height": 7,
      "rows": [
        "....f....",
        "...fff...",
        "..ffvff..",
        ".ffvvvff.",
        "..fvvvf..",
        "...fvf...",
        "....f...."
      ],
      "palette": {
        "f": "#aecbcc",
        "v": "#819ba9"
      }
    },
    "chest": {
      "width": 14,
      "height": 8,
      "rows": [
        "..bbbbbbbbbb..",
        ".bbyyyyyyyybb.",
        "bbbbbbbbbbbbbb",
        "bbbyyyyyyyybbb",
        "bbbbbyyybbbbbb",
        "bbbbbyyybbbbbb",
        "bbbbbbbbbbbbbb",
        ".dddddddddddd."
      ],
      "palette": {
        "b": "#9a7548",
        "y": "#d0b26f"
      }
    },
    "board": {
      "width": 14,
      "height": 9,
      "rows": [
        "..bbbbbbbbbb..",
        "..bwwwwwwwwb..",
        "..bwkkkkkkwb..",
        "..bwwwwwwwwb..",
        "..bwkkkkwwwb..",
        "..bwwwwwwwwb..",
        "..bbbbbbbbbb..",
        "....b....b....",
        "....b....b...."
      ],
      "palette": {}
    },
    "waystone": {
      "width": 12,
      "height": 9,
      "rows": [
        ".....mm.....",
        "....mffm....",
        "...mmffmm...",
        "...mmvvmm...",
        "...mmvvmm...",
        "...mmffmm...",
        "...mmmmmm...",
        "..mmmmmmmm..",
        "..dddddddd.."
      ],
      "palette": {}
    },
    "warrior_back": {
      "width": 16,
      "height": 20,
      "rows": [
        "......hhhh......",
        ".....hhhhhh.....",
        ".....hhhhhh.....",
        ".....hhhhhh.....",
        "......hhhh......",
        "......hhhh......",
        "....aacccca.....",
        "...aacccccca....",
        "...accmcmcca....",
        "..ssccmmmccss...",
        "..sscccccccss...",
        "..aacccmcccaa...",
        "...acccccca.m...",
        "...acccccca.m...",
        "....cbbbbc..m...",
        "....dd..dd..m...",
        "....dd..dd..m...",
        "....dd..dd..y...",
        "...bbb..bbb.....",
        "...bbb..bbb....."
      ],
      "palette": {}
    },
    "archer_back": {
      "width": 16,
      "height": 20,
      "rows": [
        "......cccc......",
        ".....cccccc.....",
        "....cchhhhcc....",
        "....chhhhhcc....",
        ".....chhhhc.....",
        "......hhhh......",
        "....aacccca.....",
        "...acccbccca....",
        "...cccbcccaa.y..",
        "..ssccbcccss..y.",
        "..sscccbccss..y.",
        "...accccbca...y.",
        "...accccbca..y..",
        "....ccbbcc..y...",
        "....dd..dd......",
        "....dd..dd......",
        "....dd..dd......",
        "...bbb..bbb.....",
        "...bbb..bbb.....",
        "................"
      ],
      "palette": {}
    },
    "magician_back": {
      "width": 16,
      "height": 20,
      "rows": [
        ".......a........",
        "......ccc.......",
        ".....ccccc......",
        "....ccccccc.....",
        "...aaaacaaaa....",
        ".....hhhhhh.....",
        ".....sskssk.....",
        "......ssss......",
        "....aacccca..f..",
        "...accccccca.f..",
        "..sscccccccs.b..",
        "..ssccaaaccs.b..",
        "...acccccca..b..",
        "...acccccca..b..",
        "...acccccca..b..",
        "...cccaaccc..b..",
        "..cccccccccc.b..",
        "..cccccccccc.b..",
        "...bbb..bbb.....",
        "................"
      ],
      "palette": {}
    },
    "guardian_back": {
      "width": 16,
      "height": 20,
      "rows": [
        "......mmmm......",
        ".....mmmmmm.....",
        ".....mhhmhh.....",
        ".....mhhhhm.....",
        "......hhhh......",
        "....aammmmaa....",
        "...ammmmmmma....",
        "..mmmmccmmmm....",
        "..mmmcccmmaa....",
        "..ssmmmmmmss....",
        "..mmmaaaammss...",
        "..maaaaaamm.....",
        "..maamaaaam..m..",
        "..maaaaaaam..m..",
        "...aaaaaam..b...",
        "....dd..dd..b...",
        "....dd..dd......",
        "....dd..dd......",
        "...mmm..mmm.....",
        "...bbb..bbb....."
      ],
      "palette": {}
    },
    "wood": {
      "width": 12,
      "height": 5,
      "rows": [
        "..bbbbbbbb..",
        ".bbbbbbbbbb.",
        "bbbybbbbbybb",
        ".bbbbbbbbbb.",
        "..bbbbbbbb.."
      ],
      "palette": {}
    },
    "ruin": {
      "width": 14,
      "height": 8,
      "rows": [
        "...mmmmmmmm...",
        "..mm......mm..",
        "..mm......mm..",
        "..mm......mm..",
        "..mm......mm..",
        "..mm......mm..",
        ".mmmmmmmmmmmm.",
        "..dddddddddd.."
      ],
      "palette": {}
    },
    "camp": {
      "width": 13,
      "height": 7,
      "rows": [
        "......r......",
        ".....ror.....",
        "....royor....",
        ".....ryr.....",
        "...bbbbb.....",
        "..bb...bb....",
        "............."
      ],
      "palette": {}
    },
    "skeleton": {
      "width": 12,
      "height": 14,
      "rows": [
        "....wwww....",
        "...wkkkkw...",
        "...wkwkkw...",
        "....wwww....",
        ".....ww.....",
        "..wwwwwwww..",
        ".w...ww...w.",
        "....wwww....",
        "...w.ww.w...",
        "..w..ww..w..",
        ".....ww.....",
        "....w..w....",
        "...w....w...",
        "..ww....ww.."
      ],
      "palette": {
        "w": "#ddd8c5",
        "k": "#313b39",
        "g": "#6b8d50",
        "b": "#89704f"
      }
    },
    "orc": {
      "width": 12,
      "height": 14,
      "rows": [
        "....gggg....",
        "...gggggg...",
        "..ggkggkgg..",
        "..ggwggwgg..",
        "...gggggg...",
        "..bbbbbbbb..",
        ".bbbggggbbb.",
        "ggbbbbbbbbgg",
        "ggbbbbbbbbgg",
        "..bbbbbbbb..",
        "...bb..bb...",
        "...bb..bb...",
        "..bbb..bbb..",
        "..kkk..kkk.."
      ],
      "palette": {
        "w": "#ddd8c5",
        "k": "#313b39",
        "g": "#6b8d50",
        "b": "#89704f"
      }
    },
    "spider": {
      "width": 12,
      "height": 14,
      "rows": [
        "............",
        "..k......k..",
        "...k.gg.k...",
        ".kkgkkkkgkk.",
        "...gkkkkg...",
        "..ggkkkkgg..",
        ".kggggggggk.",
        "k.gggggggg.k",
        ".kggkkkkggk.",
        "..k.kkkk.k..",
        ".k..kkkk..k.",
        "k..........k",
        "............",
        "............"
      ],
      "palette": {
        "w": "#ddd8c5",
        "k": "#313b39",
        "g": "#6b8d50",
        "b": "#89704f"
      }
    },
    "bat": {
      "width": 12,
      "height": 14,
      "rows": [
        "............",
        "k..........k",
        "kk..kkkk..kk",
        "kkk.kkkk.kkk",
        "kkkkkkkkkkkk",
        ".kkkkkkkkkk.",
        "..kkkkkkkk..",
        "...kkkkkk...",
        "....kkkk....",
        "....kkkk....",
        ".....kk.....",
        "............",
        "............",
        "............"
      ],
      "palette": {
        "w": "#ddd8c5",
        "k": "#313b39",
        "g": "#6b8d50",
        "b": "#89704f"
      }
    },
    "ghost": {
      "width": 12,
      "height": 14,
      "rows": [
        "....wwww....",
        "...wwwwww...",
        "..wwwwwwww..",
        "..wwkwwkww..",
        "..wwwwwwww..",
        "..wwwkkwww..",
        "..wwwwwwww..",
        ".wwwwwwwwww.",
        ".wwwwwwwwww.",
        "..wwwwwwww..",
        "..wwwwwwww..",
        "..ww.ww.ww..",
        "..w..ww..w..",
        "............"
      ],
      "palette": {
        "w": "#ddd8c5",
        "k": "#313b39",
        "g": "#6b8d50",
        "b": "#89704f"
      }
    },
    "ent": {
      "width": 12,
      "height": 14,
      "rows": [
        ".....bbbb...",
        "..b..bbbb.b.",
        "..bbbbbbbbb.",
        "...bgbbgbb..",
        "...bbbbbbb..",
        "..bbbbbbbbb.",
        ".bbbggggbbb.",
        "bbbbggggbbbb",
        "bb.bbbbbbb.b",
        "b..bbbbbbb..",
        "...bbbbbbb..",
        "...bbb.bbb..",
        "..bbbb.bbbb.",
        ".bbbb...bbbb"
      ],
      "palette": {
        "w": "#ddd8c5",
        "k": "#313b39",
        "g": "#6b8d50",
        "b": "#89704f"
      }
    },
    "scorpion": {
      "width": 12,
      "height": 14,
      "rows": [
        ".........kk.",
        "........k..k",
        "........k.k.",
        ".........kk.",
        ".kk...kkkk..",
        "k..k.kkkkk..",
        ".kkkkkkkkk..",
        "...kkkkkkk..",
        "..kkkkkkkkk.",
        ".k.kkkkkkk.k",
        "k..k.kk.k..k",
        "..k..kk..k..",
        "............",
        "............"
      ],
      "palette": {
        "w": "#ddd8c5",
        "k": "#313b39",
        "g": "#6b8d50",
        "b": "#89704f"
      }
    },
    "knight": {
      "width": 12,
      "height": 14,
      "rows": [
        "....kkkk....",
        "...kwwwwk...",
        "..kwwkkwwk..",
        "..kwwkkwwk..",
        "...kwwwwk...",
        "..wwwwwwww..",
        ".wwwwbbwwww.",
        "wwwwwbbwwwww",
        "wwwwwwwwwwww",
        "..wwwwwwww..",
        "...ww..ww...",
        "...ww..ww...",
        "..www..www..",
        "..kkk..kkk.."
      ],
      "palette": {
        "w": "#ddd8c5",
        "k": "#313b39",
        "g": "#6b8d50",
        "b": "#89704f"
      }
    }
  },
  "projectiles": {
    "arrow": {
      "speed": 11,
      "radius": 0.13,
      "color": "#e7cf92",
      "width": 0.48,
      "trail": false
    },
    "spark": {
      "speed": 8,
      "radius": 0.17,
      "color": "#bfacd9",
      "width": 0.24,
      "trail": true
    },
    "fire": {
      "speed": 7,
      "radius": 0.22,
      "color": "#e3a269",
      "width": 0.38,
      "trail": true
    },
    "rune": {
      "speed": 9,
      "radius": 0.22,
      "color": "#a8c8bb",
      "width": 0.36,
      "trail": true
    }
  },
  "render": {
    "tile": 48,
    "spriteScale": 2,
    "monsterScale": 2,
    "npcScale": 2,
    "shadowRadius": 0.29,
    "shadowSquash": 0.4,
    "walkBob": 1.7,
    "walkRate": 11,
    "idleBob": 0.6,
    "idleRate": 2,
    "hitFlash": 0.16,
    "spritePixel": 1,
    "minimapSize": 140,
    "minimapMobile": 94,
    "minimapScale": 3.5,
    "floatRise": 35,
    "floatFont": 16,
    "nameFont": 11,
    "barWidth": 34,
    "barHeight": 4,
    "npcLabelRange": 6,
    "lightAlpha": 0.12,
    "grassTuftRate": 7,
    "waterWaveRate": 1.4,
    "waterWaveAlpha": 0.2,
    "houseWallRatio": 0.66,
    "houseRoofRatio": 0.45,
    "portalPulse": 2.2,
    "portalSize": 0.55,
    "labelStroke": 3,
    "cameraMargin": 0.5,
    "hazardLine": 2,
    "hazardAlpha": 0.27,
    "playerLightRadius": 5,
    "glowRadius": 0.65,
    "effectPulse": 0.4,
    "bossBarWidth": 0.52,
    "bossBarMin": 180,
    "bossBarY": 19,
    "npcMarkSize": 18,
    "tileVariation": 0.035,
    "lowHpVignette": 0.3,
    "levelLightDuration": 1.5,
    "screenShake": 3,
    "shakeDecay": 12,
    "treeScale": 3.8,
    "rockScale": 2.4,
    "resourceScale": 2,
    "defaultSkin": "#dfbf94",
    "defaultHair": "#78634a",
    "defaultCloth": "#968263",
    "defaultAccent": "#d1b579",
    "hitBrightness": 2.5,
    "tintLetters": [
      "g",
      "m",
      "n",
      "r"
    ],
    "tintMix": 0.55,
    "walkFeetRows": 3,
    "headRows": 6,
    "floorMarkAlpha": 0.1,
    "treeShadowAlpha": 0.22,
    "portalAlpha": 0.4,
    "portalRingWidth": 2,
    "healthBarOffset": 8,
    "healthBarOutline": 1,
    "npcNameOffset": 8,
    "textShadow": "#242c22",
    "labelPadding": 4,
    "labelBg": "#253024dc",
    "orbRadius": 3,
    "projectileTrail": 0.5,
    "projectileLine": 2,
    "roofLineWidth": 1,
    "propShadowOffset": 0.15,
    "house": {
      "roofHeight": 0.43,
      "overhang": 0.15,
      "doorWidth": 0.62,
      "doorHeight": 0.85,
      "windowSize": 0.42,
      "windowXs": [
        0.2,
        0.72
      ],
      "windowY": 0.61,
      "trim": 0.055,
      "roofLineStep": 0.28
    },
    "fountain": {
      "radius": 0.9,
      "rim": 0.15,
      "center": 0.25
    },
    "mini": {
      "padding": 6,
      "playerRadius": 3,
      "dot": 2,
      "npcColor": "#edcf84",
      "portalColor": "#acd8d4",
      "enemyColor": "#b34b3d",
      "guardColor": "#e4a25e",
      "playerColor": "#fff5d4",
      "discoveryColor": "#ead28f",
      "eventColor": "#d4a87e",
      "peerColor": "#d5e5bd"
    },
    "navigationMargin": 30,
    "navigationTop": 93,
    "navigationBottom": 115,
    "navigationRadius": 13,
    "navigationFont": 10,
    "navigationLabelOffset": 24,
    "navigationLine": 2,
    "dashTrailCount": 2,
    "dashTrailSpacing": 0.22,
    "dashTrailAlpha": 0.25,
    "nightAlpha": 0.14,
    "discoveryScale": 3,
    "eventScale": 3,
    "playerNameplate": {
      "enabled": true,
      "minWidth": 126,
      "maxWidth": 224,
      "padding": 6,
      "lineHeight": 16,
      "nameFont": 12,
      "detailFont": 10,
      "guildFont": 10,
      "headGap": 10,
      "barHeight": 4,
      "barGap": 4,
      "minScale": 0.9,
      "maxScale": 1.05,
      "screenMargin": 8,
      "borderWidth": 1,
      "background": "#221f1ae8",
      "borderColor": "brassDark",
      "selfColor": "brassLight",
      "partyColor": "good",
      "peerColor": "ivory",
      "detailColor": "paperShade",
      "guildColor": "brassLight",
      "barBackground": "woodDeep",
      "separator": " · ",
      "guildPrefix": "〈",
      "guildSuffix": "〉",
      "bars": [
        {
          "value": "hp",
          "max": "maxHp",
          "color": "hp"
        },
        {
          "value": "mp",
          "max": "maxMp",
          "color": "mp"
        }
      ]
    }
  },
  "audio": {
    "enabled": true,
    "music": true,
    "effects": true,
    "masterGain": 0.65,
    "noteBase": 440,
    "midiReference": 69,
    "semitones": 12,
    "attack": 0.025,
    "release": 0.16,
    "pluckDecay": 0.6,
    "fluteLevel": 0.42,
    "luteLevel": 0.24,
    "bassLevel": 0.14,
    "drumLevel": 0.1,
    "filter": 2100,
    "noiseLength": 0.4,
    "noiseDecay": 0.15,
    "trackFade": 0.18,
    "tracks": {
      "town": {
        "bpm": 88,
        "beats": 32,
        "melody": [
          74,
          76,
          77,
          81,
          79,
          77,
          76,
          74,
          72,
          74,
          76,
          72,
          69,
          72,
          74,
          null,
          74,
          76,
          79,
          81,
          84,
          81,
          79,
          77,
          76,
          74,
          72,
          69,
          72,
          74,
          74,
          null
        ],
        "chords": [
          [
            62,
            65,
            69
          ],
          [
            60,
            64,
            67
          ],
          [
            58,
            62,
            65
          ],
          [
            60,
            64,
            67
          ]
        ],
        "bass": [
          38,
          36,
          34,
          36
        ],
        "step": 1,
        "arpeggio": [
          0,
          1,
          2,
          1
        ],
        "drum": false
      },
      "field": {
        "bpm": 104,
        "beats": 32,
        "melody": [
          67,
          69,
          71,
          74,
          76,
          74,
          71,
          69,
          67,
          71,
          74,
          79,
          76,
          74,
          71,
          null,
          69,
          71,
          74,
          76,
          79,
          76,
          74,
          71,
          69,
          67,
          64,
          67,
          69,
          71,
          67,
          null
        ],
        "chords": [
          [
            55,
            59,
            62
          ],
          [
            60,
            64,
            67
          ],
          [
            62,
            66,
            69
          ],
          [
            55,
            59,
            62
          ]
        ],
        "bass": [
          31,
          36,
          38,
          31
        ],
        "step": 1,
        "arpeggio": [
          0,
          1,
          2,
          1
        ],
        "drum": false
      },
      "dungeon": {
        "bpm": 72,
        "beats": 32,
        "melody": [
          62,
          null,
          65,
          69,
          67,
          null,
          65,
          62,
          60,
          null,
          62,
          65,
          64,
          null,
          60,
          null,
          62,
          null,
          69,
          72,
          70,
          null,
          69,
          65,
          64,
          null,
          62,
          60,
          58,
          null,
          62,
          null
        ],
        "chords": [
          [
            50,
            53,
            57
          ],
          [
            48,
            52,
            55
          ],
          [
            46,
            50,
            53
          ],
          [
            45,
            48,
            52
          ]
        ],
        "bass": [
          26,
          24,
          22,
          21
        ],
        "step": 1,
        "arpeggio": [
          0,
          1,
          2,
          1
        ],
        "drum": false
      },
      "boss": {
        "bpm": 128,
        "beats": 32,
        "melody": [
          62,
          62,
          69,
          65,
          67,
          69,
          72,
          69,
          65,
          65,
          72,
          69,
          70,
          69,
          67,
          65,
          62,
          65,
          69,
          74,
          72,
          70,
          69,
          67,
          65,
          64,
          62,
          60,
          58,
          60,
          62,
          62
        ],
        "chords": [
          [
            50,
            53,
            57
          ],
          [
            46,
            50,
            53
          ],
          [
            48,
            52,
            55
          ],
          [
            45,
            49,
            52
          ]
        ],
        "bass": [
          26,
          22,
          24,
          21
        ],
        "step": 1,
        "arpeggio": [
          0,
          1,
          2,
          1
        ],
        "drum": true
      }
    },
    "sfx": {
      "sword": {
        "wave": "triangle",
        "notes": [
          210,
          110
        ],
        "duration": 0.09,
        "gain": 0.28,
        "gap": 0.065,
        "noise": {
          "duration": 0.08,
          "gain": 0.12,
          "filter": 1300
        }
      },
      "arrow": {
        "wave": "sine",
        "notes": [
          740,
          390
        ],
        "duration": 0.075,
        "gain": 0.18,
        "gap": 0.065,
        "noise": {
          "duration": 0.06,
          "gain": 0.07,
          "filter": 2100
        }
      },
      "magic": {
        "wave": "sine",
        "notes": [
          660,
          880
        ],
        "duration": 0.14,
        "gain": 0.22,
        "gap": 0.065
      },
      "fire": {
        "wave": "sawtooth",
        "notes": [
          180,
          110
        ],
        "duration": 0.2,
        "gain": 0.18,
        "gap": 0.065,
        "noise": {
          "duration": 0.18,
          "gain": 0.1,
          "filter": 950
        }
      },
      "ice": {
        "wave": "sine",
        "notes": [
          1046,
          784
        ],
        "duration": 0.2,
        "gain": 0.18,
        "gap": 0.065
      },
      "shield": {
        "wave": "triangle",
        "notes": [
          150,
          100
        ],
        "duration": 0.14,
        "gain": 0.28,
        "gap": 0.065,
        "noise": {
          "duration": 0.12,
          "gain": 0.1,
          "filter": 900
        }
      },
      "heavy": {
        "wave": "triangle",
        "notes": [
          100,
          60
        ],
        "duration": 0.24,
        "gain": 0.4,
        "gap": 0.065,
        "noise": {
          "duration": 0.22,
          "gain": 0.24,
          "filter": 240
        }
      },
      "hit": {
        "wave": "triangle",
        "notes": [
          160,
          80
        ],
        "duration": 0.08,
        "gain": 0.22,
        "gap": 0.065,
        "noise": {
          "duration": 0.075,
          "gain": 0.09,
          "filter": 650
        }
      },
      "loot": {
        "wave": "sine",
        "notes": [
          784,
          1046
        ],
        "duration": 0.15,
        "gain": 0.2,
        "gap": 0.065
      },
      "level": {
        "wave": "sine",
        "notes": [
          523,
          659,
          784,
          1046
        ],
        "duration": 0.18,
        "gain": 0.25,
        "gap": 0.065
      },
      "heal": {
        "wave": "sine",
        "notes": [
          523,
          784,
          1046
        ],
        "duration": 0.16,
        "gain": 0.2,
        "gap": 0.065
      },
      "buff": {
        "wave": "sine",
        "notes": [
          440,
          660,
          880
        ],
        "duration": 0.17,
        "gain": 0.18,
        "gap": 0.065
      },
      "click": {
        "wave": "triangle",
        "notes": [
          440
        ],
        "duration": 0.05,
        "gain": 0.12,
        "gap": 0.065
      },
      "death": {
        "wave": "triangle",
        "notes": [
          220,
          165,
          110
        ],
        "duration": 0.3,
        "gain": 0.22,
        "gap": 0.065
      },
      "boss": {
        "wave": "triangle",
        "notes": [
          110,
          165,
          220
        ],
        "duration": 0.24,
        "gain": 0.22,
        "gap": 0.065
      },
      "dash": {
        "wave": "sine",
        "notes": [
          540,
          760
        ],
        "duration": 0.08,
        "gain": 0.13,
        "gap": 0.035,
        "noise": {
          "duration": 0.1,
          "gain": 0.08,
          "filter": 1700
        }
      }
    },
    "luteDivisions": 2,
    "bassEvery": 4,
    "chordNoteDuration": 0.5,
    "melodyDuration": 0.82,
    "bassDuration": 1.8,
    "minimumGain": 0.0001,
    "startLatency": 0.04,
    "fluteFilter": 1800,
    "luteFilter": 1700,
    "bassFilter": 500,
    "drumFilter": 260,
    "drumDuration": 0.12,
    "drumEvery": 2,
    "drumStrongEvery": 4,
    "sfxVolumeScale": 1,
    "sustain": 0.42,
    "fluteWave": "sine",
    "luteWave": "triangle",
    "bassWave": "sine"
  },
  "ui": {
    "newGame": "새 모험",
    "continue": "이어하기",
    "start": "모험 시작",
    "titleTag": "탑뷰 판타지 RPG",
    "createTitle": "당신의 모험가",
    "createHint": "종족과 직업을 고르면 오크우드에서 모험을 시작합니다.",
    "race": "종족",
    "class": "직업",
    "name": "이름",
    "namePlaceholder": "모험가",
    "autoCombat": "이동은 직접 · 공격과 기술은 자동",
    "controls": "WASD / 방향키 이동 · E 상호작용 · R 물약 · Shift 대시 · Tab 장비 · Q 의뢰 · F 마력 물약",
    "mobileControls": "조이스틱으로 이동 · 대시 버튼으로 회피 · 가까이 가서 상호작용",
    "bag": "장비",
    "talents": "전직·수련",
    "quests": "의뢰",
    "map": "지도",
    "settings": "설정",
    "close": "닫기",
    "back": "돌아가기",
    "interact": "상호작용",
    "potion": "물약",
    "recall": "마을 귀환",
    "hp": "체력",
    "mp": "마력",
    "xp": "경험치",
    "gold": "금화",
    "points": "기술점",
    "level": "Lv.",
    "auto": "자동",
    "ready": "준비",
    "noTarget": "근처의 적에게 자동 공격합니다.",
    "safe": "안전 지역",
    "combat": "전투 중",
    "explore": "탐험 중",
    "questAvailable": "길드에서 다음 의뢰를 수주하세요.",
    "questReady": "보상 받기",
    "accept": "수락",
    "claim": "받기",
    "active": "진행 중",
    "complete": "완료",
    "available": "수락 가능",
    "returnNpc": "의뢰인에게 돌아가기",
    "objective": "현재 목표",
    "noQuest": "길드에서 새 의뢰를 받으세요.",
    "questProgress": "진행",
    "reward": "보상",
    "mainQuest": "주요 의뢰",
    "sideQuest": "의뢰",
    "repeatable": "반복",
    "moveTo": "위치 보기",
    "equip": "장착",
    "equipped": "장착 중",
    "unequip": "해제",
    "emptySlot": "빈 장비칸",
    "itemLevel": "장비 레벨",
    "upgrade": "강화",
    "maxUpgrade": "최대 강화",
    "upgradeHint": "강화는 실패하지 않습니다. 금화와 철광석이 필요합니다.",
    "salvage": "분해",
    "sell": "판매",
    "favorite": "보관",
    "unfavorite": "보관 해제",
    "stats": "능력",
    "compare": "교체 후 변화",
    "noChange": "동일한 능력입니다.",
    "all": "전체",
    "weapon": "무기",
    "armor": "갑옷",
    "accessory": "장신구",
    "relic": "유물",
    "newLoot": "새 장비",
    "noItems": "보유한 장비가 없습니다.",
    "smith": "대장간",
    "craft": "제작",
    "enhance": "강화",
    "shop": "잡화점",
    "buy": "구입",
    "rest": "여관 휴식",
    "meal": "따뜻한 식사",
    "blessing": "축복",
    "respec": "기술 재분배",
    "respecHint": "마을에서 금화 60개로 전직과 수련을 모두 재설정합니다. 수련점은 전부 반환됩니다.",
    "learn": "투자",
    "learned": "완성",
    "requiresBranch": "이 갈래에 {count}점 투자 필요",
    "rank": "단계",
    "skillLoadout": "자동 기술 · 2칸",
    "skillHint": "기술을 선택하면 자동 사용 목록에 장착됩니다.",
    "skillUnlock": "Lv. {level}에 개방",
    "skillSlot": "기술칸",
    "cooldown": "재사용",
    "manaCost": "마력",
    "damage": "피해",
    "branch": "성장 갈래",
    "townOnly": "마을에서 이용할 수 있습니다.",
    "notEnough": "재료나 금화가 부족합니다.",
    "noPoints": "사용 가능한 기술점이 없습니다.",
    "locked": "아직 열리지 않았습니다.",
    "noPotion": "회복 물약이 없습니다.",
    "potionWait": "물약 재사용 대기 중입니다.",
    "fullHp": "체력이 가득합니다.",
    "busy": "전투 중에는 이용할 수 없습니다.",
    "requiresQuest": "먼저 「{quest}」 의뢰를 완료하세요.",
    "requiresGuardians": "봉인 수호자를 모두 쓰러뜨리세요.",
    "guardians": "봉인 수호자",
    "chest": "보물 상자",
    "open": "열기",
    "gather": "채집",
    "mining": "채광",
    "enter": "입장",
    "leave": "이동",
    "dungeonEntry": "던전 입장",
    "tier": "난이도",
    "firstClear": "첫 클리어",
    "clears": "클리어",
    "tierLocked": "이 던전 {count}회 클리어 필요",
    "tierHint": "완주로 상위 난이도를 개방합니다. 정예 1회 완주는 주요 의뢰의 필수 목표입니다.",
    "boss": "보스",
    "bossDefeated": "보스 격파",
    "returnTown": "마을로 돌아왔습니다.",
    "died": "쓰러졌습니다. 성장과 장비는 보존됩니다.",
    "lostGold": "회복 비용 {gold} 금화",
    "save": "저장 내려받기",
    "load": "저장 불러오기",
    "saved": "모험을 저장했습니다.",
    "loaded": "저장을 불러왔습니다.",
    "invalidSave": "올바른 RPG 저장 파일이 아닙니다.",
    "resetTitle": "새 모험을 시작할까요?",
    "resetBody": "현재 RPG 진행을 초기화합니다. 이전 결투 게임의 저장은 삭제하지 않습니다.",
    "cancel": "취소",
    "resetConfirm": "새 모험 시작",
    "music": "배경음악",
    "effects": "효과음",
    "volume": "음량",
    "fullscreen": "화면 최대화",
    "exportName": "에버돈_모험.json",
    "musicHint": "이동과 전투에 따라 중세풍 음악이 바뀝니다.",
    "journalHint": "의뢰 수주 후 처치가 집계됩니다. 지역 사건·정예 던전·탐험 목표를 함께 진행하고 의뢰인에게 보고하세요.",
    "healed": "체력과 마력을 회복했습니다.",
    "crafted": "장비를 제작했습니다.",
    "upgraded": "강화에 성공했습니다.",
    "salvaged": "장비를 분해했습니다.",
    "sold": "장비를 판매했습니다.",
    "equippedNotice": "장비를 장착했습니다.",
    "talentNotice": "기술에 투자했습니다.",
    "questAccepted": "의뢰를 수락했습니다.",
    "questCompleted": "의뢰를 완료했습니다.",
    "newSkill": "새 자동 기술이 열렸습니다.",
    "levelUp": "레벨 상승! Lv. {level}",
    "paused": "메뉴를 보는 동안 전투가 멈춥니다.",
    "travel": "빠른 이동",
    "travelHint": "방문한 여행의 돌 근처에서 빠른 이동을 이용할 수 있습니다. 던전은 입구로 진입하세요.",
    "unvisited": "미발견",
    "selected": "선택",
    "deleteProtected": "장착 중이거나 보관한 장비는 처분할 수 없습니다.",
    "free": "무료",
    "chapterComplete": "황혼의 왕관",
    "chapterContinue": "모험 계속",
    "help": "조작 안내",
    "helpBody": "이동은 WASD·방향키, 상호작용은 E. 공격과 기술은 자동 사용됩니다. 의뢰를 수주하고 지역 사건·던전으로 성장하세요. Lv3/18/34에 한 계열씩 전직하고 이후 분기를 선택합니다.",
    "material": "재료",
    "held": "보유",
    "skillTab": "자동 기술",
    "treeTab": "성장 트리",
    "sfxUnit": "초",
    "action": "행동",
    "inventoryFull": "가방이 가득해 일반 장비를 자동 분해했습니다.",
    "noInteraction": "대상 가까이 이동하세요.",
    "lockedSkill": "아직 사용할 수 없는 기술입니다.",
    "healFountain": "안전 지역에서는 체력과 마력이 회복됩니다.",
    "nameFallback": "모험가",
    "storyComplete": "왕관의 여정",
    "newAdventure": "새 모험가",
    "equippedCount": "출전 장비",
    "buffs": "여행의 가호",
    "readyToClaim": "의뢰인에게 보고하세요.",
    "enemyLevel": "권장 레벨",
    "autoBasic": "평타 자동",
    "autoSkill": "기술 자동",
    "questMarker": "!",
    "questTurninMarker": "?",
    "deathFee": "금화 일부만 회복 비용으로 사용합니다.",
    "waystone": "여행의 돌",
    "inventoryHelp": "장비를 누르면 상세 능력과 교체 전후 차이가 표시됩니다.",
    "skillEmpty": "기술 없음",
    "enemy": "몬스터",
    "tracking": "목표 위치",
    "good": "증가",
    "bad": "감소",
    "returnToTitle": "타이틀로",
    "showMap": "전체 지도",
    "portalLabel": "다음 지역",
    "nearby": "가까운 대상",
    "consume": "소모",
    "resume": "계속하기",
    "baseStats": "기본 능력",
    "selectRace": "종족을 선택하세요",
    "selectClass": "직업을 선택하세요",
    "portraitHint": "당신의 모험가",
    "itemDetail": "장비 상세",
    "upgradePreview": "강화 후 전투 능력",
    "skillsSubtitle": "자동 기술 두 개를 장착합니다. 각 직업의 후기 기술은 Lv20·32에 열립니다.",
    "skillKind_projectile": "표적에게 투사체 공격",
    "skillKind_nova": "자신 주변 범위 공격",
    "skillKind_targetArea": "표적 주변 범위 공격",
    "skillKind_chain": "여러 적에게 연쇄 공격",
    "skillKind_self": "자신 강화·회복",
    "burn": "화상",
    "slow": "둔화",
    "healing": "체력 회복",
    "protect": "보호막",
    "questLocation": "의뢰인 위치",
    "noOffers": "현재 받을 수 있는 의뢰가 없습니다.",
    "completedQuests": "완료한 이야기",
    "bagSort": "좋은 장비순",
    "equippedHint": "장착 중인 장비는 초록색으로 표시됩니다.",
    "upgradeNpcHint": "장비 강화는 대장장이 앞에서 가능합니다.",
    "notVisited": "먼저 이 지역을 방문하세요.",
    "routeNext": "다음 길",
    "currentLocation": "현재 위치",
    "targetMap": "목표 지역",
    "walking": "도보 이동",
    "cleared": "격파 완료",
    "sellItems": "장비 처분",
    "merchantHint": "필수 보급품부터 준비하세요. 후기 장비는 레벨 조건, 세력 제작식은 평판 조건이 있습니다.",
    "smithHint": "장비를 강화하거나 재료로 희귀 장비를 제작하세요.",
    "templeHint": "현재 축복과 남은 시간을 확인하세요. 축복은 중첩되지 않으며 성장 트리는 마을에서 재분배할 수 있습니다.",
    "restHint": "20금화를 내고 체력과 마력을 전부 회복합니다.",
    "innFood": "식사 효과",
    "savedHint": "자동 저장됩니다.",
    "soundOn": "켜짐",
    "soundOff": "꺼짐",
    "fullscreenUnavailable": "이 브라우저에서는 전체 화면을 지원하지 않습니다.",
    "questGuide": "의뢰를 누르면 진행과 이동 경로를 볼 수 있습니다.",
    "backToTown": "귀환",
    "titleContinue": "영웅의 모험을 이어갑니다.",
    "talentPoints": "남은 기술점",
    "emptySkillHint": "성장하면 새 기술이 자동으로 장착됩니다.",
    "portalLocked": "봉인된 길",
    "pathTo": "{map}로 가는 길",
    "newSkillSlot": "기술이 자동 사용 목록에 추가되었습니다.",
    "playerStats": "모험가 능력",
    "autoSlots": "사용 순서",
    "npcTalk": "대화",
    "dungeonGuardianHint": "수호자를 격파하면 다음 층이 열립니다. 환경 장치를 차단하고 군주의 수호석을 해제하세요.",
    "runLevel": "적 레벨",
    "rareReward": "장비 획득 기회 · 강화 재료",
    "firstAdventure": "새 이야기",
    "enchantLevel": "강화 단계",
    "selectedItem": "선택한 장비",
    "lootLabel": "획득",
    "mapTitle": "에버돈 동부 지도",
    "questEmpty": "마을의 길드 안내인에게 말을 걸어보세요.",
    "characterCreated": "모험이 시작되었습니다. 마렌에게 말을 걸어보세요.",
    "safelySaved": "이 RPG의 진행만 새로 시작합니다.",
    "perk": "고유 효과",
    "equipFirst": "장비를 선택하세요.",
    "currentBuff": "현재 가호",
    "none": "없음",
    "notYet": "아직",
    "more": "상세 보기",
    "chapterVictory": "모든 지역의 이야기를 마쳤습니다. 전설 던전, 연전, 전직과 평판 성장을 계속할 수 있습니다.",
    "inventoryBack": "장비 목록으로",
    "targetDirection": "목표 방향",
    "respawning": "재등장 대기",
    "range": "거리",
    "questCompletedShort": "의뢰 완료",
    "mealApplied": "식사 효과를 얻었습니다.",
    "blessingCurrent": "현재 적용된 축복",
    "blessingNone": "적용된 성당 축복이 없습니다.",
    "blessingRemaining": "남은 시간",
    "blessingApplied": "적용 중",
    "blessingRefresh": "시간 갱신",
    "blessingSwitch": "축복 교체",
    "blessingHint": "성당 축복은 하나만 유지되며 중첩되지 않습니다. 재선택은 남은 시간을 갱신합니다.",
    "dash": "대시",
    "dashWait": "대시 충전이 부족합니다.",
    "dashActive": "대시 중입니다.",
    "dashHint": "짧은 거리 대시 · 최대 2회 · 5초마다 1회 회복",
    "dashReady": "충전 완료",
    "dashRecharge": "다음 충전",
    "manaPotion": "마력 물약",
    "fullMp": "마력이 가득합니다.",
    "noConsumable": "해당 소모품이 없습니다.",
    "consumableWait": "소모품 재사용 대기 중입니다.",
    "supplies": "소모품",
    "use": "사용",
    "supplyHint": "전투 준비 효과는 하나만 유지됩니다.",
    "shopConsumables": "소모품",
    "shopEquipment": "장비",
    "shopMaterials": "재료",
    "stockLeft": "남은 수량",
    "soldOut": "재입고 대기",
    "shopLevelGate": "Lv. {level}부터 구입 가능",
    "craftLevelGate": "Lv. {level}부터 제작 가능",
    "night": "밤",
    "day": "낮",
    "nightHint": "밤에는 적 피해가 10% 증가합니다.",
    "discovery": "탐험 발견",
    "discover": "조사",
    "discovered": "발견 완료",
    "discoveryBonus": "영구 탐험 보너스",
    "explorationLog": "탐험 기록",
    "explorationCount": "발견",
    "worldEvent": "야영지 사건",
    "eventStart": "사건 도전",
    "eventActive": "몬스터를 처치하세요.",
    "eventReady": "보급품 회수 가능",
    "eventClaim": "보급품 받기",
    "eventCooling": "사건이 잠잠해졌습니다.",
    "eventCompleted": "야영지 보급품을 회수했습니다.",
    "eventDanger": "조사하면 몬스터 무리가 나타납니다.",
    "eventRemaining": "남은 몬스터",
    "wanderer": "떠돌이 상인",
    "waystoneOnly": "여행의 돌 가까이에서 이용하세요.",
    "restPaid": "휴식 · {gold} 금화",
    "blessingFull": "같은 축복이 이미 충분한 시간 적용 중입니다.",
    "newDiscovery": "새로운 장소를 발견했습니다.",
    "noDiscovery": "필드의 성소와 유적을 조사해보세요.",
    "dayCycle": "시간대",
    "blessingOne": "성당 축복 1 / 1",
    "blessingRenewed": "축복 시간이 갱신됩니다.",
    "permanent": "영구 효과",
    "discoverUnknown": "미발견 장소",
    "discoverSeen": "발견 후 조사 필요",
    "vendorStock": "상인 재고",
    "vendorLeaves": "머무는 시간",
    "supplyReady": "사용 가능",
    "shopRarity": "판매 등급",
    "nightDay": "낮·밤",
    "eventReward": "보급 보상",
    "eventCooldown": "다음 조사",
    "xpCost": "다음 레벨 경험치",
    "restNoFree": "휴식 시 20금화가 소모됩니다.",
    "advancement": "전직 성장",
    "advancementHint": "각 단계에서 하나만 선택합니다. 선택한 계열의 후속 전직만 열리며 다른 계열과 중복 투자할 수 없습니다.",
    "chooseAdvancement": "전직 선택",
    "chosenAdvancement": "선택한 전직",
    "advancementLocked": "이전 전직을 먼저 선택하세요.",
    "advancementLevel": "Lv{level} 전직",
    "advancementConflict": "이미 선택한 계열입니다. 다른 계열에는 투자할 수 없습니다.",
    "advancementRequired": "먼저 이 계열로 전직하세요.",
    "talentLevel": "수련 조건 · Lv{level}",
    "respecPaid": "전직 재설정 · {gold} 금화",
    "legacyAdvancement": "중복 투자한 다른 계열의 수련점을 환급했습니다.",
    "firstAdvancement": "첫 전직은 Lv3에 열립니다.",
    "nextAdvancement": "다음 전직",
    "journal": "모험 기록",
    "reputation": "평판",
    "reputationGate": "세력 평판이 부족합니다.",
    "companions": "동료",
    "companionHint": "동료는 한 명만 동행합니다. 마을에서 교대하며 전투·지역 사건으로 유대가 성장합니다.",
    "companionLocked": "동료의 맹약 의뢰를 완료하세요.",
    "companionSelect": "동행하기",
    "companionActive": "동행 중",
    "companionNone": "혼자 모험",
    "bond": "유대",
    "codex": "몬스터 도감",
    "codexHint": "누적 15·45·100회 처치 보상은 몬스터마다 한 번씩 받습니다. 보스의 상세 패턴은 던전에서 확인하세요.",
    "codexClaim": "연구 보상",
    "factions": "세력 평판",
    "factionHint": "토벌·봉인·탐험으로 평판을 얻습니다. 평판 120에 세력 전용 제작식이 열립니다.",
    "unseenMonster": "미발견",
    "choiceReward": "보고 보상 선택",
    "choiceRequired": "보고 보상 하나를 선택하세요.",
    "repeatCooling": "의뢰 갱신 대기",
    "repeatHint": "반복 의뢰는 수령 이후 처치만 계산합니다.",
    "minQuestLevel": "Lv{level}부터 수주할 수 있습니다.",
    "arena": "길드 연전",
    "trialStart": "연전 시작",
    "trialLocked": "연전 입장 레벨이 부족합니다.",
    "trialReady": "연전 완주! 관리인에게 보상을 받으세요.",
    "trialClaim": "완주 보상 받기",
    "trialWave": "연전",
    "trialFee": "참가비",
    "trialExit": "퇴장 시 진행이 초기화됩니다.",
    "trialClears": "연전 완주",
    "wave": "습격",
    "nextWave": "다음 습격",
    "mechanism": "봉인 장치",
    "mechanismAction": "장치 해제",
    "mechanismUsed": "이미 해제한 장치입니다.",
    "mechanismDone": "봉인 장치를 해제했습니다.",
    "wardHint": "수호석이 군주를 보호합니다. E로 해제하세요.",
    "wardCount": "남은 수호석",
    "expeditionRule": "원정 방침",
    "expeditionHint": "던전 전체에 적용됩니다. 귀환 후 다시 선택할 수 있습니다.",
    "page": "페이지",
    "previous": "이전",
    "next": "다음",
    "filterChapter": "현재 의뢰",
    "noBranch": "미전직",
    "eventWave": "습격 {wave} / {total}",
    "pattern_circle": "근접 원형 공격",
    "pattern_line": "예고 후 돌진·직선 공격",
    "pattern_target": "발밑을 노리는 장판",
    "pattern_ring": "안쪽으로 피하는 고리 공격",
    "pattern_cone": "방향을 읽는 부채꼴 공격",
    "questCooldown": "다시 수주하기까지 {time}초",
    "questFilterMain": "주요 의뢰",
    "questFilterSide": "부가 의뢰",
    "questFilterRepeat": "반복 의뢰",
    "questFilterAll": "진행 의뢰",
    "mapRegion": "지역",
    "allRegions": "모든 지역",
    "bossWards": "수호석",
    "phase": "단계",
    "choiceSaved": "선택 기록",
    "cooling": "갱신 대기",
    "trialClaimed": "보상 수령 완료",
    "mechanismHint": "E로 장치를 해제합니다.",
    "branchRefund": "기존 중복 투자에서 수련점 {points}점을 돌려받았습니다.",
    "rankGrowth": "계열 수련",
    "respecConfirm": "전직 초기화",
    "respecConfirmHint": "선택한 모든 전직과 수련을 초기화합니다. 수련점은 반환되며 60금화가 소모됩니다.",
    "select": "선택",
    "growthStages": "전직 계보",
    "monster": "몬스터",
    "elite": "정예",
    "defeated": "누적 처치",
    "growInvest": "이전 계열 수련 {count} 필요",
    "online": "함께 모험",
    "onlineTitle": "에버돈 온라인",
    "onlineLogin": "접속",
    "onlineRegister": "계정 만들기",
    "onlineLogout": "온라인 나가기",
    "onlineUsername": "계정 ID",
    "onlinePassword": "비밀번호",
    "onlineName": "캐릭터 이름",
    "onlineLegacy": "현재 개인 모험 이관",
    "onlineLegacyHint": "레벨·장비·의뢰를 이어갑니다. 이관 장비는 귀속되고, 거래 주화·온라인 성과는 서버 활동으로 얻습니다. 기존 개인 저장은 보존됩니다.",
    "onlineHostNeeded": "온라인은 게임 서버 주소에서 실행할 수 있습니다. 서버를 실행한 뒤 해당 주소로 접속하세요.",
    "onlineAddress": "게임 서버 주소",
    "onlineOpenServer": "서버 주소 열기",
    "onlineConnecting": "서버에 접속 중",
    "onlineReconnecting": "연결 복구 중",
    "onlineDisconnected": "서버 연결이 끊어졌습니다.",
    "onlineConnected": "공유 월드",
    "onlineError": "요청을 처리하지 못했습니다.",
    "onlineInvalid": "요청 값이 올바르지 않습니다.",
    "onlineLoginRequired": "먼저 온라인 계정으로 접속하세요.",
    "onlineBadAuth": "계정 또는 비밀번호를 확인하세요.",
    "onlineAccountExists": "사용 중인 계정 ID입니다.",
    "onlineBusy": "잠시 후 다시 시도하세요.",
    "onlineLimit": "접속 정원이 찼습니다.",
    "onlineSameOrigin": "게임 서버와 같은 주소에서 접속하세요.",
    "onlineSave": "서버 자동 저장",
    "onlineServerOnly": "온라인 접속 후 이용할 수 있습니다.",
    "onlineMapFull": "지역 접속 정원이 찼습니다.",
    "onlineIncompatible": "클라이언트 버전을 갱신하세요.",
    "worldPlayers": "같은 지역의 모험가",
    "worldEmpty": "이 지역의 다른 모험가가 없습니다.",
    "chatPlaceholder": "지역 대화",
    "chatSend": "보내기",
    "crowns": "왕국 주화",
    "stars": "별 조각",
    "shards": "정령 가루",
    "honor": "명예",
    "party": "파티",
    "raid": "레이드",
    "partyCreate": "파티 만들기",
    "partyCode": "초대 코드",
    "partyJoin": "코드로 참가",
    "partyLeave": "파티 나가기",
    "partyNotMember": "파티에 가입하세요.",
    "partyNotLeader": "파티장만 실행할 수 있습니다.",
    "partyFull": "파티 정원이 찼습니다.",
    "partyMode": "공격대 전환",
    "partyRole": "역할",
    "partyRoleGate": "방어와 공격 역할을 포함한 2명이 필요합니다.",
    "partyAlready": "이미 파티에 속해 있습니다.",
    "raidEnter": "공동 원정 입장",
    "raidLevel": "원정 레벨 조건이 부족합니다.",
    "raidReady": "모든 파티원이 마을에서 준비해야 합니다.",
    "raidReward": "주간 원정 보너스는 원정별 3회입니다. 전투 보상은 계속 얻습니다.",
    "guild": "길드",
    "guildName": "길드 이름",
    "guildCreate": "길드 창설",
    "guildJoin": "길드 가입",
    "guildLeave": "길드 탈퇴",
    "guildDonate": "공동 기금 기부",
    "guildProject": "공동 목표",
    "guildClaim": "공동 목표 보상",
    "guildFull": "길드 정원이 찼습니다.",
    "guildAlready": "이미 길드에 속해 있습니다.",
    "guildOwnerLeave": "마지막 길드원일 때 해산할 수 있습니다.",
    "guildAura": "길드 가호",
    "market": "왕국 거래소",
    "marketPrice": "판매가 · 왕국 주화",
    "marketList": "판매 등록",
    "marketBuy": "구매",
    "marketCancel": "등록 취소",
    "marketEmpty": "등록된 장비가 없습니다.",
    "marketHint": "서버에서 획득한 미귀속 장비를 거래합니다. 등록비 2주화, 거래세 6%. 물품과 대금은 우편으로 지급됩니다.",
    "marketOwn": "내 등록",
    "marketBound": "귀속·장착·즐겨찾기 장비는 거래할 수 없습니다.",
    "marketExpired": "이미 판매되었거나 만료된 등록입니다.",
    "marketSlots": "판매 등록 한도입니다.",
    "mail": "우편",
    "mailClaim": "수령",
    "mailEmpty": "받을 우편이 없습니다.",
    "mailCapacity": "가방 공간을 확보하세요.",
    "mailSale": "거래소 판매 대금",
    "mailPurchase": "거래소 구매 장비",
    "mailReturn": "보관 장비 반환",
    "mailTrade": "개인 거래 완료",
    "trade": "개인 거래",
    "tradeInvite": "거래 요청",
    "tradeOffer": "제안 올리기",
    "tradeConfirm": "현재 제안 확정",
    "tradeCancel": "거래 취소",
    "tradeIncoming": "거래 요청이 도착했습니다.",
    "tradeWaiting": "상대의 확정을 기다립니다.",
    "tradeRevised": "제안이 바뀌었습니다. 다시 확인하세요.",
    "tradeHint": "양쪽이 같은 제안을 확정하면 교환됩니다. 제안한 물품·주화는 거래가 끝날 때까지 보관됩니다.",
    "pvp": "훈련 결투",
    "pvpInvite": "결투 신청",
    "pvpAccept": "수락",
    "pvpDecline": "거절",
    "pvpIncoming": "결투 신청이 도착했습니다.",
    "pvpHint": "서로 수락한 1:1 결투입니다. 기본 전투 수치를 정규화하고 전직·기술은 유지합니다. 물약·장비·기술 변경은 제한됩니다. 패배해도 장비·경험치·금화를 잃지 않습니다.",
    "pvpWins": "승리",
    "pvpRating": "대전 점수",
    "pvpActive": "결투 진행 중",
    "pvpWin": "결투 승리",
    "pvpLoss": "결투 패배",
    "pvpDraw": "무승부",
    "pvpBusy": "현재 결투할 수 없습니다.",
    "achievements": "업적",
    "achievementClaim": "달성 보상",
    "expeditionBook": "원정 수첩",
    "summon": "정령 소환",
    "summonHint": "게임에서 얻은 별 조각만 사용합니다. 일반 78% · 희귀 20% · 전설 2%. 50회 안에 전설이 확정됩니다. 중복 정령은 가루 5개로 전환됩니다.",
    "summonOne": "1회 소환",
    "summonTen": "10회 소환",
    "summonPity": "전설 보장까지",
    "summonResults": "소환 결과",
    "spiritEquip": "정령 동행",
    "spiritActive": "동행 정령",
    "shardExchange": "가루 30개 → 별 조각 1개",
    "collection": "장비 수집",
    "bound": "귀속",
    "tradeable": "거래 가능",
    "mastery": "장기 숙련",
    "masteryHint": "Lv50 이후 경험치가 숙련으로 누적됩니다. 기존 레벨과 장비는 초기화되지 않습니다.",
    "masteryPoints": "숙련점",
    "masteryLearn": "숙련 투자",
    "element": "속성",
    "setEffect": "세트 효과",
    "engrave": "무기 각인",
    "engraveHint": "대장간에서 속성을 바꿉니다. 각인한 장비는 귀속됩니다.",
    "engraveChoose": "각인할 무기를 선택하세요.",
    "skillBranchLocked": "선택한 전직의 전용 기술입니다.",
    "skillElement": "기술 속성",
    "partySupport": "파티 지원",
    "serverStarted": "서버 실행 중",
    "worldBoss": "공유 월드 보스",
    "kingdomBoard": "왕국 현황",
    "onlineInvite": "신청",
    "onlineReturn": "개인 모험으로 돌아가기",
    "saveTransferInvalid": "이관할 개인 저장을 확인하세요.",
    "onlineActionBlocked": "결투 중에는 이 기능을 사용할 수 없습니다.",
    "onlineItemLocked": "다른 거래에서 보관 중인 장비입니다.",
    "notEnoughCrowns": "왕국 주화가 부족합니다.",
    "notEnoughStars": "별 조각이 부족합니다.",
    "noReward": "아직 보상 조건을 달성하지 못했습니다.",
    "leaderboard": "왕국 순위",
    "loading": "불러오는 중",
    "onlineLive": "온라인에서는 메뉴를 열어도 전투가 계속됩니다.",
    "onlineContinue": "서버 캐릭터 접속",
    "onlineFresh": "온라인 새 캐릭터",
    "onlineLegacyDisabled": "이 서버는 신규 온라인 캐릭터로 시작합니다. 개인 모험 저장은 그대로 유지됩니다.",
    "onlineLegacyAllowed": "개인 서버 이관 허용",
    "gearSource": "장비 출처",
    "summonDuplicate": "중복 · 가루 +5",
    "guildLevel": "길드 단계",
    "partyHelp": "초대 코드를 공유해 같은 파티로 참가하세요. 공격대로 전환하면 8명까지 함께할 수 있습니다.",
    "tradeCoins": "제안할 왕국 주화",
    "tradeSelect": "보낼 장비",
    "marketSelect": "판매할 장비",
    "masteryMax": "최대 수련",
    "onlineServerExample": "https://tactics.kjmalswo-804.workers.dev",
    "onlineAuthHint": "ID는 영문·숫자·밑줄 3~20자, 비밀번호는 8자 이상입니다.",
    "onlineLoginHint": "계정으로 접속하면 서버에 저장한 캐릭터가 이어집니다.",
    "raidHint": "공격대장만 새 원정을 시작할 수 있습니다. 이미 진행 중인 원정에는 마을에서 재합류할 수 있습니다.",
    "guildGoalKills": "공동 토벌",
    "guildGoalRaids": "레이드 완주",
    "guildGoalDonation": "공동 기금",
    "wallet": "보유 재화",
    "onlineRequestPending": "서버 처리 중",
    "itemRune": "각인",
    "onlineStatus": "접속 상태",
    "chat": "지역 대화",
    "guildCostHint": "원정에서 모은 왕국 주화로 길드를 창설하고 공동 목표를 달성하세요.",
    "groupEntry": "함께 모험의 공동 원정에서 입장",
    "elementHint": "화염 → 자연 → 비전 → 냉기 → 화염. 유리한 속성은 피해 +25%, 불리하면 -20%.",
    "mailLoot": "가방 초과 획득 장비",
    "onlineReplaced": "다른 창에서 접속했습니다. 이 창의 온라인 연결을 종료합니다.",
    "onlineStaleAction": "지역 또는 연결이 바뀌었습니다. 다시 시도하세요.",
    "onlineMailOverflow": "가방이 가득 차 획득한 장비를 우편으로 보냈습니다.",
    "onlineInterruptedDuel": "서버 재연결로 결투가 종료되었습니다. 승패와 재화는 변하지 않습니다.",
    "onlineOtherSession": "다른 창에서 접속 중"
  },
  "_docs": {
    "source": "game-db.js는 모든 콘텐츠·수치·지도·그림·음악·문구의 단일 원본입니다.",
    "maps": "maps의 ASCII tiles와 npc/portal/spawn/resource/chest 좌표가 실제 공간입니다. terrain.walk와 solid prop을 충돌에 사용합니다.",
    "build": "classes/races/skills/branches/talents/items/affixes의 stats를 공통 계산기로 합산합니다. 클래스 ID 분기 없이 동작합니다.",
    "save": "새 RPG 저장 키를 사용하며 이전 결투 v6 저장을 삭제하거나 덮어쓰지 않습니다.",
    "audio": "audio.tracks의 MIDI 멜로디·화음·베이스를 오프라인 Web Audio로 합성합니다.",
    "resourceBalance": "기본 마력 회복·적 금화·장비 드롭을 낮추고 XP 비용을 높였습니다. rarity/lootProfiles와 제작·상인 가격은 각각 DB에서 조정합니다. 희귀 장비를 고정 보장하는 일반 드롭·상자는 없습니다.",
    "openWorld": "maps[].discoveries/events, resources, 일정이 있는 npcs와 patrol spawns가 오픈월드 콘텐츠입니다. discoveries 영구 보너스·사건 상태·상인 재고·추가된 필드 스폰은 저장·이전 저장 보완을 지원합니다.",
    "advancement": "branches의 parent/stage/class로 단일 전직 계보를 정의합니다. 단계별 한 개만 선택하고 talents.minLevel과 선행 포인트를 검사합니다. 마을에서 유료 전직 초기화 시 선택도 모두 해제합니다.",
    "content": "주요 의뢰의 챕터·선택 보상, 지역별 2층 던전, 연전 waves, phases/patterns, mechanisms/zones는 실제 전투와 연결됩니다.",
    "onlineReadiness": "콘텐츠 ID와 캐릭터 영구 진행(전직·의뢰·평판·동료·도감), 지역 인스턴스(적·사건·장치·상자), 시간 기반 반복 의뢰를 구분합니다. 실제 멀티플레이/서버/거래는 아직 구현하지 않습니다. 이후 권위 서버가 같은 검증 경로를 사용하도록 규칙과 보상을 DB에서 관리합니다.",
    "online": "공개 서버는 Cloudflare Worker + Durable Objects SQLite, 실시간 입력·월드 상태는 WebSocket입니다. 로컬 Node 어댑터는 HTTP/SSE + SQLite로 같은 권위 엔진을 사용합니다. 서버만 이동·피해·보상·거래·소환을 확정합니다. 공개 저장 이관은 기본 차단하고 개인 저장은 보존합니다. 서버·경제·역할·확률은 online 및 관련 DB 키에서 관리합니다."
  },
  "comparisonStats": [
    "attack",
    "spell",
    "hp",
    "mp",
    "defense",
    "basicDamage",
    "skillDamage",
    "attackSpeed",
    "crit",
    "speed",
    "manaRegen",
    "range",
    "cooldownRate",
    "shieldOnSkill",
    "lifesteal",
    "thorns",
    "physicalResist",
    "fireResist",
    "frostResist",
    "natureResist",
    "arcaneResist"
  ],
  "controlLabels": {
    "potion": "R",
    "inventory": "Tab",
    "quests": "Q",
    "dash": "Shift",
    "manaPotion": "F",
    "interact": "E"
  },
  "lootProfiles": {
    "boss": {
      "common": 21.6,
      "uncommon": 70,
      "rare": 8,
      "epic": 0.4
    },
    "elite": {
      "common": 70,
      "uncommon": 28,
      "rare": 1.9,
      "epic": 0.1
    },
    "raid": {
      "common": 10,
      "uncommon": 77,
      "rare": 11.9,
      "epic": 1.05,
      "legendary": 0.05
    }
  },
  "consumables": [
    {
      "id": "healing",
      "name": "회복 물약",
      "pool": "potions",
      "resource": "hp",
      "ratio": 0.55,
      "cooldown": 7,
      "icon": "potion",
      "description": "최대 체력의 55% 회복 · R"
    },
    {
      "id": "mana",
      "name": "마력 물약",
      "pool": "manaPotions",
      "resource": "mp",
      "ratio": 0.45,
      "cooldown": 10,
      "icon": "staff",
      "description": "최대 마력의 45% 회복 · F"
    },
    {
      "id": "ration",
      "name": "여행자의 건량",
      "buff": "ration",
      "category": "preparation",
      "duration": 180,
      "stats": [
        {
          "stat": "hpRegen",
          "op": "add",
          "value": 0.35
        }
      ],
      "cooldown": 3,
      "icon": "home",
      "description": "3분간 초당 체력 회복 +0.35"
    },
    {
      "id": "sharpening",
      "name": "숫돌 가루",
      "buff": "sharpening",
      "category": "preparation",
      "duration": 180,
      "stats": [
        {
          "stat": "basicDamage",
          "op": "multiply",
          "value": 1.1
        }
      ],
      "cooldown": 3,
      "icon": "attack",
      "description": "3분간 평타 피해 +10%"
    },
    {
      "id": "arcane_dust",
      "name": "비전 향로",
      "buff": "arcane_dust",
      "category": "preparation",
      "duration": 180,
      "stats": [
        {
          "stat": "skillDamage",
          "op": "multiply",
          "value": 1.1
        }
      ],
      "cooldown": 3,
      "icon": "staff",
      "description": "3분간 기술 피해 +10%"
    },
    {
      "id": "ward_tonic",
      "name": "수호의 영약",
      "buff": "ward_tonic",
      "category": "preparation",
      "duration": 180,
      "stats": [
        {
          "stat": "defense",
          "op": "add",
          "value": 2
        },
        {
          "stat": "damageReduction",
          "op": "add",
          "value": 0.03
        }
      ],
      "cooldown": 3,
      "icon": "shield",
      "description": "3분간 방어력 +2, 받는 피해 -3%"
    },
    {
      "id": "wind_tonic",
      "name": "바람의 영약",
      "buff": "wind_tonic",
      "category": "preparation",
      "duration": 180,
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.1
        }
      ],
      "cooldown": 3,
      "icon": "bait",
      "description": "3분간 이동 속도 +10%"
    }
  ],
  "expeditionRules": [
    {
      "id": "scout",
      "name": "정찰",
      "description": "기본 위험과 보상.",
      "enemyDamage": 1,
      "reward": 1,
      "manaRegen": 1
    },
    {
      "id": "assault",
      "name": "강행",
      "description": "적 피해 +20% / 경험치·금화 +30%.",
      "enemyDamage": 1.2,
      "reward": 1.3,
      "manaRegen": 1
    },
    {
      "id": "sealed",
      "name": "마력 봉쇄",
      "description": "마력 회복 -30% / 경험치·금화 +40%.",
      "enemyDamage": 1,
      "reward": 1.4,
      "manaRegen": 0.7
    }
  ],
  "factions": [
    {
      "id": "rangers",
      "name": "변경 사냥단",
      "description": "현상 사냥과 야영지 토벌로 신뢰를 얻습니다.",
      "icon": "bow",
      "ranks": [
        {
          "value": 0,
          "name": "낯선 이"
        },
        {
          "value": 40,
          "name": "협력자"
        },
        {
          "value": 120,
          "name": "신뢰받는 사냥꾼"
        },
        {
          "value": 300,
          "name": "변경의 영웅"
        }
      ]
    },
    {
      "id": "wardens",
      "name": "왕국 수호회",
      "description": "던전 군주와 방어 의뢰가 수호회 장비를 개방합니다.",
      "icon": "shield",
      "ranks": [
        {
          "value": 0,
          "name": "외지인"
        },
        {
          "value": 40,
          "name": "지원자"
        },
        {
          "value": 120,
          "name": "맹약의 동료"
        },
        {
          "value": 300,
          "name": "왕국의 방패"
        }
      ]
    },
    {
      "id": "arcanum",
      "name": "별빛 학회",
      "description": "탐험과 봉인 조사를 통해 비전 제작식을 개방합니다.",
      "icon": "staff",
      "ranks": [
        {
          "value": 0,
          "name": "방문자"
        },
        {
          "value": 40,
          "name": "조사원"
        },
        {
          "value": 120,
          "name": "연구 동료"
        },
        {
          "value": 300,
          "name": "별의 현자"
        }
      ]
    }
  ],
  "advancementStages": [
    {
      "id": 1,
      "name": "1차 전직",
      "level": 3,
      "requiredPoints": 0
    },
    {
      "id": 2,
      "name": "2차 전직",
      "level": 18,
      "requiredPoints": 8
    },
    {
      "id": 3,
      "name": "3차 전직",
      "level": 34,
      "requiredPoints": 8
    }
  ],
  "trials": [
    {
      "id": "bronze",
      "name": "청동 연전",
      "minLevel": 10,
      "fee": 35,
      "map": "guild_arena",
      "waves": [
        [
          {
            "monster": "goblin_guard",
            "x": 13,
            "y": 8,
            "level": 10,
            "guardian": false
          },
          {
            "monster": "wolf",
            "x": 17,
            "y": 8,
            "level": 10,
            "guardian": false
          },
          {
            "monster": "cave_bat",
            "x": 21,
            "y": 8,
            "level": 10,
            "guardian": false
          }
        ],
        [
          {
            "monster": "wolf",
            "x": 13,
            "y": 8,
            "level": 10,
            "guardian": false
          },
          {
            "monster": "cave_bat",
            "x": 17,
            "y": 8,
            "level": 10,
            "guardian": false
          },
          {
            "monster": "goblin_guard",
            "x": 21,
            "y": 8,
            "level": 10,
            "guardian": false
          }
        ],
        [
          {
            "monster": "cave_bat",
            "x": 13,
            "y": 8,
            "level": 11,
            "guardian": false
          },
          {
            "monster": "goblin_guard",
            "x": 17,
            "y": 8,
            "level": 11,
            "guardian": false
          },
          {
            "monster": "wolf",
            "x": 21,
            "y": 8,
            "level": 11,
            "guardian": false
          },
          {
            "monster": "cave_bat",
            "x": 13,
            "y": 15,
            "level": 11,
            "guardian": false
          }
        ],
        [
          {
            "monster": "goblin_guard",
            "x": 13,
            "y": 8,
            "level": 11,
            "guardian": false
          },
          {
            "monster": "wolf",
            "x": 17,
            "y": 8,
            "level": 11,
            "guardian": false
          },
          {
            "monster": "cave_bat",
            "x": 21,
            "y": 8,
            "level": 11,
            "guardian": false
          },
          {
            "monster": "goblin_guard",
            "x": 13,
            "y": 15,
            "level": 11,
            "guardian": false
          }
        ],
        [
          {
            "monster": "wolf",
            "x": 13,
            "y": 8,
            "level": 12,
            "guardian": true
          },
          {
            "monster": "cave_bat",
            "x": 17,
            "y": 8,
            "level": 12,
            "guardian": false
          },
          {
            "monster": "goblin_guard",
            "x": 21,
            "y": 8,
            "level": 12,
            "guardian": false
          },
          {
            "monster": "wolf",
            "x": 13,
            "y": 15,
            "level": 12,
            "guardian": false
          },
          {
            "monster": "cave_bat",
            "x": 17,
            "y": 15,
            "level": 12,
            "guardian": false
          }
        ]
      ],
      "rewards": {
        "xp": 350,
        "gold": 115,
        "materials": {
          "sigil": 2
        },
        "reputation": {
          "wardens": 8
        }
      },
      "description": "휴식 없이 5번의 습격을 견디세요. 중도 퇴장하면 참가비는 돌려받지 못합니다."
    },
    {
      "id": "silver",
      "name": "은빛 연전",
      "minLevel": 24,
      "fee": 100,
      "map": "guild_arena",
      "waves": [
        [
          {
            "monster": "highland_orc",
            "x": 13,
            "y": 8,
            "level": 24,
            "guardian": false
          },
          {
            "monster": "ice_wraith",
            "x": 17,
            "y": 8,
            "level": 24,
            "guardian": false
          },
          {
            "monster": "snow_golem",
            "x": 21,
            "y": 8,
            "level": 24,
            "guardian": false
          }
        ],
        [
          {
            "monster": "ice_wraith",
            "x": 13,
            "y": 8,
            "level": 24,
            "guardian": false
          },
          {
            "monster": "snow_golem",
            "x": 17,
            "y": 8,
            "level": 24,
            "guardian": false
          },
          {
            "monster": "highland_orc",
            "x": 21,
            "y": 8,
            "level": 24,
            "guardian": false
          }
        ],
        [
          {
            "monster": "snow_golem",
            "x": 13,
            "y": 8,
            "level": 25,
            "guardian": false
          },
          {
            "monster": "highland_orc",
            "x": 17,
            "y": 8,
            "level": 25,
            "guardian": false
          },
          {
            "monster": "ice_wraith",
            "x": 21,
            "y": 8,
            "level": 25,
            "guardian": false
          },
          {
            "monster": "snow_golem",
            "x": 13,
            "y": 15,
            "level": 25,
            "guardian": false
          }
        ],
        [
          {
            "monster": "highland_orc",
            "x": 13,
            "y": 8,
            "level": 25,
            "guardian": false
          },
          {
            "monster": "ice_wraith",
            "x": 17,
            "y": 8,
            "level": 25,
            "guardian": false
          },
          {
            "monster": "snow_golem",
            "x": 21,
            "y": 8,
            "level": 25,
            "guardian": false
          },
          {
            "monster": "highland_orc",
            "x": 13,
            "y": 15,
            "level": 25,
            "guardian": false
          }
        ],
        [
          {
            "monster": "ice_wraith",
            "x": 13,
            "y": 8,
            "level": 26,
            "guardian": false
          },
          {
            "monster": "snow_golem",
            "x": 17,
            "y": 8,
            "level": 26,
            "guardian": false
          },
          {
            "monster": "highland_orc",
            "x": 21,
            "y": 8,
            "level": 26,
            "guardian": false
          },
          {
            "monster": "ice_wraith",
            "x": 13,
            "y": 15,
            "level": 26,
            "guardian": false
          },
          {
            "monster": "snow_golem",
            "x": 17,
            "y": 15,
            "level": 26,
            "guardian": false
          }
        ],
        [
          {
            "monster": "snow_golem",
            "x": 13,
            "y": 8,
            "level": 26,
            "guardian": true
          },
          {
            "monster": "highland_orc",
            "x": 17,
            "y": 8,
            "level": 26,
            "guardian": false
          },
          {
            "monster": "ice_wraith",
            "x": 21,
            "y": 8,
            "level": 26,
            "guardian": false
          },
          {
            "monster": "snow_golem",
            "x": 13,
            "y": 15,
            "level": 26,
            "guardian": false
          },
          {
            "monster": "highland_orc",
            "x": 17,
            "y": 15,
            "level": 26,
            "guardian": false
          }
        ]
      ],
      "rewards": {
        "xp": 560,
        "gold": 222,
        "materials": {
          "sigil": 4
        },
        "reputation": {
          "wardens": 12
        }
      },
      "description": "휴식 없이 6번의 습격을 견디세요. 중도 퇴장하면 참가비는 돌려받지 못합니다."
    },
    {
      "id": "gold",
      "name": "왕관 연전",
      "minLevel": 40,
      "fee": 220,
      "map": "guild_arena",
      "waves": [
        [
          {
            "monster": "dusk_sentinel",
            "x": 13,
            "y": 8,
            "level": 40,
            "guardian": false
          },
          {
            "monster": "dusk_magus",
            "x": 17,
            "y": 8,
            "level": 40,
            "guardian": false
          },
          {
            "monster": "abyss_spider",
            "x": 21,
            "y": 8,
            "level": 40,
            "guardian": false
          }
        ],
        [
          {
            "monster": "dusk_magus",
            "x": 13,
            "y": 8,
            "level": 40,
            "guardian": false
          },
          {
            "monster": "abyss_spider",
            "x": 17,
            "y": 8,
            "level": 40,
            "guardian": false
          },
          {
            "monster": "dusk_sentinel",
            "x": 21,
            "y": 8,
            "level": 40,
            "guardian": false
          }
        ],
        [
          {
            "monster": "abyss_spider",
            "x": 13,
            "y": 8,
            "level": 41,
            "guardian": false
          },
          {
            "monster": "dusk_sentinel",
            "x": 17,
            "y": 8,
            "level": 41,
            "guardian": false
          },
          {
            "monster": "dusk_magus",
            "x": 21,
            "y": 8,
            "level": 41,
            "guardian": false
          },
          {
            "monster": "abyss_spider",
            "x": 13,
            "y": 15,
            "level": 41,
            "guardian": false
          }
        ],
        [
          {
            "monster": "dusk_sentinel",
            "x": 13,
            "y": 8,
            "level": 41,
            "guardian": false
          },
          {
            "monster": "dusk_magus",
            "x": 17,
            "y": 8,
            "level": 41,
            "guardian": false
          },
          {
            "monster": "abyss_spider",
            "x": 21,
            "y": 8,
            "level": 41,
            "guardian": false
          },
          {
            "monster": "dusk_sentinel",
            "x": 13,
            "y": 15,
            "level": 41,
            "guardian": false
          }
        ],
        [
          {
            "monster": "dusk_magus",
            "x": 13,
            "y": 8,
            "level": 42,
            "guardian": false
          },
          {
            "monster": "abyss_spider",
            "x": 17,
            "y": 8,
            "level": 42,
            "guardian": false
          },
          {
            "monster": "dusk_sentinel",
            "x": 21,
            "y": 8,
            "level": 42,
            "guardian": false
          },
          {
            "monster": "dusk_magus",
            "x": 13,
            "y": 15,
            "level": 42,
            "guardian": false
          },
          {
            "monster": "abyss_spider",
            "x": 17,
            "y": 15,
            "level": 42,
            "guardian": false
          }
        ],
        [
          {
            "monster": "abyss_spider",
            "x": 13,
            "y": 8,
            "level": 42,
            "guardian": false
          },
          {
            "monster": "dusk_sentinel",
            "x": 17,
            "y": 8,
            "level": 42,
            "guardian": false
          },
          {
            "monster": "dusk_magus",
            "x": 21,
            "y": 8,
            "level": 42,
            "guardian": false
          },
          {
            "monster": "abyss_spider",
            "x": 13,
            "y": 15,
            "level": 42,
            "guardian": false
          },
          {
            "monster": "dusk_sentinel",
            "x": 17,
            "y": 15,
            "level": 42,
            "guardian": false
          }
        ],
        [
          {
            "monster": "dusk_sentinel",
            "x": 13,
            "y": 8,
            "level": 43,
            "guardian": false
          },
          {
            "monster": "dusk_magus",
            "x": 17,
            "y": 8,
            "level": 43,
            "guardian": false
          },
          {
            "monster": "abyss_spider",
            "x": 21,
            "y": 8,
            "level": 43,
            "guardian": false
          },
          {
            "monster": "dusk_sentinel",
            "x": 13,
            "y": 15,
            "level": 43,
            "guardian": false
          },
          {
            "monster": "dusk_magus",
            "x": 17,
            "y": 15,
            "level": 43,
            "guardian": false
          },
          {
            "monster": "abyss_spider",
            "x": 21,
            "y": 15,
            "level": 43,
            "guardian": false
          }
        ],
        [
          {
            "monster": "dusk_magus",
            "x": 13,
            "y": 8,
            "level": 43,
            "guardian": true
          },
          {
            "monster": "abyss_spider",
            "x": 17,
            "y": 8,
            "level": 43,
            "guardian": false
          },
          {
            "monster": "dusk_sentinel",
            "x": 21,
            "y": 8,
            "level": 43,
            "guardian": false
          },
          {
            "monster": "dusk_magus",
            "x": 13,
            "y": 15,
            "level": 43,
            "guardian": false
          },
          {
            "monster": "abyss_spider",
            "x": 17,
            "y": 15,
            "level": 43,
            "guardian": false
          },
          {
            "monster": "dusk_sentinel",
            "x": 21,
            "y": 15,
            "level": 43,
            "guardian": false
          }
        ]
      ],
      "rewards": {
        "xp": 800,
        "gold": 390,
        "materials": {
          "sigil": 6
        },
        "reputation": {
          "wardens": 16
        }
      },
      "description": "휴식 없이 8번의 습격을 견디세요. 중도 퇴장하면 참가비는 돌려받지 못합니다."
    }
  ],
  "companions": [
    {
      "id": "lyra",
      "name": "리라",
      "role": "치유사",
      "sprite": "healer",
      "quest": "companion_lyra",
      "npc": "lyra_npc",
      "description": "체력이 절반 이하일 때 회복합니다.",
      "mode": "heal",
      "cooldown": 14,
      "hpThreshold": 0.5,
      "power": 0.08,
      "scale": "hp",
      "range": 6,
      "stats": [
        {
          "stat": "mp",
          "op": "add",
          "value": 5
        }
      ]
    },
    {
      "id": "brann",
      "name": "브란",
      "role": "방패병",
      "sprite": "guardian",
      "quest": "companion_brann",
      "npc": "brann_npc",
      "description": "전투 중 주기적으로 보호막을 제공합니다.",
      "mode": "shield",
      "cooldown": 12,
      "power": 0.07,
      "scale": "hp",
      "range": 6,
      "stats": [
        {
          "stat": "defense",
          "op": "add",
          "value": 1
        }
      ]
    },
    {
      "id": "eris",
      "name": "에리스",
      "role": "원소술사",
      "sprite": "magician",
      "quest": "companion_eris",
      "npc": "eris_npc",
      "description": "주기적으로 목표 주변에 원소 폭발을 일으킵니다.",
      "mode": "nova",
      "cooldown": 8,
      "power": 1.2,
      "scale": "spell",
      "radius": 1.7,
      "range": 6,
      "stats": [
        {
          "stat": "spell",
          "op": "add",
          "value": 2
        }
      ]
    }
  ],
  "codexRewards": [
    {
      "kills": 15,
      "rewards": {
        "xp": 100,
        "gold": 25
      }
    },
    {
      "kills": 45,
      "rewards": {
        "xp": 240,
        "gold": 60,
        "materials": {
          "sigil": 1
        }
      }
    },
    {
      "kills": 100,
      "rewards": {
        "xp": 500,
        "gold": 120,
        "materials": {
          "sigil": 2
        }
      }
    }
  ],
  "journalTabs": [
    {
      "id": "quests",
      "name": "의뢰"
    },
    {
      "id": "companions",
      "name": "동료"
    },
    {
      "id": "factions",
      "name": "평판"
    },
    {
      "id": "codex",
      "name": "도감"
    }
  ],
  "balance": {
    "bossReputation": 3
  },
  "xpBands": [
    {
      "level": 1,
      "multiplier": 1
    },
    {
      "level": 15,
      "multiplier": 1.45
    },
    {
      "level": 25,
      "multiplier": 2.1
    },
    {
      "level": 35,
      "multiplier": 2.9
    },
    {
      "level": 45,
      "multiplier": 3.7
    }
  ],
  "regions": [
    {
      "id": "east",
      "name": "동부 변경",
      "maps": [
        "oakwood",
        "meadow",
        "forest",
        "silverhaven",
        "marsh",
        "forest_den",
        "mine",
        "ruins",
        "wolf_lair",
        "forge_chamber",
        "dragon_sanctum",
        "forest_den_deep",
        "mine_deep",
        "ruins_deep",
        "guild_arena"
      ]
    },
    {
      "id": "highland",
      "name": "가시바람",
      "maps": [
        "highland",
        "highland_depth_1",
        "highland_depth_2",
        "highland_throne"
      ]
    },
    {
      "id": "frost",
      "name": "백서리",
      "maps": [
        "snowfield",
        "frostgate",
        "frost_depth_1",
        "frost_depth_2",
        "frost_throne"
      ]
    },
    {
      "id": "sun",
      "name": "붉은 해",
      "maps": [
        "sunwaste",
        "sunharbor",
        "sun_depth_1",
        "sun_depth_2",
        "sun_throne"
      ]
    },
    {
      "id": "grave",
      "name": "왕의 묘역",
      "maps": [
        "gravewood",
        "grave_depth_1",
        "grave_depth_2",
        "grave_throne"
      ]
    },
    {
      "id": "eclipse",
      "name": "황혼",
      "maps": [
        "eclipse_plain",
        "eclipse_depth_1",
        "eclipse_depth_2",
        "eclipse_throne"
      ]
    },
    {
      "id": "online",
      "name": "공동 원정",
      "maps": [
        "raid_verdant",
        "raid_glacial",
        "raid_astral",
        "duel_arena"
      ]
    }
  ],
  "online": {
    "protocol": 2,
    "port": 8080,
    "maxPlayers": 64,
    "roomPlayers": 32,
    "tickMs": 50,
    "frameMs": 100,
    "snapshotMs": 1000,
    "persistMs": 5000,
    "inputTimeout": 0.45,
    "offlineGrace": 15,
    "roomIdle": 300,
    "maxCatchUp": 4,
    "shareRadius": 14,
    "partyCap": 4,
    "raidCap": 8,
    "partyXpBonus": 0.12,
    "maxBodyBytes": 2097152,
    "maxName": 14,
    "chatMax": 120,
    "chatHistory": 40,
    "chatCooldown": 2,
    "rateWindow": 1,
    "inputRate": 60,
    "actionRate": 12,
    "authWindow": 60,
    "authRate": 8,
    "maxInvites": 10,
    "inviteDuration": 45,
    "sessionDays": 30,
    "passwordMin": 8,
    "passwordMax": 128,
    "usernamePattern": "^[A-Za-z0-9_]{3,20}$",
    "usernameMax": 20,
    "scryptN": 16384,
    "scryptR": 8,
    "scryptP": 1,
    "scryptMaxmem": 33554432,
    "saltBytes": 16,
    "sessionBytes": 32,
    "cookie": "everdawn_session",
    "epoch": "2026-01-01T00:00:00Z",
    "marketDuration": 86400,
    "marketFee": 2,
    "marketTax": 0.06,
    "marketMinPrice": 1,
    "marketMaxPrice": 100000,
    "marketSlots": 8,
    "tradeItems": 5,
    "mailLimit": 80,
    "guildCost": 50,
    "guildCap": 30,
    "guildMaxLevel": 10,
    "guildGoalKills": 150,
    "guildGoalRaids": 3,
    "guildGoalDonation": 120,
    "guildAuraPerLevel": 0.003,
    "guildAuraCap": 0.03,
    "pvpRewardDailyCap": 3,
    "pvpWinHonor": 10,
    "pvpLossHonor": 2,
    "pvpWinCrowns": 8,
    "pvpRatingStep": 16,
    "pvpStartRating": 1000,
    "pvpInvulnerability": 0.12,
    "pvpModifierMin": 0.85,
    "pvpModifierMax": 1.15,
    "pvpDamageReductionCap": 0.3,
    "pvpLifestealCap": 0.04,
    "pvpMatchSeconds": 180,
    "pvpDisconnectGrace": 10,
    "crownsKillChance": 0.15,
    "crownsKill": 1,
    "crownsBoss": 4,
    "crownsRaid": 12,
    "starsRaid": 1,
    "crownsEvent": 3,
    "crownsQuest": 2,
    "weeklyRaidRewardCap": 3,
    "elementStrong": 1.25,
    "elementWeak": 0.8,
    "resistCap": 0.5,
    "masteryCap": 100,
    "masteryXpBase": 1800,
    "masteryXpGrowth": 1.045,
    "drawCost": 1,
    "drawTen": 10,
    "drawPity": 50,
    "duplicateShards": 5,
    "shardExchange": 30,
    "predictionLerp": 12,
    "predictionSnap": 2.5,
    "retryMs": 2000,
    "clientInputMs": 100,
    "maxCatalogRows": 24,
    "roles": [
      {
        "id": "tank",
        "name": "방어"
      },
      {
        "id": "damage",
        "name": "공격"
      },
      {
        "id": "support",
        "name": "지원"
      }
    ],
    "tabs": [
      {
        "id": "world",
        "name": "월드"
      },
      {
        "id": "party",
        "name": "파티·레이드"
      },
      {
        "id": "guild",
        "name": "길드"
      },
      {
        "id": "market",
        "name": "거래소"
      },
      {
        "id": "mail",
        "name": "우편"
      },
      {
        "id": "pvp",
        "name": "결투"
      },
      {
        "id": "records",
        "name": "성과·수첩"
      },
      {
        "id": "summon",
        "name": "정령 소환"
      },
      {
        "id": "mastery",
        "name": "숙련"
      }
    ],
    "actionBindings": {
      "advance": {
        "method": "advance",
        "args": [
          "id"
        ],
        "refresh": true
      },
      "learn": {
        "method": "learn",
        "args": [
          "id"
        ],
        "refresh": true
      },
      "respec": {
        "method": "respec",
        "args": [],
        "open": "talents"
      },
      "equip-skill": {
        "method": "equipSkill",
        "args": [
          "skillSlot",
          "id"
        ],
        "refresh": true
      },
      "equip": {
        "method": "equip",
        "args": [
          "id"
        ],
        "refresh": true
      },
      "unequip": {
        "method": "unequip",
        "args": [
          "id"
        ],
        "refresh": true
      },
      "favorite": {
        "method": "favorite",
        "args": [
          "id"
        ],
        "refresh": true
      },
      "salvage": {
        "method": "dispose",
        "args": [
          "id",
          "literal:salvage"
        ],
        "refresh": true
      },
      "sell": {
        "method": "dispose",
        "args": [
          "id",
          "literal:sell"
        ],
        "refresh": true
      },
      "upgrade": {
        "method": "upgrade",
        "args": [
          "id"
        ],
        "refresh": true
      },
      "craft": {
        "method": "craft",
        "args": [
          "id"
        ],
        "refresh": true
      },
      "buy": {
        "method": "buy",
        "args": [
          "id"
        ],
        "refresh": true
      },
      "rest": {
        "method": "rest",
        "args": [
          "false"
        ],
        "refresh": true
      },
      "meal": {
        "method": "rest",
        "args": [
          "true"
        ],
        "refresh": true
      },
      "bless": {
        "method": "bless",
        "args": [
          "id"
        ],
        "refresh": true
      },
      "accept": {
        "method": "acceptQuest",
        "args": [
          "id"
        ],
        "refresh": true
      },
      "claim": {
        "method": "completeQuest",
        "args": [
          "id",
          "choice"
        ],
        "refresh": true
      },
      "discover": {
        "method": "discover",
        "args": [
          "id"
        ],
        "refresh": true
      },
      "start-event": {
        "method": "startEvent",
        "args": [
          "id"
        ],
        "close": true
      },
      "claim-event": {
        "method": "claimEvent",
        "args": [
          "id"
        ],
        "refresh": true
      },
      "select-companion": {
        "method": "selectCompanion",
        "args": [
          "id"
        ],
        "refresh": true
      },
      "codex-claim": {
        "method": "claimCodex",
        "args": [
          "id",
          "index"
        ],
        "refresh": true
      },
      "start-trial": {
        "method": "startTrial",
        "args": [
          "id"
        ],
        "close": true
      },
      "claim-trial": {
        "method": "claimTrial",
        "args": [],
        "refresh": true
      },
      "travel": {
        "method": "travel",
        "args": [
          "id"
        ],
        "close": true
      },
      "enter-dungeon": {
        "method": "enterDungeon",
        "args": [
          "entryPortal",
          "tier",
          "expeditionRule"
        ],
        "close": true
      },
      "potion": {
        "method": "potion",
        "args": []
      },
      "manaPotion": {
        "method": "useConsumable",
        "args": [
          "manaId"
        ]
      },
      "use-supply": {
        "method": "useConsumable",
        "args": [
          "id"
        ],
        "refresh": true
      },
      "dash": {
        "method": "dash",
        "args": []
      },
      "interact": {
        "method": "interact",
        "args": [],
        "interaction": true
      },
      "engrave": {
        "method": "engrave",
        "args": [
          "item",
          "id"
        ],
        "refresh": true
      },
      "mastery-learn": {
        "method": "learnMastery",
        "args": [
          "id"
        ],
        "refresh": true
      }
    },
    "pvpStats": {
      "warrior": {
        "hp": 950,
        "mp": 180,
        "attack": 90,
        "spell": 65,
        "defense": 12,
        "speed": 3.2,
        "range": 1.25
      },
      "archer": {
        "hp": 720,
        "mp": 150,
        "attack": 100,
        "spell": 55,
        "defense": 7,
        "speed": 3.2,
        "range": 6
      },
      "magician": {
        "hp": 660,
        "mp": 260,
        "attack": 45,
        "spell": 130,
        "defense": 6,
        "speed": 2.8,
        "range": 5.5
      },
      "guardian": {
        "hp": 1200,
        "mp": 210,
        "attack": 58,
        "spell": 78,
        "defense": 19,
        "speed": 2.7,
        "range": 1.3
      }
    },
    "codeBytes": 4,
    "passwordBytes": 32,
    "substeps": 2,
    "dayMs": 86400000,
    "weekMs": 604800000,
    "socialRadius": 6,
    "worldBossRespawn": 600,
    "contributionTime": 30,
    "raidBasePlayers": 2,
    "raidHpPerPlayer": 0.3,
    "dungeonHpPerPlayer": 0.45,
    "tauntScale": 10,
    "maxArgs": 4,
    "guildNameMin": 2,
    "guildProjectReward": {
      "stars": 1,
      "crowns": 5
    },
    "pvpManaRegen": 3,
    "pvpCritCap": 0.3,
    "duelSpawns": [
      [
        10,
        14
      ],
      [
        24,
        14
      ]
    ],
    "duelStartDelay": 3,
    "rankingLimit": 10,
    "startStars": 3,
    "streamBackpressure": 1048576,
    "duelMethods": [
      "dash"
    ],
    "masteryMinLevel": 50,
    "statusElements": {
      "burn": "fire",
      "poison": "nature"
    },
    "drawMaximum": 10,
    "marketDefaultPrice": 10,
    "guildDonationDefault": 10,
    "tradeSelectRows": 4,
    "realmId": "everdawn-main-v1",
    "pbkdf2Iterations": 100000,
    "socketMessageBytes": 1024,
    "claimedMailHistory": 20,
    "requestTimeoutMs": 6000,
    "publicUrl": "https://tactics.kjmalswo-804.workers.dev",
    "maxPredictionSeconds": 0.8,
    "maxPendingInputs": 64,
    "maxInputSequenceGap": 1024,
    "motionEpsilon": 1e-05,
    "remoteLerp": 18,
    "idempotencyEntries": 64,
    "idempotencyMs": 30000,
    "socketReplacedCode": 4001,
    "socketUnauthorizedCode": 4003,
    "motionResetMethods": [
      "travel",
      "enterDungeon",
      "startTrial"
    ],
    "requestIdLength": 128,
    "characterIdleMs": 300000,
    "maxArgumentBytes": 2048
  },
  "elements": [
    {
      "id": "physical",
      "name": "물리",
      "color": "#b6a082"
    },
    {
      "id": "fire",
      "name": "화염",
      "color": "#c76743"
    },
    {
      "id": "frost",
      "name": "냉기",
      "color": "#78adbc"
    },
    {
      "id": "nature",
      "name": "자연",
      "color": "#66966a"
    },
    {
      "id": "arcane",
      "name": "비전",
      "color": "#9e79b0"
    }
  ],
  "elementCycle": {
    "fire": "nature",
    "nature": "arcane",
    "arcane": "frost",
    "frost": "fire"
  },
  "equipmentSets": [
    {
      "id": "ember",
      "name": "불씨 성전",
      "bonuses": [
        {
          "count": 2,
          "stats": [
            {
              "stat": "skillDamage",
              "value": 1.07,
              "op": "multiply"
            }
          ]
        },
        {
          "count": 4,
          "stats": [
            {
              "stat": "burnChance",
              "value": 0.09,
              "op": "add"
            },
            {
              "stat": "hp",
              "value": 0.95,
              "op": "multiply"
            }
          ]
        }
      ]
    },
    {
      "id": "glacier",
      "name": "빙관 맹약",
      "bonuses": [
        {
          "count": 2,
          "stats": [
            {
              "stat": "cooldownRate",
              "value": 0.96,
              "op": "multiply"
            }
          ]
        },
        {
          "count": 4,
          "stats": [
            {
              "stat": "shieldOnSkill",
              "value": 3,
              "op": "add"
            },
            {
              "stat": "attackSpeed",
              "value": 0.96,
              "op": "multiply"
            }
          ]
        }
      ]
    },
    {
      "id": "wild",
      "name": "야생 수호",
      "bonuses": [
        {
          "count": 2,
          "stats": [
            {
              "stat": "hp",
              "value": 1.07,
              "op": "multiply"
            }
          ]
        },
        {
          "count": 4,
          "stats": [
            {
              "stat": "lifesteal",
              "value": 0.018,
              "op": "add"
            },
            {
              "stat": "spell",
              "value": 0.96,
              "op": "multiply"
            }
          ]
        }
      ]
    },
    {
      "id": "astral",
      "name": "성운 기록",
      "bonuses": [
        {
          "count": 2,
          "stats": [
            {
              "stat": "mp",
              "value": 1.1,
              "op": "multiply"
            }
          ]
        },
        {
          "count": 4,
          "stats": [
            {
              "stat": "spell",
              "value": 1.09,
              "op": "multiply"
            },
            {
              "stat": "defense",
              "value": -2,
              "op": "add"
            }
          ]
        }
      ]
    },
    {
      "id": "bastion",
      "name": "왕국 성채",
      "bonuses": [
        {
          "count": 2,
          "stats": [
            {
              "stat": "defense",
              "value": 3,
              "op": "add"
            }
          ]
        },
        {
          "count": 4,
          "stats": [
            {
              "stat": "damageReduction",
              "value": 0.04,
              "op": "add"
            },
            {
              "stat": "speed",
              "value": 0.96,
              "op": "multiply"
            }
          ]
        }
      ]
    },
    {
      "id": "storm",
      "name": "폭풍 사냥",
      "bonuses": [
        {
          "count": 2,
          "stats": [
            {
              "stat": "attackSpeed",
              "value": 1.04,
              "op": "multiply"
            }
          ]
        },
        {
          "count": 4,
          "stats": [
            {
              "stat": "crit",
              "value": 0.04,
              "op": "add"
            },
            {
              "stat": "hp",
              "value": 0.95,
              "op": "multiply"
            }
          ]
        }
      ]
    },
    {
      "id": "dusk",
      "name": "황혼 유산",
      "bonuses": [
        {
          "count": 2,
          "stats": [
            {
              "stat": "skillDamage",
              "value": 1.07,
              "op": "multiply"
            }
          ]
        },
        {
          "count": 4,
          "stats": [
            {
              "stat": "skillEcho",
              "value": 0.04,
              "op": "add"
            },
            {
              "stat": "manaRegen",
              "value": -0.2,
              "op": "add"
            }
          ]
        }
      ]
    },
    {
      "id": "dawn",
      "name": "여명 순례",
      "bonuses": [
        {
          "count": 2,
          "stats": [
            {
              "stat": "hp",
              "value": 1.05,
              "op": "multiply"
            }
          ]
        },
        {
          "count": 4,
          "stats": [
            {
              "stat": "potionPower",
              "value": 1.12,
              "op": "multiply"
            },
            {
              "stat": "spell",
              "value": 1.04,
              "op": "multiply"
            }
          ]
        }
      ]
    }
  ],
  "runes": [
    {
      "id": "physical",
      "name": "물리 각인",
      "element": "physical",
      "gold": 180,
      "materials": {
        "crystal": 8,
        "ore": 6
      },
      "stats": [
        {
          "stat": "physicalResist",
          "value": 0.06,
          "op": "add"
        },
        {
          "stat": "attackSpeed",
          "value": 0.985,
          "op": "multiply"
        }
      ],
      "description": "무기 속성 변경 / 해당 속성 저항 +6%p / 공격 속도 -1.5%"
    },
    {
      "id": "fire",
      "name": "화염 각인",
      "element": "fire",
      "gold": 180,
      "materials": {
        "crystal": 8,
        "ore": 6
      },
      "stats": [
        {
          "stat": "fireResist",
          "value": 0.06,
          "op": "add"
        },
        {
          "stat": "attackSpeed",
          "value": 0.985,
          "op": "multiply"
        }
      ],
      "description": "무기 속성 변경 / 해당 속성 저항 +6%p / 공격 속도 -1.5%"
    },
    {
      "id": "frost",
      "name": "냉기 각인",
      "element": "frost",
      "gold": 180,
      "materials": {
        "crystal": 8,
        "ore": 6
      },
      "stats": [
        {
          "stat": "frostResist",
          "value": 0.06,
          "op": "add"
        },
        {
          "stat": "attackSpeed",
          "value": 0.985,
          "op": "multiply"
        }
      ],
      "description": "무기 속성 변경 / 해당 속성 저항 +6%p / 공격 속도 -1.5%"
    },
    {
      "id": "nature",
      "name": "자연 각인",
      "element": "nature",
      "gold": 180,
      "materials": {
        "crystal": 8,
        "ore": 6
      },
      "stats": [
        {
          "stat": "natureResist",
          "value": 0.06,
          "op": "add"
        },
        {
          "stat": "attackSpeed",
          "value": 0.985,
          "op": "multiply"
        }
      ],
      "description": "무기 속성 변경 / 해당 속성 저항 +6%p / 공격 속도 -1.5%"
    },
    {
      "id": "arcane",
      "name": "비전 각인",
      "element": "arcane",
      "gold": 180,
      "materials": {
        "crystal": 8,
        "ore": 6
      },
      "stats": [
        {
          "stat": "arcaneResist",
          "value": 0.06,
          "op": "add"
        },
        {
          "stat": "attackSpeed",
          "value": 0.985,
          "op": "multiply"
        }
      ],
      "description": "무기 속성 변경 / 해당 속성 저항 +6%p / 공격 속도 -1.5%"
    }
  ],
  "masteryTracks": [
    {
      "id": "vitality",
      "name": "생명 수련",
      "maxRank": 10,
      "stats": [
        {
          "stat": "hp",
          "value": 1.01,
          "op": "multiply"
        }
      ]
    },
    {
      "id": "mind",
      "name": "정신 수련",
      "maxRank": 10,
      "stats": [
        {
          "stat": "mp",
          "value": 1.01,
          "op": "multiply"
        }
      ]
    },
    {
      "id": "blade",
      "name": "무기 수련",
      "maxRank": 10,
      "stats": [
        {
          "stat": "attack",
          "value": 1.01,
          "op": "multiply"
        }
      ]
    },
    {
      "id": "spell",
      "name": "주문 수련",
      "maxRank": 10,
      "stats": [
        {
          "stat": "spell",
          "value": 1.01,
          "op": "multiply"
        }
      ]
    },
    {
      "id": "armor",
      "name": "갑주 수련",
      "maxRank": 10,
      "stats": [
        {
          "stat": "defense",
          "value": 0.3,
          "op": "add"
        }
      ]
    },
    {
      "id": "flow",
      "name": "마력 순환",
      "maxRank": 10,
      "stats": [
        {
          "stat": "manaRegen",
          "value": 0.04,
          "op": "add"
        }
      ]
    },
    {
      "id": "focus",
      "name": "집중",
      "maxRank": 10,
      "stats": [
        {
          "stat": "crit",
          "value": 0.002,
          "op": "add"
        }
      ]
    },
    {
      "id": "pace",
      "name": "발걸음",
      "maxRank": 10,
      "stats": [
        {
          "stat": "speed",
          "value": 1.005,
          "op": "multiply"
        }
      ]
    },
    {
      "id": "recovery",
      "name": "물약 연구",
      "maxRank": 10,
      "stats": [
        {
          "stat": "potionPower",
          "value": 1.01,
          "op": "multiply"
        }
      ]
    },
    {
      "id": "ward",
      "name": "대비",
      "maxRank": 10,
      "stats": [
        {
          "stat": "damageReduction",
          "value": 0.002,
          "op": "add"
        }
      ]
    }
  ],
  "spirits": [
    {
      "id": "wisp",
      "name": "작은 빛",
      "element": "arcane",
      "rarity": "common",
      "weight": 15.6,
      "stats": [
        {
          "stat": "hp",
          "value": 1.02,
          "op": "multiply"
        }
      ],
      "color": "#9e79b0"
    },
    {
      "id": "fox",
      "name": "불꽃 여우",
      "element": "fire",
      "rarity": "common",
      "weight": 15.6,
      "stats": [
        {
          "stat": "attack",
          "value": 1.02,
          "op": "multiply"
        }
      ],
      "color": "#c76743"
    },
    {
      "id": "owl",
      "name": "눈꽃 부엉이",
      "element": "frost",
      "rarity": "common",
      "weight": 15.6,
      "stats": [
        {
          "stat": "mp",
          "value": 1.02,
          "op": "multiply"
        }
      ],
      "color": "#78adbc"
    },
    {
      "id": "seed",
      "name": "숲의 씨앗",
      "element": "nature",
      "rarity": "common",
      "weight": 15.6,
      "stats": [
        {
          "stat": "spell",
          "value": 1.02,
          "op": "multiply"
        }
      ],
      "color": "#66966a"
    },
    {
      "id": "golem",
      "name": "돌의 아이",
      "element": "physical",
      "rarity": "common",
      "weight": 15.6,
      "stats": [
        {
          "stat": "defense",
          "value": 1,
          "op": "add"
        }
      ],
      "color": "#b6a082"
    },
    {
      "id": "salamander",
      "name": "불씨 도마뱀",
      "element": "fire",
      "rarity": "rare",
      "weight": 4.0,
      "stats": [
        {
          "stat": "hp",
          "value": 1.02,
          "op": "multiply"
        }
      ],
      "color": "#c76743"
    },
    {
      "id": "sprite",
      "name": "겨울 요정",
      "element": "frost",
      "rarity": "rare",
      "weight": 4.0,
      "stats": [
        {
          "stat": "attack",
          "value": 1.02,
          "op": "multiply"
        }
      ],
      "color": "#78adbc"
    },
    {
      "id": "dryad",
      "name": "어린 드리아드",
      "element": "nature",
      "rarity": "rare",
      "weight": 4.0,
      "stats": [
        {
          "stat": "mp",
          "value": 1.02,
          "op": "multiply"
        }
      ],
      "color": "#66966a"
    },
    {
      "id": "comet",
      "name": "별의 꼬리",
      "element": "arcane",
      "rarity": "rare",
      "weight": 4.0,
      "stats": [
        {
          "stat": "spell",
          "value": 1.02,
          "op": "multiply"
        }
      ],
      "color": "#9e79b0"
    },
    {
      "id": "aegis",
      "name": "황금 방패",
      "element": "physical",
      "rarity": "rare",
      "weight": 4.0,
      "stats": [
        {
          "stat": "defense",
          "value": 1,
          "op": "add"
        }
      ],
      "color": "#b6a082"
    },
    {
      "id": "phoenix",
      "name": "여명의 불사조",
      "element": "fire",
      "rarity": "legendary",
      "weight": 1.0,
      "stats": [
        {
          "stat": "hp",
          "value": 1.02,
          "op": "multiply"
        }
      ],
      "color": "#c76743"
    },
    {
      "id": "moon",
      "name": "월광의 정령",
      "element": "arcane",
      "rarity": "legendary",
      "weight": 1.0,
      "stats": [
        {
          "stat": "attack",
          "value": 1.02,
          "op": "multiply"
        }
      ],
      "color": "#9e79b0"
    }
  ],
  "achievements": [
    {
      "id": "kills_50",
      "name": "토벌의 기록 1",
      "metric": "kills",
      "target": 50,
      "rewards": {
        "crowns": 8,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "kills_250",
      "name": "토벌의 기록 2",
      "metric": "kills",
      "target": 250,
      "rewards": {
        "crowns": 16,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "kills_1000",
      "name": "토벌의 기록 3",
      "metric": "kills",
      "target": 1000,
      "rewards": {
        "crowns": 24,
        "stars": 2
      },
      "title": null
    },
    {
      "id": "kills_5000",
      "name": "토벌의 기록 4",
      "metric": "kills",
      "target": 5000,
      "rewards": {
        "crowns": 32,
        "stars": 2
      },
      "title": "토벌의 기록"
    },
    {
      "id": "bosses_3",
      "name": "군주의 도전자 1",
      "metric": "bosses",
      "target": 3,
      "rewards": {
        "crowns": 8,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "bosses_15",
      "name": "군주의 도전자 2",
      "metric": "bosses",
      "target": 15,
      "rewards": {
        "crowns": 16,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "bosses_50",
      "name": "군주의 도전자 3",
      "metric": "bosses",
      "target": 50,
      "rewards": {
        "crowns": 24,
        "stars": 2
      },
      "title": "군주의 도전자"
    },
    {
      "id": "raids_1",
      "name": "공동 원정 1",
      "metric": "raids",
      "target": 1,
      "rewards": {
        "crowns": 8,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "raids_5",
      "name": "공동 원정 2",
      "metric": "raids",
      "target": 5,
      "rewards": {
        "crowns": 16,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "raids_20",
      "name": "공동 원정 3",
      "metric": "raids",
      "target": 20,
      "rewards": {
        "crowns": 24,
        "stars": 2
      },
      "title": "공동 원정"
    },
    {
      "id": "crafts_5",
      "name": "장인의 손길 1",
      "metric": "crafts",
      "target": 5,
      "rewards": {
        "crowns": 8,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "crafts_25",
      "name": "장인의 손길 2",
      "metric": "crafts",
      "target": 25,
      "rewards": {
        "crowns": 16,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "crafts_100",
      "name": "장인의 손길 3",
      "metric": "crafts",
      "target": 100,
      "rewards": {
        "crowns": 24,
        "stars": 2
      },
      "title": "장인의 손길"
    },
    {
      "id": "quests_10",
      "name": "길드의 신뢰 1",
      "metric": "quests",
      "target": 10,
      "rewards": {
        "crowns": 8,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "quests_40",
      "name": "길드의 신뢰 2",
      "metric": "quests",
      "target": 40,
      "rewards": {
        "crowns": 16,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "quests_100",
      "name": "길드의 신뢰 3",
      "metric": "quests",
      "target": 100,
      "rewards": {
        "crowns": 24,
        "stars": 2
      },
      "title": "길드의 신뢰"
    },
    {
      "id": "discoveries_5",
      "name": "미지의 발자취 1",
      "metric": "discoveries",
      "target": 5,
      "rewards": {
        "crowns": 8,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "discoveries_15",
      "name": "미지의 발자취 2",
      "metric": "discoveries",
      "target": 15,
      "rewards": {
        "crowns": 16,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "discoveries_30",
      "name": "미지의 발자취 3",
      "metric": "discoveries",
      "target": 30,
      "rewards": {
        "crowns": 24,
        "stars": 2
      },
      "title": "미지의 발자취"
    },
    {
      "id": "pvpWins_1",
      "name": "결투의 증명 1",
      "metric": "pvpWins",
      "target": 1,
      "rewards": {
        "crowns": 8,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "pvpWins_10",
      "name": "결투의 증명 2",
      "metric": "pvpWins",
      "target": 10,
      "rewards": {
        "crowns": 16,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "pvpWins_50",
      "name": "결투의 증명 3",
      "metric": "pvpWins",
      "target": 50,
      "rewards": {
        "crowns": 24,
        "stars": 2
      },
      "title": "결투의 증명"
    },
    {
      "id": "trades_1",
      "name": "왕국의 교역상 1",
      "metric": "trades",
      "target": 1,
      "rewards": {
        "crowns": 8,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "trades_10",
      "name": "왕국의 교역상 2",
      "metric": "trades",
      "target": 10,
      "rewards": {
        "crowns": 16,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "trades_50",
      "name": "왕국의 교역상 3",
      "metric": "trades",
      "target": 50,
      "rewards": {
        "crowns": 24,
        "stars": 2
      },
      "title": "왕국의 교역상"
    },
    {
      "id": "draws_10",
      "name": "정령의 벗 1",
      "metric": "draws",
      "target": 10,
      "rewards": {
        "crowns": 8,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "draws_50",
      "name": "정령의 벗 2",
      "metric": "draws",
      "target": 50,
      "rewards": {
        "crowns": 16,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "draws_150",
      "name": "정령의 벗 3",
      "metric": "draws",
      "target": 150,
      "rewards": {
        "crowns": 24,
        "stars": 2
      },
      "title": "정령의 벗"
    },
    {
      "id": "collection_15",
      "name": "수집가 1",
      "metric": "collection",
      "target": 15,
      "rewards": {
        "crowns": 8,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "collection_50",
      "name": "수집가 2",
      "metric": "collection",
      "target": 50,
      "rewards": {
        "crowns": 16,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "collection_120",
      "name": "수집가 3",
      "metric": "collection",
      "target": 120,
      "rewards": {
        "crowns": 24,
        "stars": 2
      },
      "title": "수집가"
    },
    {
      "id": "mastery_1",
      "name": "성장의 끝 너머 1",
      "metric": "mastery",
      "target": 1,
      "rewards": {
        "crowns": 8,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "mastery_20",
      "name": "성장의 끝 너머 2",
      "metric": "mastery",
      "target": 20,
      "rewards": {
        "crowns": 16,
        "stars": 1
      },
      "title": null
    },
    {
      "id": "mastery_60",
      "name": "성장의 끝 너머 3",
      "metric": "mastery",
      "target": 60,
      "rewards": {
        "crowns": 24,
        "stars": 2
      },
      "title": "성장의 끝 너머"
    }
  ],
  "expeditionGoals": [
    {
      "id": "daily_hunt",
      "period": "day",
      "name": "오늘의 토벌",
      "metric": "kills",
      "target": 40,
      "rewards": {
        "crowns": 8,
        "stars": 1
      }
    },
    {
      "id": "daily_event",
      "period": "day",
      "name": "지역의 조력자",
      "metric": "events",
      "target": 2,
      "rewards": {
        "crowns": 8,
        "stars": 1
      }
    },
    {
      "id": "daily_quest",
      "period": "day",
      "name": "길드의 하루",
      "metric": "quests",
      "target": 2,
      "rewards": {
        "crowns": 6,
        "stars": 1
      }
    },
    {
      "id": "weekly_hunt",
      "period": "week",
      "name": "변경의 수호",
      "metric": "kills",
      "target": 350,
      "rewards": {
        "crowns": 35,
        "stars": 3
      }
    },
    {
      "id": "weekly_raid",
      "period": "week",
      "name": "왕국 공동 원정",
      "metric": "raids",
      "target": 3,
      "rewards": {
        "crowns": 35,
        "stars": 3
      }
    },
    {
      "id": "weekly_quest",
      "period": "week",
      "name": "길드 장기 의뢰",
      "metric": "quests",
      "target": 15,
      "rewards": {
        "crowns": 25,
        "stars": 2
      }
    }
  ],
  "raids": [
    {
      "id": "verdant",
      "name": "세계수의 심장",
      "map": "raid_verdant",
      "minLevel": 18,
      "minPlayers": 2,
      "maxPlayers": 8,
      "roles": [
        "tank",
        "damage"
      ],
      "description": "방어 역할이 시선을 붙잡고, 공격 역할은 수호석과 군주를 공략합니다. 지원 기술은 근처 동료에게 적용됩니다."
    },
    {
      "id": "glacial",
      "name": "빙관의 파수꾼",
      "map": "raid_glacial",
      "minLevel": 32,
      "minPlayers": 2,
      "maxPlayers": 8,
      "roles": [
        "tank",
        "damage"
      ],
      "description": "방어 역할이 시선을 붙잡고, 공격 역할은 수호석과 군주를 공략합니다. 지원 기술은 근처 동료에게 적용됩니다."
    },
    {
      "id": "astral",
      "name": "왕관을 삼킨 별",
      "map": "raid_astral",
      "minLevel": 48,
      "minPlayers": 2,
      "maxPlayers": 8,
      "roles": [
        "tank",
        "damage"
      ],
      "description": "방어 역할이 시선을 붙잡고, 공격 역할은 수호석과 군주를 공략합니다. 지원 기술은 근처 동료에게 적용됩니다."
    }
  ]
};
