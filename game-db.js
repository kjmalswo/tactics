// Editable JSON-compatible fantasy RPG database.
window.GAME_DB = {
  "meta": {
    "version": "1.1",
    "title": "에버돈",
    "subtitle": "별의 계승자",
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
      "nightTint": "#263a5b"
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
      "dash": "<path d=\"m13 3-8 10h6l-1 8 9-12h-7z\"/>"
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
    "maxLevel": 20,
    "maxMonsterLevel": 30,
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
    "manaConsumable": "mana"
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
    "title": "꺼져가는 별의 봉인",
    "body": "에버돈 왕국의 동쪽에서 오래된 봉인이 흔들립니다. 작은 길드의 모험가로 시작해 숲과 폐광, 잊힌 성역을 탐험하세요.",
    "chapter": "에버돈 동부",
    "goal": "세 던전의 보스를 쓰러뜨리고 별의 봉인을 되찾으세요.",
    "completed": "별의 봉인을 지켰습니다. 더 높은 던전 등급과 장비 빌드에 도전하세요."
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
    "potionPower": 1
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
    "potionPower": "물약 효율"
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
    "skillEcho"
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
        "attackInterval": 0.76
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
        "steel_rush"
      ],
      "starter": "iron_sword",
      "branches": [
        "gladiator",
        "berserker",
        "rune"
      ],
      "backSprite": "warrior_back"
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
        "attackInterval": 0.7
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
        "wind_step"
      ],
      "starter": "hunting_bow",
      "branches": [
        "marksman",
        "ranger",
        "venom"
      ],
      "backSprite": "archer_back"
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
        "manaRegen": 2.7
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
        "meteor"
      ],
      "starter": "apprentice_staff",
      "branches": [
        "pyromancer",
        "frost",
        "arcanist"
      ],
      "backSprite": "magician_back"
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
        "manaRegen": 2.25
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
        "iron_oath"
      ],
      "starter": "oath_mace",
      "branches": [
        "fortress",
        "paladin",
        "avenger"
      ],
      "backSprite": "guardian_back"
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
    }
  },
  "branches": {
    "gladiator": {
      "id": "gladiator",
      "name": "검투사",
      "class": "warrior",
      "description": "평타와 치명타로 꾸준히 밀어붙입니다."
    },
    "berserker": {
      "id": "berserker",
      "name": "버서커",
      "class": "warrior",
      "description": "생존 여유를 화력과 흡혈로 바꿉니다."
    },
    "rune": {
      "id": "rune",
      "name": "룬 기사",
      "class": "warrior",
      "description": "마력을 순환시켜 기술 전투에 집중합니다."
    },
    "marksman": {
      "id": "marksman",
      "name": "명사수",
      "class": "archer",
      "description": "먼 거리에서 치명적인 평타를 노립니다."
    },
    "ranger": {
      "id": "ranger",
      "name": "추적자",
      "class": "archer",
      "description": "화살을 늘려 무리를 빠르게 정리합니다."
    },
    "venom": {
      "id": "venom",
      "name": "독 사냥꾼",
      "class": "archer",
      "description": "독과 둔화로 추격을 끊고 누적 피해를 줍니다."
    },
    "pyromancer": {
      "id": "pyromancer",
      "name": "화염술사",
      "class": "magician",
      "description": "화염 주문과 화상으로 무리를 녹입니다."
    },
    "frost": {
      "id": "frost",
      "name": "빙결술사",
      "class": "magician",
      "description": "느려진 적을 제어하고 보호막으로 버팁니다."
    },
    "arcanist": {
      "id": "arcanist",
      "name": "비전술사",
      "class": "magician",
      "description": "마력 회복과 메아리로 주문을 연속 사용합니다."
    },
    "fortress": {
      "id": "fortress",
      "name": "철벽",
      "class": "guardian",
      "description": "막강한 체력과 보호막으로 전선을 지킵니다."
    },
    "paladin": {
      "id": "paladin",
      "name": "성기사",
      "class": "guardian",
      "description": "성역과 심판의 힘을 키우는 기술 수호자."
    },
    "avenger": {
      "id": "avenger",
      "name": "응징자",
      "class": "guardian",
      "description": "맞을수록 반사와 근접 화력이 강해집니다."
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
      "capstone": false
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
      "capstone": false
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
      "capstone": false
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
      "capstone": true
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
      "capstone": false
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
      "capstone": false
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
      "capstone": false
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
      "capstone": true
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
      "capstone": false
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
      "capstone": false
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
      "capstone": false
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
      "capstone": true
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
      "capstone": false
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
      "capstone": false
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
      "capstone": false
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
      "capstone": true
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
      "capstone": false
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
      "capstone": false
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
      "capstone": false
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
      "capstone": true
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
      "capstone": false
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
      "capstone": false
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
      "capstone": false
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
      "capstone": true
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
      "capstone": false
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
      "capstone": false
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
      "capstone": false
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
      "capstone": true
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
      "capstone": false
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
      "capstone": false
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
      "capstone": false
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
      "capstone": true
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
      "capstone": false
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
      "capstone": false
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
      "capstone": false
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
      "capstone": true
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
      "capstone": false
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
      "capstone": false
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
      "capstone": false
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
      "capstone": true
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
      "capstone": false
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
      "capstone": false
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
      "capstone": false
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
      "capstone": true
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
      "capstone": false
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
      "capstone": false
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
      "capstone": false
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
      "name": "이야기",
      "levelBonus": 0,
      "reward": 1,
      "requiredClears": 0
    },
    {
      "id": 1,
      "name": "수련",
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
      "size": 0.9
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
      "size": 1
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
      "dash": true
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
      "dash": true
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
      "size": 1.1
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
      "elite": true
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
      "size": 1.4
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
      "tint": "#9a8ca3"
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
        }
      ],
      "adds": [
        "wolf",
        "wolf"
      ]
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
        }
      ],
      "adds": [
        "goblin",
        "goblin"
      ]
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
        }
      ],
      "adds": [
        "lizard",
        "lizard"
      ]
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
      "tint": "#b8a18a"
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
      "tint": "#b8a18a"
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
      "tint": "#b8a18a"
    }
  },
  "quests": [
    {
      "id": "welcome",
      "name": "길드에 첫발을",
      "npc": "maren",
      "main": true,
      "description": "오크우드의 길드 안내인 마렌에게 모험가로 등록하세요.",
      "objectives": [
        {
          "kind": "interact",
          "target": "maren",
          "count": 1,
          "label": "마렌과 대화"
        }
      ],
      "rewards": {
        "xp": 12,
        "gold": 13,
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
          "count": 5,
          "label": "슬라임 처치",
          "map": "meadow"
        },
        {
          "kind": "kill",
          "target": "goblin",
          "count": 3,
          "label": "고블린 처치",
          "map": "meadow"
        }
      ],
      "rewards": {
        "xp": 34,
        "gold": 26,
        "materials": {
          "ore": 2
        },
        "potions": 2
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
          "count": 4,
          "label": "늑대 처치",
          "map": "forest"
        },
        {
          "kind": "kill",
          "target": "boar",
          "count": 3,
          "label": "호그 처치",
          "map": "forest"
        }
      ],
      "rewards": {
        "xp": 55,
        "gold": 36,
        "materials": {
          "hide": 2,
          "ore": 2
        },
        "points": 1
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
          "count": 1,
          "label": "은빛 늑대왕 처치",
          "map": "wolf_lair"
        }
      ],
      "rewards": {
        "xp": 85,
        "gold": 55,
        "points": 1,
        "materials": {
          "crystal": 2
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
          "count": 1,
          "label": "광산군주 처치",
          "map": "forge_chamber"
        }
      ],
      "rewards": {
        "xp": 135,
        "gold": 72,
        "points": 1,
        "materials": {
          "ore": 5,
          "crystal": 2
        }
      }
    },
    {
      "id": "drake",
      "name": "별의 봉인을 되찾아라",
      "npc": "rhett",
      "main": true,
      "requires": "mine",
      "description": "안개늪 너머 별의 유적에서 원룡을 쓰러뜨리세요.",
      "objectives": [
        {
          "kind": "boss",
          "target": "ancient_drake",
          "count": 1,
          "label": "잿불의 원룡 처치",
          "map": "dragon_sanctum"
        }
      ],
      "rewards": {
        "xp": 220,
        "gold": 117,
        "points": 2,
        "materials": {
          "crystal": 5
        }
      },
      "final": true
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
          "count": 3,
          "label": "약초 모으기",
          "map": "meadow",
          "consume": true
        }
      ],
      "rewards": {
        "xp": 25,
        "gold": 16,
        "potions": 4
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
          "count": 8,
          "label": "슬라임 처치",
          "map": "meadow"
        }
      ],
      "rewards": {
        "xp": 35,
        "gold": 23,
        "materials": {
          "ore": 1
        }
      }
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
          "count": 7,
          "label": "늑대 처치",
          "map": "forest"
        }
      ],
      "rewards": {
        "xp": 50,
        "gold": 29,
        "materials": {
          "hide": 2
        }
      }
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
          "count": 6,
          "label": "리자드 처치",
          "map": "marsh"
        }
      ],
      "rewards": {
        "xp": 65,
        "gold": 39,
        "materials": {
          "crystal": 1
        }
      }
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
        }
      ],
      "rewards": {
        "xp": 35,
        "gold": 18
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
        }
      ],
      "rewards": {
        "xp": 50,
        "gold": 24
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
      "events": []
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
      ]
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
      ]
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
      "events": []
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
      ]
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
          "name": "보스의 방",
          "x": 28,
          "y": 12,
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
      "events": []
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
          "name": "보스의 방",
          "x": 30,
          "y": 12,
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
      "events": []
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
          "name": "보스의 방",
          "x": 32,
          "y": 12,
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
      "events": []
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
          "to": "forest_den",
          "spawn": [
            27,
            12.5
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
      "events": []
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
          "to": "mine",
          "spawn": [
            29,
            12.5
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
      "events": []
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
          "to": "ruins",
          "spawn": [
            31,
            12.5
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
      "events": []
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
      "eventColor": "#d4a87e"
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
    "eventScale": 3
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
    "talents": "직업",
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
    "questAvailable": "새 의뢰",
    "questReady": "보상 받기",
    "accept": "의뢰 수락",
    "claim": "보상 받기",
    "active": "진행 중",
    "complete": "완료",
    "available": "수락 가능",
    "returnNpc": "의뢰인에게 돌아가기",
    "objective": "현재 목표",
    "noQuest": "길드에서 새 의뢰를 받으세요.",
    "questProgress": "진행",
    "reward": "보상",
    "mainQuest": "이야기",
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
    "respecHint": "마을에서 기술점을 무료로 되돌릴 수 있습니다.",
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
    "tierHint": "높은 난이도는 적 레벨과 보상을 함께 올립니다.",
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
    "journalHint": "의뢰 수락과 보상 수령은 의뢰인 앞에서 할 수 있습니다.",
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
    "chapterComplete": "별의 계승자",
    "chapterContinue": "모험 계속",
    "help": "조작 안내",
    "helpBody": "WASD 또는 방향키로 이동합니다. Shift는 짧은 대시이며 최대 2회, 5초마다 1회 충전됩니다. Tab 장비, Q 의뢰, R 회복 물약, F 마력 물약을 사용합니다. 평타와 기술은 자동입니다. 필드의 성소·보물상자·배회 정예와 야영지 사건을 발견하고, 여행의 돌 근처에서만 빠른 이동을 이용하세요.",
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
    "storyComplete": "이야기 완료 · 더 높은 던전에 도전하세요.",
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
    "skillsSubtitle": "기술은 조건과 마력이 갖춰지면 자동으로 사용합니다.",
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
    "merchantHint": "장비와 보급품을 준비하세요. 판매 품목은 직업·레벨·상인에 따라 달라집니다.",
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
    "dungeonGuardianHint": "봉인 수호자들을 쓰러뜨리면 보스방이 열립니다.",
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
    "chapterVictory": "별의 봉인이 다시 빛납니다. 새로운 빌드와 더 높은 던전 난이도로 모험을 계속할 수 있습니다.",
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
    "nightHint": "밤에는 몬스터 피해가 10% 증가합니다.",
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
    "restNoFree": "휴식 시 20금화가 소모됩니다."
  },
  "_docs": {
    "source": "game-db.js는 모든 콘텐츠·수치·지도·그림·음악·문구의 단일 원본입니다.",
    "maps": "maps의 ASCII tiles와 npc/portal/spawn/resource/chest 좌표가 실제 공간입니다. terrain.walk와 solid prop을 충돌에 사용합니다.",
    "build": "classes/races/skills/branches/talents/items/affixes의 stats를 공통 계산기로 합산합니다. 클래스 ID 분기 없이 동작합니다.",
    "save": "새 RPG 저장 키를 사용하며 이전 결투 v6 저장을 삭제하거나 덮어쓰지 않습니다.",
    "audio": "audio.tracks의 MIDI 멜로디·화음·베이스를 오프라인 Web Audio로 합성합니다.",
    "resourceBalance": "기본 마력 회복·적 금화·장비 드롭을 낮추고 XP 비용을 높였습니다. rarity/lootProfiles와 제작·상인 가격은 각각 DB에서 조정합니다. 희귀 장비를 고정 보장하는 일반 드롭·상자는 없습니다.",
    "openWorld": "maps[].discoveries/events, resources, 일정이 있는 npcs와 patrol spawns가 오픈월드 콘텐츠입니다. discoveries 영구 보너스·사건 상태·상인 재고·추가된 필드 스폰은 저장·이전 저장 보완을 지원합니다."
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
    "thorns"
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
  ]
};
