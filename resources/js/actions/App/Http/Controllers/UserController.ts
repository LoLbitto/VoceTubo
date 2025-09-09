import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:12
 * @route '/usuarios/{id}'
 */
export const index = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/usuarios/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:12
 * @route '/usuarios/{id}'
 */
index.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return index.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:12
 * @route '/usuarios/{id}'
 */
index.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:12
 * @route '/usuarios/{id}'
 */
index.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:12
 * @route '/usuarios/{id}'
 */
    const indexForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:12
 * @route '/usuarios/{id}'
 */
        indexForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:12
 * @route '/usuarios/{id}'
 */
        indexForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\UserController::salvar
 * @see app/Http/Controllers/UserController.php:0
 * @route '/usuarios/salvar'
 */
export const salvar = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvar.url(options),
    method: 'post',
})

salvar.definition = {
    methods: ["post"],
    url: '/usuarios/salvar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserController::salvar
 * @see app/Http/Controllers/UserController.php:0
 * @route '/usuarios/salvar'
 */
salvar.url = (options?: RouteQueryOptions) => {
    return salvar.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::salvar
 * @see app/Http/Controllers/UserController.php:0
 * @route '/usuarios/salvar'
 */
salvar.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvar.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\UserController::salvar
 * @see app/Http/Controllers/UserController.php:0
 * @route '/usuarios/salvar'
 */
    const salvarForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: salvar.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\UserController::salvar
 * @see app/Http/Controllers/UserController.php:0
 * @route '/usuarios/salvar'
 */
        salvarForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: salvar.url(options),
            method: 'post',
        })
    
    salvar.form = salvarForm
/**
* @see \App\Http\Controllers\UserController::editar
 * @see app/Http/Controllers/UserController.php:17
 * @route '/usuarios/{id}/editar'
 */
export const editar = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editar.url(args, options),
    method: 'post',
})

editar.definition = {
    methods: ["post"],
    url: '/usuarios/{id}/editar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserController::editar
 * @see app/Http/Controllers/UserController.php:17
 * @route '/usuarios/{id}/editar'
 */
editar.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return editar.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::editar
 * @see app/Http/Controllers/UserController.php:17
 * @route '/usuarios/{id}/editar'
 */
editar.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editar.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\UserController::editar
 * @see app/Http/Controllers/UserController.php:17
 * @route '/usuarios/{id}/editar'
 */
    const editarForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: editar.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\UserController::editar
 * @see app/Http/Controllers/UserController.php:17
 * @route '/usuarios/{id}/editar'
 */
        editarForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: editar.url(args, options),
            method: 'post',
        })
    
    editar.form = editarForm
/**
* @see \App\Http\Controllers\UserController::remover
 * @see app/Http/Controllers/UserController.php:33
 * @route '/usuarios/{id}/remover'
 */
export const remover = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: remover.url(args, options),
    method: 'post',
})

remover.definition = {
    methods: ["post"],
    url: '/usuarios/{id}/remover',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserController::remover
 * @see app/Http/Controllers/UserController.php:33
 * @route '/usuarios/{id}/remover'
 */
remover.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return remover.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::remover
 * @see app/Http/Controllers/UserController.php:33
 * @route '/usuarios/{id}/remover'
 */
remover.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: remover.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\UserController::remover
 * @see app/Http/Controllers/UserController.php:33
 * @route '/usuarios/{id}/remover'
 */
    const removerForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: remover.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\UserController::remover
 * @see app/Http/Controllers/UserController.php:33
 * @route '/usuarios/{id}/remover'
 */
        removerForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: remover.url(args, options),
            method: 'post',
        })
    
    remover.form = removerForm
const UserController = { index, salvar, editar, remover }

export default UserController