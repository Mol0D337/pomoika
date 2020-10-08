<template>
    <div class="row">
        <div class=" col s12">
            <input
                    :type="type"
                    class="validate"
                    :placeholder="placeholder"
                    :value="value"
                    @input="$emit('input', $event.target.value)"
            />
            <label >{{label}}</label>
        </div>

    </div>
</template>

<script>
    export default {
        // name: "Input",
        props: {
            value: {
                type: String,
                required: false,
                default: ''
            },
            label: {
                type: String,
                required: false,
                default: ''
            },
            placeholder: {
                type: String,
                required: false,
                default: ''
            },
            type: {
                type: String,
                required: false,
                default: 'text'
            }
        },
    }
</script>

<style scoped>
</style>
