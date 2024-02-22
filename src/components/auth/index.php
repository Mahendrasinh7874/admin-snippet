<?php

use app\models\Product;
use app\models\Video;

$video = Video::find()->all();

$products = Product::find()->where(['is_displayed_on_homepage' => 1])->all();

?>



<style>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  video {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }



  footer {
    padding: 30px 0;
  }

  .close {
    position: absolute;
    right: -30px;
    top: 0;
    z-index: 999;
    font-size: 2rem;
    font-weight: normal;
    color: #fff;
    opacity: 1;

  }



  .for-video {
    position: absolute;
    top: 50px !important;
    width: 100%;
  }

  .video-image {
    position: absolute;
    left: 42%;
    cursor: pointer;
    top: 44%;
  }

  .modal-dialog {
    max-width: 800px;
    margin: 30px auto;
  }

  @media (max-width: 768px) {
    .line::after {
      top: 12.5% !important;
    }

    .h-100vh p {
      font-size: 50px;
    }

    .for-video {
      top: 100px !important;
    }
  }

  @media (max-width: 400px) {
    .line::after {
      top: 9.5% !important;
    }
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    .line::after {
      top: 10.5% !important;
    }
}



  @media (max-width: 575px) {

    .close {
      right: -16px !important;
      position: absolute;
      top: -23px !important;
    }

    .modal-dialog {
      width: 100%;
      padding: 0 20px;
    }

    #contact {
      padding: 100px 0 !important;
    }

    .history {
      padding: 100px 0 !important;
    }
  }
