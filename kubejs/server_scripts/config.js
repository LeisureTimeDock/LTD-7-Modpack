/**
 * 用于存储所有配置和一些定义
 */

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

//反射获取java类
let itemStack = java('dev.latvian.mods.kubejs.item.ItemStackJS')
let compoundTag = java('net.minecraft.nbt.CompoundTag')
let effectIns = java('net.minecraft.world.effect.MobEffectInstance')

//计时（默认tick）
//给床放陷阱被反噬的概率(%)
const regurgitationChance = 25;

//是否启用炼金放大组件对发情效果的提升（仅注射器）
const augmentApplyToOestru = false;

//吃食物给奖励冷却（秒）
const eatAwardCooldown = 300;

//不能喂食玩家的食物（仅满饱食度）
const cannotFeedFood = [
    'oestrus:flowers_extracts',
    'oestrus:c9h11no',
    'minecraft:pufferfish',
    'oestrus:aurora_crescent',
    'artifacts:eternal_steak',
    'orgasm:sexual_secretions'
];


//权重和
const weightSum = 1000;
//吃东西获得的奖励列表，物品id、数量、权重
//请确保 所有权重的和 <= 权重和
const eatAwardList = [
    { id: 'minecraft:ancient_debris', number: 8, weight: 50 },
    { id: 'minecraft:diamond', number: 8, weight: 50 },
    { id: 'minecraft:nether_star', number: 1, weight: 1 },
    { id: 'minecraft:enchanted_golden_apple', number: 1, weight: 1 },
    { id: 'minecraft:elytra', number: 1, weight: 1 },
    { id: 'minecraft:emerald', number: 8, weight: 50 },
    { id: 'minecraft:gold_ingot', number: 8, weight: 50 },
    { id: 'minecraft:iron_ingot', number: 8, weight: 100 },
    { id: 'oestrus:c9h11no', number: 4, weight: 50 },
    { id: 'minecraft:rabbit_foot', number: 2, weight: 50 },
    { id: 'oestrus:aurora_crescent', number: 1, weight: 1 },
    { id: 'shulker_shell', number: 4, weight: 6 },
    { id: 'minecraft:name_tag', number: 1, weight: 200 },
]

//可以激活的矿机
global.canCopyBlock = [
    'maple:salt_ore',
    'minecraft:gold_ore',
    'maple:cherry_log',
    'mekanism:osmium_ore',
    'mekanism:uranium_ore',
    'mekanism:fluorite_ore',
    'minecraft:redstone_ore',
    'mekanism:tin_ore',
    'mekanism:lead_ore'
]

//矿机每次被随机刻选中后增加的矿物数量
global.randomTickOreIncrease = 8