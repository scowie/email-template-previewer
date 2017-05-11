<template>
    <div>
        <div style="border:1px solid brown; display:inline-block; height:500px; width:500px">
        Template
        </div>
        <div id="render-template" style="border:1px solid brown; display:inline-block; height:500px; width:500px">
        Render
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import bookListingTemplate from '../book-listing.handlebars'

    document.addEventListener("DOMContentLoaded", function() {
        console.log('im here')
        var div = document.createElement('div');
        div.innerHTML = bookListingTemplate({
            username: "test",
            info: "Your books are due next Tuesday",
            books: [
                { title: "A book", synopsis: "With a description" },
                { title: "Another book", synopsis: "From a very good author" },
                { title: "Book without synopsis" }
            ]
        });
        document.body.appendChild(div);
    });


    export default {
        name: 'home',
        mounted() {
            const parent = document.getElementById("render-template")
            const div = document.createElement('div');
            div.innerHTML = bookListingTemplate({
                username: "test",
                info: "Your books are due next Tuesday",
                books: [
                    { title: "A book", synopsis: "With a description" },
                    { title: "Another book", synopsis: "From a very good author" },
                    { title: "Book without synopsis" }
                ]
            })
            parent.appendChild(div);
        },
        data () {
            return {
            }
        },
        methods: {

        }
    }

</script>

<style>


</style>