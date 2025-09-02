//新增配方
onEvent('recipes', event => {
    //石英获取
    event.recipes.minecraft.smelting('minecraft:quartz', '#forge:glass')
    event.recipes.minecraft.blasting('minecraft:quartz', '#forge:glass')

    //提琴弓系列
    event.recipes.minecraft.stonecutting('ywzj_midi:double_bass_bow_item', 'ywzj_midi:felt_mallet_item')
    event.recipes.minecraft.stonecutting('ywzj_midi:violin_bow_item', 'ywzj_midi:felt_mallet_item')
    event.recipes.minecraft.stonecutting('ywzj_midi:viola_bow_item', 'ywzj_midi:felt_mallet_item')
    event.recipes.minecraft.stonecutting('ywzj_midi:cello_bow_item', 'ywzj_midi:felt_mallet_item')

    //长笛系列
    event.recipes.minecraft.stonecutting('ywzj_midi:clarinet', 'minecraft:bamboo')
    event.recipes.minecraft.stonecutting('ywzj_midi:oboe', 'minecraft:bamboo')
    event.recipes.minecraft.stonecutting('ywzj_midi:bassoon', 'minecraft:bamboo')
    event.recipes.minecraft.stonecutting('ywzj_midi:flute', 'minecraft:bamboo')

    //大号系列
    event.recipes.minecraft.stonecutting('ywzj_midi:tuba', 'minecraft:gold_block')
    event.recipes.minecraft.stonecutting('ywzj_midi:trombone', 'minecraft:gold_block')
    event.recipes.minecraft.stonecutting('ywzj_midi:trumpet', 'minecraft:gold_block')
    event.recipes.minecraft.stonecutting('ywzj_midi:horn', 'minecraft:gold_block')
    event.recipes.minecraft.smelting('minecraft:gold_block', 'ywzj_midi:tuba')
    event.recipes.minecraft.smelting('minecraft:gold_block', 'ywzj_midi:trombone')
    event.recipes.minecraft.smelting('minecraft:gold_block', 'ywzj_midi:trumpet')
    event.recipes.minecraft.smelting('minecraft:gold_block', 'ywzj_midi:horn')

    //毛毡槌
    event.recipes.minecraft.crafting_shapeless('ywzj_midi:felt_mallet_item', ['#minecraft:wool', 'minecraft:stick'])

    //谱架
    event.recipes.minecraft.crafting_shaped('ywzj_midi:music_stand_block', [
        ' W ',
        ' S ',
        'SSS'
    ], {
        W: '#minecraft:wool',
        S: 'minecraft:stick'
    })

    //镲
    event.recipes.minecraft.crafting_shaped('ywzj_midi:cymbal', [
        ['minecraft:gold_ingot'],
        ['minecraft:gold_ingot'],
        ['minecraft:gold_ingot']
    ])

    //鼓系列
    event.recipes.minecraft.crafting_shaped('ywzj_midi:bass_drum', [
        'LLL',
        'P P',
        'SSS'
    ], {
        L: '#forge:leather',
        P: '#minecraft:planks',
        S: 'minecraft:stick'
    })
    event.recipes.minecraft.crafting_shaped('ywzj_midi:timpani', [
        'LLL',
        'P P',
        'SSS'
    ], {
        L: '#forge:leather',
        P: '#minecraft:planks',
        S: 'minecraft:stick'
    })
    event.recipes.minecraft.crafting_shapeless('ywzj_midi:timpani', 'ywzj_midi:bass_drum')
    event.recipes.minecraft.crafting_shapeless('ywzj_midi:bass_drum', 'ywzj_midi:timpani')

    //提琴系列
    event.recipes.minecraft.crafting_shaped('ywzj_midi:double_bass', [
        '  P',
        'PS ',
        'PP '
    ], {
        P: '#minecraft:planks',
        S: '#forge:string'
    })
    event.recipes.minecraft.stonecutting('ywzj_midi:violin', 'ywzj_midi:double_bass')
    event.recipes.minecraft.stonecutting('ywzj_midi:viola', 'ywzj_midi:double_bass')
    event.recipes.minecraft.stonecutting('ywzj_midi:cello', 'ywzj_midi:double_bass')
    event.recipes.minecraft.stonecutting('ywzj_midi:violin', 'ywzj_midi:cello')
    event.recipes.minecraft.stonecutting('ywzj_midi:viola', 'ywzj_midi:cello')
    event.recipes.minecraft.stonecutting('ywzj_midi:violin', 'ywzj_midi:viola')

    //删除物品和流体管道
    event.remove({ output: 'pipez:fluid_pipe' })
    event.remove({ output: 'pipez:item_pipe' })

    //创造控制器
    event.recipes.minecraft.crafting_shaped('refinedstorage:creative_controller', [
        'CEC',
        'EGE',
        'CEC'
    ], {
        G: 'exponentialpower:advanced_ender_generator',
        C: '#refinedstorage:controller',
        E: 'exponentialpower:ender_cell'
    })

  //抽屉
  event.recipes.minecraft.crafting_shaped("storagedrawers:oak_full_drawers_1", [
        'AAA',
        ' B ',
        'AAA'
    ], {
        A: '#minecraft:planks',
        B: '#forge:chests/wooden'
    })

    event.recipes.minecraft.crafting_shaped("storagedrawers:oak_full_drawers_2", [
        'ABA',
        'AAA',
        'ABA'
    ], {
        A: '#minecraft:planks',
        B: '#forge:chests/wooden'
    })

    event.recipes.minecraft.crafting_shaped("storagedrawers:oak_full_drawers_4", [
        'BAB',
        'AAA',
        'BAB'
    ], {
        A: '#minecraft:planks',
        B: '#forge:chests/wooden'
    })

    event.recipes.minecraft.crafting_shaped("storagedrawers:oak_half_drawers_1", [
        'AAA',
        ' B ',
        'AAA'
    ], {
        A: '#minecraft:wooden_slabs',
        B: '#forge:chests/wooden'
    })

    event.recipes.minecraft.crafting_shaped("storagedrawers:oak_half_drawers_2", [
        'ABA',
        'AAA',
        'ABA'
    ], {
        A: '#minecraft:wooden_slabs',
        B: '#forge:chests/wooden'
    })

    event.recipes.minecraft.crafting_shaped("storagedrawers:oak_half_drawers_4", [
        'BAB',
        'AAA',
        'BAB'
    ], {
        A: '#minecraft:wooden_slabs',
        B: '#forge:chests/wooden'
    })
    event.recipes.minecraft.crafting_shaped("storagedrawers:oak_trim", [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: '#minecraft:planks',
        B: '#forge:rods/wooden'
    })
})