</style>
<div id="videoContainer">
  <?php if (!empty($video)) : ?>
    <?php foreach ($video as $video) : ?>

      <video autoplay loop muted>
        <source src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/uploads/' . $video->url) ?>" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="overlay"></div>

      <div class="for-video h-100vh mb-5 center px-4 px-lg-0">


        <p><?= $video->title ?></p>
        <span class="text-left"><?= $video->short_title ?></span>
        <img class="mt-4" src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/star.png') ?>" alt="" />
      </div>
    <?php endforeach;
    ?>

  <?php endif; ?>

  <!-- Our History Section Starts Here -->


  <div class="history py-lg-0 py-4 px-0 p-lg-5" id="about-us">
    <div class="container container-md-fluid px-0 px-lg-3">
      <div class="row">
        <div class="col-md-6 center ">
          <!-- <div class="row"> -->
        <!-- <div class="col-12"> -->
          <img src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/image.png') ?>" class="img-fluid" alt="Responsive image"  />
          <!-- </div> -->
          <!-- <div class="mt-3 col-12">
          <video id="video-tag" width="100%" height="500" muted controls autoplay="false" allowfullscreen frameborder="0">
            <source src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/video/hd-popup.mp4') ?>"" type=" video/mp4">
          </video> -->
          <!-- <img src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/video/hd-popup.mp4') ?>" class="img-fluid" alt="Responsive image" id="play-btn" /> -->
          <!-- <img data-toggle="modal" data-target="#exampleModal" src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/video.png') ?>" class="video-image" alt=""> -->
          <!-- </div> -->
          <!-- </div> -->
        </div>
        <div class="col-md-6 col-12">
          <h1 class="line color-trasparent">OUR LEGACY</h1>
          <p class="color-white">
            The Origins of our tale can be traced back to the year 1926, when the first Mithaiwala (Sweet Shop) first opened its doors in the vibrant land of Gujarat, India.
          </p>
          <p class="color-white">
            Inspired by Our History, we decided to stick to our roots; This is where Kuru Food Labs was formed.
            Kuru Food Labs is the brainchild of two passionate and enterprising entrepreneurs Mr. Kuntesh Bhatt and Mr. Rushil Thakkar. </p>
          <p class="color-white">
          In today’s world it is very essential for all to have a healthy living and food plays a major role in it. Inspired by this idea, we at Kuru Food Labs have ventured into this business.          </p>
          <p class="color-white">
          With time always on the run, our Ready to Cook, Ready to Eat, Frozen and Canned foods play a vital role in making every chefs life easier. At Kuru Food Labs we live with the principle of providing the best quality and easy to cook food.          </p>
          <p class="color-white">
          We are a young team of entrepreneurs who have embarked on this journey to provide all types of cuisines for the connoisseurs who value time, money and exotic flavours. Based out of Ahmedabad we aim to serve the HoReCa Industry with perfect taste every time!          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="container container-md-fluid pb-5 px-0 px-lg-3">
    <div class="row">
      <div class="col-md-6 col-lg-4 col-12">
        <div class="card text-center vision-mission-values">
          <div class="card-body">
            <img src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/vision.png') ?>" alt="" />
            <h5 class="card-title">Vision</h5>
            <img class="card-imgs" src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/Line 14.png') ?>" alt="" />
            <p class="card-text" style="text-align: start">
              To be a partner of choice in every kitchen by creating unique and
              innovative recipes that cater to varied needs of the HORECA
              industry.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 col-12">
        <div class="card text-center vision-mission-values">
          <div class="card-body">
            <img src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/mission.png') ?>" alt="" />
            <h5 class="card-title">Mission</h5>
            <img class="card-imgs" src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/Line 14.png') ?>" alt="" />
            <p class="card-text" style="text-align: start">
              To be present in every kitchen in India and across the globe.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 col-12">
        <div class="card text-center vision-mission-values">
          <div class="card-body">
            <img src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/values.png') ?>" alt="" />
            <h5 class="card-title">Values</h5>
            <img class="card-imgs" src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/Line 14.png') ?>" alt="" />
            <p class="card-text" style="text-align: start">
              We just don’t make promises we deliver them.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- Our History Section Ends Here -->


  <!-- View More Section Starts Here -->

  <div class="view-more">
    <div class="container-sm-fluid container">
      <div class="center1">
        <p>We just don’t make promises</p>
        <img src="/assets/Line 7 (1).png" alt="" />
        <p class="color">WE DELIVER THEM</p>
        <button class="view-btn">
          <div class="view-btn-content button">View More</div>
        </button>
      </div>
    </div>
  </div>

  <!-- View More Section Ends Here -->



  <!-- Product Section Starts Here -->
  <?php if (!empty($products)) : ?>
    <div class="products py-3 p-lg-5">
      <div class="text-center line-after">Products</div>
      <img class="line-img" src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/prod-line.png') ?>" alt="" />

      <div class="container container-md-fluid py-4 px-0">
        <div class="row">

          <?php foreach ($products as $product) : ?>

            <div class="col-md-6 col-lg-4 col-12">
              <div class="card-container">
                <div class="card main-card card-front" style="background: url('<?= Yii::$app->urlManager->createAbsoluteUrl('web/uploads/' . $product->image) ?>');">
                  <div class="box"><?= !empty($product->title) ? $product->title : '' ?></div>
                </div>
                <div class="card card-back main-card">
                  <div class="card-body">
                    <h5 class="card-title"><?= !empty($product->title) ? $product->title : '' ?></h5>
                    <?php if (strlen($product->description) > 450) : ?>
                      <?= substr($product->description, 0, 435); ?>...<br />

                      <a class="text-decoration-none text-light h5" id="read-more-link" data-toggle="modal" data-target="#staticBackdrop" onclick="getData(<?= $product->product_id ?>)">
                        Read more <i class="fa fa-arrow-right" style="vertical-align: middle;"></i>
                      </a>

                    <?php else : ?>
                      <?= $product->description ?>
                    <?php endif ?>
                  </div>
                </div>
              </div>
            </div>


          <?php endforeach; ?>
        </div>
      </div>
    </div>

  <?php endif; ?>

  <!-- Product Section Ends Here -->


  <!-- Our USP Section Starts Here -->


  <div class="our-usp py-5 ">
    <p class="text-center font pb-0">Our USP's</p>
    <img src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/Line 7.png') ?>" class="d-flex m-auto" alt="">
    <div class="container py-5">
      <div class="row">

        <div class="col-6 col-md-4 col-lg-2">
          <img src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/usp/Food_1.png') ?>" alt="Image 1" class="img-fluid">
          <p class="text-center">No Added Colors</p>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <img src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/usp/Food_2.png') ?>" alt="Image 1" class="img-fluid">
          <p class="text-center">No Added preservatives</p>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <img src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/usp/Food_3.png') ?>" alt="Image 1" class="img-fluid">
          <p class="text-center">fssai Certified</p>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <img src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/usp/Food_4.png') ?>" alt="Image 1" class="img-fluid">
          <p class="text-center">No Added Artificial Flavours</p>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <img src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/usp/Food_5.png') ?>" alt="Image 1" class="img-fluid">
          <p class="text-center">Long Shelf Life</p>
        </div>
      </div>
                    <div class="row">      
        <div class="col-6 col-md-4 col-lg-2">
          <img src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/usp/Food_6.png') ?>" alt="Image 1" class="img-fluid">
          <p class="text-center">Easy to Use</p>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <img src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/usp/Food_7.png') ?>" alt="Image 1" class="img-fluid">
          <p class="text-center">Saves Time</p>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <img src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/usp/Food_8.png') ?>" alt="Image 1" class="img-fluid">
          <p class="text-center">Customized Solutions</p>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <img src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/usp/Food_9.png') ?>" alt="Image 1" class="img-fluid">
          <p class="text-center">Zero Wastage</p>
        </div>
       <!--
 <div class="col-6 col-md-4 col-lg-2"> <img src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/usp/Food_10.png') ?>" alt="Image 1" class="img-fluid"> <p class="text-center">Zero Wastage</p> </div> 
        <div class="col-6 col-md-4 col-lg-2"> <img src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/usp/Food_11.png') ?>" alt="Image 1" class="img-fluid"> <p class="text-center">Zero Wastage</p> </div>
        <div class="col-6 col-md-4 col-lg-2"> <img src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/usp/Food_12.png') ?>" alt="Image 1" class="img-fluid"> <p class="text-center">Zero Wastage</p>
        </div>
        -->

      </div>
    </div>


  </div>

  <!-- Modal  -->
  <div class="modal fade mt-5" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <!-- <div class="modal-header"> -->
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <!-- </div> -->
        <div class="modal-body p-0">
          <video id="video-tag" width="100%" height="500" muted controls autoplay="false" allowfullscreen frameborder="0">
            <source src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/video/hd-popup.mp4') ?>"" type=" video/mp4">
          </video>
        </div>
      </div>
    </div>
  </div>

  <div class="contact-us py-5" id="contact">
    <div class="container px-lg-5 px-3 pb-5">
      <div class="text-center line-after">Contact Us
      </div>
      <img class="line-img d-flex mx-auto mb-4" src="<?= Yii::$app->urlManager->createAbsoluteUrl('web/img/home/prod-line.png') ?>" alt="">
      <p class="email-text text-center" style="color:white">Email :-<a class="text-white text-decoration-none" href="mailto:info@kurufoods.com">info@kurufoods.com</a></p>
      <p class="email-text text-center mb-4" style="color:white">Leave your message here!</p>
      <form method="post" class="submit-form" id="myForm">
        <div class="form-row">
          <div class="form-group col-md-6 col-12">
            <input type="text" class="form-control" autocomplete="false" name="name" id="name" placeholder="Name">
            <span id="nameError" class="text-danger"></span>
          </div>
          <div class="form-group col-md-6 col-12">
            <input type="email" class="form-control" id="email" autocomplete="false" name="email" placeholder="Email">
            <span id="emailError" class="text-danger"></span>
          </div>
          <div class="form-group col-md-6 col-12">
            <input type="number" class="form-control" autocomplete="false" class="form-control m-0" id="mobile_no" name="mobile_number" placeholder="Phone">
            <span id="mobileError" class="text-danger"></span>
          </div>
          <div class="form-group col-md-6 col-12">
            <input type="text" class="form-control" autocomplete="false" class="form-control m-0" id="outlet" name="outlet" placeholder="Outlet">
            <span id="outletError" class="text-danger"></span>
          </div>
          <div class="form-group col-12">
            <textarea class="form-control" autocomplete="false" name="message" id="message" placeholder="Your Message"></textarea>
            <span id="messageError" class="text-danger"></span>

          </div>
          <div class="form-group col-12 message-btn text-left">
            <div class="view-btn button-border w-20">
              <input type="button" class="view-btn-content send-btn w-100" id="submit" value="Send Message">
            </div>
            <i id="loader" class="text-white"></i>
          </div>
        </div>
        <h3 id="success" class="text-success text-center mt-2"></h3>
      </form>
    </div>
  </div>
  <!-- Contact Us Ends Here -->



  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">

      <div class="modal-content m-auto  p-0 p-lg-5 w-100 d-lg-block justify-content-center" style="background-color: #F37022;border-radius: 20px;">
        <div class="modal-header border-0">
          <h3 class="modal-title text-bold text-light" id="staticBackdropLabel"></h3>
          <button type="button" class="text-light bg-transparent" style="border: 2px solid white;border-radius: 15px;" data-dismiss="modal" aria-label="Close">
            <img class="p-2" src="<?= yii::$app->urlManager->createAbsoluteUrl('/web/img/icon/close-icon.png') ?>" />
          </button>
        </div>
        <div class="modal-body text-light">
          <div id="productDetails">
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.6.0.js"></script>

  <script>
    $(document).ready(function() {
      $("#submit").click(function() {
        var name = $('#name').val();
        var email = $('#email').val();
        var outlet = $('#outlet').val();
        var mobile_no = $('#mobile_no').val();
        var regex = RegExp(/^\d{10}$/);
        var message = $('#message').val();
        const validEmailRegex = RegExp(
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );


        $('#nameError').text('');
        $('#emailError').text('');
        $('#mobileError').text('');
        $('#outletError').text('');
        $('#messageError').text('');
        if (!name) {
          $('#nameError').text('<?= Yii::t('strings', 'Please enter Name'); ?>')
        } else if (!email) {
          $('#emailError').text('<?= Yii::t('strings', 'Please enter Email'); ?>')
        } else if (!validEmailRegex.test(email)) {
          $('#emailError').text('<?= Yii::t('strings', 'Please enter Valid Email'); ?>')
        } else if (!mobile_no) {
          $('#mobileError').text('<?= Yii::t('strings', 'Please enter  Mobile Number'); ?>')
        } else if (!regex.test(mobile_no)) {
          $('#mobileError').text('<?= Yii::t('strings', 'Please enter Valid Mobile Number'); ?>')
        } else if (!outlet) {
          $('#outletError').text('<?= Yii::t('strings', 'Please enter Outlet'); ?>')
        } else if (!message) {
          $(' #messageError').text('<?= Yii::t('strings', 'Please enter message'); ?>')
        } else {
          $("#loader").addClass("fa fa-spinner fa-spin");
          var arr = {
            name: name,
            email: email,
            outlet: outlet,
            mobile_no: mobile_no,
            message: message,
          };
          document.getElementById("myForm").reset();
          $.ajax({
            // url: "/kuru/ws/save-contact",
            data: arr,
            url: "<?= yii::$app->urlManager->createAbsoluteUrl('ws/save-contact') ?>",

            method: 'Post',
            success: function(result) {
              $("#loader").removeClass("fa fa-spinner fa-spin");
              //$("#captcha").html(result);
              if (result == false) {
                $(".btnRefresh").trigger("click");
              } else if (result == 200) {

                $('#success').text('<?= Yii::t('strings', 'Thank you for Contacting Us!'); ?>');

                setTimeout(function() {
                  $('#nameError').text('');
                  $('#emailError').text('');
                  $('#mobileError').text('');
                }, 1000);
              }
            }
          });
        }
      });
    });



    $('#name').on('input', function() {


      $('#nameError').text('');
    });

    $('#email').on('input', function() {

      $('#emailError').text('');
    });

    $('#mobile_no').on('input', function() {
      $('#mobileError').text('');
    });

    $('#outlet').on('input', function() {
      $('#outletError').text('');
    });

    $('#message').on('textarea', function() {
      $('#messageError').text('');
    })
  </script>



  <script>
    // Get the product_id value from wherever you have it stored
    //   var product_id = "your_product_id_value";



    function getData(productId) {
      // Make an Ajax request to fetch data using the productId
      // Replace the URL and other parameters as per your requirements
      $.ajax({
        url: "<?= yii::$app->urlManager->createAbsoluteUrl('ws/get-product') ?>",
        type: "GET",
        data: {
          id: productId
        },
        success: function(response) {
          console.log({
            'response.description': response.description
          })
          $('#productDetails').html(response.description)
          $('#staticBackdropLabel').html(response.title)
          console.log(response);


        },
        error: function(error) {
          // Handle any errors that occur during the Ajax request
          console.error(error);
        }
      });
    }
  </script>