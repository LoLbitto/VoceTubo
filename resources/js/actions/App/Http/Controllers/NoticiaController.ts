import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\NoticiaController::index
 * @see app/Http/Controllers/NoticiaController.php:12
 * @route '/noticia/{categoria}'
 */
export const index = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/noticia/{categoria}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NoticiaController::index
 * @see app/Http/Controllers/NoticiaController.php:12
 * @route '/noticia/{categoria}'
 */
index.url = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { categoria: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    categoria: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        categoria: args.categoria,
                }

    return index.definition.url
            .replace('{categoria}', parsedArgs.categoria.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NoticiaController::index
 * @see app/Http/Controllers/NoticiaController.php:12
 * @route '/noticia/{categoria}'
 */
index.get = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NoticiaController::index
 * @see app/Http/Controllers/NoticiaController.php:12
 * @route '/noticia/{categoria}'
 */
index.head = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\NoticiaController::index
 * @see app/Http/Controllers/NoticiaController.php:12
 * @route '/noticia/{categoria}'
 */
    const indexForm = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\NoticiaController::index
 * @see app/Http/Controllers/NoticiaController.php:12
 * @route '/noticia/{categoria}'
 */
        indexForm.get = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\NoticiaController::index
 * @see app/Http/Controllers/NoticiaController.php:12
 * @route '/noticia/{categoria}'
 */
        indexForm.head = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\NoticiaController::editar
 * @see app/Http/Controllers/NoticiaController.php:0
 * @route '/noticia/{categoria}/editar'
 */
export const editar = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editar.url(args, options),
    method: 'post',
})

editar.definition = {
    methods: ["post"],
    url: '/noticia/{categoria}/editar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NoticiaController::editar
 * @see app/Http/Controllers/NoticiaController.php:0
 * @route '/noticia/{categoria}/editar'
 */
editar.url = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { categoria: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    categoria: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        categoria: args.categoria,
                }

    return editar.definition.url
            .replace('{categoria}', parsedArgs.categoria.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NoticiaController::editar
 * @see app/Http/Controllers/NoticiaController.php:0
 * @route '/noticia/{categoria}/editar'
 */
editar.post = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editar.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\NoticiaController::editar
 * @see app/Http/Controllers/NoticiaController.php:0
 * @route '/noticia/{categoria}/editar'
 */
    const editarForm = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: editar.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NoticiaController::editar
 * @see app/Http/Controllers/NoticiaController.php:0
 * @route '/noticia/{categoria}/editar'
 */
        editarForm.post = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: editar.url(args, options),
            method: 'post',
        })
    
    editar.form = editarForm
/**
* @see \App\Http\Controllers\NoticiaController::salvar
 * @see app/Http/Controllers/NoticiaController.php:19
 * @route '/noticia/{categoria}/salvar'
 */
export const salvar = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvar.url(args, options),
    method: 'post',
})

salvar.definition = {
    methods: ["post"],
    url: '/noticia/{categoria}/salvar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NoticiaController::salvar
 * @see app/Http/Controllers/NoticiaController.php:19
 * @route '/noticia/{categoria}/salvar'
 */
salvar.url = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { categoria: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    categoria: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        categoria: args.categoria,
                }

    return salvar.definition.url
            .replace('{categoria}', parsedArgs.categoria.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NoticiaController::salvar
 * @see app/Http/Controllers/NoticiaController.php:19
 * @route '/noticia/{categoria}/salvar'
 */
salvar.post = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvar.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\NoticiaController::salvar
 * @see app/Http/Controllers/NoticiaController.php:19
 * @route '/noticia/{categoria}/salvar'
 */
    const salvarForm = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: salvar.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NoticiaController::salvar
 * @see app/Http/Controllers/NoticiaController.php:19
 * @route '/noticia/{categoria}/salvar'
 */
        salvarForm.post = (args: { categoria: string | number } | [categoria: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: salvar.url(args, options),
            method: 'post',
        })
    
    salvar.form = salvarForm
const NoticiaController = { index, editar, salvar }

export default NoticiaController